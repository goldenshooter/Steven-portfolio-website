import Image from 'next/image'
import type { HotspotConfig, PortfolioContentBlock } from '../types/portfolio'
import { BackButton } from './BackButton'
import { renderHotspotIcon } from '../utils/hotspotIcons'
import { isTechnologyLinkItem, renderSummaryText, renderTechnologyItem } from '../utils/portfolioContent'

type HotspotDetailPanelProps = {
  hotspot: HotspotConfig | null
  onClose: () => void
  variant: 'overlay' | 'detail'
}

function DetailContent({
  content,
  hotspotId,
  title,
}: {
  content: PortfolioContentBlock
  hotspotId: string
  title: string
}) {
  return (
    <article className="portfolioContent portfolioContentCareer">
      <h2 className="careerHeading">
        <span className="careerHeadingIcon" aria-hidden="true">{renderHotspotIcon(hotspotId)}</span>
        <span>{title}</span>
      </h2>

      <p className="summary">{renderSummaryText(content.summary)}</p>

      {content.stackLabel && content.technologies && (
        <>
          <p className="stackLabel">{content.stackLabel}</p>
          <ul className="technologyList" aria-label="Related technologies">
            {content.technologies.map((technology) => {
              const itemClassName = isTechnologyLinkItem(technology)
                ? 'technologyItem technologyItemLink'
                : 'technologyItem'

              return (
                <li className={itemClassName} key={technology}>
                  {renderTechnologyItem(technology)}
                </li>
              )
            })}
          </ul>
        </>
      )}
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
                blurDataURL={hotspot.detailImage.blurDataURL}
                className="careerDetailMediaImage"
                fill
                placeholder={hotspot.detailImage.blurDataURL ? 'blur' : undefined}
                sizes="(max-width: 720px) 100vw, 50vw"
                src={hotspot.detailImage.src}
              />
            </div>
          ) : null}

          <div className="detailContent">
            <BackButton onClick={onClose} label="Back to city" />
            <DetailContent content={hotspot.content} hotspotId={hotspot.id} title={hotspot.title} />
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
        {hotspot ? (
          <DetailContent content={hotspot.content} hotspotId={hotspot.id} title={hotspot.title} />
        ) : null}
      </div>
    </aside>
  )
}
