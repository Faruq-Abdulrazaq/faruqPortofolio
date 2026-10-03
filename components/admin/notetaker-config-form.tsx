"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  notetakerConfigSchema,
  type NotetakerConfigFormValues,
} from "@/lib/validations/notetaker-config";
import type { NotetakerConfig } from "@/types/podcast";
import { Spinner } from "@/components/ui/spinner";
import { SampleDownload } from "@/components/admin/sample-download";

const DEFAULT_PROMPT = `You are taking notes on a recorded conversation for someone who was not present. Read the speaker-labelled transcript and produce, in Markdown:

## Overview
A short paragraph on what the conversation was about.

## Key Points
A bulleted list of the substantive points made, attributed to a speaker where it matters.

## Action Items
A bulleted list of anything anyone committed to do, or 'None' if there weren't any.`;

export function NotetakerConfigForm({ config }: { config?: NotetakerConfig }) {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NotetakerConfigFormValues>({
    resolver: zodResolver(notetakerConfigSchema),
    defaultValues: config
      ? {
          name: config.name,
          promptTemplate: config.promptTemplate,
          expectedSpeakers: config.expectedSpeakers,
          language: config.language ?? "",
        }
      : { promptTemplate: DEFAULT_PROMPT },
  });

  async function onSubmit(values: NotetakerConfigFormValues) {
    setError("");
    setLoading(true);
    try {
      const url = config
        ? `/api/admin/notetaker/configs/${config.id}`
        : "/api/admin/notetaker/configs";
      const res = await fetch(url, {
        method: config ? "PATCH" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.message || "Something went wrong");
      }
      router.push("/admin/notetaker/configs");
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
          <label htmlFor="name">Name</label>
          <input id="name" type="text" {...register("name")} />
          {errors.name && <span className="admin-field-error">{errors.name.message}</span>}
        </div>
        <div className="field">
          <label htmlFor="expectedSpeakers">Expected speakers</label>
          <input id="expectedSpeakers" type="number" {...register("expectedSpeakers")} />
        </div>
        <div className="field">
          <label htmlFor="language">Language (optional)</label>
          <input id="language" type="text" placeholder="en" {...register("language")} />
        </div>
      </div>

      <div className="field" style={{ marginTop: "16px" }}>
        <label htmlFor="promptTemplate">Summarization prompt</label>
        <SampleDownload href="/samples/notetaker-prompt.txt" label="a sample prompt" />
        <textarea
          id="promptTemplate"
          rows={14}
          style={{ fontFamily: "monospace" }}
          {...register("promptTemplate")}
        />
        {errors.promptTemplate && (
          <span className="admin-field-error">{errors.promptTemplate.message}</span>
        )}
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
          onClick={() => router.push("/admin/notetaker/configs")}
        >
          Cancel
        </button>
      </div>

      {error && <div className="admin-form-error">{error}</div>}
    </form>
  );
}
