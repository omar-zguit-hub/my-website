import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="grid h-7 shrink-0 grid-cols-3 items-center bg-blue-900 px-3 text-xs text-white fixed bottom-0 left-0 right-0 z-50">
      {/* Left */}
      <div className="flex items-center gap-4 justify-self-start">
        <span>✓ {t("footer.branch")}</span>

        <span className="text-green-700 animate-pulse">●</span>

        <span>{t("footer.status")}</span>
      </div>

      {/* Center */}
      <div className="justify-self-center">
        <span>{t("footer.name")}</span>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4 justify-self-end">
        <span>{t("footer.country")}</span>
        <span>{t("footer.copyright")}</span>
      </div>
    </footer>
  );
}
