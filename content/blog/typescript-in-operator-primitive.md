---
title: "as object didn't fix my type error — it just hid it"
description: "The function's declared signature and its actual runtime behavior had quietly diverged, and nothing caught it until a test exercised the string branch."
date: "2026-07-27"
tags: ["TypeScript", "Testing", "Vitest"]
---

`fmtDate()` had this signature:

```ts
function fmtDate(ts: Date | { seconds: number } | string) { ... }
```

And this implementation:

```ts
const d = ts instanceof Date
  ? ts
  : "seconds" in (ts as object)
    ? new Date((ts as any).seconds * 1000)
    : new Date(ts);
```

It compiled cleanly. Then I wrote a unit test passing a plain date string, and it threw immediately:

```
TypeError: Cannot use 'in' operator to search for 'seconds' in 2024-03-22
```

## The problem

The `in` operator requires an object on its right-hand side. A string is a primitive — `in` throws instead of returning `false`. TypeScript's `in`-based narrowing normally protects against this, but the `as object` cast told the compiler "trust me, this is an object," which silenced the type error without making the underlying value one. The declared function signature and the actual runtime behavior had quietly diverged, and nothing caught it until a test exercised the string branch.

## The fix

Check `typeof` before reaching for `in`:

```ts
const d = ts instanceof Date
  ? ts
  : typeof ts === "object" && "seconds" in ts
    ? new Date(ts.seconds * 1000)
    : new Date(ts);
```

Now the `in` check only ever runs on something that's actually an object, and TypeScript can narrow the type correctly without a cast.

## Why it matters

`as object` (and casts generally) are a common way to make TypeScript stop complaining when you're confident about a shape — but "stop complaining" and "correct" are different things. This bug only surfaced because a test exercised a code path the type signature promised but the implementation never actually handled. It's a good reminder that a passing `tsc` build tells you the code is internally consistent with its own casts — not that those casts were true.
