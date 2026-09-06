import Link from "next/link";
import { notFound } from "next/navigation";
import { getInvoiceByToken } from "@/lib/firestore";
import { verifyPaystackTransaction, markInvoicePaid } from "@/lib/payments";

export default async function InvoiceCallbackPage({
  params,
  searchParams,
}: {
  params: Promise<{ token: string }>;
  searchParams: Promise<{ reference?: string }>;
}) {
  const { token } = await params;
  const { reference } = await searchParams;

  const invoice = await getInvoiceByToken(token);
  if (!invoice) notFound();

  // Best-effort immediate feedback only — never trust the query param alone,
  // it could be hand-crafted. Always re-verify server-side against Paystack.
  // The webhook remains the actual source of truth and will independently
  // mark this paid even if the user never lands on this page.
  let verified = false;
  let errorMessage = "";

  if (reference) {
    try {
      const result = await verifyPaystackTransaction(reference);
      if (result.status === "success") {
        await markInvoicePaid({
          invoiceId: invoice.id,
          reference: result.reference,
          source: "paystack",
        });
        verified = true;
      } else {
        errorMessage = "Payment was not completed.";
      }
    } catch (err) {
      errorMessage =
        err instanceof Error ? err.message : "Could not verify payment.";
    }
  } else {
    errorMessage = "Missing payment reference.";
  }

  const isPaid = verified || invoice.status === "paid";

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f3f4f6",
        padding: "24px",
      }}
    >
      <div className="invoice-doc" style={{ textAlign: "center", maxWidth: "440px" }}>
        {isPaid ? (
          <>
            <div style={{ fontSize: "20px", fontWeight: 600, color: "#16a34a" }}>
              ✓ Payment received
            </div>
            <p style={{ marginTop: "12px", color: "#4b5563" }}>
              Thank you — invoice {invoice.invoiceNumber} is marked as paid.
            </p>
          </>
        ) : (
          <>
            <div style={{ fontSize: "20px", fontWeight: 600, color: "#dc2626" }}>
              Payment not confirmed
            </div>
            <p style={{ marginTop: "12px", color: "#4b5563" }}>{errorMessage}</p>
          </>
        )}
        <Link
          href={`/invoice/${token}`}
          className="btn btn-primary"
          style={{ marginTop: "24px", display: "inline-flex" }}
        >
          Back to invoice
        </Link>
      </div>
    </main>
  );
}
