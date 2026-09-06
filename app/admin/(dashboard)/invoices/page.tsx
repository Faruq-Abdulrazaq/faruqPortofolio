import Link from "next/link";
import { getClients, getInvoices } from "@/lib/firestore";
import { computeInvoiceTotal, formatCurrency } from "@/lib/invoice";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const STATUS_VARIANT: Record<
  string,
  "default" | "secondary" | "destructive" | "outline"
> = {
  draft: "outline",
  sent: "secondary",
  paid: "default",
  void: "destructive",
};

export default async function AdminInvoicesPage() {
  const [invoices, clients] = await Promise.all([getInvoices(), getClients()]);
  const clientsById = new Map(clients.map((c) => [c.id, c]));

  return (
    <>
      <div className="admin-page-head">
        <h1>Invoices</h1>
        <Link href="/admin/invoices/new" className="btn btn-primary btn-sm">
          + New invoice
        </Link>
      </div>

      <div className="admin-table-wrap">
        <Table>
          <TableHeader>
            <TableRow className="border-[var(--border)]">
              <TableHead>Number</TableHead>
              <TableHead>Client</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Due</TableHead>
              <TableHead className="text-right">Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.length === 0 && (
              <TableRow className="border-[var(--border)]">
                <TableCell colSpan={5} className="text-center text-muted-foreground">
                  No invoices yet.
                </TableCell>
              </TableRow>
            )}
            {invoices.map((invoice) => {
              const client = clientsById.get(invoice.clientId);
              const total = computeInvoiceTotal(invoice.items);
              return (
                <TableRow key={invoice.id} className="border-[var(--border)]">
                  <TableCell>
                    <Link href={`/admin/invoices/${invoice.id}`} className="mono">
                      {invoice.invoiceNumber}
                    </Link>
                  </TableCell>
                  <TableCell>{client?.name ?? "—"}</TableCell>
                  <TableCell>
                    <Badge variant={STATUS_VARIANT[invoice.status]}>
                      {invoice.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{invoice.dueDate ?? "—"}</TableCell>
                  <TableCell className="text-right">
                    {formatCurrency(total, invoice.currency)}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
