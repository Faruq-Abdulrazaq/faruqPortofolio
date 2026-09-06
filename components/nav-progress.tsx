"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

function isInternalNavigationClick(event: MouseEvent) {
  if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
    return false;
  }
  const anchor = (event.target as HTMLElement | null)?.closest("a");
  if (!anchor) return false;
  if (anchor.hasAttribute("download")) return false;
  if (anchor.target && anchor.target !== "_self") return false;

  const href = anchor.getAttribute("href");
  if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return false;
  }

  let url: URL;
  try {
    url = new URL(href, window.location.href);
  } catch {
    return false;
  }
  if (url.origin !== window.location.origin) return false;
  if (url.pathname === window.location.pathname && url.search === window.location.search) {
    return false;
  }
  return true;
}

export function NavProgress() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const tickRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const navigatingRef = useRef(false);

  useEffect(() => {
    function start() {
      if (navigatingRef.current) return;
      navigatingRef.current = true;
      setVisible(true);
      setProgress(15);
      tickRef.current = setInterval(() => {
        setProgress((p) => (p < 85 ? p + (85 - p) * 0.15 : p));
      }, 200);
    }

    function onClick(event: MouseEvent) {
      if (isInternalNavigationClick(event)) start();
    }

    document.addEventListener("click", onClick);
    window.addEventListener("popstate", start);
    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("popstate", start);
    };
  }, []);

  useEffect(() => {
    if (!navigatingRef.current) return;
    navigatingRef.current = false;
    if (tickRef.current) {
      clearInterval(tickRef.current);
      tickRef.current = null;
    }
    setProgress(100);
    const hide = setTimeout(() => {
      setVisible(false);
      setProgress(0);
    }, 300);
    return () => clearTimeout(hide);
    // Re-run whenever the route actually finishes changing.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, searchParams]);

  return (
    <div
      aria-hidden
      className="nav-progress"
      style={{ width: `${progress}%`, opacity: visible ? 1 : 0 }}
    />
  );
}
