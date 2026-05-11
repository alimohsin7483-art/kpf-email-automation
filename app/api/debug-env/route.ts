// TEMPORARY debug route — DELETE this file after testing
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    hasResendKey: !!process.env.RESEND_API_KEY,
    keyPrefix: process.env.RESEND_API_KEY?.slice(0, 6) || "NOT SET",
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "NOT SET",
  });
}
