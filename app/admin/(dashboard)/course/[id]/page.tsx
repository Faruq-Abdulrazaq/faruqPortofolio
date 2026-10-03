import Link from "next/link";
import { notFound } from "next/navigation";
import { Settings } from "lucide-react";
import { getCourseConfigById, getCourseView } from "@/lib/firestore";
import { BackLink } from "@/components/admin/back-link";
import { CourseLessons } from "@/components/admin/course-lessons";

export default async function CoursePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const config = await getCourseConfigById(id);
  if (!config) notFound();
  const view = await getCourseView(config);
  const generated = view.lessons.filter((l) => l.audio).length;

  return (
    <>
      <BackLink href="/admin/course">All courses</BackLink>

      <div className="admin-page-head podcast-head">
        <div>
          <span className="eyebrow">COURSE</span>
          <h1>{config.title}</h1>
          {config.outcome && <p className="podcast-stats">By the end: {config.outcome}</p>}
          <p className="podcast-stats">
            {view.lessons.length} {view.lessons.length === 1 ? "lesson" : "lessons"} · {generated} with audio
          </p>
        </div>
        <Link href={`/admin/course/${id}/edit`} className="btn btn-ghost btn-sm">
          <Settings size={15} aria-hidden />
          Course settings &amp; lessons
        </Link>
      </div>

      <CourseLessons courseId={id} view={view} />
    </>
  );
}
