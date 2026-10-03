import { AudiobookConfigForm } from "@/components/admin/audiobook-config-form";

export default function NewAudiobookConfigPage() {
  return (
    <>
      <div className="admin-page-head">
        <h1>New audiobook</h1>
      </div>
      <AudiobookConfigForm />
    </>
  );
}
