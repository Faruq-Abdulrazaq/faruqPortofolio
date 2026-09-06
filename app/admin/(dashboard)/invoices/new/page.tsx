import { getClients } from "@/lib/firestore";
import { InvoiceForm } from "@/components/admin/invoice-form";

export default async function NewInvoicePage() {
  const clients = await getClients();

  return (
    <>
      <div className="admin-page-head">
        <h1>New invoice</h1>
      </div>
      <InvoiceForm clients={clients} />
    </>
  );
}
