/*
 * memory.js - the Memory corner.
 *
 * Two independent widgets on one page:
 *   1. a speed memory drill, ten items shown for a few seconds then recalled;
 *   2. a memory palace walk through a cartoon apartment, then a recall quiz.
 *
 * Both run entirely in the browser. Nothing is stored and nothing is sent.
 */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function normalise(value) {
    return String(value)
      .toLowerCase()
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .replace(/[^a-z0-9]/g, "");
  }

  /* ================================================= speed memory drill */

  (function speedDrill() {
    var root = document.getElementById("speed-game");
    if (!root) return;

    var WORDS = [
      "anchor", "basil", "cactus", "domino", "ember", "fossil", "gondola", "harbour",
      "iguana", "jigsaw", "kettle", "lantern", "marble", "nutmeg", "otter", "pebble",
      "quartz", "ribbon", "saddle", "thimble", "umbrella", "velvet", "walnut", "zebra",
    ];

    var COUNT = 10;
    var SHOW_SECONDS = 7;

    var stage = root.querySelector("[data-speed-stage]");
    var startBtn = root.querySelector("[data-speed-start]");
    var modeInputs = Array.prototype.slice.call(root.querySelectorAll("[name='speed-mode']"));
    var live = root.querySelector("[data-speed-live]");
    if (!stage || !startBtn) return;

    root.hidden = false;
    var noscript = document.querySelector("[data-speed-noscript]");
    if (noscript) noscript.hidden = true;

    var items = [];
    var ticker = null;
    var recallStarted = 0;

    function mode() {
      var chosen = modeInputs.filter(function (i) {
        return i.checked;
      })[0];
      return chosen ? chosen.value : "digits";
    }

    function pick() {
      if (mode() === "digits") {
        var digits = [];
        for (var i = 0; i < COUNT; i++) digits.push(String(Math.floor(Math.random() * 10)));
        return digits;
      }
      var pool = WORDS.slice();
      var out = [];
      for (var j = 0; j < COUNT; j++) {
        out.push(pool.splice(Math.floor(Math.random() * pool.length), 1)[0]);
      }
      return out;
    }

    function clearTicker() {
      if (ticker) {
        window.clearInterval(ticker);
        ticker = null;
      }
    }

    function showItems() {
      items = pick();
      startBtn.disabled = true;

      var circumference = 2 * Math.PI * 16;
      stage.innerHTML =
        '<ul class="speed-items">' +
        items
          .map(function (it) {
            return '<li class="speed-item">' + it + "</li>";
          })
          .join("") +
        "</ul>" +
        '<div class="speed-countdown">' +
        '<svg class="speed-ring" viewBox="0 0 38 38" aria-hidden="true">' +
        '<circle class="speed-ring-track" cx="19" cy="19" r="16"></circle>' +
        '<circle class="speed-ring-bar" cx="19" cy="19" r="16" stroke-dasharray="' +
        circumference.toFixed(1) +
        '" stroke-dashoffset="0"></circle>' +
        '<text class="speed-ring-number" x="19" y="23" text-anchor="middle">' +
        SHOW_SECONDS +
        "</text>" +
        "</svg>" +
        "<span>Memorise them. They disappear when this runs out.</span>" +
        "</div>";

      if (live) live.textContent = "Ten items shown. You have " + SHOW_SECONDS + " seconds.";

      var bar = stage.querySelector(".speed-ring-bar");
      var number = stage.querySelector(".speed-ring-number");
      var started = Date.now();

      clearTicker();
      ticker = window.setInterval(function () {
        var elapsed = (Date.now() - started) / 1000;
        var left = Math.max(0, SHOW_SECONDS - elapsed);
        if (bar) bar.setAttribute("stroke-dashoffset", String((elapsed / SHOW_SECONDS) * circumference));
        if (number) number.textContent = String(Math.ceil(left));
        if (left <= 0) {
          clearTicker();
          showRecall();
        }
      }, 100);
    }

    function showRecall() {
      recallStarted = Date.now();
      stage.innerHTML =
        '<label class="speed-recall-label" for="speed-answer">' +
        "Type what you remember, in order, separated by spaces or commas." +
        "</label>" +
        '<textarea class="speed-input" id="speed-answer" autocomplete="off" autocapitalize="off" spellcheck="false"></textarea>' +
        '<div class="tom-btn-row"><button type="button" class="tom-btn tom-btn-solid" data-speed-score>Score me</button></div>';

      if (live) live.textContent = "Items hidden. Type what you remember.";

      var input = stage.querySelector("#speed-answer");
      var scoreBtn = stage.querySelector("[data-speed-score]");
      input.focus();

      function submit() {
        score(input.value);
      }
      scoreBtn.addEventListener("click", submit);
      input.addEventListener("keydown", function (event) {
        if (event.key === "Enter" && (event.metaKey || event.ctrlKey)) {
          event.preventDefault();
          submit();
        }
      });
    }

    function score(raw) {
      var seconds = (Date.now() - recallStarted) / 1000;
      var given = String(raw)
        .split(/[\s,;]+/)
        .map(normalise)
        .filter(Boolean);

      var inPlace = 0;
      var anywhere = 0;
      var pool = given.slice();

      var marks = items.map(function (item, i) {
        var want = normalise(item);
        var hitHere = given[i] === want;
        if (hitHere) inPlace += 1;
        var idx = pool.indexOf(want);
        if (idx !== -1) {
          anywhere += 1;
          pool.splice(idx, 1);
        }
        return { item: item, hit: hitHere, you: given[i] || "" };
      });

      stage.innerHTML =
        '<div class="speed-result">' +
        '<div class="tom-stat-row">' +
        '<div class="tom-stat"><span class="tom-stat-value">' +
        inPlace +
        "/" +
        COUNT +
        '</span><span class="tom-stat-label">In order</span></div>' +
        '<div class="tom-stat"><span class="tom-stat-value">' +
        anywhere +
        "/" +
        COUNT +
        '</span><span class="tom-stat-label">Recalled</span></div>' +
        '<div class="tom-stat"><span class="tom-stat-value">' +
        seconds.toFixed(1) +
        's</span><span class="tom-stat-label">Recall time</span></div>' +
        "</div>" +
        '<ul class="speed-marks">' +
        marks
          .map(function (m) {
            return (
              '<li class="speed-mark ' +
              (m.hit ? "is-hit" : "is-miss") +
              '"><span>' +
              m.item +
              "</span>" +
              (m.hit || !m.you ? "" : '<span class="speed-mark-you">' + m.you + "</span>") +
              "</li>"
            );
          })
          .join("") +
        "</ul>" +
        "</div>";

      if (live) {
        live.textContent = inPlace + " of " + COUNT + " in the right order, " + anywhere + " recalled at all.";
      }
      startBtn.disabled = false;
      startBtn.textContent = "Go again";
      startBtn.focus();
    }

    startBtn.addEventListener("click", showItems);
  })();

  /* ====================================================== memory palace */

  (function memoryPalace() {
    var root = document.getElementById("palace");
    if (!root) return;

    var STOPS = [
      {
        room: "hallway",
        name: "Hallway",
        item: "Umbrella",
        x: 105,
        y: 188,
        image:
          "The umbrella is open, upside down, wedged in the doorway like a bowl. " +
          "It has filled with water, and a goldfish has moved in. It looks happy. " +
          "You have to step around it to get past.",
      },
      {
        room: "kitchen",
        name: "Kitchen",
        item: "Batteries",
        x: 300,
        y: 188,
        image:
          "The kettle is not plugged into anything. It is balanced on a wobbling " +
          "tower of three enormous AA batteries, and it is singing, loudly, slightly " +
          "flat.",
      },
      {
        room: "living",
        name: "Living room",
        item: "Milk",
        x: 515,
        y: 188,
        image:
          "A cow is surfing the sofa. An actual wave is rolling across the cushions " +
          "and the cow is riding it, perfectly balanced, entirely unbothered, " +
          "dripping milk onto the rug.",
      },
      {
        room: "bedroom",
        name: "Bedroom",
        item: "Passport",
        x: 470,
        y: 382,
        image:
          "Your passport is asleep on the pillow wearing tiny sunglasses. Every time " +
          "it snores, a visa stamp puffs out and lands on the duvet.",
      },
      {
        room: "bathroom",
        name: "Bathroom",
        item: "Taxes",
        x: 170,
        y: 382,
        image:
          "A salmon is in the bath, in the water, filling in a tax return on a " +
          "clipboard. It has already signed in the wrong box once. It is not going " +
          "to ask you for help.",
      },
    ];

    var svgRooms = Array.prototype.slice.call(root.querySelectorAll(".palace-room"));
    var things = Array.prototype.slice.call(root.querySelectorAll(".palace-thing"));
    var walker = root.querySelector(".palace-walker");
    var caption = root.querySelector("[data-palace-caption]");
    var stepsWrap = root.querySelector("[data-palace-steps]");
    var prevBtn = root.querySelector("[data-palace-prev]");
    var nextBtn = root.querySelector("[data-palace-next]");
    var walkBtn = root.querySelector("[data-palace-walk]");
    var quiz = root.querySelector("[data-palace-quiz]");
    var quizList = root.querySelector("[data-palace-quiz-list]");
    var quizCheck = root.querySelector("[data-palace-check]");
    var quizResult = root.querySelector("[data-palace-result]");
    if (!caption || !nextBtn) return;

    var noscript = document.querySelector("[data-palace-noscript]");
    if (noscript) noscript.hidden = true;
    root.hidden = false;

    var at = 0;
    var autoTimer = null;
    var visited = {};

    function render() {
      var stop = STOPS[at];
      visited[stop.room] = true;

      svgRooms.forEach(function (r) {
        r.classList.toggle("is-current", r.getAttribute("data-room") === stop.room);
      });
      things.forEach(function (t) {
        var room = t.getAttribute("data-room");
        t.classList.toggle("is-current", room === stop.room);
        t.classList.toggle("is-shown", !!visited[room]);
      });
      if (walker) walker.setAttribute("transform", "translate(" + stop.x + " " + stop.y + ")");

      caption.innerHTML =
        '<p class="palace-caption-item">Stop ' +
        (at + 1) +
        " of " +
        STOPS.length +
        " &middot; " +
        stop.item +
        "</p>" +
        "<h3>" +
        stop.name +
        "</h3>" +
        "<p>" +
        stop.image +
        "</p>";

      Array.prototype.forEach.call(stepsWrap.children, function (btn, i) {
        btn.classList.toggle("is-current", i === at);
        btn.setAttribute("aria-current", i === at ? "true" : "false");
      });

      prevBtn.disabled = at === 0;
      nextBtn.disabled = at === STOPS.length - 1;
    }

    function go(index) {
      at = Math.max(0, Math.min(STOPS.length - 1, index));
      render();
    }

    function stopAuto() {
      if (autoTimer) {
        window.clearInterval(autoTimer);
        autoTimer = null;
      }
      if (walkBtn) walkBtn.textContent = "Walk it for me";
    }

    STOPS.forEach(function (stop, i) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "palace-step";
      btn.textContent = i + 1 + ". " + stop.name;
      btn.addEventListener("click", function () {
        stopAuto();
        go(i);
      });
      stepsWrap.appendChild(btn);
    });

    prevBtn.addEventListener("click", function () {
      stopAuto();
      go(at - 1);
    });
    nextBtn.addEventListener("click", function () {
      stopAuto();
      go(at + 1);
    });

    if (walkBtn) {
      walkBtn.addEventListener("click", function () {
        if (autoTimer) {
          stopAuto();
          return;
        }
        go(0);
        walkBtn.textContent = "Stop the walk";
        autoTimer = window.setInterval(function () {
          if (at >= STOPS.length - 1) {
            stopAuto();
            return;
          }
          go(at + 1);
        }, reduceMotion ? 2600 : 3400);
      });
    }

    // --------------------------------------------------------- the quiz

    STOPS.forEach(function (stop, i) {
      var li = document.createElement("li");
      li.className = "palace-quiz-row";
      li.setAttribute("data-room", stop.room);
      var id = "palace-answer-" + stop.room;
      li.innerHTML =
        '<label for="' +
        id +
        '">' +
        (i + 1) +
        ". " +
        stop.name +
        "</label>" +
        '<input type="text" id="' +
        id +
        '" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="what was in here?">';
      quizList.appendChild(li);
    });

    quizCheck.addEventListener("click", function () {
      var hits = 0;
      STOPS.forEach(function (stop) {
        var row = quizList.querySelector('[data-room="' + stop.room + '"]');
        var input = row.querySelector("input");
        var ok = normalise(input.value) === normalise(stop.item);
        if (ok) hits += 1;
        row.classList.toggle("is-hit", ok);
        row.classList.toggle("is-miss", !ok);
        var old = row.querySelector(".palace-quiz-answer");
        if (old) old.remove();
        if (!ok) {
          var p = document.createElement("p");
          p.className = "palace-quiz-answer";
          p.textContent = "It was " + stop.item.toLowerCase() + ".";
          row.appendChild(p);
        }
      });
      quizResult.textContent =
        hits === STOPS.length
          ? "Five out of five. That is the whole trick: the sillier the picture, the harder it is to lose."
          : hits + " out of " + STOPS.length + ". Walk the rooms once more and try again.";
    });

    go(0);
    if (quiz) quiz.hidden = false;
  })();
})();
