import { notFound } from "next/navigation";
import { getPodcastConfigById, getPodcastEpisodes } from "@/lib/firestore";
import { PodcastEpisodeForm } from "@/components/admin/podcast-episode-form";

export default async function NewPodcastEpisodePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const config = await getPodcastConfigById(id);
  if (!config) notFound();

  const numbers = (await getPodcastEpisodes(id)).map((e) => e.number ?? 0);
  const suggestedNumber = Math.max(0, ...numbers) + 1;

  return (
    <>
      <div className="admin-page-head">
        <h1>New episode &mdash; {config.title}</h1>
      </div>
      <PodcastEpisodeForm podcastId={id} suggestedNumber={suggestedNumber} />
    </>
  );
}
