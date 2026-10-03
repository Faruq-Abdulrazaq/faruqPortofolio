import { notFound } from "next/navigation";
import { getPodcastEpisodeDoc } from "@/lib/firestore";
import { PodcastEpisodeForm } from "@/components/admin/podcast-episode-form";

export default async function EditPodcastEpisodePage({
  params,
}: {
  params: Promise<{ id: string; episodeId: string }>;
}) {
  const { id, episodeId } = await params;
  const episode = await getPodcastEpisodeDoc(id, episodeId);
  if (!episode) notFound();

  return (
    <>
      <div className="admin-page-head">
        <h1>Edit episode</h1>
      </div>
      <PodcastEpisodeForm podcastId={id} episode={episode} />
    </>
  );
}
