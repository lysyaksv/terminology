const LATIN_ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const CYRILLIC_ALPHABET = "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЭЮЯ".split("");
const LANG_ORDER = ["en", "de", "ru"];

function alphabetFor(lang) {
  return lang === "ru" ? CYRILLIC_ALPHABET : LATIN_ALPHABET;
}

function ThumbIndex({ sourceLang, activeLetter, availableLetters, onSelect }) {
  const alphabet = alphabetFor(sourceLang);
  return (
    <nav className="thumb-index" aria-label="Alphabet index">
      {alphabet.map((letter) => {
        const has = availableLetters.has(letter);
        const active = letter === activeLetter;
        return (
          <button
            key={letter}
            className={"tab-btn" + (active ? " active" : "")}
            disabled={!has}
            aria-pressed={active ? "true" : "false"}
            onClick={() => onSelect(letter)}
          >
            {letter}
          </button>
        );
      })}
    </nav>
  );
}

function TermRow({ term, sourceLang, otherLangs, expanded, onToggle, audioReady }) {
  const { t } = useI18n();
  return (
    <button
      className={"term-row" + (expanded ? " revealed" : "")}
      type="button"
      aria-expanded={expanded ? "true" : "false"}
      onClick={onToggle}
    >
      <span className="term-source">
        {term[sourceLang]}
        {term.core && (
          <span className="core-star" title={t("filter_priority")}>
            ★
          </span>
        )}
        <AudioButton id={term.id} lang={sourceLang} ready={audioReady} />
      </span>
      <span className="term-reveal-hint">{t("glossary_reveal_hint")}</span>
      <div className="term-equivalents">
        {otherLangs.map((lang) => (
          <span className="term-eq" key={lang}>
            <b>{lang.toUpperCase()}</b> {term[lang] || "—"}
            {term[lang] && <AudioButton id={term.id} lang={lang} ready={audioReady} />}
          </span>
        ))}
      </div>
    </button>
  );
}

function GlossaryPage() {
  const { lang, t } = useI18n();
  const audioReady = useAudioManifest();

  const [sourceLang, setSourceLang] = React.useState(lang);
  const [activeLetter, setActiveLetter] = React.useState(null);
  const [expandedIds, setExpandedIds] = React.useState(() => new Set());

  // Mirrors the vanilla site: the Word List's source language follows the
  // interface language until the person picks a different one explicitly.
  React.useEffect(() => {
    setSourceLang(lang);
    setActiveLetter(null);
  }, [lang]);

  const currentTerms = React.useMemo(
    () => TERMS.filter((term) => !!term[sourceLang]),
    [sourceLang]
  );

  const availableLetters = React.useMemo(() => {
    const set = new Set();
    currentTerms.forEach((term) => set.add(TextUtils.initialLetter(term[sourceLang], sourceLang)));
    return set;
  }, [currentTerms, sourceLang]);

  const alphabet = alphabetFor(sourceLang);
  const effectiveLetter =
    activeLetter && availableLetters.has(activeLetter)
      ? activeLetter
      : alphabet.find((l) => availableLetters.has(l)) || null;

  const terms = React.useMemo(() => {
    if (!effectiveLetter) return [];
    return currentTerms
      .filter((term) => TextUtils.initialLetter(term[sourceLang], sourceLang) === effectiveLetter)
      .sort((a, b) =>
        TextUtils.sortableForm(a[sourceLang], sourceLang).localeCompare(
          TextUtils.sortableForm(b[sourceLang], sourceLang),
          sourceLang
        )
      );
  }, [currentTerms, sourceLang, effectiveLetter]);

  const otherLangs = LANG_ORDER.filter((l) => l !== sourceLang);

  function handleSourceChange(e) {
    setSourceLang(e.target.value);
    setActiveLetter(null);
  }

  function toggleExpanded(id) {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <span className="kicker">{t("glossary_kicker")}</span>
          <h1>{t("glossary_title")}</h1>
          <p>{t("glossary_lede")}</p>
        </div>

        <div className="glossary-toolbar">
          <div className="field">
            <label htmlFor="source-lang">{t("field_source")}</label>
            <select id="source-lang" value={sourceLang} onChange={handleSourceChange}>
              <option value="en">English</option>
              <option value="de">Deutsch</option>
              <option value="ru">Русский</option>
            </select>
          </div>
          <div
            className="field"
            style={{ marginLeft: "auto", alignSelf: "center", fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--muted)" }}
          >
            <span>{terms.length}</span> <span>{t("glossary_count_label")}</span>
          </div>
        </div>

        <div className="glossary-layout">
          <ThumbIndex
            sourceLang={sourceLang}
            activeLetter={effectiveLetter}
            availableLetters={availableLetters}
            onSelect={setActiveLetter}
          />
          <div>
            {terms.length > 0 ? (
              <div id="glossary-list" className="glossary-list">
                <div className="glossary-group">
                  {terms.map((term) => (
                    <TermRow
                      key={term.id}
                      term={term}
                      sourceLang={sourceLang}
                      otherLangs={otherLangs}
                      expanded={expandedIds.has(term.id)}
                      onToggle={() => toggleExpanded(term.id)}
                      audioReady={audioReady}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div className="empty-state">
                <p>{t("glossary_empty")}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
