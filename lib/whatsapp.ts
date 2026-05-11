/**
 * KPF Academy — WhatsApp Automation
 * Provider: Interakt (interakt.ai) — recommended for India
 * Alternative: WATI (wati.io) or AiSensy
 *
 * SETUP:
 * 1. Sign up at interakt.ai
 * 2. Add INTERAKT_API_KEY to env vars
 * 3. Create message templates in Interakt dashboard
 * 4. Get template names and update below
 */

const INTERAKT_API_KEY = process.env.INTERAKT_API_KEY;
const INTERAKT_URL = "https://api.interakt.ai/v1/public/message/";

// ─── Send WhatsApp after payment ──────────────────────────────────────────────
export async function sendWhatsAppPaymentConfirmation({
  name,
  phone,
  programTitle,
  paymentId,
}: {
  name: string;
  phone: string;
  programTitle: string;
  paymentId: string;
}) {
  if (!INTERAKT_API_KEY) {
    console.log("[WhatsApp] Skipped — INTERAKT_API_KEY not set");
    return;
  }
  if (!phone) {
    console.log("[WhatsApp] Skipped — no phone number");
    return;
  }

  try {
    // Format phone: remove +91 or 0 prefix, ensure 10 digits
    const cleanPhone = phone.replace(/\D/g, "").replace(/^(91|0)/, "").slice(-10);

    const payload = {
      countryCode: "+91",
      phoneNumber: cleanPhone,
      callbackData: `payment_${paymentId}`,
      type: "Template",
      template: {
        name: "payment_confirmation", // Create this template in Interakt dashboard
        languageCode: "en",
        bodyValues: [name, programTitle, paymentId],
        // Template body example:
        // "Hi {{1}}! ✅ Your payment for {{2}} is confirmed.
        //  Payment ID: {{3}}
        //  Shraddha's team will reach out within 2 hours with your program access.
        //  Welcome to KPF Academy! 🎯"
      },
    };

    const res = await fetch(INTERAKT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${INTERAKT_API_KEY}`,
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) throw new Error(`Interakt HTTP ${res.status}`);
    console.log(`[WhatsApp] ✅ Payment confirmation sent to ${cleanPhone}`);
  } catch (err) {
    console.error("[WhatsApp] Payment confirmation failed:", err);
  }
}

// ─── Send WhatsApp after consultation booking ─────────────────────────────────
export async function sendWhatsAppConsultationConfirmation({
  name,
  phone,
  goal,
}: {
  name: string;
  phone: string;
  goal?: string;
}) {
  if (!INTERAKT_API_KEY || !phone) return;

  try {
    const cleanPhone = phone.replace(/\D/g, "").replace(/^(91|0)/, "").slice(-10);

    const payload = {
      countryCode: "+91",
      phoneNumber: cleanPhone,
      callbackData: `consultation_${Date.now()}`,
      type: "Template",
      template: {
        name: "consultation_confirmation", // Create in Interakt dashboard
        languageCode: "en",
        bodyValues: [name, goal || "overall fitness"],
        // Template: "Hi {{1}}! Your free consultation is booked 🎯
        //  Goal: {{2}}
        //  We'll call you within 24 hours to schedule.
        //  — KPF Academy Team"
      },
    };

    const res = await fetch(INTERAKT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${INTERAKT_API_KEY}`,
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) throw new Error(`Interakt HTTP ${res.status}`);
    console.log(`[WhatsApp] ✅ Consultation confirmation sent to ${cleanPhone}`);
  } catch (err) {
    console.error("[WhatsApp] Consultation confirmation failed:", err);
  }
}
