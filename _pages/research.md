---
layout: page
title: research
permalink: /research/
description: What I work on, at the level a CV would put it.
nav: true
nav_order: 1
---

<link rel="stylesheet" href="{{ '/assets/css/tom.css' | relative_url }}">

<p class="tom-lede">
Two questions keep showing up in my work. When a model or an agent looks like it is
behaving, how do you tell whether it actually is? And when a result looks strong, how
do you tell whether the benchmark is measuring the thing you think it is?
</p>

<p class="tom-note">
  <strong>Scope note.</strong> This page stays at the level a CV would put it. The
  code for the ongoing safety work is not public, and unpublished results are not
  here. If you want detail beyond this, <a href="mailto:xiaoyc@umich.edu">email me</a>.
</p>

<h2 id="current">Current</h2>

<div class="tom-panel">
  <div class="tom-panel-head">
    <h3>AdaptGuard, sandbox policies for coding agents</h3>
    <span class="tom-kicker">OrderLab, UMich EECS &middot; July 2026 to present</span>
  </div>
  <p>
    Undergraduate researcher, advised by Prof. Ryan Huang. I built an automated
    evaluation harness for agent sandbox policies and ran it first as a fifty-scenario
    pilot, then as a nine-hundred-scenario rerun across strictness levels.
  </p>
  <p>
    The interesting part is that policies fail in both directions. A permissive policy
    let an agent fake a bug fix. A strict policy that blocked the cheat also blocked a
    legitimate fix. Aimed at OSDI.
  </p>
  <ul class="tom-chips">
    <li class="tom-chip">Agent safety</li>
    <li class="tom-chip">Evaluation harnesses</li>
    <li class="tom-chip">Systems reliability</li>
  </ul>
</div>

<div class="tom-panel">
  <div class="tom-panel-head">
    <h3>FinVault, an LLM agent safety benchmark</h3>
    <span class="tom-kicker">TEA Lab, UF ECE, Citi-sponsored &middot; May 2026 to present</span>
  </div>
  <p>
    Research assistant. I own the data pipeline: single-pass logprob and entropy
    extraction on Qwen3-8B, and a 1,064-case run across 31 scenarios on dual H200 GPUs
    through SLURM.
  </p>
  <p>
    Pipeline work is mostly debugging that nobody sees. I fixed silent CUDA corruption,
    an fp16 overflow and a label-leakage bug. The result I am most attached to is a
    negative one: a baseline scoring 0.987 AUROC turned out to be exploiting scenario
    identity rather than detecting anything.
  </p>
  <ul class="tom-chips">
    <li class="tom-chip">LLM uncertainty</li>
    <li class="tom-chip">Benchmark validity</li>
    <li class="tom-chip">HPC and SLURM</li>
  </ul>
</div>

<div class="tom-panel">
  <div class="tom-panel-head">
    <h3>VQ-VAE for medical dialogue</h3>
    <span class="tom-kicker">Zhongbo Zhichuang Technologies &middot; September 2025 to present</span>
  </div>
  <p>
    Independent researcher. Discrete latent encoding applied to doctor and patient
    dialogue, for controllability and interpretability rather than raw fluency. Plus
    fifteen percent BLEU in this domain, presented as an oral at AICCONF 2026.
  </p>
  <ul class="tom-chips">
    <li class="tom-chip">VQ-VAE</li>
    <li class="tom-chip">Controllable generation</li>
  </ul>
</div>

<h2 id="past">Past</h2>

<div class="tom-panel">
  <div class="tom-panel-head">
    <h3>Perception for an autonomous harvesting robot</h3>
    <span class="tom-kicker">Computer Vision and Sensing Lab, UF ABE &middot; February to August 2026</span>
  </div>
  <p>
    Undergraduate research assistant, advised by Dr. Henry Medeiros. I built the
    perception pipeline, depth estimation plus YOLO plus SAM3 segmentation, for a
    twenty-person autonomous bamboo-harvesting robot team. Over ninety-three percent
    accuracy on seventy seconds of field footage, trained on HiPerGator.
  </p>
  <ul class="tom-chips">
    <li class="tom-chip">Computer vision</li>
    <li class="tom-chip">Robotics perception</li>
  </ul>
</div>

<div class="tom-panel">
  <div class="tom-panel-head">
    <h3>Elo scoring for counter-speech preference data</h3>
    <span class="tom-kicker">University of Florida &middot; May to July 2025</span>
  </div>
  <p>
    Human preference data for counter-speech is binary, which throws away most of the
    signal. I designed an Elo-based model converting binary preference labels into a
    continuous zero-to-ten scale, fed it into LLaMA-4 and DeepSeek fine-tuning
    pipelines, and annotated 450 dialogue responses for the
    <a href="{{ '/projects/cretor/' | relative_url }}">CRetor</a> dataset.
  </p>
  <ul class="tom-chips">
    <li class="tom-chip">Preference modelling</li>
    <li class="tom-chip">Dataset construction</li>
  </ul>
</div>

<h2 id="publications">Publications</h2>

<p>
Full citations are on the <a href="{{ '/publications/' | relative_url }}">publications
page</a>.
</p>

<ol class="tom-pub-list">
  <li>
    <strong>A Doctor Dialogue Model Based on Vector Quantisation.</strong>
    AICCONF 2026 (IEEE SMC), Prague. Oral presentation.
  </li>
  <li>
    <strong>CRetor: A Mandarin Counter-Speech Dataset Annotated for Rhetorical
    Strategy.</strong> Submitted to ACL Rolling Review, 2025.
  </li>
  <li>
    <strong>From Theory to Reality: The Quest for Gravitational Waves.</strong>
    CONF-CIAP 2024, Theoretical and Natural Science. Indexed in Scopus and CPCI.
  </li>
</ol>

<h2 id="interests">Where I want to take this</h2>

<p>
I am interested in PhD study and in industry roles in ML infrastructure and safety.
The through line is reliability: building the measurement apparatus carefully enough
that the result means what it appears to mean. A benchmark that is easy to score well
on is usually broken, and finding out which is the part of the work I like most.
</p>
