import { AdminPageHeadSkeleton, AdminFormSkeleton } from "@/components/admin/skeletons";

export default function Loading() {
  return (
    <>
      <AdminPageHeadSkeleton />
      <AdminFormSkeleton fields={4} />
    </>
  );
}
