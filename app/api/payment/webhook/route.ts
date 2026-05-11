import { NextRequest, NextResponse } from "next/server";
import { verifyWebhookSignature } from "@/lib/razorpay";
import { updateLeadPaymentStatus } from "@/lib/leads";
import { sendPaymentConfirmation } from "@/lib/email";
import { sendWhatsAppPaymentConfirmation } from "@/lib/whatsapp";

// ── In-memory idempotency store (use Redis in high-traffic production) ─────────
const processedEvents = new Set<string>();

export async function POST(req: NextRequest) {
  try {
    const rawBody = await req.text();
    const signature = req.headers.get("x-razorpay-signature") || "";

    // ── Verify webhook signature ──────────────────────────────────────────────
    const isValid = verifyWebhookSignature(rawBody, signature);
    if (!isValid) {
      console.error("[Webhook] Invalid signature");
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
    }

    const event = JSON.parse(rawBody);
    const eventId = event.payload?.payment?.entity?.id || event.payload?.order?.entity?.id;

    // ── Idempotency check ─────────────────────────────────────────────────────
    if (eventId && processedEvents.has(eventId)) {
      console.log(`[Webhook] Duplicate event skipped: ${eventId}`);
      return NextResponse.json({ success: true, duplicate: true });
    }
    if (eventId) processedEvents.add(eventId);

    const eventType = event.event;
    console.log(`[Webhook] Event: ${eventType} | ID: ${eventId}`);

    // ── Handle events ─────────────────────────────────────────────────────────
    if (eventType === "payment.captured" || eventType === "order.paid") {
      const payment = event.payload?.payment?.entity;
      const notes = payment?.notes || {};

      const customerEmail = notes.customer_email || payment?.email || "";
      const customerPhone = notes.customer_phone || payment?.contact || "";
      const customerName = notes.customer_name || "Customer";
      const programSlug = notes.program || "program";
      const programTitle = notes.program_title || programSlug;
      const paymentId = payment?.id || eventId;
      const orderId = payment?.order_id || "";
      const amount = payment?.amount ? payment.amount / 100 : 0;

      await Promise.allSettled([
        updateLeadPaymentStatus({
          email: customerEmail,
          phone: customerPhone,
          paymentId,
          orderId,
          programSlug,
          amount,
        }),

        sendPaymentConfirmation({
          name: customerName,
          email: customerEmail,
          programTitle,
          programSlug,
          paymentId,
          amount,
        }),

        sendWhatsAppPaymentConfirmation({
          name: customerName,
          phone: customerPhone,
          programTitle,
          paymentId,
        }),
      ]);

      console.log(`[Webhook] ✅ Processed payment: ${paymentId} for ${customerEmail}`);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[Webhook] Error:", err);
    return NextResponse.json({ error: "Webhook processing failed" }, { status: 500 });
  }
}
