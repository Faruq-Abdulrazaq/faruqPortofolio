import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, company, email, projectType, message } = await req.json();

    if (!name || !email) {
      return NextResponse.json({ message: "Name and email are required." }, { status: 400 });
    }

    const payload = {
      sender: { name: "Portfolio Brief", email: "faruqtayeabdulrazaq@gmail.com" },
      to: [{ email: "faruqtayeabdulrazaq@gmail.com", name: "Faruq Abdulrazaq" }],
      replyTo: { email, name },
      subject: `New brief · ${name}${company ? ` @ ${company}` : ""}`,
      htmlContent: `
        <div style="font-family:'IBM Plex Mono',monospace;background:#0a0c10;color:#f3f4f6;padding:32px;border-radius:10px;max-width:600px;">
          <div style="color:#fb923c;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:24px;">
            ● New Portfolio Brief
          </div>
          <table style="width:100%;border-collapse:collapse;font-size:13px;">
            <tr>
              <td style="padding:10px 0;color:#818a98;width:120px;vertical-align:top;">Name</td>
              <td style="padding:10px 0;">${escapeHtml(name)}</td>
            </tr>
            ${company ? `
            <tr>
              <td style="padding:10px 0;color:#818a98;vertical-align:top;">Company</td>
              <td style="padding:10px 0;">${escapeHtml(company)}</td>
            </tr>` : ""}
            <tr>
              <td style="padding:10px 0;color:#818a98;vertical-align:top;">Email</td>
              <td style="padding:10px 0;"><a href="mailto:${escapeHtml(email)}" style="color:#fb923c;">${escapeHtml(email)}</a></td>
            </tr>
            <tr>
              <td style="padding:10px 0;color:#818a98;vertical-align:top;">Project type</td>
              <td style="padding:10px 0;">${escapeHtml(projectType ?? "—")}</td>
            </tr>
          </table>
          <div style="margin-top:20px;padding-top:20px;border-top:1px solid #1f242e;">
            <div style="color:#818a98;font-size:11px;text-transform:uppercase;letter-spacing:0.06em;margin-bottom:10px;">Brief</div>
            <div style="background:#0f1218;padding:16px;border-radius:6px;border:1px solid #1f242e;white-space:pre-wrap;line-height:1.65;font-size:13px;">${escapeHtml(message ?? "—")}</div>
          </div>
          <div style="margin-top:24px;color:#5b6473;font-size:11px;">Sent from faruqabdulrazaq.dev · Reply to respond directly.</div>
        </div>
      `,
    };

    const brevoRes = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": process.env.NEXT_PUBLIC_BREVOKEY!,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!brevoRes.ok) {
      const err = await brevoRes.json();
      return NextResponse.json(err, { status: brevoRes.status });
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
