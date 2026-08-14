import Image from 'next/image'
import type { HotspotConfig, PortfolioContentBlock } from '../types/portfolio'
import { BackButton } from './BackButton'

type HotspotDetailPanelProps = {
  hotspot: HotspotConfig | null
  onClose: () => void
  variant: 'overlay' | 'detail'
}

function DetailContent({ content }: { content: PortfolioContentBlock }) {
  return (
    <article className="portfolioContent portfolioContentCareer">
      <h2 className="careerHeading">
        <span className="careerHeadingIcon" aria-hidden="true">
          <svg viewBox="0 0 24 24" focusable="false" role="presentation">
            <path d="M10 4.5a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2V6h4a2 2 0 0 1 2 2v2.5l-8 2-8-2V8a2 2 0 0 1 2-2h4V4.5Zm1.25 0V6h1.5V4.5a0.75 0.75 0 0 0-.75-.75h0a0.75 0.75 0 0 0-.75.75ZM4 12.06l8 2 8-2V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-5.94Z" />
          </svg>
        </span>
        <span>{content.title}</span>
      </h2>

      <p className="summary">{content.summary}</p>

      <p className="stackLabel">{content.stackLabel ?? 'Tech Stack'}</p>

      {content.technologies ? (
        <ul className="technologyList" aria-label="Related technologies">
          {content.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      ) : null}
    </article>
  )
}

export function HotspotDetailPanel({ hotspot, onClose, variant }: HotspotDetailPanelProps) {
  if (variant === 'detail') {
    if (!hotspot) {
      return null
    }

    return (
      <aside
        aria-hidden={!hotspot}
        aria-label={`${hotspot.title} portfolio details`}
        className="detailCard"
        data-visible={Boolean(hotspot)}
      >
        <div className="careerDetailShell">
          {hotspot.detailImage ? (
            <div className="careerDetailMedia" aria-hidden="true">
              <Image
                alt={hotspot.detailImage.alt}
                className="careerDetailMediaImage"
                fill
                sizes="(max-width: 720px) 100vw, 50vw"
                src={hotspot.detailImage.src}
                unoptimized
              />
            </div>
          ) : null}

          <div className="detailContent">
            <BackButton onClick={onClose} label="Back to city" />
            <DetailContent content={hotspot.content} />
          </div>
        </div>
      </aside>
    )
  }

  return (
    <aside
      aria-hidden={!hotspot}
      aria-label={hotspot ? `${hotspot.title} portfolio details` : undefined}
      className="locationOverlay"
      data-visible={Boolean(hotspot)}
    >
      <div className="overlayChrome">
        <BackButton onClick={onClose} />
        {hotspot ? <DetailContent content={hotspot.content} /> : null}
      </div>
    </aside>
  )
}
