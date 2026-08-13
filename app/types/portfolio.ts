export type PortfolioContentBlock = {
  eyebrow: string
  title: string
  summary: string
  highlights: string[]
  technologies?: string[]
  detailLayout?: 'default' | 'career'
  stackLabel?: string
}

export type HotspotConfig = {
  id: string
  title: string
  location: string
  x: number
  y: number
  zoom?: number
  pan?: {
    x: number
    y: number
  }
  content: PortfolioContentBlock
  detailImage?: {
    src: string
    alt: string
  }
}
