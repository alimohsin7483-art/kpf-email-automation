import { NextRequest, NextResponse } from "next/server";
import { submitLead, LeadPayload } from "@/lib/leads";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as Partial<LeadPayload>;

    // Validate required fields
    if (!body.name || !body.phone) {
      return NextResponse.json({ success: false, error: "Name and phone are required" }, { status: 400 });
    }

    const payload: LeadPayload = {
      name: body.name,
      email: body.email || "",
      phone: body.phone,
      interest: body.interest || "general",
      source: body.source || "website",
      goal: body.goal,
      experience: body.experience,
      timeline: body.timeline,
      seriousness: body.seriousness,
    };

    const result = await submitLead(payload);

    return NextResponse.json(result);
  } catch (err) {
    console.error("[API /lead]", err);
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}
