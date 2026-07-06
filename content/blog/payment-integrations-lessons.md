---
title: "Payment integrations"
description: "Built and shipped several production payment integrations this year — checkout flows, webhook handling, and signature verification."
date: "2026-08-07"
tags: ["Payments", "API Design"]
---

Built and shipped several production payment integrations this year — checkout flows, webhook handling, signature verification.

What you don't learn from a tutorial: webhooks are not "an event that happens once." Production-grade payment code has to assume every event can arrive twice, out of order, or not at all — and still end up in a correct state.
