---
layout: page
title: "CRetor: Mandarin Counter-Speech Dataset"
description: An Elo-based scoring model for LLM fine-tuning on counter-speech
importance: 3
category: work
related_publications: true
---

**Stack:** LLaMA-4, DeepSeek, Python
**Timeline:** May 2025, Jul 2025

CRetor is a Mandarin counter-speech dataset built for LLM fine-tuning. The dataset and methodology are described in the paper {% cite chen2025cretor %}, submitted to ACL Rolling Review (ARR).

### What I built

Human preference data for counter-speech quality is naturally binary (this response is better than that one), but binary labels throw away a lot of signal. I designed an Elo-based scoring model that converts binary human preference labels into a continuous 0-10 scale, giving a much richer training signal than the raw pairwise comparisons.

I integrated the resulting scores into fine-tuning pipelines for both LLaMA-4 and DeepSeek, and personally annotated 450 dialogue responses to help build out the dataset.
