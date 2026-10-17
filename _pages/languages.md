---
layout: page
title: guess the language
permalink: /languages/
description: Ten rounds, seven languages, and several words that are lying to you.
nav: false
---

<link rel="stylesheet" href="{{ '/assets/css/tom.css' | relative_url }}">
<link rel="stylesheet" href="{{ '/assets/css/languages.css' | relative_url }}">

<p class="tom-lede">
I work in seven languages at wildly uneven levels. Here is a word. Which one is it
from? Some of them are in more than one, and any correct language scores.
</p>

<div class="guess" id="guess-game">
  <div class="guess-hud">
    <div class="guess-hud-item">
      <span class="tom-stat-label">Round</span>
      <span class="guess-hud-value" data-game-round>1 of 10</span>
    </div>
    <div class="guess-hud-item">
      <span class="tom-stat-label">Score</span>
      <span class="guess-hud-value" data-game-score>0</span>
    </div>
  </div>
  <div class="tom-progress"><span class="tom-progress-bar" data-game-bar></span></div>

  <div data-game-stage>
    <p class="guess-word" data-game-word aria-live="polite"></p>

    <p class="guess-prompt" id="guess-prompt">Which language is this?</p>
    <div class="guess-choices" data-game-choices role="group" aria-labelledby="guess-prompt">
      <button type="button" class="guess-choice" data-lang="zh"><span class="guess-choice-key" aria-hidden="true">1</span>Mandarin</button>
      <button type="button" class="guess-choice" data-lang="en"><span class="guess-choice-key" aria-hidden="true">2</span>English</button>
      <button type="button" class="guess-choice" data-lang="es"><span class="guess-choice-key" aria-hidden="true">3</span>Spanish</button>
      <button type="button" class="guess-choice" data-lang="fr"><span class="guess-choice-key" aria-hidden="true">4</span>French</button>
      <button type="button" class="guess-choice" data-lang="de"><span class="guess-choice-key" aria-hidden="true">5</span>German</button>
      <button type="button" class="guess-choice" data-lang="ja"><span class="guess-choice-key" aria-hidden="true">6</span>Japanese</button>
      <button type="button" class="guess-choice" data-lang="pt"><span class="guess-choice-key" aria-hidden="true">7</span>Portuguese</button>
    </div>

    <div class="guess-reveal" data-game-reveal aria-live="polite" hidden></div>

    <div class="tom-btn-row">
      <button type="button" class="tom-btn tom-btn-solid" data-game-next hidden>Next word</button>
    </div>

  </div>

  <div class="guess-end" data-game-end hidden>
    <h2>Final score</h2>
    <p class="guess-end-text" data-game-end-text></p>
    <ol class="guess-end-list" data-game-end-list></ol>
    <div class="tom-btn-row">
      <button type="button" class="tom-btn tom-btn-solid" data-game-again>Play again</button>
      <a class="tom-btn" href="{{ '/memory/' | relative_url }}">Try the memory corner</a>
    </div>
  </div>
</div>

<noscript>
  <p class="tom-note">
    <strong>This one needs JavaScript.</strong> The game runs entirely in your browser,
    with no network calls, so with scripting off there is nothing to play. The words it
    uses are listed below anyway.
  </p>
  <ul>
    <li><strong>Gift</strong> is German for poison, and English for a present.</li>
    <li><strong>embarazada</strong> is Spanish for pregnant, not embarrassed.</li>
    <li><strong>sobremesa</strong> is the after-dinner conversation in Spanish and dessert in Portuguese.</li>
    <li><strong>polvo</strong> is dust in Spanish and octopus in Portuguese.</li>
    <li><strong>pie</strong> is a pie in English, a foot in Spanish and a magpie in French.</li>
    <li><strong>手紙</strong> is a letter in Japanese and toilet paper in Chinese.</li>
  </ul>
</noscript>

<h2>How it is put together</h2>

<p>
Every word in the bank is checked against the spelling shown, accents included. That
is why Portuguese <em>esquisito</em> appears and Spanish <em>exquisito</em> does not:
they are different words with opposite meanings, and the game would be lying if it
treated them as one. Where a spelling really is shared, as with <em>sale</em> in
English, Spanish and French, every one of those languages scores.
</p>

<p class="tom-small tom-muted">
Twenty-seven words in the bank, ten per game, drawn without replacement. Keyboard
play: number keys 1 to 7 pick a language, Enter moves on. Runs client-side with no
network requests and no storage.
</p>

<script src="{{ '/assets/js/languages.js' | relative_url }}" defer></script>
