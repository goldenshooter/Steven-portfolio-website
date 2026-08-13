"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { Hotspot } from "./Hotspot";
import { LocationOverlay } from "./LocationOverlay";
import type { HotspotConfig } from "../types/portfolio";

type CityViewProps = {
  background: {
    src: string;
    alt: string;
  };
  hotspots: HotspotConfig[];
};

export function CityView({ background, hotspots }: CityViewProps) {
  const [activeHotspot, setActiveHotspot] = useState<HotspotConfig | null>(null);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveHotspot(null);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const cityTransform = useMemo(() => {
    if (!activeHotspot) {
      return "translate3d(0, 0, 0) scale(1)";
    }

    return `translate3d(${activeHotspot.pan.x}%, ${activeHotspot.pan.y}%, 0) scale(${activeHotspot.zoom})`;
  }, [activeHotspot]);

  const transformOrigin = activeHotspot
    ? `${activeHotspot.x}% ${activeHotspot.y}%`
    : "50% 50%";

  return (
    <main className="cityExperience" aria-label="Interactive Auckland portfolio">
      <section className="cityStage" aria-label="Auckland exploration map">
        <div
          className="cityCanvas"
          data-zoomed={Boolean(activeHotspot)}
          style={{ transform: cityTransform, transformOrigin }}
        >
          <Image
            alt={background.alt}
            className="cityImage"
            fill
            priority
            sizes="100vw"
            src={background.src}
          />
          <div className="cityVignette" aria-hidden="true" />
          <div className="webLines" aria-hidden="true" />

          {hotspots.map((hotspot) => (
            <Hotspot
              hotspot={hotspot}
              isActive={activeHotspot?.id === hotspot.id}
              key={hotspot.id}
              onSelect={setActiveHotspot}
            />
          ))}
        </div>

        <header className="introPanel">
          <p className="eyebrow">Auckland-based portfolio</p>
          <h1>Steven Zhang</h1>
          <p>
            Senior Frontend / Software Engineer exploring product engineering,
            architecture, performance, mentoring, and community through the city.
          </p>
        </header>

        <LocationOverlay
          activeHotspot={activeHotspot}
          onClose={() => setActiveHotspot(null)}
        />
      </section>
    </main>
  );
}
