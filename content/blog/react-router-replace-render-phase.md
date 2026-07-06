---
title: "Why my auth guard worked for months, then warned on logout"
description: "A router redirect sitting inside a normal-looking auth check violated React's render rules — and only surfaced on the one flow that hit it live."
date: "2026-07-10"
tags: ["React", "Next.js", "Auth"]
---

The guard looked completely reasonable:

```tsx
if (!user || !isAdmin) {
  if (typeof window !== "undefined") router.replace("/admin/login");
  return null;
}
```

It shipped fine. Nobody hit an issue — until logout, when the browser console showed:

```
Cannot update a component (`Router`) while rendering a different component (`AdminShell`).
```

## The problem

`router.replace()` triggers a state update inside the router component. Calling it synchronously, inline, inside another component's render function means React is being asked to update one component's state while a different component is still mid-render — a violation of React's render-phase purity rules (a render function should be a pure calculation of UI, with no side effects like triggering someone else's state update).

It didn't show up on initial page load because a `loading` flag was still `true` at that point, so the branch never executed during the first render. It only triggered on logout, the one moment `user` transitions to `null` while the app is actively mid-render — the exact scenario the rule exists for.

## The fix

Move the navigation into an effect, which runs after render completes:

```tsx
useEffect(() => {
  if (!loading && (!user || !isAdmin) && pathname !== "/admin/login") {
    router.replace("/admin/login");
  }
}, [loading, user, isAdmin, pathname, router]);

if (!user || !isAdmin) return null;
```

The render path stays pure — it just returns `null`. The side effect (navigation) is now explicitly scheduled for after rendering, where React allows it.

## Why it matters

This class of bug is sneaky because it depends on which branch a render happens to hit, not on any specific input value. It survived months of normal usage because the danger branch only fires during logout — a targeted, low-frequency, easy-to-skip-in-testing flow. It's also easy to miss in development because React's StrictMode double-invoke can sometimes mask exactly this kind of ordering issue. The fix is a good reminder that anything that changes external state — navigation, subscriptions, data writes — belongs in an effect, not inline in the render body, even when it "looks like a normal early return."
