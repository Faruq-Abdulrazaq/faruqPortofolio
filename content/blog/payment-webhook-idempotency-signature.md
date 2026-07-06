---
title: "The two lines that separate a webhook demo from a webhook that survives production"
description: "Payment webhooks fire more than once for the same event. Design for it, or your customer gets charged and your order gets duplicated."
date: "2026-08-04"
tags: ["Payments", "Webhooks", "API Design"]
---

A webhook handler for a payment provider looks trivial on the surface: receive JSON, mark the order paid. Two details make the difference between that working in a demo and working in production.

## 1. Verify the signature against the raw body

Payment providers sign the exact bytes they sent, using a secret only your server knows (HMAC-SHA512 in this case). If you parse the request body into JSON first and verify against the *re-serialized* object, you're no longer verifying the actual bytes that were signed — whitespace, key order, or number formatting differences can break verification, or worse, silently pass when they shouldn't. The handler reads the raw body, verifies the signature against those exact bytes, and only parses JSON after verification succeeds.

## 2. Assume you'll get the same event twice

Payment providers retry webhooks — a network blip, a slow response, an infrastructure hiccup, and you'll get the same "payment succeeded" event again. Meanwhile the client-side callback (the browser redirect after a successful payment) can also try to mark the order paid, racing the webhook. Without an idempotency check, you risk double-processing: sending a second confirmation email, decrementing stock twice, or worse.

The fix is one guard clause:

```ts
if (order.paymentStatus === "PAID") {
  return NextResponse.json({ received: true }, { status: 200 });
}
```

Return success immediately, do nothing else. The provider sees a 200 and stops retrying; the order is untouched because it was already correct.

## Why it matters

Neither of these is complicated — they're each a few lines. But both only occur to you once you've actually operated a webhook in production and watched a provider genuinely retry, or once you've thought carefully about what "signature verification" actually means at the byte level. It's the difference between code that works when you test it once, and code that's correct under the conditions webhooks actually run in.
