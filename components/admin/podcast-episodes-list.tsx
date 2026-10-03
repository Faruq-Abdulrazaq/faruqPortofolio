"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mic, Pause, Pencil, Play, Plus, RefreshCw, Share2, Sparkles, Trash2 } from "lucide-react";
import type { Job, PodcastEpisode } from "@/types/podcast";
import { Spinner } from "@/components/ui/spinner";
import { ConfirmDialog } from "@/components/admin/confirm-dialog";
import { shareLink } from "@/lib/share-link";

/** The episodes of one podcast. */
export function PodcastEpisodes({
  podcastId,
  episodes,
}: {
  podcastId: string;
  episodes: PodcastEpisode[];
}) {
  if (episodes.length === 0) {
    return (
      <div className="episodes-empty">
        <span className="episodes-empty-icon">
          <Mic size={22} aria-hidden />
        </span>
        <h3>No episodes yet</h3>
        <p>An episode is a script. Add the first one, then generate its audio from here.</p>
        <Link href={`/admin/podcast/${podcastId}/episodes/new`} className="btn btn-primary btn-sm">
          <Plus size={15} aria-hidden />
          Add first episode
        </Link>
      </div>
    );
  }
  return (
    <div className="episode-list">
      {episodes.map((e) => (
        <EpisodeCard key={e.id} podcastId={podcastId} episode={e} />
      ))}
    </div>
  );
}

function EpisodeCard({ podcastId, episode }: { podcastId: string; episode: PodcastEpisode }) {
  const router = useRouter();
  const { audio, pending } = episode;
  const [playing, setPlaying] = useState(false);
  const [busy, setBusy] = useState<"generate" | "delete" | null>(
    pending && pending.status !== "error" ? "generate" : null,
  );
  const [confirming, setConfirming] = useState<"regenerate" | "delete" | null>(null);
  const [note, setNote] = useState("");
  const [error, setError] = useState(
    pending?.status === "error" ? `Last attempt failed: ${pending.error ?? "unknown error"}` : "",
  );
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    // A generation that was already running when the page loaded.
    if (pending && pending.status !== "error") poll(pending.jobId);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function poll(jobId: string) {
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(async () => {
      const res = await fetch(`/api/admin/podcast/jobs/${jobId}`);
      if (!res.ok) return;
      const job = (await res.json()) as Job;
      if (job.status === "done" || job.status === "error") {
        if (timer.current) clearInterval(timer.current);
        setBusy(null);
        if (job.status === "error") setError(`Generation failed: ${job.error ?? "unknown error"}`);
        else setNote("Done.");
        router.refresh();
      }
    }, 4000);
  }

  async function generate() {
    setError("");
    setNote("");
    setBusy("generate");
    try {
      const res = await fetch("/api/admin/podcast/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ configId: podcastId, episodeId: episode.id }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.message || "Could not start generation");
      poll(data.jobId);
    } catch (err) {
      setBusy(null);
      setError(err instanceof Error ? err.message : "Could not start generation");
    }
  }

  async function remove() {
    setError("");
    setNote("");
    setBusy("delete");
    try {
      const res = await fetch(`/api/admin/podcast/configs/${podcastId}/episodes/${episode.id}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.message || "Delete failed");
      }
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Delete failed");
      setBusy(null);
    }
  }

  async function share() {
    if (!audio) return;
    setError("");
    if ((await shareLink(episode.title, audio.audioUrl)) === "copied") setNote("Link copied.");
  }

  // The file is overwritten in place on regeneration, and Storage serves it
  // with a 1h cache -- the version param makes the player fetch the new one.
  const src = audio ? `${audio.audioUrl}?v=${encodeURIComponent(audio.generatedAt)}` : "";
  const generating = busy === "generate";

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
          {episode.number !== undefined && <span className="episode-number">#{episode.number}</span>}
          <div>
            <h3 className="episode-title">{episode.title}</h3>
            <div className="episode-meta">
              <span className={`ep-status ${status.cls}`}>{status.label}</span>
              {audio?.duration && <span>{audio.duration}</span>}
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
            disabled={busy !== null}
          >
            {generating ? <Spinner /> : audio ? <RefreshCw size={14} aria-hidden /> : <Sparkles size={14} aria-hidden />}
            {generating ? (audio ? "Regenerating…" : "Generating…") : audio ? "Regenerate" : "Generate audio"}
          </button>
          <span className="episode-actions-sep" aria-hidden />
          <Link
            href={`/admin/podcast/${podcastId}/episodes/${episode.id}/edit`}
            className="btn btn-ghost btn-sm"
          >
            <Pencil size={14} aria-hidden />
            Edit
          </Link>
          <button
            type="button"
            className="btn btn-ghost btn-sm btn-danger"
            onClick={() => setConfirming("delete")}
            disabled={busy !== null}
            aria-label={`Delete episode ${episode.title}`}
          >
            <Trash2 size={14} aria-hidden />
            {busy === "delete" ? "Deleting…" : "Delete"}
          </button>
        </div>
      </div>

      <ConfirmDialog
        open={confirming === "regenerate"}
        onOpenChange={(o) => !o && setConfirming(null)}
        onConfirm={generate}
        icon={<RefreshCw size={20} aria-hidden />}
        title="Regenerate this episode?"
        description={
          <>
            <strong>{episode.title}</strong> will be generated again from its current script, and the existing
            audio will be overwritten.
          </>
        }
        confirmLabel="Regenerate"
      />
      <ConfirmDialog
        open={confirming === "delete"}
        onOpenChange={(o) => !o && setConfirming(null)}
        onConfirm={remove}
        tone="danger"
        icon={<Trash2 size={20} aria-hidden />}
        title="Delete this episode?"
        description={
          <>
            <strong>{episode.title}</strong> &mdash; its script and audio will be removed permanently. This can&apos;t
            be undone.
          </>
        }
        confirmLabel="Delete episode"
      />

      {playing && audio && <audio controls autoPlay src={src} style={{ width: "100%", marginTop: "12px" }} />}

      {note && <div className="episode-note">{note}</div>}
      {error && <div className="admin-form-error">{error}</div>}
    </div>
  );
}
