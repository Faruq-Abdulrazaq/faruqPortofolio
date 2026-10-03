"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  courseConfigSchema,
  type CourseConfigFormValues,
} from "@/lib/validations/course-config";
import type { CourseConfig } from "@/types/podcast";
import { Spinner } from "@/components/ui/spinner";
import { ConfirmDialog } from "@/components/admin/confirm-dialog";
import { Trash2 } from "lucide-react";
import { SampleDownload } from "@/components/admin/sample-download";
import { AdvancedConfigFields } from "@/components/admin/advanced-config-fields";

export function CourseConfigForm({ config }: { config?: CourseConfig }) {
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
  } = useForm<CourseConfigFormValues>({
    resolver: zodResolver(courseConfigSchema),
    defaultValues: config
      ? {
          title: config.title,
          subtitle: config.subtitle ?? "",
          slug: config.slug ?? "",
          outcome: config.outcome ?? "",
          defaultsJson: config.defaults ? JSON.stringify(config.defaults, null, 2) : "",
          lessons: config.lessons.map((l) => ({
            title: l.title,
            scriptText: l.scriptText,
            objectives: (l.objectives ?? []).join("\n"),
            challenge: l.challenge ?? "",
            overridesJson: l.overrides ? JSON.stringify(l.overrides, null, 2) : "",
          })),
        }
      : { lessons: [{ title: "", scriptText: "", objectives: "", challenge: "", overridesJson: "" }] },
  });

  const { fields, append, remove } = useFieldArray({ control, name: "lessons" });

  async function onSubmit(values: CourseConfigFormValues) {
    setError("");
    setLoading(true);
    try {
      const url = config ? `/api/admin/course/configs/${config.id}` : "/api/admin/course/configs";
      const res = await fetch(url, {
        method: config ? "PATCH" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(body?.message || "Something went wrong");
      router.push(`/admin/course/${body.id ?? config?.id}`);
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  async function deleteCourse() {
    if (!config) return;
    setError("");
    setDeleting(true);
    try {
      const res = await fetch(`/api/admin/course/configs/${config.id}`, { method: "DELETE" });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.message || "Delete failed");
      }
      router.push("/admin/course");
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
            <label htmlFor="title">Title</label>
            <input id="title" type="text" {...register("title")} />
            {errors.title && <span className="admin-field-error">{errors.title.message}</span>}
          </div>
          <div className="field">
            <label htmlFor="subtitle">Subtitle</label>
            <input id="subtitle" type="text" {...register("subtitle")} />
          </div>
          <div className="field">
            <label htmlFor="slug">Slug (blank = derived from title)</label>
            <input id="slug" type="text" {...register("slug")} />
          </div>
        </div>

        <div className="field" style={{ marginTop: "16px" }}>
          <label htmlFor="outcome">Outcome ("by the end of this course you'll ___")</label>
          <input id="outcome" type="text" {...register("outcome")} />
        </div>

        <div style={{ marginTop: "16px" }}>
          <p style={{ margin: "0 0 8px" }}>
            Shared defaults &mdash; cast/pattern/performance applied to every lesson unless a
            lesson&apos;s own override below changes it.
          </p>
          <Controller
            name="defaultsJson"
            control={control}
            render={({ field }) => (
              <AdvancedConfigFields
                value={field.value ?? ""}
                onChange={field.onChange}
                showFormat={false}
              />
            )}
          />
        </div>

        <h2 style={{ marginTop: "26px" }}>Lessons</h2>
        {fields.map((field, index) => (
          <div key={field.id} className="admin-card" style={{ marginTop: "12px" }}>
            <div className="field-row">
              <div className="field">
                <label htmlFor={`lessons.${index}.title`}>Lesson title</label>
                <input id={`lessons.${index}.title`} type="text" {...register(`lessons.${index}.title`)} />
                {errors.lessons?.[index]?.title && (
                  <span className="admin-field-error">{errors.lessons[index]?.title?.message}</span>
                )}
              </div>
              <div className="field">
                <label htmlFor={`lessons.${index}.challenge`}>Challenge (optional)</label>
                <input
                  id={`lessons.${index}.challenge`}
                  type="text"
                  {...register(`lessons.${index}.challenge`)}
                />
              </div>
            </div>

            <div className="field" style={{ marginTop: "12px" }}>
              <label htmlFor={`lessons.${index}.objectives`}>Objectives (one per line)</label>
              <textarea
                id={`lessons.${index}.objectives`}
                rows={3}
                {...register(`lessons.${index}.objectives`)}
              />
            </div>

            <div className="field" style={{ marginTop: "12px" }}>
              <label htmlFor={`lessons.${index}.scriptText`}>Script</label>
              {index === 0 && (
                <SampleDownload href="/samples/course-lesson-script.txt" label="a sample script" />
              )}
              <textarea
                id={`lessons.${index}.scriptText`}
                rows={10}
                style={{ fontFamily: "monospace" }}
                {...register(`lessons.${index}.scriptText`)}
              />
              {errors.lessons?.[index]?.scriptText && (
                <span className="admin-field-error">
                  {errors.lessons[index]?.scriptText?.message}
                </span>
              )}
            </div>

            <div className="field" style={{ marginTop: "12px" }}>
              <label htmlFor={`lessons.${index}.overridesJson`}>
                Per-lesson overrides (JSON, optional)
              </label>
              <textarea
                id={`lessons.${index}.overridesJson`}
                rows={4}
                style={{ fontFamily: "monospace" }}
                {...register(`lessons.${index}.overridesJson`)}
              />
              {errors.lessons?.[index]?.overridesJson && (
                <span className="admin-field-error">
                  {errors.lessons[index]?.overridesJson?.message}
                </span>
              )}
            </div>

            {fields.length > 1 && (
              <button
                type="button"
                className="btn btn-ghost btn-sm"
                style={{ marginTop: "10px" }}
                onClick={() => remove(index)}
              >
                Remove lesson
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          className="btn btn-ghost btn-sm"
          style={{ marginTop: "12px" }}
          onClick={() =>
            append({ title: "", scriptText: "", objectives: "", challenge: "", overridesJson: "" })
          }
        >
          + Add lesson
        </button>

        <div style={{ marginTop: "22px", display: "flex", gap: "10px" }}>
          <button
            className="btn btn-primary"
            type="submit"
            disabled={loading}
            style={{ opacity: loading ? 0.7 : 1 }}
          >
            {loading && <Spinner />}
            {loading ? "Saving…" : config ? "Save changes" : "Create course"}
          </button>
          <button
            type="button"
            className="btn btn-ghost"
            onClick={() => router.push(config ? `/admin/course/${config.id}` : "/admin/course")}
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
              {deleting ? "Deleting…" : "Delete course"}
            </button>
          )}
        </div>

        {error && <div className="admin-form-error">{error}</div>}
      </form>

      <ConfirmDialog
        open={confirmingDelete}
        onOpenChange={setConfirmingDelete}
        onConfirm={deleteCourse}
        tone="danger"
        icon={<Trash2 size={20} aria-hidden />}
        title="Delete this course?"
        description={
          <>
            <strong>{config?.title}</strong> &mdash; all of its lessons and their audio will be removed
            permanently. This can&apos;t be undone.
          </>
        }
        confirmLabel="Delete course"
      />

    </>
  );
}
