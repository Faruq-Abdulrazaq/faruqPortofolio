import { notFound } from "next/navigation";
import { getAudiobookConfigById } from "@/lib/firestore";
import { AudiobookConfigForm } from "@/components/admin/audiobook-config-form";

export default async function EditAudiobookConfigPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const config = await getAudiobookConfigById(id);
  if (!config) notFound();

  return (
    <>
      <div className="admin-page-head">
        <h1>Edit audiobook</h1>
      </div>
      <AudiobookConfigForm config={config} />
    </>
  );
}
