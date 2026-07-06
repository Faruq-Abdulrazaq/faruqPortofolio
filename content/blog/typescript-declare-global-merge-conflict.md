---
title: "declare global means global — even across files that don't import each other"
description: "A route rename looked complete the moment every file moved. Two commits later, CI failed on a file that had nothing to do with the rename."
date: "2026-07-19"
tags: ["TypeScript", "Next.js", "CI/CD"]
---

A large rename — a dozen-plus files and routes moved from one naming scheme to another — looked complete the moment every file moved and every import resolved. The build passed locally. Two commits later, a CI build failed on the deploy host with a TypeScript error (`TS2717: Subsequent property declarations must have the same type`) pointing at a file that had nothing to do with the rename.

## The problem

A third-party payment widget's inline script isn't typed, so a common pattern is to hand-declare its shape on `Window`:

```ts
declare global {
  interface Window {
    PaystackPop: { setup(config: SomeShape): { openIframe(): void } };
  }
}
```

One page already had this declaration, written to type the widget for its own use. A new page, added under the renamed route tree as part of the same body of work, declared the *same* global with a slightly different config shape — different enough that TypeScript's declaration merging (which allows multiple `declare global` blocks to combine, as long as they agree) rejected it as a conflict.

Locally, whichever file TypeScript happened to check first didn't surface the conflict in the fast dev-mode check. The deploy host's full build does a complete type-check across the whole project, which is where the conflicting declarations collided.

## The fix

Delete the duplicate declaration from the new file and let it rely on the existing one — there's only ever one true shape for `Window.PaystackPop` in the app, so there should only be one declaration of it.

## Why it matters

`declare global` is easy to reach for per-file, especially for typing an untyped third-party script — it feels local because it's declared in the file you're editing. But it isn't local at all; it patches a genuinely global type, and every other declaration of the same global in the project has to agree with it exactly. The actual fix is organizational: third-party global types belong in one shared `.d.ts` file, written once, imported implicitly everywhere — not copy-pasted into whichever page happens to need the widget next.
