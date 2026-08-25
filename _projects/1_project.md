---
layout: page
title: Muted
description: AI-first English speaking practice app, solo-built end to end
importance: 1
category: work
---

**Stack:** Next.js 14, Supabase (PostgreSQL), DeepSeek API, Web Speech API, Stripe
**Timeline:** 2026, present

Muted (also known as YaBaYingYu) is an AI-first English speaking practice app for the Asian market, solo-built end to end. It's currently in a 10-user beta.

### What it does

- 4 distinct AI tutor personas for varied practice styles
- Real-time grammar correction during speaking practice
- Spaced-repetition vocabulary review
- Exam-specific practice modes for IELTS, TOEFL, and Gaokao

### Cutting the voice pipeline's cost by 95%

The first version routed voice interactions through OpenAI's Realtime API. At scale, that pencils out to roughly $0.30 per minute of practice, which doesn't work for a consumer app aimed at students. I re-architected the pipeline around the browser-native Web Speech API for transcription paired with DeepSeek for text completion, cutting the per-minute cost from about $0.30 down to $0.01 to $0.02, a reduction of over 95%, while keeping the interaction feeling real-time.

### Finding and closing a privilege-escalation bug

During testing I found that a client-side database call let users self-upgrade their subscription tier without going through Stripe, since the tier field was writable directly from the client. I closed the gap with column-level permission controls at the database layer so tier changes can only happen through the paid checkout flow.
