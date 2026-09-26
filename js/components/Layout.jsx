function Layout({ page, children }) {
  const langState = useLangState();
  useCopyProtection();

  return (
    <LangContext.Provider value={langState}>
      <a className="skip-link" href="#main" style={{ position: "absolute", left: "-999px", top: "auto" }}>
        {langState.t("skip_link")}
      </a>
      <Header page={page} />
      <main id="main">{children}</main>
      <Footer />
    </LangContext.Provider>
  );
}
