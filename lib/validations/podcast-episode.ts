import { z } from "zod";
import { optionalInt } from "./podcast-config";

// One episode: its script and the few settings that differ per episode.
// hook / teaser / cta map onto the engine's pattern.structure for just this
// episode; everything else comes from the podcast.
export const podcastEpisodeSchema = z.object({
  title: z.string().min(1, "Episode title is required"),
  number: optionalInt(),
  slug: z.string().optional(),
  scriptText: z.string().min(1, "Script is required"),
  hook: z.string().optional(),
  teaser: z.string().optional(),
  cta: z.string().optional(),
});

export type PodcastEpisodeFormValues = z.infer<typeof podcastEpisodeSchema>;
