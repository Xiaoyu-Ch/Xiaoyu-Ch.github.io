---
layout: page
title: Hoopalytics
description: Sorting-algorithm comparison engine over scraped NBA data
permalink: /projects/hoopalytics/
importance: 2
category: work
---

**Stack:** React, Vite, Django, Python, Tailwind CSS
**Timeline:** Sep 2025, Nov 2025
**Team:** 3-person team, via GitHub
**Code:** [github.com/Xiaoyu-Ch/hoopalytics](https://github.com/Xiaoyu-Ch/hoopalytics)

Hoopalytics applies core data structures and algorithms to a real dataset: 5,000+ crawler-scraped NBA player data points.

### What I built

- Self-implemented merge sort and heap sort, benchmarked head to head as a sorting-algorithm comparison engine over the scraped dataset
- Merge sort cut sorting-time fluctuation by 9% versus heap sort on this data
- A custom weighted NBA metric formula used to rank and compare players

The project is a full-stack build: a Django/Python backend serving the sorted and scored data, and a React/Vite frontend styled with Tailwind CSS for browsing it.
