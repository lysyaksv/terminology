function buildQueue(from, to, order) {
  const pool = TERMS.filter((term) => term[from] && term[to]);
  if (order === "alpha") {
    return pool
      .slice()
      .sort((a, b) =>
        TextUtils.sortableForm(a[from], from).localeCompare(TextUtils.sortableForm(b[from], from), from)
      );
  }
  return TextUtils.shuffle(pool);
}

function buildDistractors(term, to) {
  const others = TERMS.filter((t2) => t2.id !== term.id && t2[to]);
  const picks = TextUtils.shuffle(others).slice(0, 3).map((t2) => t2[to]);
  return TextUtils.shuffle([term[to], ...picks]);
}

function ProgressRow({ index, total, correct }) {
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
        {correct} <span>{t("correct_label")}</span>
      </span>
    </div>
  );
}

// Back/Next pair, reused across every mode. Back is always available (except
// on the very first question) — it never touches score state, it only moves
// the index; whatever was already answered on the question you land on is
// preserved and shown as-is (see PracticePage's per-index answer map).
function NavRow({ onBack, onNext, backDisabled, showNext }) {
  const { t } = useI18n();
  return (
    <div style={{ display: "flex", gap: "0.75rem" }}>
      <button className="btn btn-secondary" disabled={backDisabled} onClick={onBack}>
        {t("btn_back")}
      </button>
      {showNext && (
        <button className="btn btn-secondary" onClick={onNext}>
          {t("btn_next")}
        </button>
      )}
    </div>
  );
}

function SummaryBox({ correct, total, onRestart, onBack }) {
  const { t } = useI18n();
  return (
    <div className="summary-box">
      <p className="stage-sub">{t("summary_title")}</p>
      <div className="summary-score">
        {correct} / {total}
      </div>
      <p>{t("summary_body")}</p>
      <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", marginTop: "0.5rem" }}>
        <button className="btn btn-secondary" onClick={onBack}>
          {t("btn_back")}
        </button>
        <button className="btn btn-primary" onClick={onRestart}>
          {t("btn_practice_again")}
        </button>
      </div>
    </div>
  );
}

function FlashcardMode({ term, from, to, audioReady, flipped, onFlip, onNext, onBack, backDisabled }) {
  const { t } = useI18n();
  const frontClass = `flashcard-face front${TextUtils.lengthTierClass(term[from])}`;
  const backClass = `flashcard-face back${TextUtils.lengthTierClass(term[to])}`;
  return (
    <React.Fragment>
      <div className={"flashcard" + (flipped ? " flipped" : "")} onClick={onFlip}>
        <div className="flashcard-inner">
          <div className={frontClass}>
            {term[from]} <AudioButton id={term.id} lang={from} ready={audioReady} />
          </div>
          <div className={backClass}>
            {term[to]} <AudioButton id={term.id} lang={to} ready={audioReady} />
          </div>
        </div>
      </div>
      <p className="flashcard-hint">{t("flashcard_hint")}</p>
      <NavRow
        backDisabled={backDisabled}
        showNext={flipped}
        onBack={(e) => { e.stopPropagation(); onBack(); }}
        onNext={(e) => { e.stopPropagation(); onNext(); }}
      />
    </React.Fragment>
  );
}

function MultipleChoiceMode({ term, from, to, audioReady, answered, chosen, onAnswer, onNext, onBack, backDisabled }) {
  const { t } = useI18n();
  const options = React.useMemo(() => buildDistractors(term, to), [term.id, to]);
  const promptClass = `stage-term${TextUtils.lengthTierClass(term[from])}`;

  return (
    <React.Fragment>
      <p className="stage-sub">
        {from.toUpperCase()} → {to.toUpperCase()}
      </p>
      <p className={promptClass}>
        {term[from]} <AudioButton id={term.id} lang={from} ready={audioReady} />
      </p>
      <div className="mc-options">
        {options.map((opt) => {
          let cls = "mc-option";
          if (answered) {
            if (opt === term[to]) cls += " correct";
            else if (opt === chosen) cls += " incorrect";
          }
          return (
            <button key={opt} className={cls} disabled={answered} onClick={() => onAnswer(opt)}>
              {opt}
            </button>
          );
        })}
      </div>
      <div className={"feedback" + (answered ? (chosen === term[to] ? " correct" : " incorrect") : "")}>
        {answered && (chosen === term[to] ? t("feedback_correct") : `${t("feedback_incorrect")} ${term[to]}`)}
      </div>
      <NavRow backDisabled={backDisabled} showNext={answered} onBack={onBack} onNext={onNext} />
    </React.Fragment>
  );
}

function TypingMode({ term, from, to, audioReady, answered, typedValue, onTypedChange, onSubmit, onNext, onBack, backDisabled }) {
  const { t } = useI18n();
  const inputRef = React.useRef(null);
  const promptClass = `stage-term${TextUtils.lengthTierClass(term[from])}`;
  const isCorrect = answered ? TextUtils.isTypingCorrect(typedValue, term[to]) : null;

  React.useEffect(() => {
    if (inputRef.current && !answered) inputRef.current.focus();
  }, [term.id]);

  return (
    <React.Fragment>
      <p className="stage-sub">
        {from.toUpperCase()} → {to.toUpperCase()}
      </p>
      <p className={promptClass}>
        {term[from]} <AudioButton id={term.id} lang={from} ready={audioReady} />
      </p>
      <form
        className="type-answer-form"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <input
          ref={inputRef}
          type="text"
          value={typedValue}
          onChange={(e) => onTypedChange(e.target.value)}
          placeholder={t("typing_placeholder")}
          autoComplete="off"
          autoCapitalize="off"
          spellCheck="false"
          disabled={answered}
        />
        <button className="btn btn-primary" type="submit" disabled={answered}>
          {t("btn_check")}
        </button>
      </form>
      <div className={"feedback" + (answered ? (isCorrect ? " correct" : " incorrect") : "")}>
        {answered && (isCorrect ? t("feedback_correct") : `${t("feedback_incorrect")} ${term[to]}`)}
      </div>
      <NavRow backDisabled={backDisabled} showNext={answered} onBack={onBack} onNext={onNext} />
    </React.Fragment>
  );
}

function PracticePage() {
  const { t } = useI18n();
  const audioReady = useAudioManifest();

  const [from, setFrom] = React.useState("en");
  const [to, setTo] = React.useState("de");
  const [order, setOrder] = React.useState("shuffled");
  const [mode, setMode] = React.useState("flashcards");
  const [queueVersion, setQueueVersion] = React.useState(0);

  const [index, setIndex] = React.useState(0);
  // Per-question state, keyed by index, so going back and forth never loses
  // or re-triggers an answer — each question remembers its own outcome
  // independently of which one is currently on screen.
  const [answersByIndex, setAnswersByIndex] = React.useState({});

  const queue = React.useMemo(() => buildQueue(from, to, order), [from, to, order, queueVersion]);
  const term = queue[index];
  const current = answersByIndex[index] || {};

  const correct = React.useMemo(() => {
    if (mode !== "multiple" && mode !== "typing") return 0; // flashcards aren't scored
    let count = 0;
    for (const key of Object.keys(answersByIndex)) {
      const a = answersByIndex[key];
      if (!a || !a.answered) continue;
      const t2 = queue[Number(key)];
      if (!t2) continue;
      if (mode === "multiple" && a.chosen === t2[to]) count++;
      else if (mode === "typing" && TextUtils.isTypingCorrect(a.typedValue || "", t2[to])) count++;
    }
    return count;
  }, [answersByIndex, queue, to, mode]);

  function resetSession() {
    setIndex(0);
    setAnswersByIndex({});
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

  function handleOrderChange(newOrder) {
    setOrder(newOrder);
    resetSession();
  }

  function handleModeChange(newMode) {
    setMode(newMode);
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

  function updateCurrent(patch) {
    setAnswersByIndex((prev) => ({ ...prev, [index]: { ...prev[index], ...patch } }));
  }

  function handleFlip() {
    updateCurrent({ flipped: !current.flipped });
  }

  function handleMcAnswer(opt) {
    if (current.answered) return;
    updateCurrent({ answered: true, chosen: opt });
  }

  function handleTypingSubmit() {
    if (current.answered) return;
    updateCurrent({ answered: true });
  }

  let stageContent;
  if (queue.length === 0) {
    stageContent = <p>{t("glossary_empty")}</p>;
  } else if (index >= queue.length) {
    stageContent = <SummaryBox correct={correct} total={queue.length} onRestart={handleRestart} onBack={handleBack} />;
  } else if (mode === "flashcards") {
    stageContent = (
      <FlashcardMode
        term={term}
        from={from}
        to={to}
        audioReady={audioReady}
        flipped={!!current.flipped}
        onFlip={handleFlip}
        onNext={handleNext}
        onBack={handleBack}
        backDisabled={index === 0}
      />
    );
  } else if (mode === "multiple") {
    stageContent = (
      <MultipleChoiceMode
        term={term}
        from={from}
        to={to}
        audioReady={audioReady}
        answered={!!current.answered}
        chosen={current.chosen ?? null}
        onAnswer={handleMcAnswer}
        onNext={handleNext}
        onBack={handleBack}
        backDisabled={index === 0}
      />
    );
  } else {
    stageContent = (
      <TypingMode
        term={term}
        from={from}
        to={to}
        audioReady={audioReady}
        answered={!!current.answered}
        typedValue={current.typedValue ?? ""}
        onTypedChange={(v) => updateCurrent({ typedValue: v })}
        onSubmit={handleTypingSubmit}
        onNext={handleNext}
        onBack={handleBack}
        backDisabled={index === 0}
      />
    );
  }

  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <span className="kicker">{t("practice_kicker")}</span>
          <h1>{t("practice_title")}</h1>
          <p>{t("practice_lede")}</p>
        </div>

        <div className="practice-toolbar">
          <div className="field">
            <label htmlFor="from-lang">{t("field_source")}</label>
            <select id="from-lang" value={from} onChange={handleFromChange}>
              <option value="en">English</option>
              <option value="de">Deutsch</option>
              <option value="ru">Русский</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="to-lang">{t("field_target")}</label>
            <select id="to-lang" value={to} onChange={handleToChange}>
              <option value="de" disabled={from === "de"}>Deutsch</option>
              <option value="en" disabled={from === "en"}>English</option>
              <option value="ru" disabled={from === "ru"}>Русский</option>
            </select>
          </div>
          <div className="field">
            <label>{t("order_label")}</label>
            <div className="mode-tabs" role="group" aria-label="Term order">
              <button
                className={"mode-tab order-tab" + (order === "shuffled" ? " active" : "")}
                onClick={() => handleOrderChange("shuffled")}
              >
                {t("order_shuffled")}
              </button>
              <button
                className={"mode-tab order-tab" + (order === "alpha" ? " active" : "")}
                onClick={() => handleOrderChange("alpha")}
              >
                {t("order_alpha")}
              </button>
            </div>
          </div>
          <div className="mode-tabs" role="group" aria-label="Practice mode" style={{ marginLeft: "auto" }}>
            <button className={"mode-tab" + (mode === "flashcards" ? " active" : "")} onClick={() => handleModeChange("flashcards")}>
              {t("mode_flashcards")}
            </button>
            <button className={"mode-tab" + (mode === "multiple" ? " active" : "")} onClick={() => handleModeChange("multiple")}>
              {t("mode_multiple")}
            </button>
            <button className={"mode-tab" + (mode === "typing" ? " active" : "")} onClick={() => handleModeChange("typing")}>
              {t("mode_typing")}
            </button>
          </div>
        </div>

        <ProgressRow index={index} total={queue.length} correct={correct} />

        <div className="practice-stage">{stageContent}</div>
      </div>
    </section>
  );
}
