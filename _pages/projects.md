---
layout: page
title: projects
permalink: /projects/
description: Things I have built end to end, from idea to shipped product.
nav: true
nav_order: 2
---

<link rel="stylesheet" href="{{ '/assets/css/tom.css' | relative_url }}">

<p class="tom-lede">
Three builds where a clean idea ran into a messy constraint, which is usually where
the interesting part of a project starts.
</p>

<div class="tom-cards">
  <article class="tom-card">
    <img class="tom-card-art" src="{{ '/assets/svg/project-muted.svg' | relative_url }}" width="600" height="280" loading="lazy"
         alt="A speech bubble with a voice waveform inside, next to a cost line that drops steeply.">
    <div class="tom-card-body">
      <h3><a href="{{ '/projects/muted/' | relative_url }}">Muted</a></h3>
      <p>
        An AI-first English speaking practice app for the Asian market, designed, built
        and shipped solo. Four tutor personas, live grammar correction, exam modes for
        IELTS, TOEFL and Gaokao. In beta with ten users.
      </p>
      <p class="tom-small tom-muted">
        The first voice pipeline cost about thirty cents a minute, which does not work
        for an app aimed at students. Rebuilding it around the browser's own speech API
        cut that by over ninety-five percent.
      </p>
      <ul class="tom-chips">
        <li class="tom-chip">Next.js 14</li>
        <li class="tom-chip">Supabase</li>
        <li class="tom-chip">Stripe</li>
        <li class="tom-chip tom-chip-warm">Solo build</li>
      </ul>
    </div>
  </article>

  <article class="tom-card">
    <img class="tom-card-art" src="{{ '/assets/svg/project-hoopalytics.svg' | relative_url }}" width="600" height="280" loading="lazy"
         alt="A basketball beside two columns of bars, one sorted and one still unsorted.">
    <div class="tom-card-body">
      <h3><a href="{{ '/projects/hoopalytics/' | relative_url }}">Hoopalytics</a></h3>
      <p>
        A sorting-algorithm comparison engine over five thousand scraped NBA data
        points. Merge sort and heap sort, both written from scratch, raced head to
        head, with a custom weighted player metric on top.
      </p>
      <p class="tom-small tom-muted">
        The only one of the three with public code.
      </p>
      <ul class="tom-chips">
        <li class="tom-chip">React and Vite</li>
        <li class="tom-chip">Django</li>
        <li class="tom-chip">Three-person team</li>
      </ul>
    </div>
  </article>

  <article class="tom-card">
    <img class="tom-card-art" src="{{ '/assets/svg/project-cretor.svg' | relative_url }}" width="600" height="280" loading="lazy"
         alt="Two speech bubbles facing each other above a sliding scale from zero to ten.">
    <div class="tom-card-body">
      <h3><a href="{{ '/projects/cretor/' | relative_url }}">CRetor</a></h3>
      <p>
        A Mandarin counter-speech dataset annotated for rhetorical strategy, built for
        fine-tuning. An Elo-based model turns binary human preferences into a
        continuous zero-to-ten score.
      </p>
      <p class="tom-small tom-muted">
        Submitted to ACL Rolling Review.
      </p>
      <ul class="tom-chips">
        <li class="tom-chip">LLaMA-4</li>
        <li class="tom-chip">DeepSeek</li>
        <li class="tom-chip">Dataset work</li>
      </ul>
    </div>
  </article>
</div>

<p class="tom-note">
  <strong>These are drawings, not screenshots.</strong> Each card shows an original
  illustration of what the project does, because I do not yet have product screenshots
  I am happy to publish. TODO: Tom swaps in real captures.
</p>

<h2>Coursework and smaller things</h2>

<p>
Not portfolio pieces, but they are public and they are mine. All on
<a href="https://github.com/Xiaoyu-Ch">github.com/Xiaoyu-Ch</a>.
</p>

<ul class="tom-small-list">
  <li>
    <a href="https://github.com/Xiaoyu-Ch/uf_school_graph"><strong>uf_school_graph</strong></a>
    &middot; C++. Graph project for COP3530.
  </li>
  <li>
    <a href="https://github.com/Xiaoyu-Ch/Minesweepers"><strong>Minesweepers</strong></a>
    &middot; C++ and SFML. Classic Minesweeper with a leaderboard, timer, debug mode
    and configurable board, with BFS reveal logic.
  </li>
  <li>
    <a href="https://github.com/Xiaoyu-Ch/CLI-image-processing"><strong>CLI-image-processing</strong></a>
    &middot; C++. Reads, manipulates and writes TGA files: blending algorithms, channel
    operations, a command line interface.
  </li>
  <li>
    <a href="https://github.com/Xiaoyu-Ch/Black-Jack"><strong>Black-Jack</strong></a>
    &middot; Python. Card game implementation from COP3502.
  </li>
</ul>
