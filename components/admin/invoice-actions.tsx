"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Spinner } from "@/components/ui/spinner";
import type { Invoice } from "@/types/invoice";

export function InvoiceActions({
  invoice,
  payUrl,
}: {
  invoice: Invoice;
  payUrl: string;
}) {
  const router = useRouter();
  const [busy, setBusy] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  async function run(action: string, path: string) {
    setError("");
    setBusy(action);
    try {
      const res = await fetch(path, { method: "POST" });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.message || "Something went wrong");
      }
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setBusy(null);
    }
  }

  async function handleDelete() {
    setError("");
    setBusy("delete");
    try {
      const res = await fetch(`/api/admin/invoices/${invoice.id}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.message || "Something went wrong");
      }
      router.push("/admin/invoices");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setBusy(null);
    }
  }

  async function copyPayLink() {
    await navigator.clipboard.writeText(payUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="admin-card" style={{ marginTop: "20px" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {invoice.status === "draft" && (
          <>
            <Link
              href={`/admin/invoices/${invoice.id}/edit`}
              className="btn btn-sm btn-ghost"
            >
              Edit
            </Link>
            <button
              type="button"
              className="btn btn-sm btn-primary"
              disabled={busy !== null}
              onClick={() => run("send", `/api/admin/invoices/${invoice.id}/send`)}
            >
              {busy === "send" && <Spinner />}
              {busy === "send" ? "Sending…" : "Mark as sent (emails client)"}
            </button>
            <Dialog>
              <DialogTrigger asChild>
                <button
                  type="button"
                  className="btn btn-sm btn-ghost"
                  disabled={busy !== null}
                >
                  Delete
                </button>
              </DialogTrigger>
              <DialogContent className="border-[var(--border)]">
                <DialogHeader>
                  <DialogTitle>Delete this draft invoice?</DialogTitle>
                </DialogHeader>
                <p style={{ fontSize: "14px", color: "var(--text-3)" }}>
                  This cannot be undone.
                </p>
                <DialogFooter>
                  <DialogClose asChild>
                    <button type="button" className="btn btn-sm btn-ghost">
                      Cancel
                    </button>
                  </DialogClose>
                  <button
                    type="button"
                    className="btn btn-sm btn-primary"
                    onClick={handleDelete}
                    disabled={busy !== null}
                  >
                    {busy === "delete" && <Spinner />}
                    {busy === "delete" ? "Deleting…" : "Delete"}
                  </button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </>
        )}

        {invoice.status === "sent" && (
          <button
            type="button"
            className="btn btn-sm btn-primary"
            disabled={busy !== null}
            onClick={() =>
              run("mark-paid", `/api/admin/invoices/${invoice.id}/mark-paid`)
            }
          >
            {busy === "mark-paid" && <Spinner />}
            {busy === "mark-paid" ? "Marking…" : "Mark paid manually"}
          </button>
        )}

        {invoice.status !== "draft" && (
          <button
            type="button"
            className="btn btn-sm btn-ghost"
            onClick={copyPayLink}
          >
            {copied ? "Copied!" : "Copy pay link"}
          </button>
        )}
      </div>

      {error && <div className="admin-form-error">{error}</div>}
    </div>
  );
}
