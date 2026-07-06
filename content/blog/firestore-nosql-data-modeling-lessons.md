---
title: "Firestore and NoSQL data modeling"
description: "Spent time this year working with Firestore in production — transactions, security rules, and staying consistent under concurrent writes."
date: "2026-08-02"
tags: ["Firestore", "NoSQL", "Data Modeling"]
---

Spent time this year working with Firestore in production — transactions, security rules, structuring data for a system that has to stay consistent under real concurrent writes.

Coming from relational databases, the biggest adjustment was realizing consistency guarantees you get "for free" in SQL sometimes have to be built by hand in a document store.
