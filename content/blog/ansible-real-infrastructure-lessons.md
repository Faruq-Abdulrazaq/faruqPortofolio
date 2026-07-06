---
title: "Ansible for real infrastructure, not just demos"
description: "Spent time this year writing Ansible for tasks with real consequences — remote account management and service restarts on live boxes."
date: "2026-07-17"
tags: ["Ansible", "Automation", "SSH"]
---

Spent time this year writing Ansible for tasks with real consequences — remote account management, service restarts on boxes I was actively connected to.

The lesson that stuck: automation touching your own access path (SSH, auth) needs to be asynchronous and reversible by design — "did it work" can't depend on the exact session you just modified.
