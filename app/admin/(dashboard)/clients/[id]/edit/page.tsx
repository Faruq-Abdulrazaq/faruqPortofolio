import { notFound } from "next/navigation";
import { getClientById } from "@/lib/firestore";
import { ClientForm } from "@/components/admin/client-form";

export default async function EditClientPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const client = await getClientById(id);
  if (!client) notFound();

  return (
    <>
      <div className="admin-page-head">
        <h1>Edit client</h1>
      </div>
      <ClientForm client={client} />
    </>
  );
}
