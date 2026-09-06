import { NextRequest, NextResponse } from "next/server";
import { deleteClient, getClientById, updateClient } from "@/lib/firestore";
import { clientSchema } from "@/lib/validations/client";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const row = await getClientById(id);
  if (!row) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }
  return NextResponse.json(row);
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const body = await req.json().catch(() => null);
  const parsed = clientSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { message: "Invalid input", errors: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const row = await updateClient(id, parsed.data);
  if (!row) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }
  return NextResponse.json(row);
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const result = await deleteClient(id);
  if (!result.ok) {
    const status = result.reason === "Not found" ? 404 : 409;
    return NextResponse.json({ message: result.reason }, { status });
  }
  return NextResponse.json({ ok: true });
}
