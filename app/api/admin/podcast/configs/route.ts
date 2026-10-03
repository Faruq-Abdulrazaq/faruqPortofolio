import { NextRequest, NextResponse } from "next/server";
import { addPodcastConfig, getPodcastConfigs } from "@/lib/firestore";
import { podcastConfigSchema } from "@/lib/validations/podcast-config";

export async function GET() {
  const rows = await getPodcastConfigs();
  return NextResponse.json(rows);
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const parsed = podcastConfigSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { message: "Invalid input", errors: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const row = await addPodcastConfig(parsed.data);
  return NextResponse.json(row, { status: 201 });
}
