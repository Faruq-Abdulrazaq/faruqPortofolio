import { AdminPageHeadSkeleton, AdminTableSkeleton } from "@/components/admin/skeletons";

export default function Loading() {
  return (
    <>
      <AdminPageHeadSkeleton />
      <AdminTableSkeleton columns={4} />
    </>
  );
}
