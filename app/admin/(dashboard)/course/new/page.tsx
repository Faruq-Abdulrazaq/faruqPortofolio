import { CourseConfigForm } from "@/components/admin/course-config-form";

export default function NewCourseConfigPage() {
  return (
    <>
      <div className="admin-page-head">
        <h1>New course</h1>
      </div>
      <CourseConfigForm />
    </>
  );
}
