---
layout: page
permalink: /cv/
title: CV
nav: true
nav_order: 4
description: Education, experience, research, publications and skills.
toc:
  sidebar: left
---

{% comment %}
  Rendered here rather than through `layout: cv`.

  The gem's cv layout calls {% raw %}{% al_folio_cv_render %}{% endraw %} and discards the page's own
  content, which means no stylesheet link can be injected into it and the page
  keeps al-folio's default palette while every other page uses this site's. The
  data source is unchanged: this still reads _data/cv.yml, so there is still one
  place to edit, and the rendercv workflow still sees the schema it expects.

  Dates in _data/cv.yml are a mix of bare years (2026), year-months ("2026-07"),
  real dates (2026-01-01) and the literal "present". `append: ""` turns each into
  a string so its length can be tested. Length 4 is a bare year and prints as is.
  Length 7 is a year-month, which Liquid's date filter cannot parse on its own, so
  it gets a "-01" day appended first. "present" is checked before the length tests,
  because it is also seven characters long.
{% endcomment %}

<link rel="stylesheet" href="{{ '/assets/css/tom.css' | relative_url }}">
<link rel="stylesheet" href="{{ '/assets/css/cv.css' | relative_url }}">

{% assign cv = site.data.cv.cv %}

<p class="tom-lede">{{ cv.summary }}</p>

<p class="tom-note">
  <strong>No PDF here yet.</strong> TODO: Tom uploads public resume. The LaTeX resume
  on file carries a phone number and a GPA that is not correct, so it is deliberately
  not published. Everything on this page is the current, checked version. If you need
  a PDF today, <a href="mailto:xiaoyc@umich.edu">ask by email</a>.
</p>

<ul class="tom-chips cv-contact">
  <li class="tom-chip"><a href="mailto:{{ cv.email }}">{{ cv.email }}</a></li>
  <li class="tom-chip">{{ cv.location }}</li>
  {% for net in cv.social_networks %}
    <li class="tom-chip">
      {% if net.network == 'GitHub' %}
        <a href="https://github.com/{{ net.username }}">GitHub</a>
      {% elsif net.network == 'LinkedIn' %}
        <a href="https://www.linkedin.com/in/{{ net.username }}">LinkedIn</a>
      {% else %}
        {{ net.network }}
      {% endif %}
    </li>
  {% endfor %}
</ul>

<h2 id="education">Education</h2>

{% for item in cv.sections.Education %}
  {% assign sv = item.start_date | append: "" %}
  {% assign ev = item.end_date | append: "" %}
  {% if sv.size == 4 %}{% assign started = sv %}
  {% elsif sv.size == 7 %}{% assign started = sv | append: "-01" | date: "%b %Y" %}
  {% else %}{% assign started = item.start_date | date: "%b %Y" %}{% endif %}
  {% if ev == "present" %}{% assign ended = "present" %}
  {% elsif ev.size == 4 %}{% assign ended = ev %}
  {% elsif ev.size == 7 %}{% assign ended = ev | append: "-01" | date: "%b %Y" %}
  {% else %}{% assign ended = item.end_date | date: "%b %Y" %}{% endif %}
  <article class="cv-entry">
    <p class="cv-when">{{ started }} to {{ ended }}</p>
    <div class="cv-body">
      <h3>{{ item.institution }}</h3>
      <p class="cv-meta">
        {{ item.studyType }}, {{ item.area }}{% if item.location %} &middot; {{ item.location }}{% endif %}
        {%- if item.score %} &middot; {{ item.score }}{% endif -%}
      </p>
      {% if item.highlights %}
        <ul>
          {% for h in item.highlights %}<li>{{ h }}</li>{% endfor %}
        </ul>
      {% endif %}
    </div>
  </article>
{% endfor %}

<h2 id="experience">Experience</h2>

{% for item in cv.sections.Experience %}
  {% assign sv = item.start_date | append: "" %}
  {% assign ev = item.end_date | append: "" %}
  {% if sv.size == 4 %}{% assign started = sv %}
  {% elsif sv.size == 7 %}{% assign started = sv | append: "-01" | date: "%b %Y" %}
  {% else %}{% assign started = item.start_date | date: "%b %Y" %}{% endif %}
  {% if ev == "present" %}{% assign ended = "present" %}
  {% elsif ev.size == 4 %}{% assign ended = ev %}
  {% elsif ev.size == 7 %}{% assign ended = ev | append: "-01" | date: "%b %Y" %}
  {% else %}{% assign ended = item.end_date | date: "%b %Y" %}{% endif %}
  <article class="cv-entry">
    <p class="cv-when">{{ started }} to {{ ended }}</p>
    <div class="cv-body">
      <h3>{{ item.position }}</h3>
      <p class="cv-meta">{{ item.company }}{% if item.location %} &middot; {{ item.location }}{% endif %}</p>
      {% if item.summary %}<p class="cv-summary">{{ item.summary }}</p>{% endif %}
      {% if item.highlights %}
        <ul>
          {% for h in item.highlights %}<li>{{ h }}</li>{% endfor %}
        </ul>
      {% endif %}
    </div>
  </article>
{% endfor %}

<h2 id="publications">Publications</h2>

{% for item in cv.sections.Publications %}
  <article class="cv-entry">
    <p class="cv-when">{{ item.releaseDate | date: "%Y" }}</p>
    <div class="cv-body">
      <h3>{{ item.title }}</h3>
      <p class="cv-meta">{{ item.authors | join: ", " }}</p>
      <p class="cv-summary">{{ item.publisher }}</p>
    </div>
  </article>
{% endfor %}

<p class="tom-small"><a href="{{ '/publications/' | relative_url }}">Full citations and BibTeX</a></p>

<h2 id="projects">Projects</h2>

{% for item in cv.sections.Projects %}
  {% assign sv = item.start_date | append: "" %}
  {% assign ev = item.end_date | append: "" %}
  {% if sv.size == 4 %}{% assign started = sv %}
  {% elsif sv.size == 7 %}{% assign started = sv | append: "-01" | date: "%b %Y" %}
  {% else %}{% assign started = item.start_date | date: "%b %Y" %}{% endif %}
  {% if ev == "present" %}{% assign ended = "present" %}
  {% elsif ev.size == 4 %}{% assign ended = ev %}
  {% elsif ev.size == 7 %}{% assign ended = ev | append: "-01" | date: "%b %Y" %}
  {% else %}{% assign ended = item.end_date | date: "%b %Y" %}{% endif %}
  <article class="cv-entry">
    <p class="cv-when">{{ started }} to {{ ended }}</p>
    <div class="cv-body">
      <h3>{{ item.name }}</h3>
      {% if item.summary %}<p class="cv-meta">{{ item.summary }}</p>{% endif %}
      {% if item.highlights %}
        <ul>
          {% for h in item.highlights %}<li>{{ h }}</li>{% endfor %}
        </ul>
      {% endif %}
    </div>
  </article>
{% endfor %}

<p class="tom-small"><a href="{{ '/projects/' | relative_url }}">Longer write-ups</a></p>

<h2 id="skills">Skills</h2>

<div class="cv-skills">
  {% for group in cv.sections.Skills %}
    <div class="cv-skill-group">
      <h3>{{ group.name }}</h3>
      <ul class="tom-chips">
        {% assign words = group.keywords | split: ", " %}
        {% for w in words %}<li class="tom-chip">{{ w }}</li>{% endfor %}
      </ul>
    </div>
  {% endfor %}
</div>

<h2 id="languages">Languages</h2>

<ul class="cv-langs">
  {% for lang in cv.sections.Languages %}
    <li>
      <span class="cv-lang-name">{{ lang.name }}</span>
      <span class="cv-lang-level">{{ lang.summary }}</span>
    </li>
  {% endfor %}
</ul>

<p class="tom-small tom-muted">
  Seven of them, at honestly uneven levels. There is a
  <a href="{{ '/languages/' | relative_url }}">game about that</a>.
</p>
