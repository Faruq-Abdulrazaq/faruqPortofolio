import { NextRequest, NextResponse } from "next/server";
import { getClientById, getInvoiceById, markInvoiceSent } from "@/lib/firestore";
import { sendInvoiceEmail } from "@/lib/email";
import { computeInvoiceTotal, formatCurrency } from "@/lib/invoice";
import { SITE_URL } from "@/lib/site";

export async function POST(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const invoice = await getInvoiceById(id);
  if (!invoice) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }
  if (invoice.status !== "draft") {
    return NextResponse.json(
      { message: "Only draft invoices can be sent" },
      { status: 409 },
    );
  }

  const client = await getClientById(invoice.clientId);
  if (!client) {
    return NextResponse.json({ message: "Client not found" }, { status: 404 });
  }

  const total = computeInvoiceTotal(invoice.items);

  try {
    await sendInvoiceEmail({
      clientEmail: client.email,
      clientName: client.name,
      clientCompany: client.company,
      invoiceNumber: invoice.invoiceNumber,
      issueDate: invoice.issueDate,
      dueDate: invoice.dueDate ?? null,
      currency: invoice.currency,
      items: invoice.items,
      totalFormatted: formatCurrency(total, invoice.currency),
      notes: invoice.notes,
      payUrl: `${SITE_URL}/invoice/${invoice.publicToken}`,
    });
  } catch (err) {
    return NextResponse.json(
      { message: err instanceof Error ? err.message : "Failed to send email" },
      { status: 502 },
    );
  }

  const result = await markInvoiceSent(id);
  if (!result.ok) {
    return NextResponse.json({ message: result.reason }, { status: 409 });
  }
  return NextResponse.json({ ok: true });
}
