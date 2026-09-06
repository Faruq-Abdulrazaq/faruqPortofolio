import { NextRequest, NextResponse } from "next/server";
import {
  deleteInvoiceIfDraft,
  getClientById,
  getInvoiceById,
  updateInvoice,
} from "@/lib/firestore";
import { invoiceSchema } from "@/lib/validations/invoice";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const invoice = await getInvoiceById(id);
  if (!invoice) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }
  const client = await getClientById(invoice.clientId);
  return NextResponse.json({ invoice, client });
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const body = await req.json().catch(() => null);
  const parsed = invoiceSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { message: "Invalid input", errors: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const { items, ...input } = parsed.data;
  const result = await updateInvoice(id, {
    clientId: input.clientId,
    currency: input.currency,
    issueDate: input.issueDate,
    dueDate: input.dueDate || null,
    notes: input.notes || null,
    items,
  });

  if (!result.ok) {
    const status = result.reason === "Not found" ? 404 : 409;
    return NextResponse.json({ message: result.reason }, { status });
  }
  return NextResponse.json({ ok: true });
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const result = await deleteInvoiceIfDraft(id);
  if (!result.ok) {
    const status = result.reason === "Not found" ? 404 : 409;
    return NextResponse.json({ message: result.reason }, { status });
  }
  return NextResponse.json({ ok: true });
}
