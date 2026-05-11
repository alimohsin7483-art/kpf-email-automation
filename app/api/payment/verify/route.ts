import { NextRequest, NextResponse } from "next/server";
import { verifySignature } from "@/lib/razorpay";
import { updateLeadPaymentStatus } from "@/lib/leads";
import { sendPaymentConfirmation } from "@/lib/email";
import { sendWhatsAppPaymentConfirmation } from "@/lib/whatsapp";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      customerName,
      customerEmail,
      customerPhone,
      programTitle,
      programSlug,
      amount,
    } = body;

    // ── Validate required fields ──────────────────────────────────────────────
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json({ error: "Missing payment fields" }, { status: 400 });
    }

    // ── Verify Razorpay signature ─────────────────────────────────────────────
    const isValid = verifySignature({
      orderId: razorpay_order_id,
      paymentId: razorpay_payment_id,
      signature: razorpay_signature,
    });

    if (!isValid) {
      console.error("[Payment] Invalid signature for order:", razorpay_order_id);
      return NextResponse.json({ error: "Invalid payment signature" }, { status: 400 });
    }

    console.log(`[Payment] ✅ Verified: ${razorpay_payment_id} for ${customerEmail}`);

    // ── Run all post-payment actions in parallel ──────────────────────────────
    await Promise.allSettled([
      // 1. Update Google Sheet
      updateLeadPaymentStatus({
        email: customerEmail,
        phone: customerPhone,
        paymentId: razorpay_payment_id,
        orderId: razorpay_order_id,
        programSlug,
        amount,
      }),

      // 2. Send confirmation email
      sendPaymentConfirmation({
        name: customerName,
        email: customerEmail,
        programTitle,
        programSlug,
        paymentId: razorpay_payment_id,
        amount,
      }),

      // 3. Send WhatsApp message
      sendWhatsAppPaymentConfirmation({
        name: customerName,
        phone: customerPhone,
        programTitle,
        paymentId: razorpay_payment_id,
      }),
    ]);

    return NextResponse.json({ success: true, paymentId: razorpay_payment_id });
  } catch (err) {
    console.error("[Payment] Verify failed:", err);
    return NextResponse.json({ error: "Verification failed" }, { status: 500 });
  }
}
