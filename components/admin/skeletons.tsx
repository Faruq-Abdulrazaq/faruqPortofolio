import { Skeleton, SkeletonLine } from "@/components/ui/skeleton";

export function AdminPageHeadSkeleton() {
  return (
    <div className="admin-page-head">
      <Skeleton style={{ width: "180px", height: "26px" }} />
      <Skeleton style={{ width: "120px", height: "36px", borderRadius: "10px" }} />
    </div>
  );
}

export function AdminTableSkeleton({
  columns,
  rows = 5,
}: {
  columns: number;
  rows?: number;
}) {
  return (
    <div className="admin-table-wrap">
      {Array.from({ length: rows }).map((_, row) => (
        <div
          key={row}
          className="skeleton-table-row"
          style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
        >
          {Array.from({ length: columns }).map((_, col) => (
            <SkeletonLine key={col} width={col === 0 ? "70%" : "50%"} />
          ))}
        </div>
      ))}
    </div>
  );
}

export function AdminFormSkeleton({ fields = 4 }: { fields?: number }) {
  return (
    <div className="admin-card">
      {Array.from({ length: fields }).map((_, i) => (
        <div className="field" key={i} style={i > 0 ? { marginTop: "16px" } : undefined}>
          <SkeletonLine width="80px" height="12px" />
          <Skeleton style={{ marginTop: "8px", height: "40px", width: "100%" }} />
        </div>
      ))}
      <div style={{ marginTop: "22px", display: "flex", gap: "10px" }}>
        <Skeleton style={{ width: "120px", height: "40px", borderRadius: "10px" }} />
        <Skeleton style={{ width: "90px", height: "40px", borderRadius: "10px" }} />
      </div>
    </div>
  );
}

export function InvoiceDocumentSkeleton() {
  return (
    <div className="invoice-doc">
      <div className="invoice-head">
        <div>
          <SkeletonLine width="70px" height="11px" />
          <Skeleton style={{ marginTop: "10px", width: "140px", height: "24px" }} />
        </div>
        <div style={{ textAlign: "right" }}>
          <Skeleton style={{ width: "150px", height: "16px", marginLeft: "auto" }} />
          <Skeleton style={{ marginTop: "8px", width: "180px", height: "13px", marginLeft: "auto" }} />
        </div>
      </div>

      <div className="invoice-parties">
        <div>
          <SkeletonLine width="60px" height="11px" />
          <Skeleton style={{ marginTop: "8px", width: "120px", height: "16px" }} />
          <Skeleton style={{ marginTop: "6px", width: "160px", height: "13px" }} />
        </div>
        <div style={{ textAlign: "right" }}>
          <Skeleton style={{ width: "140px", height: "13px", marginLeft: "auto" }} />
          <Skeleton style={{ marginTop: "8px", width: "140px", height: "13px", marginLeft: "auto" }} />
        </div>
      </div>

      <div style={{ marginTop: "24px" }}>
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} style={{ display: "flex", gap: "16px", padding: "10px 0" }}>
            <Skeleton style={{ height: "14px", flex: 3 }} />
            <Skeleton style={{ height: "14px", flex: 1 }} />
            <Skeleton style={{ height: "14px", flex: 1 }} />
            <Skeleton style={{ height: "14px", flex: 1 }} />
          </div>
        ))}
      </div>
    </div>
  );
}
