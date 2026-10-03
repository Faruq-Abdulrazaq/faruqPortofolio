"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  podcastEpisodeSchema,
  type PodcastEpisodeFormValues,
} from "@/lib/validations/podcast-episode";
import type { PodcastEpisodeDoc } from "@/types/podcast";
import { Spinner } from "@/components/ui/spinner";
import { SampleDownload } from "@/components/admin/sample-download";

/** One episode's script, plus the few things that differ per episode. */
export function PodcastEpisodeForm({
  podcastId,
  episode,
  suggestedNumber,
}: {
  podcastId: string;
  episode?: PodcastEpisodeDoc;
  suggestedNumber?: number;
}) {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const backTo = `/admin/podcast/${podcastId}`;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PodcastEpisodeFormValues>({
    resolver: zodResolver(podcastEpisodeSchema),
    defaultValues: episode
      ? {
          title: episode.title,
          number: episode.number,
          slug: episode.slug,
          scriptText: episode.scriptText,
          hook: episode.hook ?? "",
          teaser: episode.teaser ?? "",
          cta: episode.cta ?? "",
        }
      : { number: suggestedNumber },
  });

  async function onSubmit(values: PodcastEpisodeFormValues) {
    setError("");
    setLoading(true);
    try {
      const base = `/api/admin/podcast/configs/${podcastId}/episodes`;
      const res = await fetch(episode ? `${base}/${episode.id}` : base, {
        method: episode ? "PATCH" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.message || "Something went wrong");
      }
      router.push(backTo);
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
          <label htmlFor="title">Episode title</label>
          <input id="title" type="text" {...register("title")} />
          {errors.title && <span className="admin-field-error">{errors.title.message}</span>}
        </div>
        <div className="field">
          <label htmlFor="number">Episode number</label>
          <input id="number" type="number" {...register("number")} />
        </div>
        <div className="field">
          <label htmlFor="slug">Slug (blank = made from the title)</label>
          <input id="slug" type="text" {...register("slug")} />
        </div>
      </div>

      <div className="field" style={{ marginTop: "16px" }}>
        <label htmlFor="scriptText">Script</label>
        <SampleDownload href="/samples/podcast-script.txt" label="a sample script" />
        <textarea
          id="scriptText"
          rows={18}
          style={{ fontFamily: "monospace" }}
          placeholder={'MAYA: Hello there.\n\nDEV: Hi Maya.'}
          {...register("scriptText")}
        />
        {errors.scriptText && (
          <span className="admin-field-error">{errors.scriptText.message}</span>
        )}
      </div>

      <h3 style={{ marginTop: "22px", fontSize: "13px" }}>Just for this episode (all optional)</h3>
      <div className="field" style={{ marginTop: "10px" }}>
        <label htmlFor="hook">Hook &mdash; a line spoken before the welcome</label>
        <input id="hook" type="text" {...register("hook")} />
      </div>
      <div className="field-row" style={{ marginTop: "12px" }}>
        <div className="field">
          <label htmlFor="teaser">Teaser for the next episode</label>
          <input id="teaser" type="text" {...register("teaser")} />
        </div>
        <div className="field">
          <label htmlFor="cta">Call to action at the end</label>
          <input id="cta" type="text" {...register("cta")} />
        </div>
      </div>

      <div style={{ marginTop: "22px", display: "flex", gap: "10px" }}>
        <button
          className="btn btn-primary"
          type="submit"
          disabled={loading}
          style={{ opacity: loading ? 0.7 : 1 }}
        >
          {loading && <Spinner />}
          {loading ? "Saving…" : episode ? "Save episode" : "Add episode"}
        </button>
        <button type="button" className="btn btn-ghost" onClick={() => router.push(backTo)}>
          Cancel
        </button>
      </div>

      {error && <div className="admin-form-error">{error}</div>}
    </form>
  );
}
