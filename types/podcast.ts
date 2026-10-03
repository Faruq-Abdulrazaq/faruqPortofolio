// The "advanced" blocks (cast/pattern/performance/pronunciations) are kept
// as opaque JSON here -- they mirror podcast.models.Config's dataclasses in
// fta_podcast_generator, in that project's snake_case shape, and this admin
// only round-trips them (edited as raw JSON), never interprets them.

export type PodcastConfig = {
  id: string;
  title: string;
  speed?: string;
  seed?: number;
  advanced?: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
};

// One episode of a podcast: its own script, plus the few things that differ
// per episode. Everything else (cast, pacing, pronunciations...) comes from
// the podcast.
export type PodcastEpisodeDoc = {
  id: string;
  podcastId: string;
  title: string;
  number?: number;
  slug: string;
  scriptText: string;
  hook?: string;
  teaser?: string;
  cta?: string;
  createdAt: string;
  updatedAt: string;
};

export type CourseLesson = {
  title: string;
  scriptText: string;
  objectives: string[];
  challenge?: string;
  overrides?: Record<string, unknown>;
};

export type CourseConfig = {
  id: string;
  title: string;
  subtitle?: string;
  slug?: string;
  outcome?: string;
  defaults?: Record<string, unknown>;
  lessons: CourseLesson[];
  createdAt: string;
  updatedAt: string;
};

export type NotetakerConfig = {
  id: string;
  name: string;
  promptTemplate: string;
  expectedSpeakers?: number;
  language?: string;
  createdAt: string;
  updatedAt: string;
};

// EPUBs are uploaded straight to Storage (see epubUrl) rather than living in
// Firestore. "advanced" bundles the rest of podcast.audiobook.BookConfig's
// fields (narrator, skip, keep, toc_depth, min_words, announce_chapters,
// credit, pronunciations, pauses, max_chunk_chars) as opaque JSON, same
// round-trip approach as PodcastConfig.advanced.
export type AudiobookConfig = {
  id: string;
  title?: string;
  author?: string;
  slug?: string;
  speed?: string;
  seed?: number;
  epubUrl: string;
  epubName: string;
  advanced?: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
};

// The generated audio of an episode: its newest successful job. `pending`
// is a newer job that's still running (regenerating) or failed.
export type PodcastEpisodeAudio = {
  audioUrl: string;
  duration: string;
  generatedAt: string;
  manifestUrl?: string;
  scriptUrl?: string;
};

export type JobPending = {
  jobId: string;
  status: "queued" | "running" | "error";
  error?: string | null;
};

export type PodcastEpisode = PodcastEpisodeDoc & {
  audio?: PodcastEpisodeAudio;
  pending?: JobPending;
};

// Courses: a course's lessons, each with the audio generated for it (if any).
export type LessonAudio = {
  audioUrl: string;
  duration: string;
  generatedAt: string;
};

export type CourseLessonView = {
  number: number;
  title: string;
  audio?: LessonAudio;
  /** The lesson was renamed or moved since this audio was generated. */
  outdated?: boolean;
  /** The newest attempt to generate it failed. */
  error?: string;
};

export type ActiveJob = { jobId: string; lesson: number | null };

export type CourseView = {
  lessons: CourseLessonView[];
  syllabusUrl?: string;
  active: ActiveJob[];
};

// Audiobooks: the generated book, its chapters, and any newer attempt.
export type BookChapter = {
  number: number;
  title: string;
  startMs?: number;
  durationMs?: number;
};

export type AudiobookAudio = {
  audioUrl: string;
  duration: string;
  generatedAt: string;
  title: string;
  author?: string;
  chapterCount: number;
};

export type AudiobookView = {
  audio?: AudiobookAudio;
  chapters: BookChapter[];
  pending?: JobPending;
};

export type JobType = "podcast" | "course" | "notetaker" | "audiobook";
export type JobStatus = "queued" | "running" | "done" | "error";

export type Job = {
  id: string;
  type: JobType;
  configId: string;
  status: JobStatus;
  error?: string | null;
  createdAt: string;
  startedAt?: string | null;
  finishedAt?: string | null;
  result?: Record<string, unknown> | null;
  // notetaker only
  recordingUrl?: string;
  recordingName?: string;
};
