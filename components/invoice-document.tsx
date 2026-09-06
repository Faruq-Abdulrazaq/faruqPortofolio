import type { ReactNode } from "react";
import { computeInvoiceTotal, formatCurrency } from "@/lib/invoice";
import type { Client, Invoice, InvoiceItem } from "@/types/invoice";

const STATUS_LABEL: Record<Invoice["status"], string> = {
  draft: "Draft",
  sent: "Awaiting payment",
  paid: "Paid",
  void: "Void",
};

export function InvoiceDocument({
  invoice,
  items,
  client,
  children,
}: {
  invoice: Invoice;
  items: InvoiceItem[];
  client: Client;
  children?: ReactNode;
}) {
  const total = computeInvoiceTotal(items);

  return (
    <div className="invoice-doc">
      <div className="invoice-head">
        <div>
          <div style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.06em", color: "#6b7280" }}>
            Invoice
          </div>
          <h1 style={{ fontSize: "24px", marginTop: "8px" }}>{invoice.invoiceNumber}</h1>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontWeight: 600 }}>Faruq Abdulrazaq</div>
          <div style={{ fontSize: "13px", color: "#6b7280" }}>
            faruqtayeabdulrazaq@gmail.com
          </div>
        </div>
      </div>

      <div className="invoice-parties">
        <div>
          <div style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.05em", color: "#6b7280" }}>
            Billed to
          </div>
          <div style={{ marginTop: "6px", fontWeight: 600 }}>{client.name}</div>
          {client.company && <div style={{ fontSize: "13px" }}>{client.company}</div>}
          <div style={{ fontSize: "13px", color: "#6b7280" }}>{client.email}</div>
          {client.address && (
            <div style={{ fontSize: "13px", color: "#6b7280" }}>{client.address}</div>
          )}
        </div>
        <div style={{ textAlign: "right", fontSize: "13px" }}>
          <div>
            <strong>Issue date:</strong> {invoice.issueDate}
          </div>
          {invoice.dueDate && (
            <div>
              <strong>Due date:</strong> {invoice.dueDate}
            </div>
          )}
          <div>
            <strong>Status:</strong> {STATUS_LABEL[invoice.status]}
          </div>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th style={{ textAlign: "right" }}>Qty</th>
            <th style={{ textAlign: "right" }}>Unit price</th>
            <th style={{ textAlign: "right" }}>Amount</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.description}</td>
              <td style={{ textAlign: "right" }}>{item.quantity}</td>
              <td style={{ textAlign: "right" }}>
                {formatCurrency(Number(item.unitPrice), invoice.currency)}
              </td>
              <td style={{ textAlign: "right" }}>
                {formatCurrency(
                  Number(item.quantity) * Number(item.unitPrice),
                  invoice.currency,
                )}
              </td>
            </tr>
          ))}
          <tr className="invoice-total-row">
            <td colSpan={3} style={{ textAlign: "right" }}>
              Total
            </td>
            <td style={{ textAlign: "right" }}>
              {formatCurrency(total, invoice.currency)}
            </td>
          </tr>
        </tbody>
      </table>

      {invoice.notes && (
        <div style={{ marginTop: "24px", fontSize: "13px", color: "#4b5563" }}>
          <strong>Notes:</strong> {invoice.notes}
        </div>
      )}

      {children}
    </div>
  );
}
