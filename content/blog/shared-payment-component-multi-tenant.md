---
title: "Reusing one component across three business lines — and where that stops being free"
description: "A payment component built for a nonprofit client's donation campaign ended up handling checkout for two unrelated business lines, through a single new prop."
date: "2026-07-30"
tags: ["React", "Component Design", "Firestore"]
---

A payment component was originally built for a single purpose: handling checkout for a donation campaign for a nonprofit client. It needed to know which database collection to write the resulting order into, and since there was only one use case at the time, that logic was a simple ternary baked directly into the component:

```ts
const collection = isFromDonation ? "donations" : "store_orders";
```

Later, the same component got reused for a second use case (a general storefront), which the ternary already covered. Then a third, unrelated retail campaign needed checkout — and needed its own separate order collection, distinct from either existing branch.

## The problem

The ternary had exactly two branches. A third destination meant either extending the ternary again (three special cases hardcoded into a component meant to be general-purpose) or finding another way to let the caller decide.

## The fix

An optional override prop, checked before the original ternary:

```tsx
<PaymentCheckout collectionOverride="campaign_c_orders" ... />
```

```ts
const collection = collectionOverride ?? (isFromDonation ? "donations" : "store_orders");
```

The new campaign passes its own collection name explicitly; the original two use cases are untouched.

## Why it matters

This is a genuinely reasonable way to grow a shared component under time pressure — add exactly the escape hatch the new case needs, don't rewrite the world. It works cleanly at three destinations. The thing worth watching is the trend line: each new use case so far has added another prop-driven branch rather than prompting a rewrite. That's fine as a deliberate, incremental choice — it only becomes a problem if a fourth or fifth use case shows up and the component becomes a pile of conditionally-relevant props instead of a small number of well-named variants (a strategy-pattern-style split, one config object per use case, would be the natural next step if that happens). The interesting part isn't the bug — there wasn't one — it's the judgment call of when "just add a prop" stops being the right answer.
