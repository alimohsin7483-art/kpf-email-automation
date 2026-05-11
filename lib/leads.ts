/**
 * KPF Academy — Unified Lead & Payment System
 * Storage: Google Sheets via Apps Script
 * Email: Resend | WhatsApp: Interakt/WATI
 */

const GOOGLE_SCRIPT_URL =
  process.env.GOOGLE_SCRIPT_URL ||
  "https://script.google.com/macros/s/AKfycbzqvvpZvlGCc2lMyNRq6ietiseXpgoWPVM3JzJwXQ_i3cNCs9oVuPnZtiaqYgQiZ4q5Mw/exec";

export interface LeadPayload {
  name: string;
  email: string;
  phone: string;
  interest: string;
  source: string;
  goal?: string;
  experience?: string;
  timeline?: string;
  seriousness?: string;
  timestamp?: string;
  paymentId?: string;
}

export interface LeadResponse {
  success: boolean;
  error?: string;
}

export interface PaymentStatusUpdate {
  email: string;
  phone: string;
  paymentId: string;
  orderId: string;
  programSlug: string;
  amount: number;
}

// ─── Submit new lead ──────────────────────────────────────────────────────────
export async function submitLead(payload: LeadPayload): Promise<LeadResponse> {
  const data: LeadPayload = { ...payload, timestamp: new Date().toISOString() };

  const [sheetsResult] = await Promise.allSettled([
    submitToGoogleSheets(data),
    triggerEmailAutomation(data),
    triggerWhatsAppAutomation(data),
  ]);

  if (sheetsResult.status === "rejected") {
    console.error("[Lead] Google Sheets failed:", sheetsResult.reason);
    return { success: false, error: String(sheetsResult.reason) };
  }

  return { success: true };
}

// ─── Update lead to PAID status after payment ────────────────────────────────
export async function updateLeadPaymentStatus(update: PaymentStatusUpdate): Promise<void> {
  try {
    const payload = {
      action: "UPDATE_PAYMENT",
      email: update.email,
      phone: update.phone,
      status: "PAID",
      payment_id: update.paymentId,
      order_id: update.orderId,
      program: update.programSlug,
      amount: update.amount,
      paid_at: new Date().toISOString(),
    };

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) throw new Error(`Sheets HTTP ${response.status}`);
    console.log(`[Lead] Payment status updated for ${update.email} — ${update.paymentId}`);
  } catch (err) {
    console.error("[Lead] Failed to update payment status:", err);
  }
}

// ─── Google Sheets ────────────────────────────────────────────────────────────
async function submitToGoogleSheets(data: LeadPayload): Promise<void> {
  const response = await fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error(`Sheets HTTP ${response.status}`);
}

// ─── Email Automation ─────────────────────────────────────────────────────────
async function triggerEmailAutomation(lead: LeadPayload): Promise<void> {
  if (!lead.email) {
    console.log("[Email] SKIPPED REASON: no email address in form submission");
    return;
  }
  if (!process.env.RESEND_API_KEY) {
    console.log("[Email] SKIPPED REASON: RESEND_API_KEY missing");
    return;
  }

  try {
    const { sendEnrollmentConfirmation, sendConsultationConfirmation, scheduleNurtureSequence } =
      await import("@/lib/email");

    const isEnrollment = lead.source === "enrollment";
    const isConsultation = lead.source === "consultation" || lead.interest === "consultation";

    console.log(`[Email] Triggering for ${lead.email} | source: ${lead.source}`);

    if (isEnrollment) {
      await sendEnrollmentConfirmation({
        name: lead.name,
        email: lead.email,
        programTitle: lead.interest,
        programSlug: lead.interest,
        paymentId: lead.paymentId,
      });
    } else if (isConsultation) {
      await sendConsultationConfirmation({ name: lead.name, email: lead.email, goal: lead.goal });
      await scheduleNurtureSequence({ name: lead.name, email: lead.email });
    } else {
      await scheduleNurtureSequence({ name: lead.name, email: lead.email });
    }
  } catch (err) {
    console.error("[Email] Error:", err);
  }
}

// ─── WhatsApp Hook ────────────────────────────────────────────────────────────
async function triggerWhatsAppAutomation(lead: LeadPayload): Promise<void> {
  console.log("[WhatsApp Hook] Lead:", lead.phone, "| Interest:", lead.interest);
}
