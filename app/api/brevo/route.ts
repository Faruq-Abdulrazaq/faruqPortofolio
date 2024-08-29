import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const response = await axios.post(
      "https://api.brevo.com/v3/contacts",
      body,
      {
        headers: {
          "api-key": process.env.NEXT_PUBLIC_BREVOKEY,
          "Content-Type": "application/json",
        },
      }
    );

    return NextResponse.json(response.data, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      {
        message: "Error processing the request",
        details: error.response ? error.response.data : error.message,
      },
      { status: error.response ? error.response.status : 500 }
    );
  }
}
