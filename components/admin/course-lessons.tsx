"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FileText, Pause, Play, RefreshCw, Share2, Sparkles, Trash2 } from "lucide-react";
import type { CourseLessonView, CourseView } from "@/types/podcast";
import { Spinner } from "@/components/ui/spinner";
import { shareLink } from "@/lib/share-link";
import { useJobTracker } from "@/components/admin/use-job-tracker";
import { ConfirmDialog } from "@/components/admin/confirm-dialog";

/** A course's lessons, each with play / share / regenerate / delete-audio.
 * Lessons themselves are edited in the course settings. */
export function CourseLessons({ courseId, view }: { courseId: string; view: CourseView }) {
  const router = useRouter();
  // Which lesson each running job is for (null = the whole course).
  const [jobLesson, setJobLesson] = useState<Record<string, number | null>>(
    Object.fromEntries(view.active.map((a) => [a.jobId, a.lesson])),
  );
  const [message, setMessage] = useState<{ kind: "ok" | "error"; text: string } | null>(null);
  const [playing, setPlaying] = useState<number | null>(null);
  const [deleting, setDeleting] = useState<number | null>(null);
  const [confirming, setConfirming] = useState<
    { kind: "regenerate" | "delete"; lesson: CourseLessonView } | { kind: "all"; lesson?: undefined } | null
  >(null);

  const tracker = useJobTracker(
    "/api/admin/course/jobs",
    view.active.map((a) => a.jobId),
    (job) => {
      setMessage(
        job.status === "error"
          ? { kind: "error", text: `Generation failed: ${job.error ?? "unknown error"}` }
          : { kind: "ok", text: "Done." },
      );
      router.refresh();
    },
  );

  const busyAll = tracker.ids.some((id) => jobLesson[id] === null);
  const busyLesson = (n: number) => tracker.ids.some((id) => jobLesson[id] === null || jobLesson[id] === n);

  async function generate(lesson: number | null) {
    setMessage(null);
    try {
      const res = await fetch("/api/admin/course/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ configId: courseId, lesson: lesson ?? undefined }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.message || "Could not start generation");
      setJobLesson((cur) => ({ ...cur, [data.jobId]: lesson }));
      tracker.track(data.jobId);
    } catch (err) {
      setMessage({ kind: "error", text: err instanceof Error ? err.message : "Could not start generation" });
    }
  }

  async function remove(lesson: CourseLessonView) {
    setMessage(null);
    setDeleting(lesson.number);
    try {
      const res = await fetch(`/api/admin/course/configs/${courseId}/lessons/${lesson.number}/audio`, {
        method: "DELETE",
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.message || "Delete failed");
      }
      router.refresh();
    } catch (err) {
      setMessage({ kind: "error", text: err instanceof Error ? err.message : "Delete failed" });
    } finally {
      setDeleting(null);
    }
  }

  async function share(lesson: CourseLessonView) {
    if (!lesson.audio) return;
    const result = await shareLink(lesson.title, lesson.audio.audioUrl);
    if (result === "copied") setMessage({ kind: "ok", text: "Link copied." });
  }

  return (
    <>
      <div className="episodes-bar">
        <h2>Lessons</h2>
        <div className="episode-actions">
          {view.syllabusUrl && (
            <a href={view.syllabusUrl} target="_blank" rel="noreferrer" className="btn btn-ghost btn-sm">
              <FileText size={14} aria-hidden />
              Syllabus
            </a>
          )}
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() => (view.lessons.some((l) => l.audio) ? setConfirming({ kind: "all" }) : generate(null))}
            disabled={tracker.ids.length > 0}
          >
            {busyAll ? <Spinner /> : <Sparkles size={14} aria-hidden />}
            {busyAll ? "Generating all…" : "Generate all lessons"}
          </button>
        </div>
      </div>

      {message?.kind === "ok" && <div className="episode-note" style={{ marginBottom: "10px" }}>{message.text}</div>}
      {message?.kind === "error" && <div className="admin-form-error" style={{ marginBottom: "10px" }}>{message.text}</div>}

      <div className="episode-list">
        {view.lessons.map((lesson) => {
          const { audio } = lesson;
          const busy = busyLesson(lesson.number);
          const isPlaying = playing === lesson.number;
          const status = busy
            ? { cls: "is-busy", label: audio ? "Regenerating" : "Generating" }
            : audio
              ? { cls: "is-ready", label: "Audio ready" }
              : lesson.error
                ? { cls: "is-failed", label: "Failed" }
                : { cls: "is-idle", label: "Not generated" };
          // Storage caches the file for an hour and regeneration overwrites it
          // in place -- the version param makes the player fetch the new one.
          const src = audio ? `${audio.audioUrl}?v=${encodeURIComponent(audio.generatedAt)}` : "";

          return (
            <div key={lesson.number} className="admin-card episode-row">
              <div className="episode-head">
                <div className="episode-main">
                  <span className="episode-number">#{lesson.number}</span>
                  <div>
                    <h3 className="episode-title">{lesson.title}</h3>
                    <div className="episode-meta">
                      <span className={`ep-status ${status.cls}`}>{status.label}</span>
                      {lesson.outdated && !busy && <span className="ep-status is-busy">Lesson changed since</span>}
                      {audio?.duration && <span>{audio.duration}</span>}
                      {audio && <span>generated {audio.generatedAt.slice(0, 16).replace("T", " ")} UTC</span>}
                    </div>
                  </div>
                </div>
                <div className="episode-actions">
                  {audio && (
                    <>
                      <button
                        type="button"
                        className="btn btn-primary btn-sm"
                        onClick={() => setPlaying(isPlaying ? null : lesson.number)}
                      >
                        {isPlaying ? <Pause size={14} aria-hidden /> : <Play size={14} aria-hidden />}
                        {isPlaying ? "Hide player" : "Play"}
                      </button>
                      <button type="button" className="btn btn-ghost btn-sm" onClick={() => share(lesson)}>
                        <Share2 size={14} aria-hidden />
                        Share
                      </button>
                    </>
                  )}
                  <button
                    type="button"
                    className={`btn btn-sm ${audio ? "btn-ghost" : "btn-primary"}`}
                    onClick={() => (audio ? setConfirming({ kind: "regenerate", lesson }) : generate(lesson.number))}
                    disabled={tracker.ids.length > 0}
                  >
                    {busy ? <Spinner /> : audio ? <RefreshCw size={14} aria-hidden /> : <Sparkles size={14} aria-hidden />}
                    {busy ? (audio ? "Regenerating…" : "Generating…") : audio ? "Regenerate" : "Generate audio"}
                  </button>
                  {audio && (
                    <>
                      <span className="episode-actions-sep" aria-hidden />
                      <button
                        type="button"
                        className="btn btn-ghost btn-sm btn-danger"
                        onClick={() => setConfirming({ kind: "delete", lesson })}
                        disabled={tracker.ids.length > 0 || deleting !== null}
                        aria-label={`Delete audio for lesson ${lesson.number}`}
                      >
                        <Trash2 size={14} aria-hidden />
                        {deleting === lesson.number ? "Deleting…" : "Delete audio"}
                      </button>
                    </>
                  )}
                </div>
              </div>

              {isPlaying && audio && <audio controls autoPlay src={src} style={{ width: "100%", marginTop: "12px" }} />}

              {lesson.error && !busy && (
                <div className="admin-form-error">Last attempt failed: {lesson.error}</div>
              )}
            </div>
          );
        })}
      </div>

      <ConfirmDialog
        open={confirming?.kind === "regenerate"}
        onOpenChange={(o) => !o && setConfirming(null)}
        onConfirm={() => confirming?.lesson && generate(confirming.lesson.number)}
        icon={<RefreshCw size={20} aria-hidden />}
        title="Regenerate this lesson?"
        description={
          <>
            <strong>{confirming?.lesson?.title}</strong> will be generated again from its current script, and the
            existing audio will be overwritten.
          </>
        }
        confirmLabel="Regenerate"
      />
      <ConfirmDialog
        open={confirming?.kind === "all"}
        onOpenChange={(o) => !o && setConfirming(null)}
        onConfirm={() => generate(null)}
        icon={<RefreshCw size={20} aria-hidden />}
        title="Generate every lesson again?"
        description="Every lesson is generated from its current script, and any audio that already exists is overwritten."
        confirmLabel="Generate all"
      />
      <ConfirmDialog
        open={confirming?.kind === "delete"}
        onOpenChange={(o) => !o && setConfirming(null)}
        onConfirm={() => confirming?.lesson && remove(confirming.lesson)}
        tone="danger"
        icon={<Trash2 size={20} aria-hidden />}
        title="Delete this lesson's audio?"
        description={
          <>
            The audio for <strong>{confirming?.lesson?.title}</strong> is removed permanently. The lesson itself
            is kept, so you can generate it again.
          </>
        }
        confirmLabel="Delete audio"
      />
    </>
  );
}
