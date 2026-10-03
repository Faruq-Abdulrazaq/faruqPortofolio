import { NextRequest, NextResponse } from "next/server";
import { deleteCourseLessonAudio } from "@/lib/firestore";

export const runtime = "nodejs";

// Removes the audio generated for one lesson; the lesson itself stays, so it
// can be generated again.
export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string; number: string }> },
) {
  const { id, number } = await params;
  try {
    await deleteCourseLessonAudio(id, Number(number));
  } catch (err) {
    const message = err instanceof Error ? err.message : "Delete failed";
    return NextResponse.json({ message }, { status: 500 });
  }
  return NextResponse.json({ ok: true });
}
