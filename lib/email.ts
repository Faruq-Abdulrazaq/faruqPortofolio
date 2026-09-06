import { SITE_URL } from "@/lib/site";
import { formatCurrency } from "@/lib/invoice";
import type { InvoiceItem } from "@/types/invoice";

const SITE_HOST = new URL(SITE_URL).host;

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function sendBrevoEmail(payload: {
  to: { email: string; name?: string }[];
  subject: string;
  htmlContent: string;
  replyTo?: { email: string; name?: string };
}): Promise<void> {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) throw new Error("BREVO_API_KEY is not set");

  const res = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      sender: {
        name: "Faruq Abdulrazaq",
        email: "faruqtayeabdulrazaq@gmail.com",
      },
      ...payload,
    }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err?.message || `Brevo error ${res.status}`);
  }
}

function formatDateLong(iso: string): string {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export async function sendInvoiceEmail({
  clientEmail,
  clientName,
  clientCompany,
  invoiceNumber,
  issueDate,
  dueDate,
  currency,
  items,
  totalFormatted,
  notes,
  payUrl,
}: {
  clientEmail: string;
  clientName: string;
  clientCompany?: string;
  invoiceNumber: string;
  issueDate: string;
  dueDate: string | null;
  currency: string;
  items: InvoiceItem[];
  totalFormatted: string;
  notes?: string;
  payUrl: string;
}): Promise<void> {
  const itemRows = items
    .map((item) => {
      const amount = Number(item.quantity) * Number(item.unitPrice);
      return `
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid #1f242e;font-size:13px;color:#e5e7eb;">${escapeHtml(item.description)}</td>
          <td style="padding:10px 0;border-bottom:1px solid #1f242e;font-size:13px;color:#9ca3af;text-align:right;">${item.quantity}</td>
          <td style="padding:10px 0;border-bottom:1px solid #1f242e;font-size:13px;color:#9ca3af;text-align:right;">${escapeHtml(formatCurrency(Number(item.unitPrice), currency))}</td>
          <td style="padding:10px 0;border-bottom:1px solid #1f242e;font-size:13px;color:#e5e7eb;text-align:right;">${escapeHtml(formatCurrency(amount, currency))}</td>
        </tr>
      `;
    })
    .join("");

  const html = `
    <div style="font-family:'IBM Plex Mono',monospace;background:#0a0c10;color:#f3f4f6;padding:32px;border-radius:10px;max-width:600px;">
      <div style="color:#fb923c;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:24px;">
        ● Invoice ${escapeHtml(invoiceNumber)}
      </div>
      <p style="font-size:14px;line-height:1.6;">Hi ${escapeHtml(clientName)},</p>
      <p style="font-size:14px;line-height:1.6;">
        Invoice <strong>${escapeHtml(invoiceNumber)}</strong> for <strong>${escapeHtml(totalFormatted)}</strong>${
          dueDate ? ` (due ${escapeHtml(formatDateLong(dueDate))})` : ""
        } is ready to view and pay. Details below.
      </p>

      <table style="width:100%;border-collapse:collapse;margin:20px 0;font-size:12.5px;color:#9ca3af;">
        <tr>
          <td style="padding:4px 0;">Billed to</td>
          <td style="padding:4px 0;text-align:right;color:#e5e7eb;">
            ${escapeHtml(clientName)}${clientCompany ? ` · ${escapeHtml(clientCompany)}` : ""}
          </td>
        </tr>
        <tr>
          <td style="padding:4px 0;">Issue date</td>
          <td style="padding:4px 0;text-align:right;color:#e5e7eb;">${escapeHtml(formatDateLong(issueDate))}</td>
        </tr>
        <tr>
          <td style="padding:4px 0;">Due date</td>
          <td style="padding:4px 0;text-align:right;color:#e5e7eb;">${dueDate ? escapeHtml(formatDateLong(dueDate)) : "—"}</td>
        </tr>
      </table>

      <table style="width:100%;border-collapse:collapse;">
        <thead>
          <tr>
            <th style="padding:0 0 8px;border-bottom:1px solid #2a313e;font-size:11px;color:#818a98;text-transform:uppercase;letter-spacing:0.04em;text-align:left;">Description</th>
            <th style="padding:0 0 8px;border-bottom:1px solid #2a313e;font-size:11px;color:#818a98;text-transform:uppercase;letter-spacing:0.04em;text-align:right;">Qty</th>
            <th style="padding:0 0 8px;border-bottom:1px solid #2a313e;font-size:11px;color:#818a98;text-transform:uppercase;letter-spacing:0.04em;text-align:right;">Unit price</th>
            <th style="padding:0 0 8px;border-bottom:1px solid #2a313e;font-size:11px;color:#818a98;text-transform:uppercase;letter-spacing:0.04em;text-align:right;">Amount</th>
          </tr>
        </thead>
        <tbody>
          ${itemRows}
          <tr>
            <td colspan="3" style="padding:12px 0 0;text-align:right;font-size:14px;font-weight:600;color:#f3f4f6;">Total</td>
            <td style="padding:12px 0 0;text-align:right;font-size:14px;font-weight:600;color:#fb923c;">${escapeHtml(totalFormatted)}</td>
          </tr>
        </tbody>
      </table>

      ${
        notes
          ? `<p style="margin-top:20px;padding:12px 14px;background:#141821;border:1px solid #1f242e;border-radius:8px;font-size:12.5px;color:#9ca3af;">
              <strong style="color:#e5e7eb;">Notes:</strong> ${escapeHtml(notes)}
            </p>`
          : ""
      }

      <div style="margin:28px 0;">
        <a href="${payUrl}" style="background:#fb923c;color:#0a0c10;padding:12px 20px;border-radius:8px;text-decoration:none;font-weight:600;display:inline-block;">
          View &amp; pay invoice
        </a>
      </div>
      <div style="margin-top:24px;color:#5b6473;font-size:11px;">Sent from ${SITE_HOST}</div>
    </div>
  `;

  await sendBrevoEmail({
    to: [{ email: clientEmail, name: clientName }],
    subject: `Invoice ${invoiceNumber} from Faruq Abdulrazaq`,
    htmlContent: html,
    replyTo: {
      email: "faruqtayeabdulrazaq@gmail.com",
      name: "Faruq Abdulrazaq",
    },
  });
}
