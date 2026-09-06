import { getDb } from "@/lib/firebase-admin";
import { COL } from "@/lib/firestore";

const PAYSTACK_BASE = "https://api.paystack.co";

function getSecretKey(): string {
  const key = process.env.PAYSTACK_SECRET_KEY;
  if (!key) throw new Error("PAYSTACK_SECRET_KEY is not set");
  return key;
}

export async function initializePaystackTransaction({
  email,
  amountInSmallestUnit,
  currency,
  reference,
  callbackUrl,
}: {
  email: string;
  amountInSmallestUnit: number;
  currency: string;
  reference: string;
  callbackUrl: string;
}): Promise<{ authorization_url: string; access_code: string; reference: string }> {
  const res = await fetch(`${PAYSTACK_BASE}/transaction/initialize`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${getSecretKey()}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      amount: amountInSmallestUnit,
      currency,
      reference,
      callback_url: callbackUrl,
    }),
  });

  const body = await res.json();
  if (!res.ok || !body?.status) {
    throw new Error(body?.message || "Failed to initialize payment");
  }
  return body.data;
}

export async function verifyPaystackTransaction(reference: string): Promise<{
  status: string;
  reference: string;
  amount: number;
  currency: string;
}> {
  const res = await fetch(
    `${PAYSTACK_BASE}/transaction/verify/${encodeURIComponent(reference)}`,
    { headers: { Authorization: `Bearer ${getSecretKey()}` } },
  );

  const body = await res.json();
  if (!res.ok || !body?.status) {
    throw new Error(body?.message || "Failed to verify payment");
  }
  return body.data;
}

export async function markInvoicePaid({
  invoiceId,
  reference,
  source,
}: {
  invoiceId: string;
  reference?: string;
  source: "paystack" | "manual";
}): Promise<boolean> {
  const ref = getDb().collection(COL.invoices).doc(invoiceId);

  // The transaction's read-then-conditional-write is the real idempotency
  // guard — it closes the race between the webhook, the post-checkout
  // callback, and a manual admin click all potentially firing
  // near-simultaneously. Only the call that actually flips the doc
  // returns true; Firestore aborts and retries the transaction if another
  // write hits the same document concurrently, so the check-then-set here
  // can't race with itself the way a plain read-then-write would.
  return getDb().runTransaction(async (txn) => {
    const doc = await txn.get(ref);
    if (!doc.exists) return false;
    if (doc.data()?.status === "paid") return false;

    const update: Record<string, unknown> = {
      status: "paid",
      paidAt: new Date(),
      updatedAt: new Date(),
    };
    if (source === "paystack" && reference) {
      update.paystackReference = reference;
    }
    txn.update(ref, update);
    return true;
  });
}
