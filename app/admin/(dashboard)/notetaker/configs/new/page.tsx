import { NotetakerConfigForm } from "@/components/admin/notetaker-config-form";

export default function NewNotetakerConfigPage() {
  return (
    <>
      <div className="admin-page-head">
        <h1>New note-taker prompt</h1>
      </div>
      <NotetakerConfigForm />
    </>
  );
}
