import { useId } from "react";

/** Vector monogram: slanted letterforms remain crisp at every size. */
export function JNLogo({ className = "" }: { className?: string }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg className={`jn-logo ${className}`} viewBox="0 0 120 90" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id={`jn-${id}`} x1="12" y1="14" x2="110" y2="80" gradientUnits="userSpaceOnUse">
          <stop stopColor="#67e8f9" /><stop offset=".48" stopColor="#a5b4fc" /><stop offset="1" stopColor="#c084fc" />
        </linearGradient>
      </defs>
      <g transform="translate(17 0) skewX(-14)" stroke={`url(#jn-${id})`} strokeWidth="9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 20H55M48 20V54C48 75 18 78 15 57" />
        <path d="M64 69V20L96 69V20" />
      </g>
      <path d="M8 80C38 68 74 88 112 72" stroke={`url(#jn-${id})`} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
