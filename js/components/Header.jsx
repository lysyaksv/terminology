function Header({ page }) {
  const { lang, setLang, t } = useI18n();
  const [navOpen, setNavOpen] = React.useState(false);

  const navLinks = [
    { key: "home", href: "index.html", i18n: "nav_home", label: "Home" },
    { key: "glossary", href: "glossary.html", i18n: "nav_glossary", label: "Word List" },
    { key: "practice", href: "practice.html", i18n: "nav_practice", label: "Practice" },
    { key: "phrases", href: "phrases.html", i18n: "nav_phrases", label: "Phrases" },
  ];

  return (
    <header className="site-header">
      <div className="nav-wrap">
        <a className="brand" href="index.html">
          <svg
            className="brand-seal"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <circle cx="24" cy="24" r="22" fill="#a97a34" />
            <circle cx="24" cy="24" r="18" fill="#16233a" />
            <path
              d="M15 30V18l9 8 9-8v12"
              stroke="#faf6ec"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
          <span className="brand-text">
            <small>Ministry Books</small>
            <br />
            Terminology
          </span>
        </a>
        <button
          className="nav-toggle"
          aria-expanded={navOpen ? "true" : "false"}
          aria-controls="main-nav"
          aria-label="Toggle menu"
          onClick={() => setNavOpen((v) => !v)}
        >
          ☰
        </button>
        <nav className={"main-nav" + (navOpen ? " open" : "")} id="main-nav">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              aria-current={page === link.key ? "page" : undefined}
            >
              {t(link.i18n)}
            </a>
          ))}
        </nav>
        <div className="nav-controls">
          <LangSwitch lang={lang} setLang={setLang} />
        </div>
      </div>
    </header>
  );
}
