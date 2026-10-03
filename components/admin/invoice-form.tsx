"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  invoiceSchema,
  type InvoiceFormValues,
} from "@/lib/validations/invoice";
import { computeInvoiceTotal, formatCurrency } from "@/lib/invoice";
import type { Client, Invoice, InvoiceItem } from "@/types/invoice";
import { Spinner } from "@/components/ui/spinner";

const CURRENCIES = ["NGN", "USD", "GHS", "ZAR"];

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

export function InvoiceForm({
  clients,
  invoice,
  items,
}: {
  clients: Client[];
  invoice?: Invoice;
  items?: InvoiceItem[];
}) {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<InvoiceFormValues>({
    resolver: zodResolver(invoiceSchema),
    defaultValues: invoice
      ? {
          clientId: invoice.clientId,
          currency: invoice.currency,
          issueDate: invoice.issueDate,
          dueDate: invoice.dueDate ?? "",
          notes: invoice.notes ?? "",
          items: (items ?? []).map((item) => ({
            description: item.description,
            quantity: Number(item.quantity),
            unitPrice: Number(item.unitPrice),
          })),
        }
      : {
          clientId: "",
          currency: "NGN",
          issueDate: todayISO(),
          dueDate: "",
          notes: "",
          items: [{ description: "", quantity: 1, unitPrice: 0 }],
        },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });

  const watchedItems = watch("items");
  const watchedCurrency = watch("currency");
  const total = computeInvoiceTotal(
    (watchedItems ?? []).map((item) => ({
      quantity: item.quantity || 0,
      unitPrice: item.unitPrice || 0,
    })),
  );

  async function onSubmit(values: InvoiceFormValues) {
    setError("");
    setLoading(true);
    try {
      const url = invoice
        ? `/api/admin/invoices/${invoice.id}`
        : "/api/admin/invoices";
      const res = await fetch(url, {
        method: invoice ? "PATCH" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.message || "Something went wrong");
      }
      const saved = invoice ? invoice : await res.json();
      router.push(`/admin/invoices/${saved.id}`);
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="admin-card" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="field-row">
        <div className="field">
          <label htmlFor="clientId">Client</label>
          <select id="clientId" {...register("clientId")}>
            <option value="">Select a client…</option>
            {clients.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
          {errors.clientId && (
            <span className="admin-field-error">{errors.clientId.message}</span>
          )}
        </div>
        <div className="field">
          <label htmlFor="currency">Currency</label>
          <select id="currency" {...register("currency")}>
            {CURRENCIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="field-row" style={{ marginTop: "16px" }}>
        <div className="field">
          <label htmlFor="issueDate">Issue date</label>
          <input id="issueDate" type="date" {...register("issueDate")} />
          {errors.issueDate && (
            <span className="admin-field-error">{errors.issueDate.message}</span>
          )}
        </div>
        <div className="field">
          <label htmlFor="dueDate">Due date</label>
          <input id="dueDate" type="date" {...register("dueDate")} />
        </div>
      </div>

      <div style={{ marginTop: "24px" }}>
        <label style={{ fontFamily: "var(--mono)", fontSize: "12px", color: "var(--text-3)", textTransform: "uppercase" }}>
          Line items
        </label>
        <div className="admin-table-wrap line-items" style={{ marginTop: "10px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={{ textAlign: "left", padding: "10px 12px", fontSize: "11px", color: "var(--text-3)", fontFamily: "var(--mono)" }}>
                  Description
                </th>
                <th style={{ textAlign: "right", padding: "10px 12px", fontSize: "11px", color: "var(--text-3)", fontFamily: "var(--mono)", width: "100px" }}>
                  Qty
                </th>
                <th style={{ textAlign: "right", padding: "10px 12px", fontSize: "11px", color: "var(--text-3)", fontFamily: "var(--mono)", width: "140px" }}>
                  Unit price
                </th>
                <th style={{ width: "48px" }} />
              </tr>
            </thead>
            <tbody>
              {fields.map((field, index) => (
                <tr key={field.id} style={{ borderTop: "1px solid var(--border)" }}>
                  <td style={{ padding: "8px 12px" }}>
                    <input
                      type="text"
                      placeholder="Service description"
                      {...register(`items.${index}.description` as const)}
                    />
                  </td>
                  <td style={{ padding: "8px 12px" }}>
                    <input
                      type="number"
                      step="any"
                      min="0"
                      style={{ textAlign: "right" }}
                      {...register(`items.${index}.quantity` as const)}
                    />
                  </td>
                  <td style={{ padding: "8px 12px" }}>
                    <input
                      type="number"
                      step="any"
                      min="0"
                      style={{ textAlign: "right" }}
                      {...register(`items.${index}.unitPrice` as const)}
                    />
                  </td>
                  <td style={{ padding: "8px 12px", textAlign: "center" }}>
                    <button
                      type="button"
                      className="btn btn-sm btn-ghost"
                      onClick={() => remove(index)}
                      disabled={fields.length === 1}
                      aria-label="Remove item"
                    >
                      ×
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {errors.items?.message && (
          <div className="admin-field-error" style={{ marginTop: "8px" }}>
            {errors.items.message}
          </div>
        )}

        <button
          type="button"
          className="btn btn-sm btn-ghost"
          style={{ marginTop: "10px" }}
          onClick={() => append({ description: "", quantity: 1, unitPrice: 0 })}
        >
          + Add item
        </button>

        <div style={{ marginTop: "14px", textAlign: "right", fontSize: "18px", fontWeight: 600 }}>
          Total: {formatCurrency(total, watchedCurrency || "NGN")}
        </div>
      </div>

      <div className="field" style={{ marginTop: "20px" }}>
        <label htmlFor="notes">Notes</label>
        <textarea id="notes" rows={3} {...register("notes")} />
      </div>

      <div style={{ marginTop: "22px", display: "flex", gap: "10px" }}>
        <button
          className="btn btn-primary"
          type="submit"
          disabled={loading}
          style={{ opacity: loading ? 0.7 : 1 }}
        >
          {loading && <Spinner />}
          {loading ? "Saving…" : invoice ? "Save changes" : "Create invoice"}
        </button>
        <button
          type="button"
          className="btn btn-ghost"
          onClick={() => router.back()}
        >
          Cancel
        </button>
      </div>

      {error && <div className="admin-form-error">{error}</div>}
    </form>
  );
}
