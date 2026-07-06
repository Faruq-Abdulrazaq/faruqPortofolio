---
title: "Kubernetes disaster recovery"
description: "Got deep into Kubernetes backup and recovery this year — Velero, MinIO, and restore automation triggered through CI."
date: "2026-07-21"
tags: ["Kubernetes", "Velero", "MinIO"]
---

Got deep into Kubernetes backup and recovery this year — Velero for backup/restore orchestration, MinIO as the object storage backend, restore automation triggered through CI.

What surprised me most: "did the restore succeed" is rarely a yes/no question. Partial success is a real, common state, and treating it as a binary breaks the moment you actually need the tooling during an incident.
