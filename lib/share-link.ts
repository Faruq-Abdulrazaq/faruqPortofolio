/** Shares a link the way people expect on each device: the native share sheet
 * on phones, "copy link" on desktop (browsers there also expose
 * navigator.share, but it opens an OS dialog nobody wants for a URL). */
export async function shareLink(
  title: string,
  url: string,
): Promise<"shared" | "copied" | "cancelled" | "manual"> {
  const touch = window.matchMedia?.("(pointer: coarse)").matches;
  if (touch && navigator.share) {
    try {
      await navigator.share({ title, url });
      return "shared";
    } catch (err) {
      if (err instanceof DOMException && err.name === "AbortError") return "cancelled";
    }
  }
  try {
    await navigator.clipboard.writeText(url);
    return "copied";
  } catch {
    window.prompt("Copy this link:", url);
    return "manual";
  }
}
