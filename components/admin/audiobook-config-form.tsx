"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  audiobookConfigSchema,
  type AudiobookConfigFormValues,
} from "@/lib/validations/audiobook-config";
import type { AudiobookConfig } from "@/types/podcast";
import { Spinner } from "@/components/ui/spinner";
import { ConfirmDialog } from "@/components/admin/confirm-dialog";
import { Trash2 } from "lucide-react";
import { AudiobookAdvancedFields } from "@/components/admin/audiobook-advanced-fields";

export function AudiobookConfigForm({ config }: { config?: AudiobookConfig }) {
  const router = useRouter();
  const epubRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [confirmingDelete, setConfirmingDelete] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AudiobookConfigFormValues>({
    resolver: zodResolver(audiobookConfigSchema),
    defaultValues: config
      ? {
          title: config.title ?? "",
          author: config.author ?? "",
          slug: config.slug ?? "",
          speed: config.speed ?? "",
          seed: config.seed,
          advancedJson: config.advanced ? JSON.stringify(config.advanced, null, 2) : "",
        }
      : undefined,
  });

  async function onSubmit(values: AudiobookConfigFormValues) {
    setError("");
    const epubFile = epubRef.current?.files?.[0];
    if (!config && !epubFile) {
      setError("Choose an EPUB file first");
      return;
    }
    setLoading(true);
    try {
      const form = new FormData();
      if (values.title) form.set("title", values.title);
      if (values.author) form.set("author", values.author);
      if (values.slug) form.set("slug", values.slug);
      if (values.speed) form.set("speed", values.speed);
      if (values.seed !== undefined) form.set("seed", String(values.seed));
      if (values.advancedJson) form.set("advancedJson", values.advancedJson);
      if (epubFile) form.set("epub", epubFile);

      const url = config ? `/api/admin/audiobook/configs/${config.id}` : "/api/admin/audiobook/configs";
      const res = await fetch(url, { method: config ? "PATCH" : "POST", body: form });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(body?.message || "Something went wrong");
      router.push(`/admin/audiobook/${body.id ?? config?.id}`);
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  async function remove() {
    if (!config) return;
    setError("");
    setDeleting(true);
    try {
      const res = await fetch(`/api/admin/audiobook/configs/${config.id}`, { method: "DELETE" });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.message || "Delete failed");
      }
      router.push("/admin/audiobook");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Delete failed");
      setDeleting(false);
    }
  }

  return (
    <>
      <form className="admin-card" onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="field-row">
          <div className="field">
            <label htmlFor="title">Title (blank = taken from the EPUB)</label>
            <input id="title" type="text" {...register("title")} />
          </div>
          <div className="field">
            <label htmlFor="author">Author (blank = taken from the EPUB)</label>
            <input id="author" type="text" {...register("author")} />
          </div>
        </div>

        <div className="field-row" style={{ marginTop: "16px" }}>
          <div className="field">
            <label htmlFor="slug">Slug (blank = derived from title)</label>
            <input id="slug" type="text" {...register("slug")} />
          </div>
          <div className="field">
            <label htmlFor="speed">Narration speed (e.g. -5%)</label>
            <input id="speed" type="text" {...register("speed")} />
            {errors.speed && <span className="admin-field-error">{errors.speed.message}</span>}
          </div>
          <div className="field">
            <label htmlFor="seed">Seed</label>
            <input id="seed" type="number" {...register("seed")} />
          </div>
        </div>

        <div className="field" style={{ marginTop: "16px" }}>
          <label htmlFor="epub">
            EPUB file{config ? ` (currently: ${config.epubName || "none"}; choose a new one to replace it)` : ""}
          </label>
          <input id="epub" type="file" accept=".epub,application/epub+zip" ref={epubRef} />
          {!config && (
            <span className="sample-download">
              Don&apos;t have one handy?{" "}
              <a href="https://www.gutenberg.org/ebooks/11" target="_blank" rel="noreferrer">
                Download Alice&apos;s Adventures in Wonderland
              </a>{" "}
              (EPUB3) from Project Gutenberg to try it out.
            </span>
          )}
        </div>

        <div style={{ marginTop: "16px" }}>
          <Controller
            name="advancedJson"
            control={control}
            render={({ field }) => (
              <AudiobookAdvancedFields value={field.value ?? ""} onChange={field.onChange} />
            )}
          />
        </div>

        <div style={{ marginTop: "22px", display: "flex", gap: "10px" }}>
          <button
            className="btn btn-primary"
            type="submit"
            disabled={loading}
            style={{ opacity: loading ? 0.7 : 1 }}
          >
            {loading && <Spinner />}
            {loading ? "Saving…" : config ? "Save changes" : "Create config"}
          </button>
          <button
            type="button"
            className="btn btn-ghost"
            onClick={() => router.push(config ? `/admin/audiobook/${config.id}` : "/admin/audiobook")}
          >
            Cancel
          </button>
          {config && (
            <button
              type="button"
              className="btn btn-ghost"
              style={{ marginLeft: "auto" }}
              onClick={() => setConfirmingDelete(true)}
              disabled={loading || deleting}
            >
              {deleting ? "Deleting…" : "Delete audiobook"}
            </button>
          )}
        </div>

        {error && <div className="admin-form-error">{error}</div>}
      </form>

      <ConfirmDialog
        open={confirmingDelete}
        onOpenChange={setConfirmingDelete}
        onConfirm={remove}
        tone="danger"
        icon={<Trash2 size={20} aria-hidden />}
        title="Delete this audiobook?"
        description={
          <>
            <strong>{config?.title || config?.epubName}</strong> &mdash; its settings, uploaded EPUB and
            generated audio will be removed permanently. This can&apos;t be undone.
          </>
        }
        confirmLabel="Delete audiobook"
      />

    </>
  );
}
