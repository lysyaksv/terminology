function categoryOrderIndex(categoryId) {
  const idx = PHRASE_CATEGORIES.findIndex((c) => c.id === categoryId);
  return idx === -1 ? PHRASE_CATEGORIES.length : idx;
}

function buildPhraseQueue(category, order) {
  const pool = category === "all" ? PHRASES.slice() : PHRASES.filter((p) => p.category === category);
  if (order === "sequential") {
    return pool.slice().sort((a, b) => {
      const catDiff = categoryOrderIndex(a.category) - categoryOrderIndex(b.category);
      if (catDiff !== 0) return catDiff;
      return (a.num || 0) - (b.num || 0);
    });
  }
  return TextUtils.shuffle(pool);
}

function PhraseProgressRow({ index, total }) {
  const { t } = useI18n();
  const shown = Math.min(index + 1, total);
  const pct = total ? (index / total) * 100 : 0;
  return (
    <div className="progress-row">
      <span>{total ? `${shown} / ${total}` : "0 / 0"}</span>
      <div className="progress-bar">
        <div className="progress-bar-fill" style={{ width: `${pct}%` }} />
      </div>
      <span>
        {total} {t("phrase_count_label")}
      </span>
    </div>
  );
}

function PhrasePanes({ phrase, from, to }) {
  const { t } = useI18n();
  const cat = PHRASE_CATEGORIES.find((c) => c.id === phrase.category);
  const categoryLabel = cat ? t(cat.i18nKey) : phrase.category;
  const sourceClass = `phrase-pane-text${TextUtils.lengthTierClass(phrase[from])}`;
  const targetClass = `phrase-pane-text${TextUtils.lengthTierClass(phrase[to])}`;

  return (
    <React.Fragment>
      <span className="phrase-badge">
        {categoryLabel} · {phrase.num}
      </span>
      <div className="phrase-panes">
        <div className="phrase-pane source">
          <span className="phrase-pane-lang">{from.toUpperCase()}</span>
          <p className={sourceClass}>{phrase[from]}</p>
        </div>
        <div className="phrase-pane target">
          <span className="phrase-pane-lang">{to.toUpperCase()}</span>
          <p className={targetClass}>{phrase[to]}</p>
        </div>
      </div>
    </React.Fragment>
  );
}

function PhrasesPage() {
  const { t } = useI18n();

  const [from, setFrom] = React.useState("en");
  const [to, setTo] = React.useState("de");
  const [category, setCategory] = React.useState("all");
  const [order, setOrder] = React.useState("shuffled");
  const [queueVersion, setQueueVersion] = React.useState(0);
  const [index, setIndex] = React.useState(0);

  const queue = React.useMemo(() => buildPhraseQueue(category, order), [category, order, queueVersion]);
  const phrase = queue[index];

  function resetSession() {
    setIndex(0);
  }

  function handleFromChange(e) {
    const newFrom = e.target.value;
    const newTo = to === newFrom ? TO_LANG_ORDER.find((l) => l !== newFrom) : to;
    setFrom(newFrom);
    setTo(newTo);
    resetSession();
  }

  function handleToChange(e) {
    setTo(e.target.value);
    resetSession();
  }

  function handleCategoryChange(e) {
    setCategory(e.target.value);
    resetSession();
  }

  function handleOrderChange(newOrder) {
    setOrder(newOrder);
    resetSession();
  }

  function handleRestart() {
    setQueueVersion((v) => v + 1);
    resetSession();
  }

  function handleNext() {
    setIndex((i) => i + 1);
  }

  function handleBack() {
    setIndex((i) => Math.max(0, i - 1));
  }

  let stageContent;
  if (queue.length === 0) {
    stageContent = <p>{t("glossary_empty")}</p>;
  } else if (index >= queue.length) {
    stageContent = (
      <div className="summary-box">
        <p className="stage-sub">{t("summary_title")}</p>
        <p>{t("summary_body")}</p>
        <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", marginTop: "0.5rem" }}>
          <button className="btn btn-secondary" onClick={handleBack}>
            {t("btn_back")}
          </button>
          <button className="btn btn-primary" onClick={handleRestart}>
            {t("btn_practice_again")}
          </button>
        </div>
      </div>
    );
  } else {
    stageContent = (
      <React.Fragment>
        <PhrasePanes phrase={phrase} from={from} to={to} />
        <div style={{ display: "flex", gap: "0.75rem" }}>
          <button className="btn btn-secondary" disabled={index === 0} onClick={handleBack}>
            {t("btn_back")}
          </button>
          <button className="btn btn-secondary" onClick={handleNext}>
            {t("btn_next")}
          </button>
        </div>
      </React.Fragment>
    );
  }

  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <span className="kicker">{t("phrases_kicker")}</span>
          <h1>{t("phrases_title")}</h1>
          <p>{t("phrases_lede")}</p>
        </div>

        <div className="practice-toolbar">
          <div className="field">
            <label htmlFor="phrase-from-lang">{t("field_source")}</label>
            <select id="phrase-from-lang" value={from} onChange={handleFromChange}>
              <option value="en">English</option>
              <option value="de">Deutsch</option>
              <option value="ru">Русский</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="phrase-to-lang">{t("field_target")}</label>
            <select id="phrase-to-lang" value={to} onChange={handleToChange}>
              <option value="de" disabled={from === "de"}>Deutsch</option>
              <option value="en" disabled={from === "en"}>English</option>
              <option value="ru" disabled={from === "ru"}>Русский</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="phrase-category">{t("field_category")}</label>
            <select id="phrase-category" value={category} onChange={handleCategoryChange}>
              <option value="all">{t("filter_all")}</option>
              <option value="General Exercise">{t("phrase_cat_general")}</option>
              <option value="Praising">{t("phrase_cat_praising")}</option>
              <option value="Meeting">{t("phrase_cat_meeting")}</option>
              <option value="Service">{t("phrase_cat_service")}</option>
            </select>
          </div>
          <div className="field">
            <label>{t("order_label")}</label>
            <div className="mode-tabs" role="group" aria-label="Phrase order">
              <button
                className={"mode-tab order-tab" + (order === "sequential" ? " active" : "")}
                onClick={() => handleOrderChange("sequential")}
              >
                {t("order_alpha")}
              </button>
              <button
                className={"mode-tab order-tab" + (order === "shuffled" ? " active" : "")}
                onClick={() => handleOrderChange("shuffled")}
              >
                {t("order_shuffled")}
              </button>
            </div>
          </div>
        </div>

        <PhraseProgressRow index={index} total={queue.length} />

        <div className="practice-stage">{stageContent}</div>
      </div>
    </section>
  );
}
