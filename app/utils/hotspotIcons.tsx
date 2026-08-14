type HotspotIconProps = {
  className?: string
}

const iconProps = {
  focusable: false,
  role: 'presentation',
  viewBox: '0 0 24 24',
} as const

function CareerIcon({ className }: HotspotIconProps) {
  return (
    <svg {...iconProps} className={className}>
      <path d="M10 4.5a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2V6h4a2 2 0 0 1 2 2v2.5l-8 2-8-2V8a2 2 0 0 1 2-2h4V4.5Zm1.25 0V6h1.5V4.5a0.75 0.75 0 0 0-.75-.75h0a0.75 0.75 0 0 0-.75.75ZM4 12.06l8 2 8-2V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-5.94Z" />
    </svg>
  )
}

function AboutIcon({ className }: HotspotIconProps) {
  return (
    <svg {...iconProps} className={className}>
      <path d="M12 3.5a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5Zm0 10.25c4.05 0 7.25 2.25 7.25 5.1 0 1.02-.83 1.65-1.85 1.65H6.6c-1.02 0-1.85-.63-1.85-1.65 0-2.85 3.2-5.1 7.25-5.1Z" />
    </svg>
  )
}

function VolunteerIcon({ className }: HotspotIconProps) {
  return (
    <svg {...iconProps} className={className}>
      <path d="M7.3 4.4A3.3 3.3 0 0 1 10.53 7h2.94a3.3 3.3 0 1 1 3.23 4H15.2l-2.1 2.1a1.55 1.55 0 0 1-2.2 0L8.8 11H7.3a3.3 3.3 0 1 1 0-6.6Zm-2.05 9.35c.48-.48 1.25-.48 1.73 0L11.2 18a1.13 1.13 0 0 0 1.6 0l4.22-4.25a1.22 1.22 0 0 1 1.73 1.72l-4.23 4.25a3.63 3.63 0 0 1-5.04 0l-4.23-4.25a1.22 1.22 0 0 1 0-1.72Z" />
    </svg>
  )
}

function ContactIcon({ className }: HotspotIconProps) {
  return (
    <svg {...iconProps} className={className}>
      <path d="M4.75 5.25h14.5A2.25 2.25 0 0 1 21.5 7.5v9a2.25 2.25 0 0 1-2.25 2.25H4.75A2.25 2.25 0 0 1 2.5 16.5v-9a2.25 2.25 0 0 1 2.25-2.25Zm.18 2 6.15 5.04a1.45 1.45 0 0 0 1.84 0l6.15-5.04H4.93Zm14.07 9V8.9l-5.12 4.2a2.95 2.95 0 0 1-3.76 0L5 8.9v7.35c0 .55.45 1 1 1h12c.55 0 1-.45 1-1Z" />
    </svg>
  )
}

const hotspotIcons = {
  about: AboutIcon,
  career: CareerIcon,
  community: VolunteerIcon,
  contact: ContactIcon,
} as const

export function renderHotspotIcon(hotspotId: string) {
  const Icon = hotspotIcons[hotspotId as keyof typeof hotspotIcons] ?? CareerIcon

  return <Icon />
}
