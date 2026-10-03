import { notFound } from "next/navigation";
import { getPodcastConfigById } from "@/lib/firestore";
import { PodcastConfigForm } from "@/components/admin/podcast-config-form";

export default async function EditPodcastConfigPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const config = await getPodcastConfigById(id);
  if (!config) notFound();

  return (
    <>
      <div className="admin-page-head">
        <h1>Edit podcast config</h1>
      </div>
      <PodcastConfigForm config={config} />
    </>
  );
}
