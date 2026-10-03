import Link from "next/link";
import { getNotetakerConfigs } from "@/lib/firestore";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default async function AdminNotetakerConfigsPage() {
  const rows = await getNotetakerConfigs();

  return (
    <>
      <div className="admin-page-head">
        <h1>Note-taker prompts</h1>
        <Link href="/admin/notetaker/configs/new" className="btn btn-primary btn-sm">
          + New prompt
        </Link>
      </div>

      <div className="admin-table-wrap">
        <Table>
          <TableHeader>
            <TableRow className="border-[var(--border)]">
              <TableHead>Name</TableHead>
              <TableHead>Language</TableHead>
              <TableHead className="text-right">Edit</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.length === 0 && (
              <TableRow className="border-[var(--border)]">
                <TableCell colSpan={3} className="text-center text-muted-foreground">
                  No prompts yet &mdash; uploads use the default summary prompt until you add one.
                </TableCell>
              </TableRow>
            )}
            {rows.map((c) => (
              <TableRow key={c.id} className="border-[var(--border)]">
                <TableCell>{c.name}</TableCell>
                <TableCell>{c.language || "—"}</TableCell>
                <TableCell className="text-right">
                  <Link
                    href={`/admin/notetaker/configs/${c.id}/edit`}
                    className="btn btn-sm btn-ghost"
                  >
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
