"use client";

import { useLocale, useTranslations } from "next-intl";
import { useTransition } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const t = useTranslations("languageSwitcher");
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function switchTo(next: string) {
    if (next === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  }

  return (
    <div
      role="group"
      aria-label={t("label")}
      className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] p-0.5 text-xs"
    >
      {routing.locales.map((loc) => {
        const isActive = loc === locale;
        return (
          <button
            key={loc}
            type="button"
            onClick={() => switchTo(loc)}
            disabled={isPending}
            aria-pressed={isActive}
            className={`rounded-full px-2.5 py-1 font-medium transition-colors disabled:opacity-60 ${
              isActive
                ? "bg-white text-black"
                : "text-[var(--fg-dim)] hover:text-white"
            }`}
          >
            {t(loc as "ko" | "en")}
          </button>
        );
      })}
    </div>
  );
}
