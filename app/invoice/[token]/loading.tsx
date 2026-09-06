import { InvoiceDocumentSkeleton } from "@/components/admin/skeletons";

export default function Loading() {
  return (
    <main style={{ minHeight: "100vh", background: "#f3f4f6", padding: "60px 20px" }}>
      <InvoiceDocumentSkeleton />
    </main>
  );
}
