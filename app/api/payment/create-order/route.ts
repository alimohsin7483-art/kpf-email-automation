import { NextRequest, NextResponse } from "next/server";
import { createOrder } from "@/lib/razorpay";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { amount, programSlug, programTitle, customerName, customerEmail, customerPhone } = body;

    if (!amount || !programSlug || !customerName || !customerPhone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (typeof amount !== "number" || amount <= 0) {
      return NextResponse.json({ error: "Invalid amount" }, { status: 400 });
    }

    const order = await createOrder({
      amount,
      programSlug,
      programTitle: programTitle || programSlug,
      customerName,
      customerEmail: customerEmail || "",
      customerPhone,
    });

    return NextResponse.json({
      success: true,
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
    });
  } catch (err) {
    console.error("[Payment] Create order failed:", err);
    return NextResponse.json({ error: "Failed to create order" }, { status: 500 });
  }
}
