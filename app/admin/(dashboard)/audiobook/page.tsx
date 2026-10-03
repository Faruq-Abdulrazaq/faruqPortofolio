import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { getAudiobookConfigs } from "@/lib/firestore";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default async function AdminAudiobookPage() {
  const rows = await getAudiobookConfigs();

  return (
    <>
      <div className="admin-page-head">
        <h1>Audiobooks</h1>
        <Link href="/admin/audiobook/new" className="btn btn-primary btn-sm">
          + New audiobook
        </Link>
      </div>

      <div className="admin-table-wrap">
        <Table>
          <TableHeader>
            <TableRow className="border-[var(--border)]">
              <TableHead>Audiobook</TableHead>
              <TableHead>EPUB</TableHead>
              <TableHead className="text-right">Settings</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.length === 0 && (
              <TableRow className="border-[var(--border)]">
                <TableCell colSpan={3} className="text-center text-muted-foreground">
                  No audiobooks yet.
                </TableCell>
              </TableRow>
            )}
            {rows.map((c) => (
              <TableRow key={c.id} className="admin-row-link border-[var(--border)]">
                <TableCell>
                  <Link href={`/admin/audiobook/${c.id}`} className="episode-link">
                    {c.title || c.epubName}
                    <ChevronRight size={16} aria-hidden />
                  </Link>
                </TableCell>
                <TableCell>{c.epubName}</TableCell>
                <TableCell className="admin-row-action text-right">
                  <Link href={`/admin/audiobook/${c.id}/edit`} className="btn btn-sm btn-ghost">
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
