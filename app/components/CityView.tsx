'use client'

import Image from 'next/image'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Hotspot } from './Hotspot'
import { HotspotDetailPanel } from './HotspotDetailPanel'
import type { HotspotConfig } from '../types/portfolio'

const DETAIL_PANEL_DELAY_MS = 400
const DEFAULT_DETAIL_ZOOM = 5

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
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const detailPanelTimerRef = useRef<number | null>(null)
  const menuRef = useRef<HTMLDivElement | null>(null)

  const isDetailActive = Boolean(activeHotspot)

  const clearDetailPanelTimer = useCallback(() => {
    if (detailPanelTimerRef.current !== null) {
      window.clearTimeout(detailPanelTimerRef.current)
      detailPanelTimerRef.current = null
    }
  }, [])

  const shouldZoom = isDetailActive

  const cityTransform = useMemo(() => {
    if (!activeHotspot) {
      return 'translate3d(-50%, -50%, 0) scale(1)'
    }

    return `translate3d(calc(-50%), calc(-50%), 0) scale(${DEFAULT_DETAIL_ZOOM})`
  }, [activeHotspot])

  const transformOrigin = activeHotspot
    ? `${activeHotspot.x}% ${activeHotspot.y}%`
    : '50% 50%'

  const handleHotspotSelect = useCallback(
    (hotspot: HotspotConfig) => {
      clearDetailPanelTimer()
      setIsMenuOpen(false)
      setActiveHotspot(hotspot)

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

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((isOpen) => !isOpen)
  }, [])

  useEffect(() => {
    return () => clearDetailPanelTimer()
  }, [clearDetailPanelTimer])

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
        closeActiveView()
      }
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [closeActiveView])

  useEffect(() => {
    if (!isMenuOpen) {
      return
    }

    const closeOnOutsideClick = (event: PointerEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('pointerdown', closeOnOutsideClick)
    return () => window.removeEventListener('pointerdown', closeOnOutsideClick)
  }, [isMenuOpen])

  return (
    <main className="cityExperience" aria-label="Interactive Auckland portfolio">
      <section className="cityShell" aria-label="Auckland portfolio overview">
        <div
          className="cityViewport"
          data-detail-active={isDetailActive}
          data-detail-hotspot-active={isDetailActive}
        >
          <nav className="siteMenu" ref={menuRef} aria-label="Portfolio pages">
            <button
              aria-controls="portfolio-menu"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? 'Close site menu' : 'Open site menu'}
              className="menuButton"
              onClick={toggleMenu}
              type="button"
            >
              <span />
              <span />
              <span />
            </button>

            <div className="menuPanel" data-open={isMenuOpen} id="portfolio-menu">
              {hotspots.map((hotspot) => (
                <button
                  className="menuItem"
                  key={hotspot.id}
                  onClick={() => handleHotspotSelect(hotspot)}
                  type="button"
                >
                  {hotspot.title}
                </button>
              ))}
            </div>
          </nav>

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

          <HotspotDetailPanel
            hotspot={isDetailActive && isDetailPanelVisible ? activeHotspot : null}
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
