import { NextRequest, NextResponse } from "next/server";
import { markInvoicePaid } from "@/lib/payments";

export async function POST(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const marked = await markInvoicePaid({ invoiceId: id, source: "manual" });
  if (!marked) {
    return NextResponse.json(
      { message: "Invoice not found or already paid" },
      { status: 409 },
    );
  }
  return NextResponse.json({ ok: true });
}
