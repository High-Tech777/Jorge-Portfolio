"use client";

import { useEffect, useState } from "react";
import { JNLogo } from "@/components/common/jn-logo";

export function PortfolioLoader({ onComplete }: { onComplete: () => void }) {
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const delay = (ms: number) => new Promise<void>((resolve) => timers.push(setTimeout(resolve, ms)));
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let loadListener: (() => void) | undefined;
    const pageReady = new Promise<void>((resolve) => {
      if (document.readyState === "complete") resolve();
      else {
        loadListener = () => resolve();
        window.addEventListener("load", loadListener, { once: true });
      }
    });
    const assetsReady = Promise.all([pageReady, document.fonts.ready]);
    const finish = async () => {
      await Promise.all([delay(reduced ? 250 : 3000), Promise.race([assetsReady, delay(4500)])]);
      if (cancelled) return;
      setLeaving(true);
      await delay(reduced ? 0 : 650);
      if (!cancelled) onComplete();
    };
    void finish();
    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
      if (loadListener) window.removeEventListener("load", loadListener);
    };
  }, [onComplete]);

  return (
    <div className={`portfolio-loader${leaving ? " loader-leaving" : ""}`} role="status" aria-live="polite" aria-label="Loading Jorge Joshua Neyra Caldas’s portfolio">
      <div className="loader-aura" />
      <div className="loader-wave loader-wave-one" />
      <div className="loader-wave loader-wave-two" />
      <div className="loader-content">
        <div className="loader-emblem" aria-hidden="true">
          <div className="loader-orbit loader-orbit-one" />
          <div className="loader-orbit loader-orbit-two" />
          <div className="loader-core">
            <svg className="loader-eye" viewBox="0 0 160 90" fill="none">
              <path className="loader-eye-outline" d="M10 45Q80 -18 150 45Q80 108 10 45Z" />
              <g className="loader-eye-iris">
                <circle cx="80" cy="45" r="24" fill="currentColor" fillOpacity=".12" stroke="currentColor" strokeWidth="2" />
                <circle cx="80" cy="45" r="14" fill="currentColor" fillOpacity=".8" />
                <circle cx="87" cy="38" r="5" fill="white" />
              </g>
            </svg>
            <JNLogo className="loader-monogram" />
          </div>
          {[0, 1, 2, 3, 4, 5].map((i) => <span key={i} className="loader-spark" style={{ transform: `rotate(${i * 60}deg) translateY(-110px)`, animationDelay: `${i * .18}s` }} />)}
        </div>
        <p className="loader-name">Jorge Joshua Neyra Caldas</p>
        <p className="loader-caption">Full Stack &amp; AI Engineer</p>
        <div className="loader-progress" aria-hidden="true"><span /></div>
        <span className="loader-label">Loading portfolio</span>
      </div>
    </div>
  );
}
