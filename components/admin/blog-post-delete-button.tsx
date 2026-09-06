"use client";

import { useState } from "react";
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

export function BlogPostDeleteButton({ id, title }: { id: string; title: string }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function handleDelete() {
    setError("");
    setBusy(true);
    try {
      const res = await fetch(`/api/admin/blogs/${id}`, { method: "DELETE" });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.message || "Something went wrong");
      }
      router.push("/admin/blogs");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setBusy(false);
    }
  }

  return (
    <div style={{ marginTop: "16px" }}>
      <Dialog>
        <DialogTrigger asChild>
          <button type="button" className="btn btn-sm btn-ghost" disabled={busy}>
            Delete post
          </button>
        </DialogTrigger>
        <DialogContent className="border-[var(--border)]">
          <DialogHeader>
            <DialogTitle>Delete "{title}"?</DialogTitle>
          </DialogHeader>
          <p style={{ fontSize: "14px", color: "var(--text-3)" }}>
            This cannot be undone — the post will disappear from the public blog
            immediately.
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
              disabled={busy}
            >
              {busy && <Spinner />}
              {busy ? "Deleting…" : "Delete"}
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      {error && <div className="admin-form-error">{error}</div>}
    </div>
  );
}
