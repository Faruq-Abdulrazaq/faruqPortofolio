// Thin server-to-server client for the fta_podcast_generator FastAPI
// service. Only ever called from route handlers (never the browser) --
// PODCAST_API_KEY never reaches the client.

import axios from "axios";

// 127.0.0.1, not "localhost" -- Node can resolve "localhost" to the IPv6
// loopback (::1) first, which uvicorn doesn't listen on by default, giving
// an ECONNREFUSED even while the service is up and healthy on IPv4.
const PODCAST_API_URL = process.env.PODCAST_API_URL || "http://127.0.0.1:8000";
const PODCAST_API_KEY = process.env.PODCAST_API_KEY || "";

const client = axios.create({
  baseURL: PODCAST_API_URL,
  timeout: 15_000, // generation itself runs as a background job on the other side
  headers: { "X-API-Key": PODCAST_API_KEY },
});

export class PodcastApiError extends Error {
  constructor(message: string, public status?: number) {
    super(message);
    this.name = "PodcastApiError";
  }
}

async function post<T>(path: string, body: unknown): Promise<T> {
  try {
    const res = await client.post<T>(path, body);
    return res.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const message =
        (err.response?.data as { detail?: string } | undefined)?.detail ||
        err.message;
      throw new PodcastApiError(message, err.response?.status);
    }
    throw err;
  }
}

export function generatePodcast(
  podcastId: string,
  episodeId: string,
): Promise<{ job_id: string }> {
  return post("/podcast/generate", { config_id: podcastId, episode_id: episodeId });
}

export function generateCourse(
  configId: string,
  lesson?: number,
): Promise<{ job_id: string }> {
  return post("/course/generate", { config_id: configId, lesson: lesson ?? null });
}

export function processNotetaker(jobId: string): Promise<{ job_id: string }> {
  return post("/notetaker/process", { job_id: jobId });
}

export function generateAudiobook(configId: string): Promise<{ job_id: string }> {
  return post("/audiobook/generate", { config_id: configId });
}
