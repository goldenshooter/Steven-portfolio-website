import type { ReactNode } from 'react'

const MARKDOWN_LINK_PATTERN = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g
const URL_PREFIX_PATTERN = /^(https?:\/\/|www\.)/i

const linkedInIcon = (
  <svg aria-hidden="true" className="technologyIcon" viewBox="0 0 24 24" focusable="false">
    <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5ZM3 9h4v12H3V9Zm7 0h3.84v1.71h.05c.54-1.02 1.86-2.1 3.83-2.1 4.09 0 4.85 2.56 4.85 5.9V21h-4v-5.78c0-1.38-.03-3.15-2.08-3.15-2.08 0-2.39 1.45-2.39 3.05V21h-4V9Z" />
  </svg>
)

const githubIcon = (
  <svg aria-hidden="true" className="technologyIcon" viewBox="0 0 24 24" focusable="false">
    <path d="M12 .5C5.65.5.5 5.77.5 12.27c0 5.2 3.3 9.6 7.88 11.16.58.11.79-.26.79-.58 0-.29-.01-1.06-.02-2.08-3.2.71-3.88-1.58-3.88-1.58-.52-1.37-1.28-1.73-1.28-1.73-1.04-.73.08-.71.08-.71 1.15.08 1.75 1.21 1.75 1.21 1.02 1.82 2.68 1.29 3.34.98.1-.76.4-1.29.72-1.58-2.55-.3-5.23-1.31-5.23-5.84 0-1.29.45-2.34 1.2-3.17-.12-.3-.52-1.51.11-3.15 0 0 .98-.32 3.2 1.21a10.87 10.87 0 0 1 5.82 0c2.21-1.53 3.19-1.21 3.19-1.21.63 1.64.23 2.85.11 3.15.75.83 1.2 1.88 1.2 3.17 0 4.54-2.68 5.53-5.24 5.83.41.37.77 1.09.77 2.2 0 1.59-.01 2.87-.01 3.26 0 .32.21.7.8.58 4.57-1.57 7.86-5.97 7.86-11.16C23.5 5.77 18.35.5 12 .5Z" />
  </svg>
)

export function renderSummaryText(summary: string): ReactNode[] {
  const nodes: ReactNode[] = []
  let lastIndex = 0

  for (const match of summary.matchAll(MARKDOWN_LINK_PATTERN)) {
    const matchIndex = match.index ?? 0
    const [fullMatch, label, url] = match

    if (matchIndex > lastIndex) {
      nodes.push(summary.slice(lastIndex, matchIndex))
    }

    nodes.push(
      <a href={url} key={`${url}-${matchIndex}`} rel="noreferrer noopener" target="_blank">
        {label}
      </a>,
    )

    lastIndex = matchIndex + fullMatch.length
  }

  if (lastIndex < summary.length) {
    nodes.push(summary.slice(lastIndex))
  }

  return nodes.length > 0 ? nodes : [summary]
}

export function normalizeUrl(value: string): string {
  const trimmed = value.trim()
  if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
    return trimmed
  }
  return `https://${trimmed}`
}

export function isTechnologyLinkItem(technology: string): boolean {
  const linkedInPrefix = 'LinkedIn:'
  const githubPrefix = 'GitHub:'

  if (technology.startsWith(linkedInPrefix) || technology.startsWith(githubPrefix)) {
    return true
  }

  const separatorIndex = technology.indexOf(':')
  if (separatorIndex <= 0) {
    return false
  }

  const rawValue = technology.slice(separatorIndex + 1).trim()
  return URL_PREFIX_PATTERN.test(rawValue)
}

export function renderTechnologyItem(technology: string): ReactNode {
  const linkedInPrefix = 'LinkedIn:'
  const githubPrefix = 'GitHub:'
  const separatorIndex = technology.indexOf(':')

  if (technology.startsWith(linkedInPrefix)) {
    const rawUrl = technology.slice(linkedInPrefix.length).trim()
    const href = normalizeUrl(rawUrl)
    return (
      <a className="technologyLink" href={href} rel="noreferrer noopener" target="_blank">
        {linkedInIcon}
        <span>LinkedIn</span>
        <span aria-hidden="true" className="technologyLinkArrow">
          ↗
        </span>
      </a>
    )
  }

  if (technology.startsWith(githubPrefix)) {
    const rawUrl = technology.slice(githubPrefix.length).trim()
    const href = normalizeUrl(rawUrl)
    return (
      <a className="technologyLink" href={href} rel="noreferrer noopener" target="_blank">
        {githubIcon}
        <span>GitHub</span>
        <span aria-hidden="true" className="technologyLinkArrow">
          ↗
        </span>
      </a>
    )
  }

  if (separatorIndex > 0) {
    const label = technology.slice(0, separatorIndex).trim()
    const rawValue = technology.slice(separatorIndex + 1).trim()
    const isUrl = URL_PREFIX_PATTERN.test(rawValue)

    if (isUrl) {
      return (
        <a className="technologyLink" href={normalizeUrl(rawValue)} rel="noreferrer noopener" target="_blank">
          <span>{label}</span>
          <span aria-hidden="true" className="technologyLinkArrow">
            ↗
          </span>
        </a>
      )
    }
  }

  return technology
}
