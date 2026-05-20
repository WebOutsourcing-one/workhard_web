import { getTranslations } from "next-intl/server";

export default async function Footer() {
  const t = await getTranslations("footer");
  const nav = await getTranslations("header.nav");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-[#0a0c11]">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-brand-400 to-brand-600 text-sm font-bold text-white">
                W
              </span>
              <span className="text-base font-semibold">WorkHard</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[var(--fg-dim)]">
              {t("description")}
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-white">
              {t("productTitle")}
            </h4>
            <ul className="space-y-2 text-sm text-[var(--fg-dim)]">
              <li>
                <a href="#features" className="hover:text-white">
                  {nav("features")}
                </a>
              </li>
              <li>
                <a href="#modes" className="hover:text-white">
                  {nav("modes")}
                </a>
              </li>
              <li>
                <a href="#download" className="hover:text-white">
                  {nav("download")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-white">
              {t("infoTitle")}
            </h4>
            <ul className="space-y-2 text-sm text-[var(--fg-dim)]">
              <li>{t("platform")}</li>
              <li>{t("languages")}</li>
            </ul>

            <h4 className="mb-3 mt-6 text-sm font-semibold text-white">
              {t("contactLabel")}
            </h4>
            <a
              href={`mailto:${t("contactEmail")}`}
              className="text-sm text-[var(--fg-dim)] hover:text-white"
            >
              {t("contactEmail")}
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/5 pt-6 text-xs text-[var(--fg-dim)] md:flex-row md:items-center">
          <p>{t("copyright", { year })}</p>
          <p>{t("tagline")}</p>
        </div>
      </div>
    </footer>
  );
}
