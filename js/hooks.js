/* ==========================================================================
   Ministry Books Terminology — React hooks & context (framework-aware,
   plain JS — no JSX here, so no Babel transform needed for this file).
   ========================================================================== */

const LangContext = React.createContext(null);

// Reads/writes the interface language, persisted the same way the vanilla
// site did (localStorage key "mbt_lang"), and keeps <html lang="..."> in
// sync. Call once at the top of the page tree; expose via LangContext so
// any component can read {lang, setLang, t} with useI18n().
function useLangState() {
  const [lang, setLangState] = React.useState(
    () => localStorage.getItem("mbt_lang") || "en"
  );

  const setLang = React.useCallback((l) => {
    localStorage.setItem("mbt_lang", l);
    setLangState(l);
  }, []);

  React.useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);

  const t = React.useCallback(
    (key) => (I18N[lang] && I18N[lang][key]) || I18N.en[key] || key,
    [lang]
  );

  return { lang, setLang, t };
}

function useI18n() {
  const ctx = React.useContext(LangContext);
  if (!ctx) {
    throw new Error("useI18n() must be used within a <LangContext.Provider>");
  }
  return ctx;
}

// Loads audio/manifest.json once per page (AudioCore caches the fetch
// promise internally, so multiple components calling this resolve
// together). Returns whether the manifest has finished loading.
function useAudioManifest() {
  const [ready, setReady] = React.useState(false);
  React.useEffect(() => {
    let cancelled = false;
    AudioCore.loadManifest().then(() => {
      if (!cancelled) setReady(true);
    });
    return () => {
      cancelled = true;
    };
  }, []);
  return ready;
}

// Deterrent-level copy protection, ported from the vanilla site's app.js.
// Mount once at the top of the page tree.
function useCopyProtection() {
  React.useEffect(() => {
    document.body.classList.add("no-select");

    const onContextMenu = (e) => e.preventDefault();
    const onKeydown = (e) => {
      const key = e.key.toLowerCase();
      const blockedCombo = (e.ctrlKey || e.metaKey) && ["c", "u", "s", "x"].includes(key);
      const blockedDevtools = key === "f12";
      if (blockedCombo || blockedDevtools) e.preventDefault();
    };
    const onCopy = (e) => e.preventDefault();
    const onCut = (e) => e.preventDefault();
    const onDragStart = (e) => e.preventDefault();

    document.addEventListener("contextmenu", onContextMenu);
    document.addEventListener("keydown", onKeydown);
    document.addEventListener("copy", onCopy);
    document.addEventListener("cut", onCut);
    document.addEventListener("dragstart", onDragStart);

    return () => {
      document.body.classList.remove("no-select");
      document.removeEventListener("contextmenu", onContextMenu);
      document.removeEventListener("keydown", onKeydown);
      document.removeEventListener("copy", onCopy);
      document.removeEventListener("cut", onCut);
      document.removeEventListener("dragstart", onDragStart);
    };
  }, []);
}

function useFooterYear() {
  return new Date().getFullYear();
}
