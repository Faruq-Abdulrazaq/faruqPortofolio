import { Skeleton, SkeletonLine } from "@/components/ui/skeleton";

export function BlogGridSkeleton() {
  return (
    <div className="blog-grid">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="skeleton-blog-card">
          <Skeleton style={{ width: "120px", height: "12px" }} />
          <Skeleton style={{ marginTop: "14px", width: "85%", height: "20px" }} />
          <div style={{ marginTop: "10px" }}>
            <SkeletonLine height="14px" />
            <SkeletonLine width="70%" height="14px" />
          </div>
          <div style={{ marginTop: "16px", display: "flex", gap: "6px" }}>
            <Skeleton style={{ width: "50px", height: "22px", borderRadius: "999px" }} />
            <Skeleton style={{ width: "64px", height: "22px", borderRadius: "999px" }} />
          </div>
        </div>
      ))}
    </div>
  );
}

export function BlogPostSkeleton() {
  return (
    <>
      <section className="section blog-post-head">
        <div className="container container-narrow">
          <Skeleton style={{ width: "90px", height: "13px" }} />
          <Skeleton style={{ marginTop: "18px", width: "140px", height: "13px" }} />
          <Skeleton style={{ marginTop: "14px", width: "80%", height: "34px" }} />
          <div style={{ marginTop: "14px" }}>
            <SkeletonLine height="16px" />
            <SkeletonLine width="60%" height="16px" />
          </div>
        </div>
      </section>
      <div className="rule" />
      <section className="section">
        <div className="container container-narrow" style={{ padding: "56px 0 80px" }}>
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} style={{ marginBottom: "18px" }}>
              <SkeletonLine height="16px" />
              <SkeletonLine width="92%" height="16px" />
              <SkeletonLine width={i % 2 === 0 ? "75%" : "88%"} height="16px" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
