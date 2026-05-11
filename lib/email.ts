import { Resend } from "resend";
import { render } from "@react-email/render";
import WelcomeEnrollment from "@/emails/WelcomeEnrollment";
import ConsultationBooked from "@/emails/ConsultationBooked";
import PaymentConfirmation from "@/emails/PaymentConfirmation";

const resend = new Resend(process.env.RESEND_API_KEY);

// TEMPORARY: sandbox sender — change to "Shraddha @ KPF Academy <hello@kineticprofitness.com>" after domain verified
const FROM = "KPF Academy <onboarding@resend.dev>";

// ─── 1. Enrollment confirmation ───────────────────────────────────────────────
export async function sendEnrollmentConfirmation({
  name, email, programTitle, programSlug, paymentId,
}: {
  name: string; email: string; programTitle: string; programSlug: string; paymentId?: string;
}) {
  if (!process.env.RESEND_API_KEY || !email) return;
  const html = await render(WelcomeEnrollment({ name, programTitle, programSlug, paymentId }));
  const { error } = await resend.emails.send({
    from: FROM, to: email,
    subject: `You're in! Welcome to ${programTitle} — KPF Academy`,
    html,
  });
  if (error) console.error("[Email] Enrollment confirmation failed:", error);
  else console.log(`[Email] ✅ Enrollment confirmation sent to ${email}`);
}

// ─── 2. Consultation confirmation ─────────────────────────────────────────────
export async function sendConsultationConfirmation({
  name, email, goal,
}: {
  name: string; email: string; goal?: string;
}) {
  if (!process.env.RESEND_API_KEY || !email) return;
  const html = await render(ConsultationBooked({ name, goal }));
  const { error } = await resend.emails.send({
    from: FROM, to: email,
    subject: "Consultation booked! We'll call you within 24 hours — KPF Academy",
    html,
  });
  if (error) console.error("[Email] Consultation confirmation failed:", error);
  else console.log(`[Email] ✅ Consultation confirmation sent to ${email}`);
}

// ─── 3. Payment confirmation ──────────────────────────────────────────────────
export async function sendPaymentConfirmation({
  name, email, programTitle, programSlug, paymentId, amount,
}: {
  name: string; email: string; programTitle: string; programSlug: string;
  paymentId: string; amount: number;
}) {
  if (!process.env.RESEND_API_KEY || !email) return;
  const html = await render(PaymentConfirmation({ name, programTitle, programSlug, paymentId, amount }));
  const { error } = await resend.emails.send({
    from: FROM, to: email,
    subject: `Payment confirmed ✅ Welcome to ${programTitle} — KPF Academy`,
    html,
  });
  if (error) console.error("[Email] Payment confirmation failed:", error);
  else console.log(`[Email] ✅ Payment confirmation sent to ${email}`);
}

// ─── 4. Nurture sequence (Day 1, 3, 7) ───────────────────────────────────────
export async function scheduleNurtureSequence({ name, email }: { name: string; email: string }) {
  if (!process.env.RESEND_API_KEY || !email) return;
  const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.kineticprofitness.com";
  const delays = [
    { day: 1, hours: 24 },
    { day: 3, hours: 72 },
    { day: 7, hours: 168 },
  ];
  for (const { day, hours } of delays) {
    const scheduledAt = new Date(Date.now() + hours * 60 * 60 * 1000).toISOString();
    try {
      await fetch(`${BASE_URL}/api/email-sequence`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, day, scheduledAt }),
      });
      console.log(`[Email] Day ${day} nurture scheduled for ${email}`);
    } catch (err) {
      console.error(`[Email] Failed to schedule Day ${day}:`, err);
    }
  }
}
