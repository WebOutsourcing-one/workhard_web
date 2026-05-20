import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import LanguageSwitcher from "./LanguageSwitcher";

export default async function Header() {
  const t = await getTranslations("header");

  const navItems = [
    { href: "#features", label: t("nav.features") },
    { href: "#modes", label: t("nav.modes") },
    { href: "#download", label: t("nav.download") },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0b0d12]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-brand-400 to-brand-600 text-sm font-bold text-white shadow-lg shadow-brand-600/30">
            W
          </span>
          <span className="text-base font-semibold tracking-tight">
            WorkHard
          </span>
        </Link>

        <nav className="hidden gap-8 text-sm text-[var(--fg-dim)] md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <a
            href="#download"
            className="hidden items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition-transform hover:scale-[1.02] sm:inline-flex"
          >
            {t("cta")}
          </a>
        </div>
      </div>
    </header>
  );
}
