---
layout: page
title: Muted
description: AI-first English speaking practice app, solo-built end to end
permalink: /projects/muted/
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

### Try it: what a correction pass looks like

A scripted mock of the grammar-correction mechanic, not a live call to the app or the DeepSeek API. Pick a sentence a learner might actually type mid-practice.

<div id="muted-demo" class="muted-demo-widget">
  <div class="muted-demo-picks" id="muted-demo-picks"></div>
  <div class="muted-demo-output" id="muted-demo-output">
    <span class="muted-demo-placeholder">Pick a sentence above to see the correction.</span>
  </div>
</div>

<style>
  .muted-demo-widget {
    margin-top: 1.5rem;
    padding: 1.25rem;
    border: 1px solid var(--global-divider-color);
    border-radius: 0.5rem;
    background: var(--global-card-bg-color);
  }
  .muted-demo-picks {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }
  .muted-demo-pick {
    background: transparent;
    color: var(--global-text-color);
    border: 1px solid var(--global-divider-color);
    border-radius: 1rem;
    padding: 0.4rem 0.85rem;
    font-size: 0.85rem;
    cursor: pointer;
    text-align: left;
  }
  .muted-demo-pick:hover,
  .muted-demo-pick.is-active {
    border-color: var(--global-theme-color);
    color: var(--global-theme-color);
  }
  .muted-demo-placeholder {
    color: var(--global-text-color-light);
    font-size: 0.9rem;
  }
  .muted-demo-line {
    margin-bottom: 0.6rem;
    font-size: 0.95rem;
  }
  .muted-demo-line .muted-demo-tag {
    display: inline-block;
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: var(--global-text-color-light);
    margin-right: 0.5rem;
  }
  .muted-demo-strike {
    text-decoration: line-through;
    opacity: 0.6;
  }
  .muted-demo-fix {
    color: var(--global-theme-color);
    font-weight: 600;
  }
  .muted-demo-tip {
    font-size: 0.85rem;
    color: var(--global-text-color-light);
    margin-top: 0.5rem;
  }
</style>

<script>
  (function () {
    var widget = document.getElementById("muted-demo");
    if (!widget) return;

    var examples = [
      {
        label: "“I am living here since three years”",
        original: "I am living here since three years.",
        fixFrom: "am living",
        fixTo: "have been living",
        tip: "Duration up to now (“since/for X”) needs present perfect continuous, not present continuous.",
      },
      {
        label: "“She suggested me to go”",
        original: "She suggested me to go early.",
        fixFrom: "suggested me to go",
        fixTo: "suggested that I go",
        tip: "“Suggest” doesn't take an object + infinitive in standard English; use “suggest that” or “suggest doing.”",
      },
      {
        label: "“The informations are wrong”",
        original: "The informations are wrong.",
        fixFrom: "informations are",
        fixTo: "information is",
        tip: "“Information” is an uncountable noun in English: no plural, singular verb.",
      },
      {
        label: "“I look forward to hear from you”",
        original: "I look forward to hear from you.",
        fixFrom: "to hear",
        fixTo: "to hearing",
        tip: "“Look forward to” is followed by a gerund (–ing), since “to” here is a preposition, not part of an infinitive.",
      },
    ];

    var picksEl = document.getElementById("muted-demo-picks");
    var outputEl = document.getElementById("muted-demo-output");

    examples.forEach(function (ex, i) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "muted-demo-pick";
      btn.textContent = ex.label;
      btn.addEventListener("click", function () {
        [].forEach.call(picksEl.children, function (c) { c.classList.remove("is-active"); });
        btn.classList.add("is-active");
        show(ex);
      });
      picksEl.appendChild(btn);
    });

    function show(ex) {
      var highlighted = ex.original.replace(
        ex.fixFrom,
        '<span class="muted-demo-strike">' + ex.fixFrom + "</span> → <span class=\"muted-demo-fix\">" + ex.fixTo + "</span>"
      );
      outputEl.innerHTML =
        '<div class="muted-demo-line"><span class="muted-demo-tag">You said</span>' + ex.original + "</div>" +
        '<div class="muted-demo-line"><span class="muted-demo-tag">Tutor flags</span>' + highlighted + "</div>" +
        '<div class="muted-demo-tip">' + ex.tip + "</div>";
    }
  })();
</script>
