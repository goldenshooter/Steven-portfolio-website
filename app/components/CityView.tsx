'use client'

import Image from 'next/image'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Hotspot } from './Hotspot'
import { HotspotDetailPanel } from './HotspotDetailPanel'
import type { HotspotConfig } from '../types/portfolio'

const DETAIL_PANEL_DELAY_MS = 1500
const DEFAULT_DETAIL_ZOOM = 2.2

type CityViewProps = {
  background: {
    src: string
    alt: string
  }
  hotspots: HotspotConfig[]
}

export function CityView({ background, hotspots }: CityViewProps) {
  const [activeHotspot, setActiveHotspot] = useState<HotspotConfig | null>(null)
  const [isDetailPanelVisible, setIsDetailPanelVisible] = useState(false)
  const detailPanelTimerRef = useRef<number | null>(null)

  const activeDetailHotspot = activeHotspot?.detailImage ? activeHotspot : null
  const isDetailActive = Boolean(activeDetailHotspot)

  const clearDetailPanelTimer = useCallback(() => {
    if (detailPanelTimerRef.current !== null) {
      window.clearTimeout(detailPanelTimerRef.current)
      detailPanelTimerRef.current = null
    }
  }, [])

  const shouldZoom = isDetailActive

  const cityTransform = useMemo(() => {
    if (!activeDetailHotspot) {
      return 'translate3d(-50%, -50%, 0) scale(1)'
    }

    const zoom = activeDetailHotspot.zoom ?? DEFAULT_DETAIL_ZOOM
    const panX = activeDetailHotspot.pan?.x ?? 0
    const panY = activeDetailHotspot.pan?.y ?? 0

    return `translate3d(calc(-50% + ${panX}%), calc(-50% + ${panY}%), 0) scale(${zoom})`
  }, [activeDetailHotspot])

  const transformOrigin = activeDetailHotspot
    ? `${activeDetailHotspot.x}% ${activeDetailHotspot.y}%`
    : '50% 50%'

  const handleHotspotSelect = useCallback(
    (hotspot: HotspotConfig) => {
      clearDetailPanelTimer()
      setActiveHotspot(hotspot)

      if (!hotspot.detailImage) {
        setIsDetailPanelVisible(false)
        return
      }

      setIsDetailPanelVisible(false)
      detailPanelTimerRef.current = window.setTimeout(() => {
        setIsDetailPanelVisible(true)
        detailPanelTimerRef.current = null
      }, DETAIL_PANEL_DELAY_MS)
    },
    [clearDetailPanelTimer],
  )

  const closeActiveView = useCallback(() => {
    clearDetailPanelTimer()
    setIsDetailPanelVisible(false)
    setActiveHotspot(null)
  }, [clearDetailPanelTimer])

  useEffect(() => {
    return () => clearDetailPanelTimer()
  }, [clearDetailPanelTimer])

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeActiveView()
      }
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [closeActiveView])

  return (
    <main className="cityExperience" aria-label="Interactive Auckland portfolio">
      <section className="cityShell" aria-label="Auckland portfolio overview">
        <div
          className="cityViewport"
          data-detail-active={isDetailActive}
          data-detail-hotspot-active={isDetailActive}
        >
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
            data-zoomed={shouldZoom}
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
                onSelect={handleHotspotSelect}
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

          <HotspotDetailPanel
            hotspot={isDetailActive && isDetailPanelVisible ? activeDetailHotspot : null}
            onClose={closeActiveView}
            variant="detail"
          />

          <HotspotDetailPanel
            hotspot={isDetailActive ? null : activeHotspot}
            onClose={closeActiveView}
            variant="overlay"
          />
        </div>
      </section>
    </main>
  )
}
