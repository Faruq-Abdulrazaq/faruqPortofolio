import { BlogPostForm } from "@/components/admin/blog-post-form";

export default function NewBlogPostPage() {
  return (
    <>
      <div className="admin-page-head">
        <h1>New post</h1>
      </div>
      <BlogPostForm />
    </>
  );
}
