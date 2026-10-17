---
layout: about
title: about
permalink: /
subtitle: ML safety and reliability, and the engineering to go with it.

selected_papers: true
social: true

announcements:
  enabled: false # the timeline below is hand-rendered from _data/timeline.yml

latest_posts:
  enabled: false # blog has no posts yet
---

<link rel="stylesheet" href="{{ '/assets/css/tom.css' | relative_url }}">

<div class="tom-portrait">
  <img
    src="{{ '/assets/img/avatar.svg' | relative_url }}"
    width="800"
    height="800"
    fetchpriority="high"
    alt="An original illustrated monogram: a globe grid crossed by a dotted four-stop route, with the letters X and C below it."
  >
  <p class="tom-portrait-meta">
    Ann Arbor, Michigan<br>
    <a href="mailto:xiaoyc@umich.edu">xiaoyc@umich.edu</a>
  </p>
</div>

<p class="tom-lede">
I work on why machine learning systems fail, and I build the systems that let me
find out. Research half of the time, shipping the other half.
</p>

I am a Computer Science undergraduate at the **University of Michigan**, transferred
from the **University of Florida**, graduating May 2028. Two research threads keep me
busy. At the [TEA Lab](https://tea.ece.ufl.edu/) (UF ECE, Citi-sponsored) I own the
data pipeline for an LLM agent safety benchmark. At
[OrderLab](https://orderlab.io/) (UMich EECS) I work on AdaptGuard, an evaluation of
sandbox policies for coding agents. Both come down to the same question: when an
agent looks like it is behaving, how do you tell whether it actually is?

The other half is building. [Muted](/projects/muted/) is an AI-first English speaking
practice app I designed, built and shipped on my own.
[Hoopalytics](/projects/hoopalytics/) is a sorting-algorithm comparison engine over
scraped NBA data. [CRetor](/projects/cretor/) is a Mandarin counter-speech dataset
built for fine-tuning. I like the parts where a clean idea meets a messy constraint,
like discovering a voice API that works beautifully and costs far too much.

Away from the terminal I collect languages, seven of them at wildly uneven levels, and
I have a long-running habit of memorising things that do not need memorising.

<div class="tom-hero-links">
  <a class="tom-btn tom-btn-solid" href="{{ '/research/' | relative_url }}">Research</a>
  <a class="tom-btn" href="{{ '/projects/' | relative_url }}">Projects</a>
  <a class="tom-btn" href="{{ '/cv/' | relative_url }}">CV</a>
</div>

<h2 id="have-a-go">Have a go at something</h2>

<p class="tom-muted tom-small">Three small things that run entirely in your browser. No accounts, no network calls, no tracking.</p>

<div class="tom-cards">
  {% for item in site.data.playground %}
    <article class="tom-card">
      <img class="tom-card-art" src="{{ item.art | relative_url }}" width="600" height="280" loading="lazy" alt="{{ item.alt }}">
      <div class="tom-card-body">
        <h3><a href="{{ item.url | relative_url }}">{{ item.title }}</a></h3>
        <p>{{ item.blurb }}</p>
        <ul class="tom-chips">
          {% for chip in item.chips %}<li class="tom-chip">{{ chip }}</li>{% endfor %}
          {% for chip in item.warm_chips %}<li class="tom-chip tom-chip-warm">{{ chip }}</li>{% endfor %}
        </ul>
      </div>
    </article>
  {% endfor %}
</div>

<h2 id="recent">Recent</h2>

<ol class="tom-timeline">
  {% for item in site.data.timeline limit: 5 %}
    <li class="tom-timeline-item tom-timeline-{{ item.tag }}">
      <span class="tom-timeline-when">{{ item.when }}</span>
      <span class="tom-timeline-text">{{ item.text }}</span>
    </li>
  {% endfor %}
</ol>

<p class="tom-small"><a href="{{ '/news/' | relative_url }}">The whole timeline</a></p>

<script src="{{ '/assets/js/about.js' | relative_url }}" defer></script>
