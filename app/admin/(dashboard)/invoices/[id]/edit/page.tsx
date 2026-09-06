import { notFound } from "next/navigation";
import { getClients, getInvoiceById } from "@/lib/firestore";
import { InvoiceForm } from "@/components/admin/invoice-form";

export default async function EditInvoicePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const invoice = await getInvoiceById(id);
  if (!invoice) notFound();
  if (invoice.status !== "draft") notFound();

  const clients = await getClients();

  return (
    <>
      <div className="admin-page-head">
        <h1>Edit invoice {invoice.invoiceNumber}</h1>
      </div>
      <InvoiceForm clients={clients} invoice={invoice} items={invoice.items} />
    </>
  );
}
