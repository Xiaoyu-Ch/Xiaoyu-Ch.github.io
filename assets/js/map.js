/*
 * map.js - "Where I have been".
 *
 * Progressive enhancement. Without JS the page renders all four city cards in
 * document order and the map is a static illustration with a text alternative.
 * With JS the pins become buttons that swap which card is shown, and the route
 * animates once on load.
 */
(function () {
  "use strict";

  var root = document.querySelector(".journey");
  if (!root) return;

  var svg = root.querySelector(".journey-svg");
  var frame = root.querySelector(".journey-frame");
  var pins = Array.prototype.slice.call(root.querySelectorAll(".journey-pin"));
  var cards = Array.prototype.slice.call(root.querySelectorAll(".journey-card"));
  var replay = document.getElementById("journey-replay");
  var hint = document.getElementById("journey-hint");
  if (!svg || pins.length === 0 || cards.length === 0) return;

  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  root.classList.add("journey-js");

  var live = document.createElement("p");
  live.className = "tom-screen-reader";
  live.setAttribute("aria-live", "polite");
  root.appendChild(live);

  function cardFor(city) {
    return document.getElementById("city-" + city);
  }

  function select(city, options) {
    var opts = options || {};
    cards.forEach(function (card) {
      card.hidden = card.id !== "city-" + city;
    });
    pins.forEach(function (pin) {
      var on = pin.getAttribute("data-city") === city;
      pin.classList.toggle("is-active", on);
      pin.setAttribute("aria-expanded", on ? "true" : "false");
    });

    var card = cardFor(city);
    if (!card) return;

    if (opts.announce !== false) {
      var heading = card.querySelector("h2");
      live.textContent = heading ? heading.textContent.trim() + " selected" : "";
    }
    if (opts.scroll) {
      card.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "nearest" });
    }
  }

  pins.forEach(function (pin, index) {
    var city = pin.getAttribute("data-city");

    pin.addEventListener("click", function () {
      select(city, { scroll: true });
    });

    pin.addEventListener("keydown", function (event) {
      var key = event.key;
      if (key === "Enter" || key === " " || key === "Spacebar") {
        event.preventDefault();
        select(city, { scroll: true });
        return;
      }
      var step = key === "ArrowRight" || key === "ArrowDown" ? 1 : key === "ArrowLeft" || key === "ArrowUp" ? -1 : 0;
      if (step === 0) return;
      event.preventDefault();
      var next = pins[(index + step + pins.length) % pins.length];
      next.focus();
      select(next.getAttribute("data-city"), { scroll: false });
    });
  });

  function animateRoute() {
    if (reduceMotion) return;
    root.classList.remove("journey-animating");
    // force a reflow so the animation can restart on replay
    void svg.getBoundingClientRect().width;
    root.classList.add("journey-animating");
  }

  if (replay) {
    replay.addEventListener("click", function () {
      animateRoute();
      select(pins[0].getAttribute("data-city"), { scroll: false });
      live.textContent = "Route replayed from Shanghai.";
    });
    if (reduceMotion) {
      replay.hidden = true;
    }
  }

  if (hint && !reduceMotion) {
    hint.textContent = "Click a pin, or tab to one and press Enter. Arrow keys move between stops.";
  }

  // Deep links such as /map/#city-gainesville open on that stop.
  var initial = pins[pins.length - 1].getAttribute("data-city");
  var hash = (window.location.hash || "").replace("#city-", "");
  if (hash && cardFor(hash)) initial = hash;
  select(initial, { announce: false });

  // Start scrolled to the right-hand panel on narrow screens, where the most
  // recent stops are, rather than at the far edge of the Pacific.
  if (frame && frame.scrollWidth > frame.clientWidth) {
    frame.scrollLeft = frame.scrollWidth - frame.clientWidth;
  }

  if (!reduceMotion) {
    window.requestAnimationFrame(animateRoute);
  }
})();
