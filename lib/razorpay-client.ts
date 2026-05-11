export interface RazorpayOptions {
  amount: number;
  programTitle: string;
  programSlug: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  onSuccess: (paymentId: string, orderId: string, signature: string) => void;
  onFailure?: (error: unknown) => void;
}

export async function openRazorpayCheckout(opts: RazorpayOptions): Promise<void> {
  const orderRes = await fetch("/api/payment/create-order", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      amount: opts.amount,
      programSlug: opts.programSlug,
      programTitle: opts.programTitle,
      customerName: opts.customerName,
      customerEmail: opts.customerEmail,
      customerPhone: opts.customerPhone,
    }),
  });

  const order = await orderRes.json();
  if (!order.success) throw new Error("Failed to create order");

  await loadRazorpayScript();

  const options = {
    key: order.keyId,
    amount: order.amount,
    currency: order.currency,
    order_id: order.orderId,
    name: "KPF Academy",
    description: opts.programTitle,
    image: "/logo.png",
    handler: (response: {
      razorpay_payment_id: string;
      razorpay_order_id: string;
      razorpay_signature: string;
    }) => {
      opts.onSuccess(
        response.razorpay_payment_id,
        response.razorpay_order_id,
        response.razorpay_signature
      );
    },
    prefill: {
      name: opts.customerName,
      email: opts.customerEmail,
      contact: opts.customerPhone,
    },
    theme: { color: "#D4FF00" },
    modal: {
      ondismiss: () => opts.onFailure?.("Payment cancelled by user"),
    },
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const razorpay = new (window as any).Razorpay(options);
  razorpay.open();
}

function loadRazorpayScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (document.getElementById("razorpay-script")) { resolve(); return; }
    const script = document.createElement("script");
    script.id = "razorpay-script";
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load Razorpay"));
    document.body.appendChild(script);
  });
}