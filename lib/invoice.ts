// Pure, client-safe helpers only — no Firestore/firebase-admin imports here.
// components/admin/invoice-form.tsx (a client component) imports from this
// file; pulling in firebase-admin's Node-only dependency tree (grpc-js etc.)
// would break the client bundle. Server-only invoice helpers that need
// Firestore access live in lib/invoice-server.ts instead.

export function computeInvoiceTotal(
  items: { quantity: number | string; unitPrice: number | string }[],
): number {
  return items.reduce(
    (sum, item) => sum + Number(item.quantity) * Number(item.unitPrice),
    0,
  );
}

export function formatCurrency(amount: number, currency: string): string {
  try {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
    }).format(amount);
  } catch {
    return `${currency} ${amount.toFixed(2)}`;
  }
}
