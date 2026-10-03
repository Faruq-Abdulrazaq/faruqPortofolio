"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Pause, Play, RefreshCw, Share2, Sparkles, Trash2 } from "lucide-react";
import type { AudiobookView } from "@/types/podcast";
import { Spinner } from "@/components/ui/spinner";
import { shareLink } from "@/lib/share-link";
import { useJobTracker } from "@/components/admin/use-job-tracker";
import { ConfirmDialog } from "@/components/admin/confirm-dialog";

function clock(ms: number | undefined): string {
  if (ms === undefined) return "";
  const total = Math.round(ms / 1000);
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  const mm = h ? String(m).padStart(2, "0") : String(m);
  return `${h ? `${h}:` : ""}${mm}:${String(s).padStart(2, "0")}`;
}

/** The generated audiobook of one EPUB, with play / share / regenerate /
 * delete. The book's settings and EPUB are edited in its settings page. */
export function AudiobookDetail({
  configId,
  name,
  view,
}: {
  configId: string;
  name: string;
  view: AudiobookView;
}) {
  const router = useRouter();
  const { audio, pending, chapters } = view;
  const [playing, setPlaying] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [confirming, setConfirming] = useState<"regenerate" | "delete" | null>(null);
  const [note, setNote] = useState("");
  const [error, setError] = useState(
    pending?.status === "error" ? `Last attempt failed: ${pending.error ?? "unknown error"}` : "",
  );

  const tracker = useJobTracker(
    "/api/admin/audiobook/jobs",
    pending && pending.status !== "error" ? [pending.jobId] : [],
    (job) => {
      if (job.status === "error") setError(`Generation failed: ${job.error ?? "unknown error"}`);
      else setNote("Done.");
      router.refresh();
    },
  );
  const generating = tracker.ids.length > 0;

  async function generate() {
    setError("");
    setNote("");
    try {
      const res = await fetch("/api/admin/audiobook/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ configId }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.message || "Could not start generation");
      tracker.track(data.jobId);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not start generation");
    }
  }

  async function remove() {
    setError("");
    setNote("");
    setDeleting(true);
    try {
      const res = await fetch(`/api/admin/audiobook/configs/${configId}/audio`, { method: "DELETE" });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.message || "Delete failed");
      }
      setPlaying(false);
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Delete failed");
    } finally {
      setDeleting(false);
    }
  }

  async function share() {
    if (!audio) return;
    if ((await shareLink(audio.title, audio.audioUrl)) === "copied") setNote("Link copied.");
  }

  // Storage caches the file for an hour and regeneration overwrites it in
  // place -- the version param makes the player fetch the new one.
  const src = audio ? `${audio.audioUrl}?v=${encodeURIComponent(audio.generatedAt)}` : "";
  const failed = !generating && !audio && error.startsWith("Last attempt failed");
  const status = generating
    ? { cls: "is-busy", label: audio ? "Regenerating" : "Generating" }
    : audio
      ? { cls: "is-ready", label: "Audio ready" }
      : failed
        ? { cls: "is-failed", label: "Failed" }
        : { cls: "is-idle", label: "Not generated" };

  return (
    <div className="admin-card episode-row">
      <div className="episode-head">
        <div className="episode-main">
          <div>
            <h3 className="episode-title">{audio?.title ?? name}</h3>
            <div className="episode-meta">
              <span className={`ep-status ${status.cls}`}>{status.label}</span>
              {audio?.author && <span>{audio.author}</span>}
              {audio?.duration && <span>{audio.duration}</span>}
              {audio && audio.chapterCount > 0 && <span>{audio.chapterCount} chapters</span>}
              {audio && <span>generated {audio.generatedAt.slice(0, 16).replace("T", " ")} UTC</span>}
            </div>
          </div>
        </div>
        <div className="episode-actions">
          {audio && (
            <>
              <button type="button" className="btn btn-primary btn-sm" onClick={() => setPlaying((p) => !p)}>
                {playing ? <Pause size={14} aria-hidden /> : <Play size={14} aria-hidden />}
                {playing ? "Hide player" : "Play"}
              </button>
              <button type="button" className="btn btn-ghost btn-sm" onClick={share}>
                <Share2 size={14} aria-hidden />
                Share
              </button>
            </>
          )}
          <button
            type="button"
            className={`btn btn-sm ${audio ? "btn-ghost" : "btn-primary"}`}
            onClick={() => (audio ? setConfirming("regenerate") : generate())}
            disabled={generating || deleting}
          >
            {generating ? <Spinner /> : audio ? <RefreshCw size={14} aria-hidden /> : <Sparkles size={14} aria-hidden />}
            {generating ? (audio ? "Regenerating…" : "Generating…") : audio ? "Regenerate" : "Generate audiobook"}
          </button>
          {audio && (
            <>
              <span className="episode-actions-sep" aria-hidden />
              <button
                type="button"
                className="btn btn-ghost btn-sm btn-danger"
                onClick={() => setConfirming("delete")}
                disabled={generating || deleting}
              >
                <Trash2 size={14} aria-hidden />
                {deleting ? "Deleting…" : "Delete audio"}
              </button>
            </>
          )}
        </div>
      </div>

      {generating && !audio && (
        <p className="episode-note">
          Narrating a whole book takes a while &mdash; you can leave this page; it keeps going.
        </p>
      )}

      {playing && audio && <audio controls autoPlay src={src} style={{ width: "100%", marginTop: "12px" }} />}

      {chapters.length > 0 && (
        <details style={{ marginTop: "12px" }}>
          <summary>{chapters.length} chapters</summary>
          <ol className="chapter-list">
            {chapters.map((c) => (
              <li key={c.number}>
                <span className="chapter-time">{clock(c.startMs)}</span>
                <span>{c.title}</span>
                <span className="chapter-time">{clock(c.durationMs)}</span>
              </li>
            ))}
          </ol>
        </details>
      )}

      {note && <div className="episode-note">{note}</div>}
      {error && <div className="admin-form-error">{error}</div>}

      <ConfirmDialog
        open={confirming === "regenerate"}
        onOpenChange={(o) => !o && setConfirming(null)}
        onConfirm={generate}
        icon={<RefreshCw size={20} aria-hidden />}
        title="Regenerate the audiobook?"
        description="The whole book is narrated again from its current settings, and the existing audio is overwritten. Long books take a while."
        confirmLabel="Regenerate"
      />
      <ConfirmDialog
        open={confirming === "delete"}
        onOpenChange={(o) => !o && setConfirming(null)}
        onConfirm={remove}
        tone="danger"
        icon={<Trash2 size={20} aria-hidden />}
        title="Delete the generated audiobook?"
        description="The audio is removed permanently. The EPUB and settings are kept, so you can generate it again."
        confirmLabel="Delete audio"
      />
    </div>
  );
}
