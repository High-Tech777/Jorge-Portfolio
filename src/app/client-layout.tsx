"use client";

import { useCallback, useEffect, useState } from "react";
import { PortfolioLoader } from "@/components/animations/portfolio-loader";
import { SiteBackground } from "@/components/animations/site-background";
import { ContactComposer } from "@/components/contact-composer";
import { CursorGlow } from "@/components/animations/cursor-glow";
import { ScrollProgress } from "@/components/animations/scroll-progress";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const guardedWindow = window as Window & { __stopPortfolioHydrationGuard?: () => void };
    guardedWindow.__stopPortfolioHydrationGuard?.();
  }, []);
  const finishLoading = useCallback(() => setLoading(false), []);

  return (
    <div className="noise-overlay site-shell">
      <SiteBackground />
      <CursorGlow />
      <ScrollProgress />
      {loading && <PortfolioLoader onComplete={finishLoading} />}
      <div inert={loading ? true : undefined} aria-hidden={loading ? true : undefined}>
        {children}
      </div>
      <ContactComposer />
    </div>
  );
}