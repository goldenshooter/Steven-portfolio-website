import type { PortfolioContentBlock } from '../types/portfolio'

type PortfolioContentProps = {
  content: PortfolioContentBlock
}

export function PortfolioContent({ content }: PortfolioContentProps) {
  return (
    <article className="portfolioContent">
      <p className="eyebrow">{content.eyebrow}</p>
      <h2>{content.title}</h2>
      <p className="summary">{content.summary}</p>

      <ul className="highlightList">
        {content.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>

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
