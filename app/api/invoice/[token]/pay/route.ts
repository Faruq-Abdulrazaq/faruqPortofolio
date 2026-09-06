import { NextRequest, NextResponse } from "next/server";
import {
  getClientById,
  getInvoiceByToken,
  setInvoicePaystackReference,
} from "@/lib/firestore";
import { computeInvoiceTotal } from "@/lib/invoice";
import { initializePaystackTransaction } from "@/lib/payments";
import { SITE_URL } from "@/lib/site";

export async function POST(
  _req: NextRequest,
  { params }: { params: Promise<{ token: string }> },
) {
  const { token } = await params;
  const invoice = await getInvoiceByToken(token);
  if (!invoice) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }
  if (invoice.status === "paid") {
    return NextResponse.json(
      { message: "This invoice is already paid" },
      { status: 409 },
    );
  }
  if (invoice.status === "void") {
    return NextResponse.json({ message: "This invoice is void" }, { status: 409 });
  }

  const client = await getClientById(invoice.clientId);
  if (!client) {
    return NextResponse.json({ message: "Client not found" }, { status: 404 });
  }

  const total = computeInvoiceTotal(invoice.items);
  // Paystack expects amounts in the smallest currency unit (kobo, pesewas,
  // cents) for every currency it supports — integer math, not a float
  // assumption on the decimal total.
  const amountInSmallestUnit = Math.round(total * 100);
  const reference = `${invoice.invoiceNumber}-${Date.now()}`;

  try {
    const { authorization_url } = await initializePaystackTransaction({
      email: client.email,
      amountInSmallestUnit,
      currency: invoice.currency,
      reference,
      callbackUrl: `${SITE_URL}/invoice/${token}/callback`,
    });

    await setInvoicePaystackReference(invoice.id, reference);

    return NextResponse.json({ authorization_url });
  } catch (err) {
    return NextResponse.json(
      { message: err instanceof Error ? err.message : "Failed to start payment" },
      { status: 502 },
    );
  }
}
