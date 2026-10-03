import { NextRequest, NextResponse } from "next/server";
import { addNotetakerConfig, getNotetakerConfigs } from "@/lib/firestore";
import { notetakerConfigSchema } from "@/lib/validations/notetaker-config";

export async function GET() {
  const rows = await getNotetakerConfigs();
  return NextResponse.json(rows);
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const parsed = notetakerConfigSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { message: "Invalid input", errors: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const row = await addNotetakerConfig(parsed.data);
  return NextResponse.json(row, { status: 201 });
}
