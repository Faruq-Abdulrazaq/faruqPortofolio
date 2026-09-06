import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getClientById, getInvoiceByToken } from "@/lib/firestore";
import { InvoiceDocument } from "@/components/invoice-document";
import { InvoicePayActions } from "@/components/invoice-pay-actions";

export const metadata: Metadata = {
  title: "Invoice",
  robots: { index: false, follow: false },
};

export default async function PublicInvoicePage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;
  const invoice = await getInvoiceByToken(token);
  if (!invoice) notFound();

  const client = await getClientById(invoice.clientId);
  if (!client) notFound();

  return (
    <main style={{ minHeight: "100vh", background: "#f3f4f6", padding: "60px 20px" }}>
      <InvoiceDocument invoice={invoice} items={invoice.items} client={client}>
        <InvoicePayActions token={token} status={invoice.status} />
      </InvoiceDocument>
    </main>
  );
}
