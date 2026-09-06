import { notFound } from "next/navigation";
import { getClientById, getInvoiceById } from "@/lib/firestore";
import { InvoiceDocument } from "@/components/invoice-document";
import { InvoiceActions } from "@/components/admin/invoice-actions";
import { SITE_URL } from "@/lib/site";

export default async function InvoiceDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const invoice = await getInvoiceById(id);
  if (!invoice) notFound();

  const client = await getClientById(invoice.clientId);
  if (!client) notFound();

  return (
    <>
      <div className="admin-page-head">
        <h1>{invoice.invoiceNumber}</h1>
      </div>
      <InvoiceDocument invoice={invoice} items={invoice.items} client={client} />
      <InvoiceActions
        invoice={invoice}
        payUrl={`${SITE_URL}/invoice/${invoice.publicToken}`}
      />
    </>
  );
}
