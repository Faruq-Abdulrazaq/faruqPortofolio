import { notFound } from "next/navigation";
import { getCourseConfigById } from "@/lib/firestore";
import { CourseConfigForm } from "@/components/admin/course-config-form";

export default async function EditCourseConfigPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const config = await getCourseConfigById(id);
  if (!config) notFound();

  return (
    <>
      <div className="admin-page-head">
        <h1>Edit course</h1>
      </div>
      <CourseConfigForm config={config} />
    </>
  );
}
