'use client'

import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'
import { Hotspot } from './Hotspot'
import { LocationOverlay } from './LocationOverlay'
import type { HotspotConfig } from '../types/portfolio'

type CityViewProps = {
  background: {
    src: string
    alt: string
  }
  hotspots: HotspotConfig[]
}

export function CityView({ background, hotspots }: CityViewProps) {
  const [activeHotspot, setActiveHotspot] = useState<HotspotConfig | null>(null)

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveHotspot(null)
      }
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  const cityTransform = useMemo(() => {
    if (!activeHotspot) {
      return 'translate3d(-50%, -50%, 0) scale(1)'
    }

    return `translate3d(calc(-50% + ${activeHotspot.pan.x}%), calc(-50% + ${activeHotspot.pan.y}%), 0) scale(${activeHotspot.zoom})`
  }, [activeHotspot])

  const transformOrigin = activeHotspot ? `${activeHotspot.x}% ${activeHotspot.y}%` : '50% 50%'

  return (
    <main className="cityExperience" aria-label="Interactive Auckland portfolio">
      <section className="cityShell" aria-label="Auckland portfolio overview">
        <div className="cityViewport">
          <button className="menuButton" type="button" aria-label="Open site menu">
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>

          <button className="aboutSiteButton" type="button">
            About this site
          </button>

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
              sizes="(max-width: 980px) 100vw, 80vw"
              src={background.src}
              unoptimized
            />
            <div className="cityVignette" aria-hidden="true" />

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
            <h1>Steven Zhang</h1>
            <p>Senior Software Engineer</p>
          </header>

          <div className="exploreCard" aria-hidden="true">
            <strong>Explore Auckland</strong>
            <span>Click a location to zoom in and learn more about me</span>
          </div>

          <div className="gestureHint" aria-hidden="true">
            Scroll / drag to look around
          </div>

          <LocationOverlay activeHotspot={activeHotspot} onClose={() => setActiveHotspot(null)} />
        </div>
      </section>
    </main>
  )
}
