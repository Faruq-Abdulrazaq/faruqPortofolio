import Link from "next/link";
import { getClients } from "@/lib/firestore";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default async function AdminClientsPage() {
  const rows = await getClients();

  return (
    <>
      <div className="admin-page-head">
        <h1>Clients</h1>
        <Link href="/admin/clients/new" className="btn btn-primary btn-sm">
          + New client
        </Link>
      </div>

      <div className="admin-table-wrap">
        <Table>
          <TableHeader>
            <TableRow className="border-[var(--border)]">
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Company</TableHead>
              <TableHead className="text-right">Edit</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.length === 0 && (
              <TableRow className="border-[var(--border)]">
                <TableCell colSpan={4} className="text-center text-muted-foreground">
                  No clients yet.
                </TableCell>
              </TableRow>
            )}
            {rows.map((client) => (
              <TableRow key={client.id} className="border-[var(--border)]">
                <TableCell>{client.name}</TableCell>
                <TableCell>{client.email}</TableCell>
                <TableCell>{client.company || "—"}</TableCell>
                <TableCell className="text-right">
                  <Link
                    href={`/admin/clients/${client.id}/edit`}
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
