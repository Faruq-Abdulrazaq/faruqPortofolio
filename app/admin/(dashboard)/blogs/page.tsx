import Link from "next/link";
import { getAllBlogPosts } from "@/lib/firestore";
import { isPublished } from "@/lib/blog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default async function AdminBlogsPage() {
  const posts = await getAllBlogPosts();

  return (
    <>
      <div className="admin-page-head">
        <h1>Blog</h1>
        <Link href="/admin/blogs/new" className="btn btn-primary btn-sm">
          + New post
        </Link>
      </div>

      <div className="admin-table-wrap">
        <Table>
          <TableHeader>
            <TableRow className="border-[var(--border)]">
              <TableHead>Title</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Edit</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {posts.length === 0 && (
              <TableRow className="border-[var(--border)]">
                <TableCell colSpan={4} className="text-center text-muted-foreground">
                  No posts yet.
                </TableCell>
              </TableRow>
            )}
            {posts.map((post) => (
              <TableRow key={post.id} className="border-[var(--border)]">
                <TableCell>{post.title}</TableCell>
                <TableCell>{formatDate(post.date)}</TableCell>
                <TableCell>
                  <Badge variant={isPublished(post.date) ? "default" : "outline"}>
                    {isPublished(post.date) ? "Published" : "Scheduled"}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Link
                    href={`/admin/blogs/${post.id}/edit`}
                    className="btn btn-sm btn-ghost"
                  >
                    Edit
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
