import { NextRequest, NextResponse } from "next/server";
import { addInvoice } from "@/lib/firestore";
import { invoiceSchema } from "@/lib/validations/invoice";
import { generateInvoiceNumber } from "@/lib/invoice-server";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const parsed = invoiceSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { message: "Invalid input", errors: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const { items, ...input } = parsed.data;
  const publicToken = crypto.randomUUID();
  const invoiceNumber = await generateInvoiceNumber();

  const invoice = await addInvoice({
    invoiceNumber,
    publicToken,
    clientId: input.clientId,
    currency: input.currency,
    issueDate: input.issueDate,
    dueDate: input.dueDate || null,
    notes: input.notes || null,
    items,
  });

  return NextResponse.json(invoice, { status: 201 });
}
