import Link from "next/link";
import { getNotetakerConfigs, getRecentJobs } from "@/lib/firestore";
import { NotetakerUploadForm } from "@/components/admin/notetaker-upload-form";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default async function AdminNotetakerPage() {
  const [configs, jobs] = await Promise.all([
    getNotetakerConfigs(),
    getRecentJobs("notetaker"),
  ]);

  return (
    <>
      <div className="admin-page-head">
        <h1>Note taker</h1>
        <Link href="/admin/notetaker/configs" className="btn btn-ghost btn-sm">
          Manage prompts
        </Link>
      </div>

      <NotetakerUploadForm configs={configs} />

      <h2 style={{ marginTop: "28px" }}>Recent recordings</h2>
      <div className="admin-table-wrap">
        <Table>
          <TableHeader>
            <TableRow className="border-[var(--border)]">
              <TableHead>Recording</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Uploaded</TableHead>
              <TableHead>Notes</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {jobs.length === 0 && (
              <TableRow className="border-[var(--border)]">
                <TableCell colSpan={4} className="text-center text-muted-foreground">
                  Nothing uploaded yet.
                </TableCell>
              </TableRow>
            )}
            {jobs.map((job) => (
              <TableRow key={job.id} className="border-[var(--border)]">
                <TableCell>{job.recordingName || job.id}</TableCell>
                <TableCell>{job.status}</TableCell>
                <TableCell>{job.createdAt.slice(0, 16).replace("T", " ")}</TableCell>
                <TableCell>
                  {job.status === "done" && typeof job.result?.transcriptUrl === "string" ? (
                    <a href={job.result.transcriptUrl as string} target="_blank" rel="noreferrer">
                      Transcript
                    </a>
                  ) : job.status === "error" ? (
                    <span className="text-muted-foreground">{job.error}</span>
                  ) : (
                    "—"
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
