// ─── API Route: Triggers delayed nurture sequence via Vercel Cron or direct call
// Called internally from leads.ts after a consultation is booked.
// Uses Resend to schedule Day 1, 3, 7 emails.

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { render } from "@react-email/render";
import NurtureDay1 from "@/emails/NurtureDay1";
import NurtureDay3 from "@/emails/NurtureDay3";
import NurtureDay7 from "@/emails/NurtureDay7";

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM = "KPF Academy <onboarding@resend.dev>"; // TODO: change to your domain email after kineticprofitness.com is verified on resend.com

export async function POST(req: NextRequest) {
  try {
    const { name, email, day } = await req.json();

    if (!email || !name || !day) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    let subject = "";
    let html = "";

    if (day === 1) {
      subject = "The #1 reason diets fail in India (it's not willpower)";
      html = await render(NurtureDay1({ name }));
    } else if (day === 3) {
      subject = "1000+ transformations — real results from real KPF members";
      html = await render(NurtureDay3({ name }));
    } else if (day === 7) {
      subject = "Still thinking about it? Here's what changes when you decide";
      html = await render(NurtureDay7({ name }));
    } else {
      return NextResponse.json({ error: "Invalid day" }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: FROM,
      to: email,
      subject,
      html,
    });

    if (error) {
      console.error(`[Email Sequence] Day ${day} failed:`, error);
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("[Email Sequence] Error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
