import { ClientForm } from "@/components/admin/client-form";

export default function NewClientPage() {
  return (
    <>
      <div className="admin-page-head">
        <h1>New client</h1>
      </div>
      <ClientForm />
    </>
  );
}
