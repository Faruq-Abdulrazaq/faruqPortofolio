/** A small "here's what this should look like" link next to a script/JSON
 * field, for a first-time user with no idea what format is expected. */
export function SampleDownload({ href, label }: { href: string; label: string }) {
  return (
    <span className="sample-download">
      New here? <a href={href} download>Download {label}</a> to see the expected format.
    </span>
  );
}
