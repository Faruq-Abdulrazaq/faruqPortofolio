import { NextRequest, NextResponse } from "next/server";
import { getJob } from "@/lib/firestore";

// Reads the job doc straight from Firestore -- the admin polls this, not
// the FastAPI service, so a finished result is visible even if that
// service isn't running anymore.
export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const job = await getJob(id);
  if (!job) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }
  return NextResponse.json(job);
}
