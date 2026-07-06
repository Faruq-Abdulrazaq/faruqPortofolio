---
title: "Two mobile bugs, one root cause: designed for a viewport that's always tall enough"
description: "A checkout modal shipped looking complete on desktop. Two separate bugs only showed up on an actual phone."
date: "2026-07-22"
tags: ["Tailwind CSS", "Mobile UX", "Responsive Design"]
---

A checkout flow shipped looking complete — reviewed on a desktop browser, everything visible, nothing clipped. Two separate bugs only showed up on an actual phone.

## Bug one: the mobile nav menu

The mobile menu had no scroll container of its own. If the list of nav links was taller than the visible screen height, the links past that point were simply unreachable — no scrollbar, no indication anything was cut off, just links that didn't exist as far as a phone user could tell.

## Bug two: the checkout modal

A separate campaign's checkout modal used `items-center` and a fixed `max-w-lg` unconditionally. On desktop this centers a nicely-proportioned dialog. On a 375px-wide phone screen, it centered a desktop-shaped dialog vertically too — which, combined with the on-screen keyboard taking up the bottom half of the viewport once a user tapped an input, pushed the submit button out of view entirely.

## The fix

For the nav: give the mobile drawer its own flex layout with an independent scroll region.

```css
.mobile-drawer { display: flex; flex-direction: column; }
.mobile-drawer-content { overflow-y: auto; flex: 1; }
```

For the modal: rebuild it as a responsive bottom sheet — anchored to the bottom edge on small screens, centered like a normal dialog from the `sm:` breakpoint up.

```
items-end sm:items-center
rounded-t-2xl sm:rounded-2xl
```

A drag-handle bar shown only below the `sm:` breakpoint reinforces the bottom-sheet affordance, and the form grid collapses from two columns to one on small screens so fields aren't squeezed.

## Why it matters

Both bugs trace back to the same habit: building and reviewing on a desktop browser, where generous viewport height and width hide layout assumptions that don't hold on a phone. `items-center` inside a fixed-height container is invisible as a problem until the container is actually shorter than its content — which a desktop browser window rarely is, and a phone screen (especially with a keyboard open) very often is. The fix pattern here — a native-feeling bottom sheet built from a plain `div` with a couple of responsive utility classes — is a cheap way to get app-like mobile behavior without reaching for a UI library, but it only happens if someone actually opens the page on a real small screen instead of shrinking a desktop window.
