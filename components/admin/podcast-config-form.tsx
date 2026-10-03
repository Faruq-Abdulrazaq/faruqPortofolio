"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  podcastConfigSchema,
  type PodcastConfigFormValues,
} from "@/lib/validations/podcast-config";
import type { PodcastConfig } from "@/types/podcast";
import { Spinner } from "@/components/ui/spinner";
import { AdvancedConfigFields } from "@/components/admin/advanced-config-fields";
import { ConfirmDialog } from "@/components/admin/confirm-dialog";
import { Trash2 } from "lucide-react";

/** A podcast's shared settings: name, voices, pacing, pronunciations. The
 * scripts themselves are written per episode, on the podcast's own page. */
export function PodcastConfigForm({ config }: { config?: PodcastConfig }) {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [confirmingDelete, setConfirmingDelete] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<PodcastConfigFormValues>({
    resolver: zodResolver(podcastConfigSchema),
    defaultValues: config
      ? {
          title: config.title,
          speed: config.speed ?? "",
          seed: config.seed,
          advancedJson: config.advanced ? JSON.stringify(config.advanced, null, 2) : "",
        }
      : undefined,
  });

  async function onSubmit(values: PodcastConfigFormValues) {
    setError("");
    setLoading(true);
    try {
      const url = config
        ? `/api/admin/podcast/configs/${config.id}`
        : "/api/admin/podcast/configs";
      const res = await fetch(url, {
        method: config ? "PATCH" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(body?.message || "Something went wrong");
      // A new podcast has no episodes yet -- go straight to its page to add one.
      router.push(`/admin/podcast/${body.id ?? config?.id}`);
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
      const res = await fetch(`/api/admin/podcast/configs/${config.id}`, { method: "DELETE" });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.message || "Delete failed");
      }
      router.push("/admin/podcast");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Delete failed");
      setDeleting(false);
    }
  }

  return (
    <form className="admin-card" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="field-row">
        <div className="field">
          <label htmlFor="title">Podcast name</label>
          <input id="title" type="text" {...register("title")} />
          {errors.title && <span className="admin-field-error">{errors.title.message}</span>}
        </div>
        <div className="field">
          <label htmlFor="speed">Speaking speed (e.g. +10%, blank = normal)</label>
          <input id="speed" type="text" {...register("speed")} />
          {errors.speed && <span className="admin-field-error">{errors.speed.message}</span>}
        </div>
        <div className="field">
          <label htmlFor="seed">Seed (same seed = same voices every time)</label>
          <input id="seed" type="number" {...register("seed")} />
        </div>
      </div>

      <p className="sample-download" style={{ marginTop: "12px" }}>
        These settings are shared by every episode of this podcast. Each episode has its own script.
      </p>

      <div style={{ marginTop: "16px" }}>
        <Controller
          name="advancedJson"
          control={control}
          render={({ field }) => (
            <AdvancedConfigFields value={field.value ?? ""} onChange={field.onChange} />
          )}
        />
      </div>

      <div style={{ marginTop: "22px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <button
          className="btn btn-primary"
          type="submit"
          disabled={loading || deleting}
          style={{ opacity: loading ? 0.7 : 1 }}
        >
          {loading && <Spinner />}
          {loading ? "Saving…" : config ? "Save changes" : "Create podcast"}
        </button>
        <button
          type="button"
          className="btn btn-ghost"
          onClick={() => router.push(config ? `/admin/podcast/${config.id}` : "/admin/podcast")}
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
            {deleting ? "Deleting…" : "Delete podcast"}
          </button>
        )}
        {config && (
          <ConfirmDialog
            open={confirmingDelete}
            onOpenChange={setConfirmingDelete}
            onConfirm={remove}
            tone="danger"
            icon={<Trash2 size={20} aria-hidden />}
            title="Delete this podcast?"
            description={
              <>
                <strong>{config.title}</strong> and <strong>all of its episodes and audio</strong> will be removed
                permanently. This can&apos;t be undone.
              </>
            }
            confirmLabel="Delete podcast"
          />
        )}
      </div>

      {error && <div className="admin-form-error">{error}</div>}
    </form>
  );
}
