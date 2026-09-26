function AudioButton({ id, lang, ready }) {
  const { t } = useI18n();

  if (!ready || !AudioCore.hasAudio(id, lang)) return null;

  const trigger = (e) => {
    e.stopPropagation();
    e.preventDefault();
    AudioCore.play(id, lang);
  };

  return (
    <span
      className="audio-btn"
      role="button"
      tabIndex={0}
      aria-label={t("play_pronunciation")}
      onClick={trigger}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") trigger(e);
      }}
    >
      🔊
    </span>
  );
}
