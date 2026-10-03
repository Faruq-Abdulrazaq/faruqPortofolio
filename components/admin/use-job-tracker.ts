"use client";

import { useEffect, useRef, useState } from "react";
import type { Job } from "@/types/podcast";

/** Polls generation jobs until each one settles, then reports it. Start from
 * jobs that were already running when the page loaded, and `track` new ones. */
export function useJobTracker(
  jobUrlBase: string,
  initial: string[],
  onSettled: (job: Job) => void,
) {
  const [ids, setIds] = useState<string[]>(initial);
  const settled = useRef(onSettled);
  settled.current = onSettled;

  useEffect(() => {
    if (ids.length === 0) return;
    const timer = setInterval(async () => {
      for (const id of ids) {
        const res = await fetch(`${jobUrlBase}/${id}`);
        if (!res.ok) continue;
        const job = (await res.json()) as Job;
        if (job.status === "done" || job.status === "error") {
          setIds((cur) => cur.filter((x) => x !== id));
          settled.current(job);
        }
      }
    }, 4000);
    return () => clearInterval(timer);
  }, [ids, jobUrlBase]);

  return {
    ids,
    track: (id: string) => setIds((cur) => (cur.includes(id) ? cur : [...cur, id])),
  };
}
