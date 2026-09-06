import { Navbar, Footer } from "@/main_components";
import { BlogPostSkeleton } from "@/components/blog-skeletons";

export default function Loading() {
  return (
    <>
      <Navbar />
      <main id="top">
        <BlogPostSkeleton />
      </main>
      <Footer />
    </>
  );
}
