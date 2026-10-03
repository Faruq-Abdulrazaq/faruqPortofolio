import { notFound } from "next/navigation";
import { getBlogPostById } from "@/lib/firestore";
import { BlogPostForm } from "@/components/admin/blog-post-form";

export default async function EditBlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await getBlogPostById(id);
  if (!post) notFound();

  return (
    <>
      <div className="admin-page-head">
        <h1>Edit post</h1>
      </div>
      <BlogPostForm post={post} />
    </>
  );
}
