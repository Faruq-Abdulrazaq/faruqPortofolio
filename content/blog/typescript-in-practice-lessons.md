---
title: "TypeScript in practice, not just in theory"
description: "A year of writing TypeScript across several real codebases taught me that a green compiler is not the same thing as correct code."
date: "2026-08-05"
tags: ["TypeScript", "Software Design"]
---

A year of writing TypeScript across several real codebases taught me something the language itself won't: a green compiler is not the same thing as correct code. Casts, `any`, and "trust me" type assertions are where bugs go to hide.

Getting genuinely useful type safety is less about strict mode and more about discipline — narrowing types instead of asserting them.
