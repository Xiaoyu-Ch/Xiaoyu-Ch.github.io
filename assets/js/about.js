/*
 * about.js - two small things on the home page.
 *
 * A note for anyone who opens the console, and a Konami code that throws a
 * basketball across the screen. Both are decoration: nothing here is needed
 * for the page to work, and the animation is skipped under
 * prefers-reduced-motion.
 */
(function () {
  "use strict";

  console.log("%cLooking at the source? Good instinct.", "font-size: 14px; font-weight: bold;");
  console.log("Built with Jekyll and al-folio. The map, the game and the flat are hand-rolled SVG.");
  console.log("Hiring, or admitting PhD students? xiaoyc@umich.edu");
  console.log("(There is a Konami code on this page.)");

  var CODE = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];

  var at = 0;
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.addEventListener("keydown", function (event) {
    var tag = event.target.tagName;
    if (tag === "INPUT" || tag === "TEXTAREA" || event.target.isContentEditable) return;

    var key = event.key.length === 1 ? event.key.toLowerCase() : event.key;
    at = key === CODE[at] ? at + 1 : key === CODE[0] ? 1 : 0;
    if (at !== CODE.length) return;

    at = 0;
    fire();
  });

  function fire() {
    var toast = document.createElement("div");
    toast.className = "about-egg-toast";
    toast.setAttribute("role", "status");
    toast.textContent = "Merge sort still beats heap sort, though.";
    document.body.appendChild(toast);
    window.setTimeout(function () {
      toast.remove();
    }, 3600);

    if (reduceMotion) return;

    var ball = document.createElement("div");
    ball.className = "about-egg-ball";
    ball.textContent = "🏀";
    ball.setAttribute("aria-hidden", "true");
    document.body.appendChild(ball);
    window.setTimeout(function () {
      ball.remove();
    }, 2300);
  }
})();
