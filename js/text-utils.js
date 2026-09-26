/* ==========================================================================
   Ministry Books Terminology — shared text utilities (framework-free)
   Sorting, length-tier sizing, and typing-answer grading. Kept plain JS
   (no JSX) and consolidated here once, instead of being duplicated across
   glossary/practice modules the way the vanilla site had it.
   ========================================================================== */

// Order of the "Into" language select's options on both Practice and
// Phrases pages — used to auto-pick a valid alternative when the "From"
// language is changed to match the current "Into" value.
const TO_LANG_ORDER = ["de", "en", "ru"];

const TextUtils = (function () {
  "use strict";

  const GERMAN_ARTICLES = ["der ", "die ", "das "];

  // Strips a leading German article and any leading punctuation, so terms
  // sort and index by their first real letter rather than decoration.
  function sortableForm(term, lang) {
    let s = (term || "").trim();
    if (lang === "de") {
      const low = s.toLowerCase();
      for (const art of GERMAN_ARTICLES) {
        if (low.startsWith(art)) {
          s = s.slice(art.length);
          break;
        }
      }
    }
    while (s.length && !/[\p{L}\p{N}]/u.test(s[0])) {
      s = s.slice(1).trim();
    }
    return s;
  }

  function initialLetter(term, lang) {
    const s = sortableForm(term, lang);
    return s.charAt(0).toUpperCase();
  }

  // Graduated size tier for long entries (common in German/Russian, which
  // often carry usage notes) — keeps a single font family everywhere and
  // just scales size/alignment down instead of switching typefaces.
  function lengthTierClass(str) {
    if (typeof str !== "string") return "";
    const len = str.length;
    if (len <= 30) return "";
    if (len <= 60) return " len-md";
    if (len <= 100) return " len-lg";
    return " len-xl";
  }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  /* ---------------- Typing-mode answer grading ---------------- */

  function normalize(str) {
    return str
      .trim()
      .toLowerCase()
      .replace(/^(der|die|das)\s+/, "")
      .replace(/[.,!?;:"'’]/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  // Real translations sometimes carry usage notes, verse references, or
  // several synonyms in one field. Strip parenthetical asides, split on
  // commas/semicolons, drop any "label:" prefix on each piece, and accept
  // a match against ANY resulting candidate.
  function acceptableAnswers(raw) {
    const noParens = raw.replace(/\([^)]*\)/g, " ");
    const pieces = noParens.split(/[,;]/);
    const candidates = pieces
      .map((piece) => {
        const afterColon = piece.includes(":") ? piece.split(":").pop() : piece;
        return normalize(afterColon);
      })
      .filter(Boolean);
    return candidates.length ? candidates : [normalize(raw)];
  }

  function isTypingCorrect(userInput, target) {
    const guess = normalize(userInput);
    if (!guess) return false;
    return acceptableAnswers(target).includes(guess);
  }

  return {
    sortableForm,
    initialLetter,
    lengthTierClass,
    shuffle,
    normalize,
    acceptableAnswers,
    isTypingCorrect,
  };
})();
