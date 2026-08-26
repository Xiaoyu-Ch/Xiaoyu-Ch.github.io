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

### Try it: merge sort vs. heap sort

A live, in-browser race on a random array, the same two algorithms this project benchmarks. Lower comparison count wins each run; the split varies with the shuffle, which is the point.

<div id="sort-race" class="sort-race-widget">
  <div class="sort-race-controls">
    <button type="button" id="sort-race-btn" class="sort-race-button">Shuffle &amp; race</button>
    <span id="sort-race-status" class="sort-race-status" role="status" aria-live="polite">Ready.</span>
  </div>
  <div class="sort-race-tracks">
    <div class="sort-race-track">
      <div class="sort-race-label">Merge sort <span id="sort-race-merge-count">0</span> comparisons</div>
      <div id="sort-race-merge-bars" class="sort-race-bars"></div>
    </div>
    <div class="sort-race-track">
      <div class="sort-race-label">Heap sort <span id="sort-race-heap-count">0</span> comparisons</div>
      <div id="sort-race-heap-bars" class="sort-race-bars"></div>
    </div>
  </div>
</div>

<style>
  .sort-race-widget {
    margin-top: 1.5rem;
    padding: 1.25rem;
    border: 1px solid var(--global-divider-color);
    border-radius: 0.5rem;
    background: var(--global-card-bg-color);
  }
  .sort-race-controls {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
    margin-bottom: 1rem;
  }
  .sort-race-button {
    background: var(--global-theme-color);
    color: var(--global-bg-color);
    border: none;
    border-radius: 0.35rem;
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    cursor: pointer;
  }
  .sort-race-button:hover {
    opacity: 0.85;
  }
  .sort-race-button:disabled {
    opacity: 0.5;
    cursor: default;
  }
  .sort-race-status {
    font-size: 0.9rem;
    color: var(--global-text-color-light);
  }
  .sort-race-tracks {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
  @media (min-width: 700px) {
    .sort-race-tracks {
      grid-template-columns: 1fr 1fr;
    }
  }
  .sort-race-label {
    font-size: 0.85rem;
    color: var(--global-text-color-light);
    margin-bottom: 0.4rem;
  }
  .sort-race-bars {
    display: flex;
    align-items: flex-end;
    gap: 2px;
    height: 140px;
    border-bottom: 1px solid var(--global-divider-color);
  }
  .sort-race-bar {
    flex: 1 1 0;
    background: var(--global-theme-color);
    opacity: 0.5;
    transition: height 0.05s linear;
  }
  .sort-race-bar.is-active {
    opacity: 1;
  }
  @media (prefers-reduced-motion: reduce) {
    .sort-race-bar {
      transition: none;
    }
  }
</style>

<script>
  (function () {
    var container = document.getElementById("sort-race");
    if (!container) return;

    var SIZE = 40;
    var btn = document.getElementById("sort-race-btn");
    var status = document.getElementById("sort-race-status");
    var mergeBarsEl = document.getElementById("sort-race-merge-bars");
    var heapBarsEl = document.getElementById("sort-race-heap-bars");
    var mergeCountEl = document.getElementById("sort-race-merge-count");
    var heapCountEl = document.getElementById("sort-race-heap-count");
    var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function randomArray(n) {
      var a = [];
      for (var i = 0; i < n; i++) a.push(Math.floor(Math.random() * 98) + 2);
      return a;
    }

    function renderBars(el, arr, activeIdx) {
      var bars = el.children;
      if (bars.length !== arr.length) {
        el.innerHTML = "";
        for (var i = 0; i < arr.length; i++) {
          var d = document.createElement("div");
          d.className = "sort-race-bar";
          el.appendChild(d);
        }
        bars = el.children;
      }
      for (var j = 0; j < arr.length; j++) {
        bars[j].style.height = arr[j] + "%";
        bars[j].classList.toggle("is-active", activeIdx.indexOf(j) !== -1);
      }
    }

    // Generator-style step recorders: each sort records {array snapshot, active indices, comparisons}
    function recordMergeSort(input) {
      var steps = [];
      var comparisons = 0;
      var a = input.slice();

      function merge(lo, mid, hi) {
        var left = a.slice(lo, mid + 1);
        var right = a.slice(mid + 1, hi + 1);
        var i = 0, j = 0, k = lo;
        while (i < left.length && j < right.length) {
          comparisons++;
          if (left[i] <= right[j]) {
            a[k] = left[i++];
          } else {
            a[k] = right[j++];
          }
          steps.push({ arr: a.slice(), active: [k], count: comparisons });
          k++;
        }
        while (i < left.length) {
          a[k] = left[i++];
          steps.push({ arr: a.slice(), active: [k], count: comparisons });
          k++;
        }
        while (j < right.length) {
          a[k] = right[j++];
          steps.push({ arr: a.slice(), active: [k], count: comparisons });
          k++;
        }
      }

      function sort(lo, hi) {
        if (lo >= hi) return;
        var mid = Math.floor((lo + hi) / 2);
        sort(lo, mid);
        sort(mid + 1, hi);
        merge(lo, mid, hi);
      }

      sort(0, a.length - 1);
      return steps;
    }

    function recordHeapSort(input) {
      var steps = [];
      var comparisons = 0;
      var a = input.slice();
      var n = a.length;

      function swap(i, j) {
        var t = a[i]; a[i] = a[j]; a[j] = t;
      }

      function heapify(size, root) {
        var largest = root;
        var l = 2 * root + 1;
        var r = 2 * root + 2;
        if (l < size) {
          comparisons++;
          if (a[l] > a[largest]) largest = l;
        }
        if (r < size) {
          comparisons++;
          if (a[r] > a[largest]) largest = r;
        }
        if (largest !== root) {
          swap(root, largest);
          steps.push({ arr: a.slice(), active: [root, largest], count: comparisons });
          heapify(size, largest);
        }
      }

      for (var i = Math.floor(n / 2) - 1; i >= 0; i--) heapify(n, i);
      for (var end = n - 1; end > 0; end--) {
        swap(0, end);
        steps.push({ arr: a.slice(), active: [0, end], count: comparisons });
        heapify(end, 0);
      }
      return steps;
    }

    function playSteps(el, countEl, steps, finalArr, onDone) {
      if (reduceMotion || steps.length === 0) {
        renderBars(el, finalArr, []);
        countEl.textContent = steps.length ? steps[steps.length - 1].count : 0;
        onDone();
        return;
      }
      var i = 0;
      function tick() {
        if (i >= steps.length) {
          renderBars(el, finalArr, []);
          onDone();
          return;
        }
        renderBars(el, steps[i].arr, steps[i].active);
        countEl.textContent = steps[i].count;
        i++;
        setTimeout(tick, 16);
      }
      tick();
    }

    function race() {
      btn.disabled = true;
      status.textContent = "Racing...";
      var data = randomArray(SIZE);
      renderBars(mergeBarsEl, data, []);
      renderBars(heapBarsEl, data, []);
      mergeCountEl.textContent = "0";
      heapCountEl.textContent = "0";

      var mergeSteps = recordMergeSort(data);
      var heapSteps = recordHeapSort(data);
      var sorted = data.slice().sort(function (a, b) { return a - b; });

      var done = 0;
      function finish(label) {
        done++;
        if (done === 1) status.textContent = label + " finished first.";
        if (done === 2) {
          var mergeCount = mergeSteps.length ? mergeSteps[mergeSteps.length - 1].count : 0;
          var heapCount = heapSteps.length ? heapSteps[heapSteps.length - 1].count : 0;
          var winner = mergeCount < heapCount ? "Merge sort" : heapCount < mergeCount ? "Heap sort" : "Tie";
          status.textContent = winner + " used fewer comparisons this run (merge: " + mergeCount + ", heap: " + heapCount + ").";
          btn.disabled = false;
        }
      }

      playSteps(mergeBarsEl, mergeCountEl, mergeSteps, sorted, function () { finish("Merge sort"); });
      playSteps(heapBarsEl, heapCountEl, heapSteps, sorted, function () { finish("Heap sort"); });
    }

    btn.addEventListener("click", race);
    race();
  })();
</script>
