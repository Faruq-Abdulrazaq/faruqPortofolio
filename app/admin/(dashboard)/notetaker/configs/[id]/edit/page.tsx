import { notFound } from "next/navigation";
import { getNotetakerConfigById } from "@/lib/firestore";
import { NotetakerConfigForm } from "@/components/admin/notetaker-config-form";

export default async function EditNotetakerConfigPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const config = await getNotetakerConfigById(id);
  if (!config) notFound();

  return (
    <>
      <div className="admin-page-head">
        <h1>Edit note-taker prompt</h1>
      </div>
      <NotetakerConfigForm config={config} />
    </>
  );
}
