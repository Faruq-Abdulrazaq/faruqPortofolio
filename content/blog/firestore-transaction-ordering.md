---
title: "Firestore transactions don't tell you the rule you just broke"
description: "A stock-decrement function passed code review and every single-item test. It only broke once a real customer put two items in their cart."
date: "2026-07-07"
tags: ["Firestore", "Concurrency", "Node.js"]
---

I had a `decrementProductStock` function that looked completely normal:

```ts
for (const item of items) {
  const ref = doc(db, "products", item.productId);
  const snap = await txn.get(ref);
  txn.update(ref, { stock: snap.data().stock - item.qty });
}
```

It passed code review. It passed manual testing — because every test checkout had exactly one item in the cart.

## The problem

Firestore transactions have a hard rule: all reads must complete before any write is issued. My loop violated that the moment a second item was involved — read A, write A, read B — that second read happens *after* a write has already gone out inside the same transaction. Firestore throws a `FirebaseError` at that point, with a message that doesn't obviously point back to "you interleaved reads and writes."

With a single-item cart, this never triggers, because there's only one read and one write, in order. It's a bug that's invisible until someone buys more than one product — which, for an e-commerce store, is most real customers.

## The fix

Two-phase transaction: gather every read up front, then do every write.

```ts
const refs = items.map((item) => doc(getDb(), COL.products, item.productId));
const snaps = await Promise.all(refs.map((ref) => txn.get(ref)));

snaps.forEach((snap, i) => {
  const item = items[i];
  txn.update(refs[i], { stock: snap.data().stock - item.qty });
});
```

All reads resolve first via `Promise.all`, then the write loop runs with no interleaving.

## Why it matters

This is the kind of bug that survives a demo, survives a code review, and survives QA if QA only ever tests one item at a time. It only shows up under real usage patterns — which is exactly the case that matters most in production. The lesson: when a data-layer API has an ordering contract (reads-before-writes, in this case), test the multi-item / multi-write path explicitly, not just the happy single-item path.
