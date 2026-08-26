---
layout: page
title: "CRetor: Mandarin Counter-Speech Dataset"
description: An Elo-based scoring model for LLM fine-tuning on counter-speech
permalink: /projects/cretor/
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

### Try it: the scoring mechanism

A small live demo of the core idea, not the actual dataset or production weights. Two candidate responses start tied at 5.0. Pick the one you'd judge as the better counter-speech response, and both scores update the way a binary preference vote nudges an Elo-style rating.

<div id="elo-demo" class="elo-demo-widget">
  <div class="elo-demo-cards">
    <div class="elo-demo-card">
      <div class="elo-demo-card-title">Response A</div>
      <div class="elo-demo-score" id="elo-score-a">5.0</div>
      <button type="button" id="elo-pick-a" class="elo-demo-button">This one was better</button>
    </div>
    <div class="elo-demo-card">
      <div class="elo-demo-card-title">Response B</div>
      <div class="elo-demo-score" id="elo-score-b">5.0</div>
      <button type="button" id="elo-pick-b" class="elo-demo-button">This one was better</button>
    </div>
  </div>
  <div class="elo-demo-footer">
    <span id="elo-demo-status" role="status" aria-live="polite">No votes yet.</span>
    <button type="button" id="elo-demo-reset" class="elo-demo-reset">Reset</button>
  </div>
</div>

<style>
  .elo-demo-widget {
    margin-top: 1.5rem;
    padding: 1.25rem;
    border: 1px solid var(--global-divider-color);
    border-radius: 0.5rem;
    background: var(--global-card-bg-color);
  }
  .elo-demo-cards {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-bottom: 1rem;
  }
  @media (min-width: 600px) {
    .elo-demo-cards {
      grid-template-columns: 1fr 1fr;
    }
  }
  .elo-demo-card {
    text-align: center;
    padding: 1rem;
    border: 1px solid var(--global-divider-color);
    border-radius: 0.4rem;
  }
  .elo-demo-card-title {
    font-size: 0.85rem;
    color: var(--global-text-color-light);
    margin-bottom: 0.5rem;
  }
  .elo-demo-score {
    font-size: 2rem;
    font-weight: 600;
    color: var(--global-theme-color);
    margin-bottom: 0.75rem;
    font-variant-numeric: tabular-nums;
  }
  .elo-demo-button {
    background: transparent;
    color: var(--global-text-color);
    border: 1px solid var(--global-theme-color);
    border-radius: 0.35rem;
    padding: 0.4rem 0.75rem;
    font-size: 0.85rem;
    cursor: pointer;
  }
  .elo-demo-button:hover {
    background: var(--global-theme-color);
    color: var(--global-bg-color);
  }
  .elo-demo-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.75rem;
    font-size: 0.85rem;
    color: var(--global-text-color-light);
  }
  .elo-demo-reset {
    background: none;
    border: none;
    color: var(--global-text-color-light);
    text-decoration: underline;
    cursor: pointer;
    font-size: 0.85rem;
    padding: 0;
  }
</style>

<script>
  (function () {
    var widget = document.getElementById("elo-demo");
    if (!widget) return;

    var K = 1.2;
    var votes = 0;
    var scoreA = 5.0;
    var scoreB = 5.0;

    var scoreAEl = document.getElementById("elo-score-a");
    var scoreBEl = document.getElementById("elo-score-b");
    var statusEl = document.getElementById("elo-demo-status");

    function clamp(x) {
      return Math.max(0, Math.min(10, x));
    }

    function render() {
      scoreAEl.textContent = scoreA.toFixed(1);
      scoreBEl.textContent = scoreB.toFixed(1);
    }

    function vote(winnerIsA) {
      var expectedA = 1 / (1 + Math.pow(10, (scoreB - scoreA) / 4));
      var actualA = winnerIsA ? 1 : 0;
      var delta = K * (actualA - expectedA);
      scoreA = clamp(scoreA + delta);
      scoreB = clamp(scoreB - delta);
      votes++;
      render();
      statusEl.textContent = "Vote " + votes + ": " + (winnerIsA ? "Response A" : "Response B") + " preferred, scores adjusted by ±" + Math.abs(delta).toFixed(2) + ".";
    }

    document.getElementById("elo-pick-a").addEventListener("click", function () { vote(true); });
    document.getElementById("elo-pick-b").addEventListener("click", function () { vote(false); });
    document.getElementById("elo-demo-reset").addEventListener("click", function () {
      scoreA = 5.0;
      scoreB = 5.0;
      votes = 0;
      render();
      statusEl.textContent = "No votes yet.";
    });
  })();
</script>
