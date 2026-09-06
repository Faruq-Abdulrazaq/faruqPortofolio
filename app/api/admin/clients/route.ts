import { NextRequest, NextResponse } from "next/server";
import { addClient, getClients } from "@/lib/firestore";
import { clientSchema } from "@/lib/validations/client";

export async function GET() {
  const rows = await getClients();
  return NextResponse.json(rows);
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const parsed = clientSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { message: "Invalid input", errors: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const row = await addClient(parsed.data);
  return NextResponse.json(row, { status: 201 });
}
