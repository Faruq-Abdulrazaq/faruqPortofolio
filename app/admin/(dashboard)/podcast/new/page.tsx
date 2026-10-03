import { PodcastConfigForm } from "@/components/admin/podcast-config-form";

export default function NewPodcastConfigPage() {
  return (
    <>
      <div className="admin-page-head">
        <h1>New podcast config</h1>
      </div>
      <PodcastConfigForm />
    </>
  );
}
