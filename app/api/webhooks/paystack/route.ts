import crypto from "crypto";
import { NextRequest, NextResponse } from "next/server";
import { getInvoiceByPaystackRef } from "@/lib/firestore";
import { markInvoicePaid } from "@/lib/payments";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  // Read the raw body first — HMAC verification must run over the exact
  // bytes Paystack sent, not a re-serialized JSON.parse'd/stringify'd copy
  // (whitespace/key-order differences would break the signature).
  const rawBody = await req.text();
  const signature = req.headers.get("x-paystack-signature") ?? "";

  const secret = process.env.PAYSTACK_SECRET_KEY;
  if (!secret) {
    return NextResponse.json({ message: "Server misconfigured" }, { status: 500 });
  }

  const expected = crypto
    .createHmac("sha512", secret)
    .update(rawBody)
    .digest("hex");

  const expectedBuf = Buffer.from(expected, "hex");
  const signatureBuf = Buffer.from(signature, "hex");
  // timingSafeEqual throws on mismatched lengths rather than returning
  // false, so the length check has to happen first.
  const isValid =
    expectedBuf.length === signatureBuf.length &&
    crypto.timingSafeEqual(expectedBuf, signatureBuf);

  if (!isValid) {
    return NextResponse.json({ message: "Invalid signature" }, { status: 401 });
  }

  const event = JSON.parse(rawBody);

  // Paystack sends many event types; only act on charge.success, but still
  // return 200 for the rest so it doesn't keep retrying events we ignore.
  if (event?.event !== "charge.success") {
    return NextResponse.json({ received: true });
  }

  const reference: string | undefined = event?.data?.reference;
  if (!reference) {
    return NextResponse.json({ received: true });
  }

  const invoice = await getInvoiceByPaystackRef(reference);
  if (!invoice) {
    // Unknown/unrelated reference — no-op, still 200.
    return NextResponse.json({ received: true });
  }

  await markInvoicePaid({ invoiceId: invoice.id, reference, source: "paystack" });

  return NextResponse.json({ received: true });
}
