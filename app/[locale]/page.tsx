import { getTranslations, setRequestLocale } from "next-intl/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FeatureIcon } from "@/components/FeatureIcon";
import DownloadCTAs from "@/components/DownloadCTAs";

const FALLBACK_VERSION = "1.0.11";
const FUNCTIONS_BASE = process.env.NEXT_PUBLIC_SUPABASE_FUNCTIONS_URL;

async function getLatestVersion(): Promise<string> {
  if (!FUNCTIONS_BASE) return FALLBACK_VERSION;
  try {
    const res = await fetch(`${FUNCTIONS_BASE}/latest-version`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return FALLBACK_VERSION;
    const data = (await res.json()) as { version?: string };
    return data.version ?? FALLBACK_VERSION;
  } catch {
    return FALLBACK_VERSION;
  }
}

type ModeItem = {
  name: string;
  badge: string;
  desc: string;
  example: string;
};

type FeatureItem = {
  title: string;
  desc: string;
};

type DemoStep = {
  title: string;
  desc: string;
};

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations();
  const version = await getLatestVersion();

  const modes = t.raw("modes.items") as ModeItem[];
  const features = t.raw("features.items") as FeatureItem[];
  const demoSteps = t.raw("demo.steps") as DemoStep[];

  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="dot-grid absolute inset-0 opacity-40" />
          <div className="absolute left-1/2 top-0 -z-10 h-[520px] w-[800px] -translate-x-1/2 rounded-full bg-brand-600/20 blur-[120px]" />

          <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-24 md:pt-32">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-[var(--fg-dim)]">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                {t("hero.badge")}
              </span>

              <h1 className="mt-6 text-balance text-5xl font-bold leading-[1.05] md:text-6xl">
                {t("hero.title1")}
                <br />
                <span className="gradient-text">{t("hero.title2")}</span>
              </h1>

              <p className="mt-6 text-lg leading-relaxed text-[var(--fg-dim)]">
                {t("hero.subtitle1")}
                <br className="hidden md:block" />
                {t("hero.subtitle2")}
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="#download"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-transform hover:scale-[1.02]"
                >
                  {t("hero.cta1")}
                  <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/[0.06]"
                >
                  {t("hero.cta2")}
                </a>
              </div>
            </div>

            {/* Visual mockup */}
            <div className="relative mx-auto mt-20 max-w-4xl">
              <div className="glow-ring rounded-2xl border border-white/10 bg-gradient-to-b from-[#0f1320] to-[#0a0c14] p-1">
                <div className="rounded-xl bg-[#0a0c14] p-6">
                  <div className="mb-4 flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-500/80" />
                    <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                    <span className="h-3 w-3 rounded-full bg-green-500/80" />
                    <span className="ml-3 text-xs text-[var(--fg-dim)]">
                      WorkHard
                    </span>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-lg border border-white/5 bg-white/[0.02] p-5">
                      <div className="mb-2 text-xs uppercase tracking-wider text-brand-300">
                        {t("hero.mockup.activeMode")}
                      </div>
                      <div className="text-2xl font-semibold">
                        {t("hero.mockup.modeName")}
                      </div>
                      <div className="mt-3 inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 text-xs">
                        <kbd className="font-mono">Ctrl</kbd>
                        <span className="text-[var(--fg-dim)]">+</span>
                        <kbd className="font-mono">Space</kbd>
                      </div>
                    </div>
                    <div className="rounded-lg border border-white/5 bg-white/[0.02] p-5">
                      <div className="mb-2 text-xs uppercase tracking-wider text-brand-300">
                        {t("hero.mockup.tracking")}
                      </div>
                      <div className="text-2xl font-semibold">
                        {t("hero.mockup.windowsCount")}
                      </div>
                      <div className="mt-3 flex gap-1.5">
                        <span className="h-2 w-8 rounded-full bg-emerald-400" />
                        <span className="h-2 w-8 rounded-full bg-emerald-400/70" />
                        <span className="h-2 w-8 rounded-full bg-emerald-400/40" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 rounded-lg border border-white/5 bg-white/[0.02] p-5">
                    <div className="text-xs uppercase tracking-wider text-[var(--fg-dim)]">
                      {t("hero.mockup.alpha")}
                    </div>
                    <div className="relative mt-3 overflow-hidden rounded-md border border-white/10">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-500/40 to-brand-400" />
                      <div className="relative flex items-center justify-between px-4 py-3 text-sm font-medium">
                        <span className="text-white/40">
                          {t("hero.mockup.alphaHidden")}
                        </span>
                        <span className="text-white">
                          {t("hero.mockup.alphaVisible")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section — Demo */}
        <section id="demo" className="border-t border-white/5">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-medium uppercase tracking-widest text-brand-300">
                {t("demo.eyebrow")}
              </span>
              <h2 className="mt-3 text-4xl font-bold md:text-5xl">
                {t("demo.title1")}
                <br />
                <span className="gradient-text">{t("demo.title2")}</span>
              </h2>
              <p className="mt-5 text-[var(--fg-dim)]">{t("demo.subtitle")}</p>
            </div>

            {/* Video */}
            <div className="glow-ring mx-auto mt-10 max-w-5xl rounded-2xl border border-white/10 bg-gradient-to-b from-[#0f1320] to-[#0a0c14] p-1.5">
              <video
                className="w-full rounded-xl"
                src="/workhard.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
              />
            </div>

            {/* Steps */}
            <ol className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {demoSteps.map((s, idx) => (
                <li
                  key={s.title}
                  className="rounded-2xl border border-white/5 bg-white/[0.02] p-5"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-500/30 to-brand-700/10 text-sm font-bold text-brand-200">
                    {idx + 1}
                  </div>
                  <h3 className="mt-4 text-base font-semibold">{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--fg-dim)]">
                    {s.desc}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Section 1 — Modes */}
        <section id="modes" className="border-t border-white/5 bg-[#0a0c11]">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <div className="grid gap-12 lg:grid-cols-[1fr,1.4fr] lg:items-start">
              <div className="lg:sticky lg:top-28">
                <span className="text-xs font-medium uppercase tracking-widest text-brand-300">
                  {t("modes.eyebrow")}
                </span>
                <h2 className="mt-3 text-4xl font-bold md:text-5xl">
                  {t("modes.title1")}
                  <br />
                  <span className="gradient-text">{t("modes.title2")}</span>
                </h2>
                <p className="mt-5 text-[var(--fg-dim)]">{t("modes.subtitle")}</p>
              </div>

              <div className="space-y-4">
                {modes.map((m, idx) => (
                  <div
                    key={m.name}
                    className="group flex gap-5 rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all hover:border-brand-400/30 hover:bg-white/[0.04]"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/30 to-brand-700/10 text-sm font-bold text-brand-200">
                      {String(idx + 1).padStart(2, "0")}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <h3 className="text-xl font-semibold">{m.name}</h3>
                        <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-xs text-[var(--fg-dim)]">
                          {m.badge}
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--fg-dim)]">
                        {m.desc}
                      </p>
                      <div className="mt-4 inline-flex items-center gap-2 rounded-lg border border-white/5 bg-black/30 px-3 py-2 font-mono text-xs text-brand-200">
                        <span className="text-[var(--fg-dim)]">›</span>
                        {m.example}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 — Features */}
        <section id="features" className="border-t border-white/5">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-medium uppercase tracking-widest text-brand-300">
                {t("features.eyebrow")}
              </span>
              <h2 className="mt-3 text-4xl font-bold md:text-5xl">
                {t("features.title1")}
                <br />
                <span className="gradient-text">{t("features.title2")}</span>
              </h2>
              <p className="mt-5 text-[var(--fg-dim)]">{t("features.subtitle")}</p>
            </div>

            <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((f, idx) => (
                <div
                  key={f.title}
                  className="group rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.04] to-transparent p-6 transition-colors hover:border-white/10"
                >
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500/10 text-brand-300">
                    <FeatureIcon index={idx} />
                  </div>
                  <h3 className="text-base font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--fg-dim)]">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3 — Download */}
        <section id="download" className="border-t border-white/5 bg-[#0a0c11]">
          <div className="mx-auto max-w-5xl px-6 py-28">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#11142a] via-[#0d1020] to-[#0a0c14] p-10 md:p-16">
              <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-500/30 blur-3xl" />
              <div className="absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-brand-700/30 blur-3xl" />

              <div className="relative">
                <span className="text-xs font-medium uppercase tracking-widest text-brand-300">
                  {t("download.eyebrow")}
                </span>
                <h2 className="mt-3 text-4xl font-bold md:text-5xl">
                  {t("download.title1")}
                  <br />
                  <span className="gradient-text">{t("download.title2")}</span>
                </h2>
                <p className="mt-5 max-w-xl text-[var(--fg-dim)]">
                  {t("download.subtitle")}
                </p>

                <DownloadCTAs />

                <div className="mt-10 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4">
                  <Stat label={t("download.stats.version")} value={version} />
                  <Stat
                    label={t("download.stats.platform")}
                    value={t("download.stats.platformValue")}
                  />
                  <Stat
                    label={t("download.stats.size")}
                    value={t("download.stats.sizeValue")}
                  />
                  <Stat
                    label={t("download.stats.price")}
                    value={t("download.stats.priceValue")}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-wider text-[var(--fg-dim)]">
        {label}
      </div>
      <div className="mt-1 text-lg font-semibold">{value}</div>
    </div>
  );
}
