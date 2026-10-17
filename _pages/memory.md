---
layout: page
title: memory corner
permalink: /memory/
description: A speed recall drill, and a cartoon apartment where a salmon does your taxes.
nav: false
---

<link rel="stylesheet" href="{{ '/assets/css/tom.css' | relative_url }}">
<link rel="stylesheet" href="{{ '/assets/css/memory.css' | relative_url }}">

<p class="tom-lede">
I have a long-running habit of memorising things that do not need memorising. Two of
the techniques are below. The second one is why I can still list a shopping trip from
three weeks ago.
</p>

<section class="mem-section" id="speed-game" hidden>
  <h2>Speed memory</h2>
  <p class="mem-sub">Ten items. Seven seconds. Then write them down.</p>

  <fieldset class="tom-btn-row" style="border: 0; padding: 0; margin: 0.8rem 0 0">
    <legend class="tom-screen-reader">What to memorise</legend>
    <label class="tom-chip"><input type="radio" name="speed-mode" value="digits" checked> Digits</label>
    <label class="tom-chip"><input type="radio" name="speed-mode" value="words"> Words</label>
  </fieldset>

  <div class="speed-stage" data-speed-stage>
    <p class="speed-idle">
      Press start. Ten items appear for seven seconds, then vanish. Type back as many
      as you can, in order if you can manage it. You get two scores: how many landed in
      the right position, and how many you got at all.
    </p>
  </div>

  <div class="tom-btn-row">
    <button type="button" class="tom-btn tom-btn-solid" data-speed-start>Start</button>
  </div>

  <p class="tom-screen-reader" aria-live="polite" data-speed-live></p>
</section>

<div data-speed-noscript>
  <p class="tom-note">
    <strong>The speed drill needs JavaScript.</strong> It runs entirely in your browser,
    with nothing sent anywhere, so with scripting off there is nothing to run.
  </p>
</div>

<section class="mem-section" id="palace" hidden>
  <h2>The memory palace</h2>
  <p class="mem-sub">
    Five things to remember, parked in five rooms of a flat that does not exist. The
    images are absurd on purpose. Absurd is the whole mechanism: a cow on a sofa sticks
    where a carton of milk slides straight off.
  </p>

  <div class="palace-frame">
      <svg class="palace-svg" viewBox="0 0 640 420" role="img" aria-labelledby="palaceTitle palaceDesc">
        <title id="palaceTitle">A cutaway cartoon apartment with five rooms</title>
        <desc id="palaceDesc">Five rooms seen from the side with the front wall removed. The hallway holds an
          upside-down umbrella with a goldfish in it. The kitchen holds a singing kettle balanced on a stack of
          batteries. The living room holds a cow surfing on the sofa. The bedroom holds a passport in sunglasses
          asleep on a pillow. The bathroom holds a salmon filling in a tax return in the bathtub.</desc>

        <!-- floor and walls -->
        <g class="palace-shell">
          <rect x="20" y="20" width="600" height="380" rx="12" />
          <line x1="20" y1="205" x2="620" y2="205" />
          <line x1="190" y1="20" x2="190" y2="205" />
          <line x1="410" y1="20" x2="410" y2="205" />
          <line x1="320" y1="205" x2="320" y2="400" />
        </g>

        <!-- room plates, one per stop on the walk -->
        <g class="palace-rooms">
          <g class="palace-room" data-room="hallway">
            <rect x="24" y="24" width="162" height="177" rx="8" />
            <text class="palace-room-name" x="34" y="44">Hallway</text>
          </g>
          <g class="palace-room" data-room="kitchen">
            <rect x="194" y="24" width="212" height="177" rx="8" />
            <text class="palace-room-name" x="204" y="44">Kitchen</text>
          </g>
          <g class="palace-room" data-room="living">
            <rect x="414" y="24" width="202" height="177" rx="8" />
            <text class="palace-room-name" x="424" y="44">Living room</text>
          </g>
          <g class="palace-room" data-room="bedroom">
            <rect x="324" y="209" width="292" height="187" rx="8" />
            <text class="palace-room-name" x="334" y="229">Bedroom</text>
          </g>
          <g class="palace-room" data-room="bathroom">
            <rect x="24" y="209" width="292" height="187" rx="8" />
            <text class="palace-room-name" x="34" y="229">Bathroom</text>
          </g>
        </g>

        <!-- the route the walk takes -->
        <path class="palace-route" d="M105 188 H590 V382 H170" />

        <!-- 1. hallway: an upside-down umbrella with a goldfish living in it -->
        <g class="palace-thing" data-room="hallway" transform="translate(105 118)">
          <path class="pt-fill-blue" d="M-52 -22 A 52 52 0 0 0 52 -22 Z" />
          <path class="pt-water" d="M-44 -6 q22 10 44 0 q22 -10 44 0 l-9 20 q-4 8 -12 8 l-46 0 q-8 0 -12 -8 Z" />
          <path class="pt-stroke" d="M0 30 L0 56 q0 11 -12 11 q-10 0 -10 -8" />
          <g transform="translate(6 8)">
            <path class="pt-fill-orange" d="M-13 0 q7 -9 17 0 q-7 9 -17 0 Z" />
            <path class="pt-fill-orange-dark" d="M-13 0 l-7 -6 l0 12 Z" />
            <circle class="pt-eye" cx="0" cy="-1.4" r="1.4" />
          </g>
          <circle class="pt-bubble" cx="-14" cy="-8" r="2.5" />
          <circle class="pt-bubble" cx="-8" cy="-16" r="1.8" />
        </g>

        <!-- 2. kitchen: a singing kettle balanced on a stack of batteries -->
        <g class="palace-thing" data-room="kitchen" transform="translate(300 128)">
          <g transform="translate(0 30)">
            <rect class="pt-fill-green" x="-26" y="-10" width="52" height="18" rx="3" />
            <rect class="pt-fill-green" x="-26" y="-30" width="52" height="18" rx="3" />
            <rect class="pt-fill-green" x="-26" y="-50" width="52" height="18" rx="3" />
            <rect class="pt-cap" x="-6" y="-54" width="12" height="5" rx="1.5" />
            <text class="pt-tiny" x="0" y="-16" text-anchor="middle">AA</text>
            <text class="pt-tiny" x="0" y="-36" text-anchor="middle">AA</text>
          </g>
          <g transform="translate(0 -32)">
            <path class="pt-fill-amber" d="M-24 10 q0 -22 24 -22 q24 0 24 22 q0 10 -7 10 l-34 0 q-7 0 -7 -10 Z" />
            <path class="pt-stroke" d="M24 -3 q15 2 13 13 q-2 9 -13 9" />
            <path class="pt-stroke" d="M-7 -13 q7 -8 14 0" />
          </g>
          <g class="pt-notes">
            <path class="pt-fill-cream" d="M38 -52 l2 -20 l8 -2 l-2 20 Z" />
            <circle class="pt-fill-cream" cx="36" cy="-50" r="4" />
            <path class="pt-fill-cream" d="M54 -34 l2 -16 l7 -2 l-2 16 Z" />
            <circle class="pt-fill-cream" cx="52" cy="-32" r="3.4" />
          </g>
        </g>

        <!-- 3. living room: a cow surfing on the sofa -->
        <g class="palace-thing" data-room="living" transform="translate(515 128) scale(1.08)">
          <rect class="pt-fill-violet" x="-62" y="22" width="124" height="28" rx="8" />
          <rect class="pt-fill-violet-dark" x="-57" y="8" width="28" height="18" rx="6" />
          <rect class="pt-fill-violet-dark" x="-21" y="8" width="28" height="18" rx="6" />
          <rect class="pt-fill-violet-dark" x="15" y="8" width="28" height="18" rx="6" />
          <path class="pt-wave" d="M-68 50 q22 -16 44 0 t44 0 t44 0" />
          <g transform="translate(2 -16)">
            <path class="pt-legs" d="M-18 8 V26 M-6 12 V28 M7 12 V28 M19 8 V26" />
            <ellipse class="pt-fill-cream" cx="0" cy="-2" rx="27" ry="15" />
            <ellipse class="pt-spot" cx="-12" cy="-6" rx="8" ry="5.5" />
            <ellipse class="pt-spot" cx="7" cy="3" rx="6" ry="4.5" />
            <path class="pt-fill-cream" d="M-24 -12 l-10 -12 l3 13 Z" />
            <circle class="pt-fill-cream" cx="28" cy="-4" r="11.5" />
            <ellipse class="pt-muzzle" cx="33" cy="1" rx="7" ry="5" />
            <circle class="pt-eye" cx="27" cy="-8" r="2" />
            <path class="pt-fill-cream" d="M19 -13 l-7 -7 l10 2 Z" />
            <path class="pt-horn" d="M31 -14 q4 -6 8 -3" />
          </g>
        </g>

        <!-- 4. bedroom: a passport in sunglasses, asleep on the pillow -->
        <g class="palace-thing" data-room="bedroom" transform="translate(470 300) scale(1.22)">
          <rect class="pt-fill-wood" x="-74" y="4" width="148" height="30" rx="6" />
          <rect class="pt-fill-cream" x="-74" y="-10" width="148" height="18" rx="5" />
          <rect class="pt-headboard" x="-82" y="-40" width="14" height="52" rx="4" />
          <rect class="pt-pillow" x="-64" y="-26" width="52" height="24" rx="9" />
          <g transform="translate(-38 -16) rotate(-8)">
            <rect class="pt-fill-navy" x="-17" y="-12" width="34" height="24" rx="3" />
            <circle class="pt-gold" cx="0" cy="-4" r="4.5" />
            <rect class="pt-gold" x="-8" y="4" width="16" height="2.5" rx="1.2" />
            <g transform="translate(0 -4)">
              <rect class="pt-shades" x="-11" y="-3" width="9" height="6" rx="2" />
              <rect class="pt-shades" x="2" y="-3" width="9" height="6" rx="2" />
              <path class="pt-shades-bridge" d="M-2 0 h4" />
            </g>
          </g>
          <text class="pt-zzz" x="-6" y="-34">z</text>
          <text class="pt-zzz pt-zzz-sm" x="8" y="-46">z</text>
        </g>

        <!-- 5. bathroom: a salmon filling in a tax return in the bathtub -->
        <g class="palace-thing" data-room="bathroom" transform="translate(170 302) scale(1.22)">
          <path class="pt-fill-blue" d="M-72 -6 q0 -10 10 -10 l124 0 q10 0 10 10 l-7 32 q-2 10 -12 10 l-106 0 q-10 0 -12 -10 Z" />
          <circle class="pt-fill-cream" cx="-62" cy="-22" r="4.5" />
          <path class="pt-stroke" d="M-62 -27 q0 -14 12 -16" />
          <g transform="translate(-2 8)">
            <path class="pt-fill-orange" d="M-30 0 q16 -18 36 0 q-16 18 -36 0 Z" />
            <path class="pt-fill-orange-dark" d="M-30 0 l-13 -10 l0 20 Z" />
            <circle class="pt-eye" cx="-2" cy="-2.5" r="2.1" />
            <path class="pt-fin" d="M-12 -8 l5 -9 l6 7" />
          </g>
          <g transform="translate(40 -8) rotate(10)">
            <rect class="pt-fill-cream" x="-14" y="-19" width="28" height="36" rx="2.5" />
            <g class="pt-form-lines">
              <path d="M-8 -11 h16" />
              <path d="M-8 -4 h16" />
              <path d="M-8 3 h10" />
            </g>
            <path class="pt-form-sign" d="M-8 11 h9" />
          </g>
          <circle class="pt-bubble" cx="-44" cy="-2" r="3" />
          <circle class="pt-bubble" cx="-36" cy="-10" r="2" />
        </g>

        <!-- the walker -->
        <g class="palace-walker" transform="translate(105 188)">
          <circle class="palace-walker-halo" r="18" />
          <circle class="palace-walker-dot" r="6.5" />
        </g>
      </svg>
  </div>

  <div class="palace-caption" data-palace-caption aria-live="polite"></div>

  <ul class="palace-steps" data-palace-steps></ul>

  <div class="tom-btn-row">
    <button type="button" class="tom-btn" data-palace-prev>Back a room</button>
    <button type="button" class="tom-btn" data-palace-next>Next room</button>
    <button type="button" class="tom-btn tom-btn-solid" data-palace-walk>Walk it for me</button>
  </div>

  <div class="palace-quiz" data-palace-quiz hidden>
    <h3>Now put it back</h3>
    <p class="tom-small tom-muted">
      Do not scroll up. Walk the flat in your head, room by room, and write down what
      you found in each one.
    </p>
    <ol class="palace-quiz-list" data-palace-quiz-list></ol>
    <div class="tom-btn-row">
      <button type="button" class="tom-btn tom-btn-solid" data-palace-check>Check my list</button>
    </div>
    <p class="tom-small" data-palace-result aria-live="polite"></p>
  </div>
</section>

<div data-palace-noscript>
  <p class="tom-note">
    <strong>The palace walk needs JavaScript too.</strong> The list it stores is
    umbrella, batteries, milk, passport, taxes, in that order: hallway, kitchen, living
    room, bedroom, bathroom.
  </p>
</div>

<h2>Why the silly pictures work</h2>

<p>
The method is old and the mechanism is dull: human memory is much better at places and
pictures than at lists. So you stop storing the list and start storing a walk. You
already know the layout of somewhere, so the order comes for free, and each room gives
you one hook to hang something on.
</p>

<p>
The images have to be ridiculous, because ordinary ones do not stick. A carton of milk
on a sofa is forgettable. A cow surfing the sofa is not. The strangeness is the
retrieval cue, and it is why every stop in the flat above is doing something it has no
business doing.
</p>

<p class="tom-small tom-muted">
All illustrations here are original SVG, drawn for this page. Both widgets run
client-side with no network requests and no storage.
</p>

<script src="{{ '/assets/js/memory.js' | relative_url }}" defer></script>
