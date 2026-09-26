function LangSwitch({ lang, setLang }) {
  const langs = ["en", "de", "ru"];
  return (
    <div className="lang-switch" role="group" aria-label="Interface language">
      {langs.map((l) => (
        <button
          key={l}
          data-lang={l}
          className={l === lang ? "active" : ""}
          aria-pressed={l === lang ? "true" : "false"}
          onClick={() => setLang(l)}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
