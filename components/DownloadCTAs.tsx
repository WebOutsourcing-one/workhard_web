"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

const DOWNLOAD_URL = `${process.env.NEXT_PUBLIC_SUPABASE_FUNCTIONS_URL ?? ""}/download-installer?version=latest`;

export default function DownloadCTAs() {
  const t = useTranslations("download");
  const [open, setOpen] = useState(true);
  const steps = t.raw("instructions.steps") as string[];

  return (
    <>
      <div className="mt-9 flex flex-col gap-3 sm:flex-row">
        <a
          href={DOWNLOAD_URL}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-transform hover:scale-[1.02]"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
            <path
              d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {t("cta1")}
        </a>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="download-instructions-panel"
          className="inline-flex items-center justify-center gap-1.5 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white/[0.06]"
        >
          {t("instructions.toggle")}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className={`h-3.5 w-3.5 transition-transform ${
              open ? "rotate-180" : ""
            }`}
          >
            <path
              d="M6 9l6 6 6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {open && (
        <div
          id="download-instructions-panel"
          className="mt-5 rounded-2xl border border-amber-400/20 bg-amber-500/[0.05] p-5 text-sm"
        >
          <p className="leading-relaxed text-amber-200/90">
            {t("instructions.warning")}
          </p>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-[var(--fg-dim)]">
            {steps.map((s, i) => (
              <li key={i} className="leading-relaxed">
                {s}
              </li>
            ))}
          </ol>
        </div>
      )}
    </>
  );
}
