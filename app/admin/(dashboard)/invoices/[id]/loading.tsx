import { AdminPageHeadSkeleton, InvoiceDocumentSkeleton } from "@/components/admin/skeletons";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <>
      <AdminPageHeadSkeleton />
      <InvoiceDocumentSkeleton />
      <div className="admin-card" style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
        <Skeleton style={{ width: "70px", height: "32px", borderRadius: "8px" }} />
        <Skeleton style={{ width: "170px", height: "32px", borderRadius: "8px" }} />
        <Skeleton style={{ width: "70px", height: "32px", borderRadius: "8px" }} />
      </div>
    </>
  );
}
