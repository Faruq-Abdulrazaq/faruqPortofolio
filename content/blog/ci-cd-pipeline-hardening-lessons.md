---
title: "CI/CD pipeline hardening"
description: "A good chunk of this year went into hardening GitLab CI pipelines that touch real infrastructure."
date: "2026-07-25"
tags: ["GitLab CI", "CI/CD", "Reliability"]
---

A good chunk of this year went into hardening GitLab CI pipelines that touch real infrastructure — retries, idempotency, cleanup steps that run whether the job succeeds or fails.

The pattern I keep coming back to: a pipeline that only works when everything goes right isn't done yet.
