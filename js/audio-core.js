/* ==========================================================================
   Ministry Books Terminology — Pronunciation audio (core, framework-free)
   Thin helper around pre-generated espeak-ng clips (audio/<lang>/<id>.mp3).
   Kept plain JS (no JSX) since it holds no rendering logic — React hooks
   in hooks.js wrap this for component use.
   ========================================================================== */

const AudioCore = (function () {
  "use strict";

  let manifest = null;
  let manifestPromise = null;
  let currentAudio = null;

  function loadManifest() {
    if (manifestPromise) return manifestPromise;
    manifestPromise = fetch("audio/manifest.json")
      .then((res) => res.json())
      .then((data) => {
        manifest = data;
        return manifest;
      })
      .catch(() => {
        manifest = {};
        return manifest;
      });
    return manifestPromise;
  }

  function hasAudio(id, lang) {
    if (!manifest) return false;
    const entry = manifest[String(id)];
    return !!(entry && entry[lang]);
  }

  function play(id, lang) {
    if (!hasAudio(id, lang)) return;
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    currentAudio = new Audio(`audio/${lang}/${id}.mp3`);
    currentAudio.play().catch(() => {});
  }

  return { loadManifest, hasAudio, play };
})();
