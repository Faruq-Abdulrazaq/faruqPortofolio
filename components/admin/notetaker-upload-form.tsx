"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import type { Job, NotetakerConfig } from "@/types/podcast";
import { Spinner } from "@/components/ui/spinner";

type Mode = "upload" | "record";
type RecordingState = "idle" | "recording" | "stopped";

const MIME_CANDIDATES = [
  "audio/webm;codecs=opus",
  "audio/webm",
  "audio/mp4",
  "audio/ogg;codecs=opus",
];

function pickMimeType(): string | undefined {
  if (typeof MediaRecorder === "undefined") return undefined;
  return MIME_CANDIDATES.find((type) => MediaRecorder.isTypeSupported?.(type));
}

function extensionFor(mimeType: string): string {
  if (mimeType.includes("mp4")) return "m4a";
  if (mimeType.includes("ogg")) return "ogg";
  return "webm";
}

function formatElapsed(ms: number): string {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

export function NotetakerUploadForm({ configs }: { configs: NotetakerConfig[] }) {
  const router = useRouter();
  const fileRef = useRef<HTMLInputElement>(null);
  const [mode, setMode] = useState<Mode>("upload");
  const [configId, setConfigId] = useState("");
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [job, setJob] = useState<Job | null>(null);
  const jobPollTimer = useRef<ReturnType<typeof setInterval> | null>(null);

  // -- in-browser recording ------------------------------------------------
  const [recordingSupported, setRecordingSupported] = useState(false);
  const [recordingState, setRecordingState] = useState<RecordingState>("idle");
  const [recordError, setRecordError] = useState("");
  const [elapsedMs, setElapsedMs] = useState(0);
  const [recordedBlob, setRecordedBlob] = useState<Blob | null>(null);
  const [recordedUrl, setRecordedUrl] = useState<string | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const streamRef = useRef<MediaStream | null>(null);
  const recordTimer = useRef<ReturnType<typeof setInterval> | null>(null);
  const startedAtRef = useRef(0);

  useEffect(() => {
    // Checked only after mount, client-side -- getUserMedia also requires a
    // secure context (https, or localhost for local dev), which this can't
    // detect ahead of the user actually clicking "Record now".
    setRecordingSupported(
      typeof navigator !== "undefined" && !!navigator.mediaDevices?.getUserMedia,
    );
  }, []);

  useEffect(() => {
    return () => {
      if (jobPollTimer.current) clearInterval(jobPollTimer.current);
      if (recordTimer.current) clearInterval(recordTimer.current);
      streamRef.current?.getTracks().forEach((t) => t.stop());
      if (recordedUrl) URL.revokeObjectURL(recordedUrl);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function poll(jobId: string) {
    if (jobPollTimer.current) clearInterval(jobPollTimer.current);
    jobPollTimer.current = setInterval(async () => {
      const res = await fetch(`/api/admin/notetaker/jobs/${jobId}`);
      if (!res.ok) return;
      const data = (await res.json()) as Job;
      setJob(data);
      if (data.status === "done" || data.status === "error") {
        if (jobPollTimer.current) clearInterval(jobPollTimer.current);
        router.refresh();
      }
    }, 5000);
  }

  async function startRecording() {
    setRecordError("");
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      chunksRef.current = [];
      const mimeType = pickMimeType();
      const recorder = new MediaRecorder(stream, mimeType ? { mimeType } : undefined);
      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };
      recorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: mimeType || "audio/webm" });
        setRecordedBlob(blob);
        setRecordedUrl(URL.createObjectURL(blob));
        streamRef.current?.getTracks().forEach((t) => t.stop());
        streamRef.current = null;
      };
      mediaRecorderRef.current = recorder;
      recorder.start();
      startedAtRef.current = Date.now();
      setElapsedMs(0);
      setRecordingState("recording");
      recordTimer.current = setInterval(
        () => setElapsedMs(Date.now() - startedAtRef.current),
        250,
      );
    } catch (err) {
      setRecordError(
        err instanceof DOMException && err.name === "NotAllowedError"
          ? "Microphone access was denied. Allow microphone access for this site and try again."
          : "Could not start recording -- this browser may not support it, or no microphone was found.",
      );
    }
  }

  function stopRecording() {
    mediaRecorderRef.current?.stop();
    setRecordingState("stopped");
    if (recordTimer.current) {
      clearInterval(recordTimer.current);
      recordTimer.current = null;
    }
  }

  function discardRecording() {
    if (recordedUrl) URL.revokeObjectURL(recordedUrl);
    setRecordedBlob(null);
    setRecordedUrl(null);
    setRecordingState("idle");
    setElapsedMs(0);
    setRecordError("");
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    let file: File | null = null;
    if (mode === "upload") {
      file = fileRef.current?.files?.[0] ?? null;
      if (!file) {
        setError("Choose a recording file first");
        return;
      }
    } else {
      if (!recordedBlob) {
        setError("Record something first, or switch to \"Upload a file\"");
        return;
      }
      file = new File(
        [recordedBlob],
        `recording-${new Date().toISOString().replace(/[:.]/g, "-")}.${extensionFor(recordedBlob.type)}`,
        { type: recordedBlob.type },
      );
    }

    setUploading(true);
    try {
      const form = new FormData();
      form.append("recording", file);
      if (configId) form.append("configId", configId);
      const res = await fetch("/api/admin/notetaker/upload", { method: "POST", body: form });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.message || "Upload failed");
      setJob({ id: data.jobId, type: "notetaker", configId: configId || "", status: "queued", createdAt: "" });
      poll(data.jobId);
      if (data.warning) setError(data.warning);
      if (mode === "record") discardRecording();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  }

  return (
    <form className="admin-card" onSubmit={onSubmit}>
      <div className="mode-tabs">
        <button
          type="button"
          className={`mode-tab${mode === "upload" ? " active" : ""}`}
          onClick={() => setMode("upload")}
        >
          Upload a file
        </button>
        <button
          type="button"
          className={`mode-tab${mode === "record" ? " active" : ""}`}
          onClick={() => setMode("record")}
        >
          Record now
        </button>
      </div>

      {mode === "upload" && (
        <div className="field" style={{ marginTop: "14px" }}>
          <label htmlFor="recording">Recording (audio file, up to ~1hr)</label>
          <input id="recording" type="file" accept="audio/*" ref={fileRef} />
        </div>
      )}

      {mode === "record" && (
        <div style={{ marginTop: "14px" }}>
          {!recordingSupported && (
            <p className="admin-form-error">
              This browser can&apos;t record audio (or this page isn&apos;t loaded over a secure
              connection). Use &quot;Upload a file&quot; instead.
            </p>
          )}
          {recordingSupported && recordingState === "idle" && (
            <button type="button" className="btn btn-primary" onClick={startRecording}>
              ● Start recording
            </button>
          )}
          {recordingState === "recording" && (
            <div className="recording-indicator">
              <span className="recording-dot" aria-hidden />
              Recording &mdash; {formatElapsed(elapsedMs)}
              <button type="button" className="btn btn-sm" onClick={stopRecording}>
                Stop
              </button>
            </div>
          )}
          {recordingState === "stopped" && recordedUrl && (
            <div>
              <p>Recorded {formatElapsed(elapsedMs)}. Listen back before uploading:</p>
              <audio controls src={recordedUrl} style={{ width: "100%", marginTop: "6px" }} />
              <div style={{ marginTop: "10px", display: "flex", gap: "8px" }}>
                <button type="button" className="btn btn-ghost btn-sm" onClick={discardRecording}>
                  Discard &amp; record again
                </button>
              </div>
            </div>
          )}
          {recordError && <div className="admin-form-error">{recordError}</div>}
        </div>
      )}

      <div className="field" style={{ marginTop: "14px", maxWidth: "320px" }}>
        <label htmlFor="configId">Prompt</label>
        <select id="configId" value={configId} onChange={(e) => setConfigId(e.target.value)}>
          <option value="">Default prompt</option>
          {configs.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      <div style={{ marginTop: "16px" }}>
        <button
          className="btn btn-primary"
          type="submit"
          disabled={uploading || (mode === "record" && recordingState !== "stopped")}
        >
          {uploading && <Spinner />}
          {uploading ? "Uploading…" : "Upload & process"}
        </button>
      </div>

      {job && (
        <div style={{ marginTop: "14px" }}>
          <p>
            Status: <strong>{job.status}</strong>
          </p>
          {job.status === "error" && <div className="admin-form-error">{job.error}</div>}
          {job.status === "done" && job.result && (
            <div>
              <p>
                {String(job.result.speakerCount ?? "?")} speakers,{" "}
                {String(job.result.utteranceCount ?? "?")} utterances
              </p>
              {typeof job.result.transcriptUrl === "string" && (
                <p>
                  <a href={job.result.transcriptUrl} target="_blank" rel="noreferrer">
                    Full transcript
                  </a>
                </p>
              )}
              {typeof job.result.summary === "string" && (
                <pre style={{ whiteSpace: "pre-wrap", marginTop: "8px" }}>
                  {job.result.summary}
                </pre>
              )}
            </div>
          )}
        </div>
      )}

      {error && <div className="admin-form-error">{error}</div>}
    </form>
  );
}
