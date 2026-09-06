"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { blogPostSchema } from "@/lib/validations/blog";
import type { BlogPost } from "@/types/blog";
import { Spinner } from "@/components/ui/spinner";

const formSchema = blogPostSchema.omit({ tags: true }).extend({
  tagsInput: z.string().optional(),
});
type FormValues = z.infer<typeof formSchema>;

function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export function BlogPostForm({ post }: { post?: BlogPost }) {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [slugTouched, setSlugTouched] = useState(Boolean(post));

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: post
      ? {
          title: post.title,
          slug: post.slug,
          description: post.description,
          date: post.date,
          content: post.content,
          tagsInput: post.tags.join(", "),
        }
      : {
          title: "",
          slug: "",
          description: "",
          date: new Date().toISOString().slice(0, 10),
          content: "",
          tagsInput: "",
        },
  });

  function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const title = e.target.value;
    setValue("title", title);
    if (!slugTouched) {
      setValue("slug", slugify(title));
    }
  }

  async function onSubmit(values: FormValues) {
    setError("");
    setLoading(true);
    try {
      const payload = {
        title: values.title,
        slug: values.slug,
        description: values.description,
        date: values.date,
        content: values.content,
        tags: (values.tagsInput ?? "")
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean),
      };
      const url = post ? `/api/admin/blogs/${post.id}` : "/api/admin/blogs";
      const res = await fetch(url, {
        method: post ? "PATCH" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.message || "Something went wrong");
      }
      router.push("/admin/blogs");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  const contentValue = watch("content") ?? "";

  return (
    <form className="admin-card" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="field">
        <label htmlFor="title">Title</label>
        <input id="title" type="text" {...register("title")} onChange={handleTitleChange} />
        {errors.title && (
          <span className="admin-field-error">{errors.title.message}</span>
        )}
      </div>

      <div className="field" style={{ marginTop: "16px" }}>
        <label htmlFor="slug">Slug</label>
        <input
          id="slug"
          type="text"
          {...register("slug")}
          onChange={(e) => {
            setSlugTouched(true);
            register("slug").onChange(e);
          }}
        />
        <span style={{ fontSize: "11.5px", color: "var(--text-3)" }}>
          /blogs/{watch("slug") || "…"}
        </span>
        {errors.slug && (
          <span className="admin-field-error">{errors.slug.message}</span>
        )}
      </div>

      <div className="field-row" style={{ marginTop: "16px" }}>
        <div className="field">
          <label htmlFor="date">Publish date</label>
          <input id="date" type="date" {...register("date")} />
          {errors.date && (
            <span className="admin-field-error">{errors.date.message}</span>
          )}
          <span style={{ fontSize: "11.5px", color: "var(--text-3)" }}>
            Hidden from the public blog until this date arrives.
          </span>
        </div>
        <div className="field">
          <label htmlFor="tagsInput">Tags</label>
          <input id="tagsInput" type="text" placeholder="Next.js, TypeScript" {...register("tagsInput")} />
        </div>
      </div>

      <div className="field" style={{ marginTop: "16px" }}>
        <label htmlFor="description">Description</label>
        <textarea id="description" rows={2} {...register("description")} />
        {errors.description && (
          <span className="admin-field-error">{errors.description.message}</span>
        )}
      </div>

      <div className="field" style={{ marginTop: "16px" }}>
        <label htmlFor="content">
          Content (Markdown) <span style={{ color: "var(--text-3)" }}>· {contentValue.length} chars</span>
        </label>
        <textarea
          id="content"
          rows={20}
          className="mono"
          style={{ fontSize: "13px", lineHeight: 1.6 }}
          {...register("content")}
        />
        {errors.content && (
          <span className="admin-field-error">{errors.content.message}</span>
        )}
      </div>

      <div style={{ marginTop: "22px", display: "flex", gap: "10px" }}>
        <button
          className="btn btn-primary"
          type="submit"
          disabled={loading}
          style={{ opacity: loading ? 0.7 : 1 }}
        >
          {loading && <Spinner />}
          {loading ? "Saving…" : post ? "Save changes" : "Create post"}
        </button>
        <button
          type="button"
          className="btn btn-ghost"
          onClick={() => router.push("/admin/blogs")}
        >
          Cancel
        </button>
      </div>

      {error && <div className="admin-form-error">{error}</div>}
    </form>
  );
}
