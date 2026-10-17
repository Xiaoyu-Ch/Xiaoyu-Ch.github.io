---
layout: page
title: playground
permalink: /playground/
description: Three small things that run entirely in your browser.
nav: true
nav_order: 5
dropdown: true
children:
  - title: Where I have been
    permalink: /map/
  - title: Guess the language
    permalink: /languages/
  - title: Memory corner
    permalink: /memory/
---

<link rel="stylesheet" href="{{ '/assets/css/tom.css' | relative_url }}">

<p class="tom-lede">
A map I drew by hand, a game about seven languages that are quietly lying to you, and
a cartoon flat where a salmon does its own tax return. No accounts, no network calls,
no tracking: all three run entirely in your browser.
</p>

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

<p class="tom-small tom-muted">
Each of these is a separate page with its own stylesheet and script, kept out of the
CV and publications pages on purpose. Those two stay plain.
</p>
