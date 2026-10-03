import Link from "next/link";
import { notFound } from "next/navigation";
import { Settings } from "lucide-react";
import { getAudiobookConfigById, getAudiobookView } from "@/lib/firestore";
import { BackLink } from "@/components/admin/back-link";
import { AudiobookDetail } from "@/components/admin/audiobook-detail";

export default async function AudiobookPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const config = await getAudiobookConfigById(id);
  if (!config) notFound();
  const view = await getAudiobookView(config);
  const name = view.audio?.title || config.title || config.epubName;

  return (
    <>
      <BackLink href="/admin/audiobook">All audiobooks</BackLink>

      <div className="admin-page-head podcast-head">
        <div>
          <span className="eyebrow">AUDIOBOOK</span>
          <h1>{name}</h1>
          <p className="podcast-stats">{config.epubName}</p>
        </div>
        <Link href={`/admin/audiobook/${id}/edit`} className="btn btn-ghost btn-sm">
          <Settings size={15} aria-hidden />
          Audiobook settings
        </Link>
      </div>

      <AudiobookDetail configId={id} name={name} view={view} />
    </>
  );
}
