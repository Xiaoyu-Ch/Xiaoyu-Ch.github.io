/*
 * languages.js - "Guess the language".
 *
 * Ten rounds, drawn without replacement from the bank below. Everything runs
 * in the browser: no network calls, no storage, no analytics.
 *
 * Rules the bank follows:
 *  - `answers` lists every one of Tom's seven languages in which the word, at
 *    exactly the spelling shown, is a real word. Any of them scores.
 *  - `meanings` must cover every language in `answers`.
 *  - Accents and diacritics are part of the spelling. `esquisito` is Portuguese
 *    and `exquisito` is Spanish, so only the Portuguese form is listed here.
 */
(function () {
  "use strict";

  var LANGS = [
    { code: "zh", name: "Mandarin" },
    { code: "en", name: "English" },
    { code: "es", name: "Spanish" },
    { code: "fr", name: "French" },
    { code: "de", name: "German" },
    { code: "ja", name: "Japanese" },
    { code: "pt", name: "Portuguese" },
  ];

  var NAME = {};
  LANGS.forEach(function (l) {
    NAME[l.code] = l.name;
  });

  var BANK = [
    {
      word: "Gift",
      answers: ["de", "en"],
      meanings: { de: "poison", en: "a present" },
      note: "German Gift and English gift started as the same word, meaning something given. German narrowed it to a dose, then to poison. The old sense survives in Mitgift, a dowry. A present in German is a Geschenk.",
    },
    {
      word: "embarazada",
      answers: ["es"],
      meanings: { es: "pregnant" },
      note: "The trap every English speaker falls into once. Spanish for embarrassed is avergonzado. Portuguese spells its cousin embaracada with a cedilla, and that one really does mean embarrassed or tangled.",
    },
    {
      word: "Handy",
      answers: ["de", "en"],
      meanings: { de: "a mobile phone", en: "useful, convenient" },
      note: "Handy is a German coinage that looks English and is not. No English speaker has ever called a phone a handy.",
    },
    {
      word: "Rathaus",
      answers: ["de"],
      meanings: { de: "a town hall" },
      note: "Rat is a council and Haus is a house. No rodents are involved. The German for rat is Ratte.",
    },
    {
      word: "bekommen",
      answers: ["de"],
      meanings: { de: "to receive, to get" },
      note: "Not to become, which is werden. Ordering dinner and announcing that you are about to become a steak is a rite of passage.",
    },
    {
      word: "Kummerspeck",
      answers: ["de"],
      meanings: { de: "weight gained from comfort eating" },
      note: "Literally grief bacon. Kummer is sorrow and Speck is bacon or fat. German builds the word you needed and did not have.",
    },
    {
      word: "sobremesa",
      answers: ["es", "pt"],
      meanings: {
        es: "the conversation that keeps everyone at the table after a meal",
        pt: "dessert",
      },
      note: "One spelling, one border apart. In Spain the sobremesa is the talking. In Portugal and Brazil it is the pudding.",
    },
    {
      word: "polvo",
      answers: ["es", "pt"],
      meanings: { es: "dust, powder", pt: "octopus" },
      note: "Order polvo in Lisbon and you get grilled octopus. Order it in Madrid and you get a puzzled look, because Spanish octopus is pulpo.",
    },
    {
      word: "borracha",
      answers: ["es", "pt"],
      meanings: { es: "drunk, of a woman", pt: "rubber, or an eraser" },
      note: "Brazilian schoolchildren ask to borrow a borracha several times a day. It is an eraser.",
    },
    {
      word: "largo",
      answers: ["es", "pt"],
      meanings: { es: "long", pt: "wide" },
      note: "Two Iberian neighbours, one spelling, two different dimensions. Portuguese says comprido when it means long.",
    },
    {
      word: "oficina",
      answers: ["es", "pt"],
      meanings: { es: "an office", pt: "a workshop or garage" },
      note: "Take your car to an oficina in Brazil and it gets fixed. Do it in Spain and you are standing in somebody's office holding a wrench.",
    },
    {
      word: "esquisito",
      answers: ["pt"],
      meanings: { pt: "strange, odd" },
      note: "Spanish exquisito, with an x, means exquisite. Portuguese esquisito, with an s, means the meal was weird. One letter, opposite reviews.",
    },
    {
      word: "saudade",
      answers: ["pt"],
      meanings: { pt: "a deep longing for something or someone absent" },
      note: "Portuguese and Galician keep this one to themselves. It is not quite nostalgia and not quite missing someone, which is why it survives untranslated.",
    },
    {
      word: "pain",
      answers: ["en", "fr"],
      meanings: { en: "pain", fr: "bread" },
      note: "Pain au chocolat is not a threat.",
    },
    {
      word: "sale",
      answers: ["en", "es", "fr"],
      meanings: {
        en: "a sale",
        es: "he or she goes out, from salir",
        fr: "dirty",
      },
      note: "A French shop window reading sale is either advertising or insulting itself, depending on which language you are reading it in.",
    },
    {
      word: "fin",
      answers: ["en", "es", "fr"],
      meanings: { en: "a fin", es: "the end", fr: "the end, and also fine or thin" },
      note: "Fin on the last frame of an old film is a full stop, not a fish.",
    },
    {
      word: "pie",
      answers: ["en", "es", "fr"],
      meanings: { en: "a pie", es: "a foot", fr: "a magpie" },
      note: "Three languages, one spelling, nothing whatsoever in common. Spanish de pie means standing up.",
    },
    {
      word: "chef",
      answers: ["en", "fr"],
      meanings: { en: "the cook in charge of a kitchen", fr: "a boss, the head of anything" },
      note: "In French your chef is whoever you report to. The kitchen meaning is short for chef de cuisine.",
    },
    {
      word: "sensible",
      answers: ["en", "es", "fr"],
      meanings: { en: "showing good sense", es: "sensitive", fr: "sensitive" },
      note: "Calling a French or Spanish colleague sensible compliments their feelings, not their judgement.",
    },
    {
      word: "actuellement",
      answers: ["fr"],
      meanings: { fr: "currently, at the moment" },
      note: "Not actually, which is en fait. The same trap sits inside Spanish actualmente and Portuguese atualmente.",
    },
    {
      word: "librairie",
      answers: ["fr"],
      meanings: { fr: "a bookshop" },
      note: "A library is a bibliotheque. One sells books, the other lends them, and confusing the two gets expensive.",
    },
    {
      word: "木",
      answers: ["zh", "ja"],
      meanings: { zh: "tree, wood, said mu", ja: "tree, said ki" },
      note: "A pictograph of a trunk with branches and roots. Stack two and you get a grove. Stack three and you get a forest.",
    },
    {
      word: "手紙",
      answers: ["zh", "ja"],
      meanings: { zh: "toilet paper, said shouzhi", ja: "a letter you post, said tegami" },
      note: "Same two characters, very different errand. Mainland Chinese simplifies the second character, but the trap is famous anyway.",
    },
    {
      word: "勉強",
      answers: ["zh", "ja"],
      meanings: { zh: "reluctantly, or to force something, said mianqiang", ja: "study, said benkyou" },
      note: "Japanese borrowed the characters for forcing yourself and made them mean homework, which is either very honest or very bleak.",
    },
    {
      word: "大丈夫",
      answers: ["zh", "ja"],
      meanings: { zh: "a real man, a man of honour, said dazhangfu", ja: "fine, no problem, said daijoubu" },
      note: "Ask a Japanese friend daijoubu and you are checking they are all right. Ask a Chinese friend the same three characters and you are asking something else entirely.",
    },
    {
      word: "新聞",
      answers: ["zh", "ja"],
      meanings: { zh: "news, said xinwen", ja: "a newspaper, said shinbun" },
      note: "Japanese kept the object and Chinese kept the content. Chinese for a newspaper is a different word again.",
    },
    {
      word: "加油",
      answers: ["zh"],
      meanings: { zh: "literally add oil, used to mean keep going, you can do it" },
      note: "It is what a Chinese crowd shouts at a race, and also what you do at a petrol station. The literal translation, add oil, is now in the Oxford English Dictionary as a Hong Kong English borrowing.",
    },
  ];

  var ROUNDS = 10;

  var root = document.getElementById("guess-game");
  if (!root) return;

  var elWord = root.querySelector("[data-game-word]");
  var elChoices = root.querySelector("[data-game-choices]");
  var elReveal = root.querySelector("[data-game-reveal]");
  var elScore = root.querySelector("[data-game-score]");
  var elRound = root.querySelector("[data-game-round]");
  var elBar = root.querySelector("[data-game-bar]");
  var elNext = root.querySelector("[data-game-next]");
  var elStage = root.querySelector("[data-game-stage]");
  var elEnd = root.querySelector("[data-game-end]");
  var elEndText = root.querySelector("[data-game-end-text]");
  var elEndList = root.querySelector("[data-game-end-list]");
  var elAgain = root.querySelector("[data-game-again]");
  var elNoscript = document.querySelector("[data-game-noscript]");

  if (!elWord || !elChoices || !elNext) return;
  if (elNoscript) elNoscript.hidden = true;
  root.hidden = false;

  var deck = [];
  var index = 0;
  var score = 0;
  var answered = false;
  var history = [];

  function shuffle(list) {
    var a = list.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i];
      a[i] = a[j];
      a[j] = t;
    }
    return a;
  }

  function buildChoices() {
    elChoices.textContent = "";
    LANGS.forEach(function (lang, i) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "guess-choice";
      btn.setAttribute("data-lang", lang.code);
      btn.innerHTML = '<span class="guess-choice-key" aria-hidden="true">' + (i + 1) + "</span>" + lang.name;
      btn.addEventListener("click", function () {
        answer(lang.code);
      });
      elChoices.appendChild(btn);
    });
  }

  function listNames(codes) {
    var names = codes.map(function (c) {
      return NAME[c];
    });
    if (names.length === 1) return names[0];
    return names.slice(0, -1).join(", ") + " and " + names[names.length - 1];
  }

  function renderRound() {
    answered = false;
    var entry = deck[index];
    elWord.textContent = entry.word;
    elWord.setAttribute("lang", entry.answers[0] === "zh" ? "zh" : entry.answers[0]);
    elReveal.hidden = true;
    elReveal.textContent = "";
    elNext.hidden = true;
    elRound.textContent = index + 1 + " of " + ROUNDS;
    elScore.textContent = String(score);
    if (elBar) elBar.style.width = (index / ROUNDS) * 100 + "%";
    Array.prototype.forEach.call(elChoices.children, function (btn) {
      btn.disabled = false;
      btn.className = "guess-choice";
    });
    var first = elChoices.querySelector("button");
    if (first && document.activeElement !== document.body) first.focus();
  }

  function answer(code) {
    if (answered) return;
    answered = true;

    var entry = deck[index];
    var correct = entry.answers.indexOf(code) !== -1;
    if (correct) score += 1;
    history.push({ word: entry.word, correct: correct, picked: code, answers: entry.answers });

    Array.prototype.forEach.call(elChoices.children, function (btn) {
      var c = btn.getAttribute("data-lang");
      btn.disabled = true;
      if (entry.answers.indexOf(c) !== -1) btn.classList.add("is-right");
      else if (c === code) btn.classList.add("is-wrong");
    });

    var parts = [];
    parts.push(
      '<p class="guess-verdict ' +
        (correct ? "is-right" : "is-wrong") +
        '">' +
        (correct ? "Correct." : "Not quite.") +
        " " +
        escapeHtml(entry.word) +
        " is " +
        listNames(entry.answers) +
        ".</p>"
    );
    parts.push('<dl class="guess-meanings">');
    entry.answers.forEach(function (c) {
      parts.push("<dt>" + escapeHtml(NAME[c]) + "</dt><dd>" + escapeHtml(entry.meanings[c]) + "</dd>");
    });
    parts.push("</dl>");
    parts.push('<p class="guess-note">' + escapeHtml(entry.note) + "</p>");

    elReveal.innerHTML = parts.join("");
    elReveal.hidden = false;
    elScore.textContent = String(score);
    if (elBar) elBar.style.width = ((index + 1) / ROUNDS) * 100 + "%";

    elNext.hidden = false;
    elNext.textContent = index + 1 >= ROUNDS ? "See the score" : "Next word";
    elNext.focus();
  }

  function escapeHtml(value) {
    return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function finish() {
    elStage.hidden = true;
    elEnd.hidden = false;

    var verdict;
    if (score === ROUNDS) verdict = "Perfect. You have done this before.";
    else if (score >= 8) verdict = "Strong. The false friends did not catch you.";
    else if (score >= 5) verdict = "Respectable. Somewhere in there a German noun lied to you.";
    else if (score >= 2) verdict = "Tough round. In fairness, several of these are designed to mislead.";
    else verdict = "Brutal. Every single one of these fools fluent speakers too.";

    elEndText.textContent = score + " out of " + ROUNDS + ". " + verdict;

    elEndList.textContent = "";
    history.forEach(function (h) {
      var li = document.createElement("li");
      li.className = h.correct ? "is-right" : "is-wrong";
      li.innerHTML =
        '<span class="guess-end-word">' + escapeHtml(h.word) + "</span> " + '<span class="guess-end-detail">' + listNames(h.answers) + "</span>";
      elEndList.appendChild(li);
    });

    elAgain.focus();
  }

  function start() {
    deck = shuffle(BANK).slice(0, ROUNDS);
    index = 0;
    score = 0;
    history = [];
    elStage.hidden = false;
    elEnd.hidden = true;
    renderRound();
  }

  elNext.addEventListener("click", function () {
    if (index + 1 >= ROUNDS) {
      finish();
      return;
    }
    index += 1;
    renderRound();
  });

  if (elAgain) {
    elAgain.addEventListener("click", start);
  }

  // Number keys 1 to 7 pick a language, Enter advances. Bound to the document
  // rather than the game element, because on first paint focus is still on
  // <body> and keydown would never reach a listener further down the tree.
  document.addEventListener("keydown", function (event) {
    if (elEnd && !elEnd.hidden) return;
    if (event.metaKey || event.ctrlKey || event.altKey) return;
    var tag = event.target.tagName;
    if (tag === "INPUT" || tag === "TEXTAREA" || event.target.isContentEditable) return;
    if (tag === "BUTTON" && event.key === "Enter") return;
    var n = parseInt(event.key, 10);
    if (!answered && n >= 1 && n <= LANGS.length) {
      event.preventDefault();
      answer(LANGS[n - 1].code);
    } else if (answered && event.key === "Enter" && !elNext.hidden) {
      event.preventDefault();
      elNext.click();
    }
  });

  buildChoices();
  start();
})();
