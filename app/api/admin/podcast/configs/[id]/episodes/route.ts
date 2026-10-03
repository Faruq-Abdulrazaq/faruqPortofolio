import { NextRequest, NextResponse } from "next/server";
import { addPodcastEpisode, getPodcastConfigById } from "@/lib/firestore";
import { podcastEpisodeSchema } from "@/lib/validations/podcast-episode";

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  if (!(await getPodcastConfigById(id))) {
    return NextResponse.json({ message: "Podcast not found" }, { status: 404 });
  }

  const body = await req.json().catch(() => null);
  const parsed = podcastEpisodeSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { message: "Invalid input", errors: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const row = await addPodcastEpisode(id, parsed.data);
  return NextResponse.json(row, { status: 201 });
}
