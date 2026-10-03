import { NextRequest, NextResponse } from "next/server";
import { deleteAudiobookAudio } from "@/lib/firestore";

export const runtime = "nodejs";

// Removes the generated audiobook; the config and the uploaded EPUB stay, so
// it can be generated again.
export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  try {
    await deleteAudiobookAudio(id);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Delete failed";
    return NextResponse.json({ message }, { status: 500 });
  }
  return NextResponse.json({ ok: true });
}
