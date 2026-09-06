export function Skeleton({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return <div className={`skeleton${className ? ` ${className}` : ""}`} style={style} />;
}

export function SkeletonLine({
  width = "100%",
  height,
}: {
  width?: string | number;
  height?: string | number;
}) {
  return (
    <div
      className="skeleton skeleton-text skeleton-line"
      style={{ width, height }}
    />
  );
}
