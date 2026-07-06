---
title: "Enterprise infrastructure automation"
description: "Spent time this year building automation that rotates privileged credentials across enterprise infrastructure platforms, including NSX-T."
date: "2026-07-09"
tags: ["NSX-T", "Automation", "Infrastructure"]
---

Spent time this year building automation that rotates privileged credentials across enterprise infrastructure platforms — VMware NSX-T among them, alongside hypervisors, out-of-band management controllers, and container registries.

The biggest lesson: assume nothing is symmetric. Every vendor's API has its own idea of what "reset an account" means, and the platforms that look most similar on paper are often the ones with the sharpest edge cases.
