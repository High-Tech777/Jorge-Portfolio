"use client";

import { StarsBackground } from "@/components/ui/stars-background";
import { FloatingParticles } from "./floating-particles";

export function SiteBackground() {
  return (
    <div className="site-background" aria-hidden="true">
      <div className="site-night hidden dark:block absolute inset-0">
        <StarsBackground />
        <FloatingParticles />
        <div className="night-glow" />
      </div>
      <div className="site-waves dark:hidden absolute inset-0">
        {[0, 1, 2].map((wave) => (
          <svg key={wave} className={`sky-wave sky-wave-${wave}`} viewBox="0 0 1440 600" preserveAspectRatio="none">
            <path d="M0 240 C120 100 240 100 360 240 S600 380 720 240 S960 100 1080 240 S1320 380 1440 240 V600 H0Z" />
          </svg>
        ))}
      </div>
    </div>
  );
}
