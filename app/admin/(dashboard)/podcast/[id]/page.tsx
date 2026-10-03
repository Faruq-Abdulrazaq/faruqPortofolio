import Link from "next/link";
import { notFound } from "next/navigation";
import { Plus, Settings } from "lucide-react";
import { getPodcastConfigById, getPodcastEpisodes } from "@/lib/firestore";
import { BackLink } from "@/components/admin/back-link";
import { PodcastEpisodes } from "@/components/admin/podcast-episodes-list";

export default async function PodcastPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const config = await getPodcastConfigById(id);
  if (!config) notFound();
  const episodes = await getPodcastEpisodes(id);
  const generated = episodes.filter((e) => e.audio).length;

  return (
    <>
      <BackLink href="/admin/podcast">All podcasts</BackLink>

      <div className="admin-page-head podcast-head">
        <div>
          <span className="eyebrow">PODCAST</span>
          <h1>{config.title}</h1>
          <p className="podcast-stats">
            {episodes.length} {episodes.length === 1 ? "episode" : "episodes"}
            {episodes.length > 0 && <> · {generated} with audio</>}
          </p>
        </div>
        <Link href={`/admin/podcast/${id}/edit`} className="btn btn-ghost btn-sm">
          <Settings size={15} aria-hidden />
          Podcast settings
        </Link>
      </div>

      <div className="episodes-bar">
        <h2>Episodes</h2>
        <Link href={`/admin/podcast/${id}/episodes/new`} className="btn btn-primary btn-sm">
          <Plus size={15} aria-hidden />
          New episode
        </Link>
      </div>
      <PodcastEpisodes podcastId={id} episodes={episodes} />
    </>
  );
}
