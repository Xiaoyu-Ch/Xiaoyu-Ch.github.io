---
layout: about
title: about
permalink: /
subtitle: ML safety and reliability, and the engineering to go with it.

profile:
  align: right
  image: prof_pic.png # original illustrated monogram. TODO: Tom swaps in a real headshot.
  image_circular: false
  more_info: >
    <p>Ann Arbor, Michigan</p>
    <p>xiaoyc@umich.edu</p>

selected_papers: true
social: true

announcements:
  enabled: false # the timeline below is hand-rendered from _data/timeline.yml

latest_posts:
  enabled: false # blog has no posts yet
---

<link rel="stylesheet" href="{{ '/assets/css/tom.css' | relative_url }}">

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
  <article class="tom-card">
    <img class="tom-card-art" src="{{ '/assets/svg/card-map.svg' | relative_url }}" width="600" height="280"
         alt="A stylised globe with a dotted route linking four marked stops.">
    <div class="tom-card-body">
      <h3><a href="{{ '/map/' | relative_url }}">Where I have been</a></h3>
      <p>Four cities, one route, drawn as a map you can click through.</p>
      <ul class="tom-chips">
        <li class="tom-chip">Original SVG</li>
        <li class="tom-chip">No map tiles</li>
      </ul>
    </div>
  </article>

  <article class="tom-card">
    <img class="tom-card-art" src="{{ '/assets/svg/card-languages.svg' | relative_url }}" width="600" height="280"
         alt="Seven speech bubbles, each holding a letter from a different writing system.">
    <div class="tom-card-body">
      <h3><a href="{{ '/languages/' | relative_url }}">Guess the language</a></h3>
      <p>Ten rounds across my seven languages. There are traps. German <em>Gift</em> is one.</p>
      <ul class="tom-chips">
        <li class="tom-chip">10 rounds</li>
        <li class="tom-chip tom-chip-warm">Harder than it looks</li>
      </ul>
    </div>
  </article>

  <article class="tom-card">
    <img class="tom-card-art" src="{{ '/assets/svg/card-memory.svg' | relative_url }}" width="600" height="280"
         alt="A cutaway cartoon apartment with four rooms, each holding one odd object.">
    <div class="tom-card-body">
      <h3><a href="{{ '/memory/' | relative_url }}">Memory corner</a></h3>
      <p>A speed recall drill, and a cartoon apartment where a salmon does your taxes.</p>
      <ul class="tom-chips">
        <li class="tom-chip">Timed</li>
        <li class="tom-chip">Memory palace</li>
      </ul>
    </div>
  </article>
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
