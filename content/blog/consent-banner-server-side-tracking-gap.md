---
title: "Consent banners are a UI checkbox until you trace the data path"
description: "Adding server-side conversion tracking for an e-commerce client's checkout meant revisiting a cookie banner shipped weeks earlier — and finding it didn't cover half the tracking."
date: "2026-08-10"
tags: ["Privacy", "Next.js", "API Routes"]
---

We added server-side conversion tracking for an ad platform on an e-commerce client's checkout flow — a legitimate, common pattern: browser-based ad pixels miss a meaningful share of real events (ad blockers, Safari's Intelligent Tracking Prevention), so the fix is to also fire a server-to-server "Events API" call for the same purchase, tagged with a shared event ID so the ad platform can de-duplicate the two into a single counted conversion.

## The problem

The site already had a cookie consent banner, built weeks earlier, that gated the *browser-side* pixel call behind a `hasConsent()` check reading a localStorage flag:

```ts
if (hasConsent()) {
  ttq.track("CompletePayment", payload);
}
```

The new server-side call had no such gate. It fired unconditionally on every purchase, registration, and order event — shipping the visitor's IP address and user agent to a third party regardless of what they'd actually chosen in the banner.

There was a second, smaller issue in the same code: the `event_id` generated for de-duplication (something like `purchase-${id}-${timestamp}`) was only ever passed to the server-side call. The matching browser-side call never received the same ID, so even in the cases where both fired, the ad platform had no way to recognize them as the same event and merge them.

## Why it matters

It's easy to treat a consent banner as something you build once and consider "done" — a UI component with a yes/no state. But consent is really a data-flow contract: every code path that touches tracked data needs to respect it, including paths that never render in the browser at all. A backend API route calling a third-party service is exactly the kind of place that's easy to forget when you're thinking about "the tracking code" as the pixel snippet in the page source.

The fix in both cases is straightforward once identified: gate the server call behind the same consent check (passed through from the client request, since a server route has no direct access to localStorage), and generate the shared event ID once, passing it to both calls. The harder part is the habit it points to — treating compliance as something to verify end-to-end per code path, not something a banner "handles" by existing.
