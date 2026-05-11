import crypto from "crypto";
import Razorpay from "razorpay";

// ─── Server-side only — never import this in client components ────────────────
const getRazorpayInstance = () => {
  const key_id = process.env.RAZORPAY_KEY_ID;
  const key_secret = process.env.RAZORPAY_KEY_SECRET;
  if (!key_id || !key_secret) throw new Error("Razorpay keys not configured");
  return new Razorpay({ key_id, key_secret });
};

export interface CreateOrderParams {
  amount: number; // INR
  programSlug: string;
  programTitle: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
}

export interface RazorpayOrder {
  id: string;
  amount: number;
  currency: string;
  receipt: string;
}

export async function createOrder(params: CreateOrderParams): Promise<RazorpayOrder> {
  const razorpay = getRazorpayInstance();
  const receipt = `kpf_${params.programSlug}_${Date.now()}`.slice(0, 40);

  const order = await razorpay.orders.create({
    amount: params.amount * 100, // paise
    currency: "INR",
    receipt,
    notes: {
      program: params.programSlug,
      customer_name: params.customerName,
      customer_email: params.customerEmail,
      customer_phone: params.customerPhone,
    },
  });

  return {
    id: order.id,
    amount: Number(order.amount),
    currency: order.currency,
    receipt: order.receipt || receipt,
  };
}

export function verifySignature(params: {
  orderId: string;
  paymentId: string;
  signature: string;
}): boolean {
  const secret = process.env.RAZORPAY_KEY_SECRET;
  if (!secret) throw new Error("RAZORPAY_KEY_SECRET not set");

  const body = `${params.orderId}|${params.paymentId}`;
  const expected = crypto
    .createHmac("sha256", secret)
    .update(body)
    .digest("hex");

  return crypto.timingSafeEqual(
    Buffer.from(expected, "hex"),
    Buffer.from(params.signature, "hex")
  );
}

export function verifyWebhookSignature(rawBody: string, signature: string): boolean {
  const secret = process.env.RAZORPAY_WEBHOOK_SECRET;
  if (!secret) throw new Error("RAZORPAY_WEBHOOK_SECRET not set");

  const expected = crypto
    .createHmac("sha256", secret)
    .update(rawBody)
    .digest("hex");

  return crypto.timingSafeEqual(
    Buffer.from(expected, "hex"),
    Buffer.from(signature, "hex")
  );
}
