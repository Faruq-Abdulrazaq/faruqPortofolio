export function Spinner({ className }: { className?: string }) {
  return <span className={`spinner${className ? ` ${className}` : ""}`} aria-hidden />;
}
