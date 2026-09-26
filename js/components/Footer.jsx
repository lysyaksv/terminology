function Footer() {
  const { lang, setLang, t } = useI18n();
  const year = useFooterYear();

  const navLinks = [
    { key: "home", href: "index.html", i18n: "nav_home" },
    { key: "glossary", href: "glossary.html", i18n: "nav_glossary" },
    { key: "practice", href: "practice.html", i18n: "nav_practice" },
    { key: "phrases", href: "phrases.html", i18n: "nav_phrases" },
  ];

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h4>{t("footer_about_title")}</h4>
            <p style={{ fontSize: "0.9rem", color: "var(--paper-100)", maxWidth: "32ch" }}>
              {t("footer_about_body")}
            </p>
          </div>
          <div>
            <h4>{t("footer_nav_title")}</h4>
            <ul>
              {navLinks.map((link) => (
                <li key={link.key}>
                  <a href={link.href}>{t(link.i18n)}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>{t("footer_lang_title")}</h4>
            <LangSwitch lang={lang} setLang={setLang} />
          </div>
        </div>
        <div className="footer-bottom">
          <span>{t("footer_rights")}</span>
          <span>&copy; {year} Ministry Books</span>
        </div>
      </div>
    </footer>
  );
}
