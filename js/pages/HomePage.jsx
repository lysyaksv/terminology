function HeroSample() {
  const sample = TERMS.slice(0, 4);
  return (
    <div style={{ display: "grid", gap: "0.6rem", marginTop: "0.75rem" }}>
      {sample.map((term) => (
        <div
          key={term.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "1rem",
            padding: "0.5rem 0",
            borderBottom: "1px solid var(--paper-200)",
            fontFamily: "var(--font-mono)",
            fontSize: "0.9rem",
          }}
        >
          <span style={{ color: "var(--ink-text)", fontWeight: 700 }}>{term.en}</span>
          <span style={{ color: "var(--brass-600)", fontWeight: 700 }}>{term.de}</span>
        </div>
      ))}
    </div>
  );
}

function HomePage() {
  const { t } = useI18n();

  const steps = [
    { num: 1, title: "step1_title", body: "step1_body" },
    { num: 2, title: "step2_title", body: "step2_body" },
    { num: 3, title: "step3_title", body: "step3_body" },
  ];

  const cards = [
    { num: "01", title: "card_glossary_title", body: "card_glossary_body", link: "card_glossary_link", href: "glossary.html" },
    { num: "02", title: "card_practice_title", body: "card_practice_body", link: "card_practice_link", href: "practice.html" },
    { num: "03", title: "card_phrases_title", body: "card_phrases_body", link: "card_phrases_link", href: "phrases.html" },
  ];

  return (
    <React.Fragment>
      <section className="hero">
        <div className="container">
          <div>
            <span className="hero-eyebrow">{t("hero_eyebrow")}</span>
            <h1>{t("hero_title")}</h1>
            <p className="lede">{t("hero_lede")}</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="practice.html">
                {t("hero_cta_practice")}
              </a>
              <a className="btn btn-outline" href="glossary.html">
                {t("hero_cta_glossary")}
              </a>
            </div>
          </div>
          <div className="hero-figure">
            <p className="stage-sub">{t("hero_figure_title")}</p>
            <HeroSample />
            <p style={{ marginTop: "0.9rem", marginBottom: 0, fontSize: "0.82rem", color: "var(--muted)" }}>
              {t("hero_figure_sub")}
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="kicker">{t("instructions_kicker")}</span>
            <h2>{t("instructions_title")}</h2>
          </div>
          <div className="steps">
            {steps.map((step) => (
              <div className="step" key={step.num}>
                <span className="step-num">{step.num}</span>
                <div>
                  <h4>{t(step.title)}</h4>
                  <p>{t(step.body)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="kicker">{t("quicklinks_kicker")}</span>
            <h2>{t("quicklinks_title")}</h2>
          </div>
          <div className="card-grid">
            {cards.map((card) => (
              <div className="card" key={card.num}>
                <span className="card-num">{card.num}</span>
                <h3>{t(card.title)}</h3>
                <p>{t(card.body)}</p>
                <a className="card-link" href={card.href}>
                  {t(card.link)}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
