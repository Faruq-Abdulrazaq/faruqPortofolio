import { Navbar, Footer } from "@/main_components";
import { Skeleton } from "@/components/ui/skeleton";
import { BlogGridSkeleton } from "@/components/blog-skeletons";

export default function Loading() {
  return (
    <>
      <Navbar />
      <main id="top">
        <section className="section blog-hero">
          <div className="container">
            <Skeleton style={{ width: "80px", height: "13px" }} />
            <Skeleton style={{ marginTop: "14px", width: "260px", height: "34px" }} />
            <Skeleton style={{ marginTop: "14px", width: "70%", height: "16px" }} />
          </div>
        </section>
        <div className="rule" />
        <section className="section">
          <div className="container">
            <BlogGridSkeleton />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
