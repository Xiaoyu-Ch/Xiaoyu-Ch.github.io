---
layout: about
title: about
permalink: /
subtitle: CS student, University of Michigan. Building production ML/systems infrastructure and LLM agent safety research.

profile:
  align: right
  image: prof_pic.jpg # placeholder: swap in a real headshot when ready
  image_circular: false # crops the image to make it circular
  more_info: >
    <p>Ann Arbor, MI</p>

selected_papers: true # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: true # includes a list of news items - add updates as files in _news/
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: true # blog is on - add posts as files in _posts/
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

I'm a CS student at the University of Michigan (transferred from the University of Florida), building production ML and systems infrastructure. I think of myself as an engineer first: most of my time goes into shipping and stress-testing real systems, not just writing about them.

Right now I split my time between two things. At the [TEA Lab](https://tea.ece.ufl.edu/) (UF ECE, Citi-sponsored), I own the full data pipeline for FinVault, an LLM agentic-safety benchmark: single-pass logprob and entropy extraction on Qwen3-8B, run at scale (1,064 cases across 31 scenarios) on dual-H200 HPC. At [OrderLab](https://orderlab.io/) (University of Michigan EECS), I work on AdaptGuard, an evaluation harness for adaptive safety policies in coding agents, targeting OSDI 2026.

Outside the lab, I build things end to end: [Muted](/projects/muted/), an AI-first English speaking practice app I designed, built, and shipped solo; [Hoopalytics](/projects/hoopalytics/), a sorting-algorithm comparison engine over scraped NBA data; and [CRetor](/projects/cretor/), a Mandarin counter-speech dataset built for LLM fine-tuning.

I'm interested in both PhD study and industry roles in software engineering and ML infrastructure. My [CV](/cv/) has the full picture, and my [publications](/publications/) page has citations. If you want to reach me, [email](mailto:xiaoyc@umich.edu) is best, or find me on [GitHub](https://github.com/Xiaoyu-Ch) and [LinkedIn](https://www.linkedin.com/in/xiaoyu-tom-chen-658251335).

<div class="about-cube-wrap" aria-hidden="true">
  <div class="about-cube-scene">
    <div class="about-cube">
      <div class="about-cube-face about-cube-front"></div>
      <div class="about-cube-face about-cube-back"></div>
      <div class="about-cube-face about-cube-right"></div>
      <div class="about-cube-face about-cube-left"></div>
      <div class="about-cube-face about-cube-top"></div>
      <div class="about-cube-face about-cube-bottom"></div>
    </div>
  </div>
</div>

<style>
  .about-cube-wrap {
    display: flex;
    justify-content: center;
    margin: 2rem 0 0.5rem;
    opacity: 0.7;
  }
  .about-cube-scene {
    width: 70px;
    height: 70px;
    perspective: 500px;
  }
  .about-cube {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    animation: about-cube-spin 16s linear infinite;
  }
  .about-cube-face {
    position: absolute;
    width: 70px;
    height: 70px;
    border: 1px solid var(--global-theme-color);
    background: transparent;
  }
  .about-cube-front { transform: translateZ(35px); }
  .about-cube-back { transform: translateZ(-35px) rotateY(180deg); }
  .about-cube-right { transform: rotateY(90deg) translateZ(35px); }
  .about-cube-left { transform: rotateY(-90deg) translateZ(35px); }
  .about-cube-top { transform: rotateX(90deg) translateZ(35px); }
  .about-cube-bottom { transform: rotateX(-90deg) translateZ(35px); }
  @keyframes about-cube-spin {
    from { transform: rotateX(0deg) rotateY(0deg); }
    to { transform: rotateX(360deg) rotateY(360deg); }
  }
  @media (prefers-reduced-motion: reduce) {
    .about-cube {
      animation: none;
      transform: rotateX(-20deg) rotateY(30deg);
    }
  }
</style>

<style>
  @keyframes about-egg-bounce {
    0% { transform: translateX(-10vw) translateY(0); }
    15% { transform: translateX(15vw) translateY(-38vh); }
    30% { transform: translateX(35vw) translateY(0); }
    45% { transform: translateX(55vw) translateY(-22vh); }
    60% { transform: translateX(75vw) translateY(0); }
    75% { transform: translateX(95vw) translateY(-10vh); }
    100% { transform: translateX(115vw) translateY(0); }
  }
  .about-egg-ball {
    position: fixed;
    left: 0;
    bottom: 15vh;
    font-size: 2.5rem;
    z-index: 9999;
    pointer-events: none;
    animation: about-egg-bounce 2.2s ease-in-out forwards;
  }
  .about-egg-toast {
    position: fixed;
    left: 50%;
    bottom: 8vh;
    transform: translateX(-50%);
    background: var(--global-card-bg-color);
    color: var(--global-text-color);
    border: 1px solid var(--global-theme-color);
    border-radius: 0.5rem;
    padding: 0.6rem 1.1rem;
    font-size: 0.9rem;
    z-index: 9999;
    opacity: 0;
    animation: about-egg-toast-fade 3.5s ease-in-out forwards;
  }
  @keyframes about-egg-toast-fade {
    0% { opacity: 0; }
    10% { opacity: 1; }
    85% { opacity: 1; }
    100% { opacity: 0; }
  }
</style>

<script>
  console.log("%cLooking at the source? Good instinct.", "font-size: 14px; font-weight: bold;");
  console.log("This site is a Jekyll/al-folio build. Source: https://github.com/Xiaoyu-Ch/Xiaoyu-Ch.github.io");
  console.log("If you're hiring or admitting PhD students: xiaoyc@umich.edu");
  console.log("(Psst: there's also a Konami code on this page.)");

  (function () {
    var code = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
    var pos = 0;
    var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    document.addEventListener("keydown", function (e) {
      var key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      pos = key === code[pos] ? pos + 1 : (key === code[0] ? 1 : 0);
      if (pos === code.length) {
        pos = 0;
        fire();
      }
    });

    function fire() {
      var toast = document.createElement("div");
      toast.className = "about-egg-toast";
      toast.textContent = "Merge sort still beats heap sort though.";
      document.body.appendChild(toast);
      setTimeout(function () { toast.remove(); }, 3600);

      if (reduceMotion) return;
      var ball = document.createElement("div");
      ball.className = "about-egg-ball";
      ball.textContent = "🏀";
      ball.setAttribute("aria-hidden", "true");
      document.body.appendChild(ball);
      setTimeout(function () { ball.remove(); }, 2300);
    }
  })();
</script>
