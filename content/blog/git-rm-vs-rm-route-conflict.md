---
title: "rm deletes a file. It does not delete it from git."
description: "The live site showed the framework's default starter page. Nothing to do with the framework, the host, or environment variables."
date: "2026-07-14"
tags: ["Next.js", "Git", "Deployment"]
---

I moved my homepage into a route-group folder (a Next.js App Router feature — folders wrapped in parentheses organize files without changing the URL). Locally, everything worked. I deployed, and the live site showed the framework's untouched default starter page instead.

## The problem

The old default page still lived at the app's root path. I'd deleted it from my local filesystem with a plain `rm` at some point — but I never ran `git rm`, and never committed the deletion. Locally, the file was gone, so my dev server never saw the conflict. In the actual git repository, it was still there.

The deploy host builds from the repository, not from my laptop's filesystem. So it had two files resolving to the same URL: the route-group homepage, and the old default page that I *thought* I'd already removed three commits ago. With both present, the framework served the one outside the route group — the default page.

## The fix

```bash
git rm src/app/page.tsx
git commit -m "fix: remove default page still tracked in git"
```

## Why it matters

Route groups are intentionally invisible to the URL — that's the whole feature. It's also exactly what makes this bug easy to miss: two files at different-looking paths can resolve to the same route, and there's no local signal that one of them is a leftover you thought you'd already deleted. The actual root cause wasn't a framework quirk at all — it was assuming a local `rm` and a tracked deletion are the same action. They're not, and the gap between them only becomes visible once something else (a host building from the repo, a teammate pulling) sees the file you thought was gone.
