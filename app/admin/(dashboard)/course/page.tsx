import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { getCourseConfigs } from "@/lib/firestore";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default async function AdminCoursePage() {
  const rows = await getCourseConfigs();

  return (
    <>
      <div className="admin-page-head">
        <h1>Courses</h1>
        <Link href="/admin/course/new" className="btn btn-primary btn-sm">
          + New course
        </Link>
      </div>

      <div className="admin-table-wrap">
        <Table>
          <TableHeader>
            <TableRow className="border-[var(--border)]">
              <TableHead>Course</TableHead>
              <TableHead>Lessons</TableHead>
              <TableHead className="text-right">Settings</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.length === 0 && (
              <TableRow className="border-[var(--border)]">
                <TableCell colSpan={3} className="text-center text-muted-foreground">
                  No courses yet.
                </TableCell>
              </TableRow>
            )}
            {rows.map((c) => (
              <TableRow key={c.id} className="admin-row-link border-[var(--border)]">
                <TableCell>
                  <Link href={`/admin/course/${c.id}`} className="episode-link">
                    {c.title}
                    <ChevronRight size={16} aria-hidden />
                  </Link>
                </TableCell>
                <TableCell>{c.lessons.length}</TableCell>
                <TableCell className="admin-row-action text-right">
                  <Link href={`/admin/course/${c.id}/edit`} className="btn btn-sm btn-ghost">
                    Edit
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
