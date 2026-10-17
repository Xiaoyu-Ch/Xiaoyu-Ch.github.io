---
layout: page
title: news
permalink: /news/
description: Everything that has happened, newest first.
nav: false
---

<link rel="stylesheet" href="{{ '/assets/css/tom.css' | relative_url }}">

<p class="tom-lede">
The whole timeline. Every date here comes from a document I can point at, which is why
some entries say a month and others only a year.
</p>

<ol class="tom-timeline">
  {% for item in site.data.timeline %}
    <li class="tom-timeline-item tom-timeline-{{ item.tag }}">
      <span class="tom-timeline-when">{{ item.when }}</span>
      <span class="tom-timeline-text">{{ item.text }}</span>
    </li>
  {% endfor %}
</ol>
