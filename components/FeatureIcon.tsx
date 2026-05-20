const ICONS = [
  // 0 — alpha
  <svg key="alpha" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
    <path d="M12 3v18M3 12h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
  </svg>,
  // 1 — dpi
  <svg key="dpi" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
    <rect x="3" y="4" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.6" />
    <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>,
  // 2 — aspect
  <svg key="aspect" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
    <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
    <path d="M7 10h4M7 14h2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>,
  // 3 — multi
  <svg key="multi" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
    <rect x="3" y="3" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
    <rect x="12" y="12" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
  </svg>,
  // 4 — update
  <svg key="update" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
    <path d="M12 3l8 4v6c0 4.5-3.5 7.5-8 8-4.5-.5-8-3.5-8-8V7l8-4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  // 5 — theme
  <svg key="theme" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
    <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>,
];

export function FeatureIcon({ index }: { index: number }) {
  return ICONS[index] ?? ICONS[0];
}
