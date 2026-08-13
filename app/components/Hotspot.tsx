import type { CSSProperties } from 'react'
import type { HotspotConfig } from '../types/portfolio'

type HotspotProps = {
  hotspot: HotspotConfig
  isActive: boolean
  onSelect: (hotspot: HotspotConfig) => void
}

export function Hotspot({ hotspot, isActive, onSelect }: HotspotProps) {
  return (
    <button
      aria-pressed={isActive}
      className="hotspot"
      data-active={isActive}
      onClick={() => onSelect(hotspot)}
      style={
        {
          '--hotspot-x': `${hotspot.x}%`,
          '--hotspot-y': `${hotspot.y}%`,
        } as CSSProperties
      }
      type="button"
    >
      <span className="hotspotPulse" aria-hidden="true" />
      <span className="hotspotLabel">
        <span>{hotspot.title}</span>
      </span>
    </button>
  )
}
