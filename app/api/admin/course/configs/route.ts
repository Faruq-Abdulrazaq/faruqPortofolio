import { NextRequest, NextResponse } from "next/server";
import { addCourseConfig, getCourseConfigs } from "@/lib/firestore";
import { courseConfigSchema } from "@/lib/validations/course-config";

export async function GET() {
  const rows = await getCourseConfigs();
  return NextResponse.json(rows);
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const parsed = courseConfigSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { message: "Invalid input", errors: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const row = await addCourseConfig(parsed.data);
  return NextResponse.json(row, { status: 201 });
}
