import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { getPodcastConfigs, getPodcastEpisodeCount } from "@/lib/firestore";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default async function AdminPodcastPage() {
  const rows = await getPodcastConfigs();
  const counts = await Promise.all(rows.map((c) => getPodcastEpisodeCount(c.id)));

  return (
    <>
      <div className="admin-page-head">
        <h1>Podcasts</h1>
        <Link href="/admin/podcast/new" className="btn btn-primary btn-sm">
          + New podcast
        </Link>
      </div>

      <div className="admin-table-wrap">
        <Table>
          <TableHeader>
            <TableRow className="border-[var(--border)]">
              <TableHead>Podcast</TableHead>
              <TableHead>Episodes</TableHead>
              <TableHead className="text-right">Settings</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.length === 0 && (
              <TableRow className="border-[var(--border)]">
                <TableCell colSpan={3} className="text-center text-muted-foreground">
                  No podcasts yet.
                </TableCell>
              </TableRow>
            )}
            {rows.map((c, i) => (
              <TableRow key={c.id} className="admin-row-link border-[var(--border)]">
                <TableCell>
                  <Link href={`/admin/podcast/${c.id}`} className="episode-link">
                    {c.title}
                    <ChevronRight size={16} aria-hidden />
                  </Link>
                </TableCell>
                <TableCell>{counts[i]}</TableCell>
                <TableCell className="admin-row-action text-right">
                  <Link href={`/admin/podcast/${c.id}/edit`} className="btn btn-sm btn-ghost">
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
