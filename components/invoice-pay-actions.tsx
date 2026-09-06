"use client";

import { useState } from "react";
import type { Invoice } from "@/types/invoice";
import { Spinner } from "@/components/ui/spinner";

export function InvoicePayActions({
  token,
  status,
}: {
  token: string;
  status: Invoice["status"];
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handlePay() {
    setError("");
    setLoading(true);
    try {
      const res = await fetch(`/api/invoice/${token}/pay`, { method: "POST" });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(body?.message || "Failed to start payment");
      window.location.href = body.authorization_url;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setLoading(false);
    }
  }

  return (
    <div className="no-print" style={{ marginTop: "28px", textAlign: "center" }}>
      {status === "paid" && (
        <div style={{ color: "#16a34a", fontWeight: 600, fontSize: "15px" }}>
          ✓ This invoice has been paid
        </div>
      )}
      {status === "void" && (
        <div style={{ color: "#6b7280", fontSize: "15px" }}>
          This invoice has been voided.
        </div>
      )}
      {(status === "draft" || status === "sent") && (
        <button
          type="button"
          className="btn btn-primary"
          onClick={handlePay}
          disabled={loading}
        >
          {loading && <Spinner />}
          {loading ? "Redirecting…" : "Pay now"}
        </button>
      )}
      <div style={{ marginTop: "12px" }}>
        <button
          type="button"
          className="btn btn-ghost btn-sm"
          onClick={() => window.print()}
        >
          Print / Save as PDF
        </button>
      </div>
      {error && (
        <div className="admin-form-error" style={{ marginTop: "12px" }}>
          {error}
        </div>
      )}
    </div>
  );
}
