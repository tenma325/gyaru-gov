// すべて手書きSVG。絵文字・Unicodeシンボル（♥★✓等）は使わない。
import type { Service } from '../content'

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export function ServiceIcon({ name }: { name: Service['icon'] }) {
  switch (name) {
    case 'certificate':
      return (
        <svg {...base} width="100%" height="100%" aria-hidden="true">
          <rect x="4" y="3" width="12" height="16" rx="1.6" />
          <line x1="7" y1="7" x2="13" y2="7" />
          <line x1="7" y1="10" x2="13" y2="10" />
          <line x1="7" y1="13" x2="11" y2="13" />
          <circle cx="16.5" cy="16.5" r="4" fill="var(--coral)" />
          <path d="M14.7 16.6l1.2 1.2 2.1-2.3" />
        </svg>
      )
    case 'childcare':
      return (
        <svg {...base} width="100%" height="100%" aria-hidden="true">
          <path d="M3.5 13.5c1.8 3 4.8 4.5 8.5 4.5s6.7-1.5 8.5-4.5" />
          <path
            d="M12 3.4l1.5 3 3.3.5-2.4 2.3.6 3.3L12 14.9l-3 1.6.6-3.3L7.2 6.9l3.3-.5z"
            fill="var(--mint)"
          />
        </svg>
      )
    case 'recycle':
      return (
        <svg {...base} width="100%" height="100%" aria-hidden="true">
          <g>
            <path d="M12 5.4a6.6 6.6 0 0 1 5.7 3.3" />
            <path d="M16 5.1l1.9 3.4 1.6-3.3" fill="var(--mint)" />
          </g>
          <g transform="rotate(120 12 12)">
            <path d="M12 5.4a6.6 6.6 0 0 1 5.7 3.3" />
            <path d="M16 5.1l1.9 3.4 1.6-3.3" fill="var(--sky)" />
          </g>
          <g transform="rotate(240 12 12)">
            <path d="M12 5.4a6.6 6.6 0 0 1 5.7 3.3" />
            <path d="M16 5.1l1.9 3.4 1.6-3.3" fill="var(--lemon)" />
          </g>
        </svg>
      )
    case 'consult':
      return (
        <svg {...base} width="100%" height="100%" aria-hidden="true">
          <rect x="3" y="5" width="11" height="7.4" rx="2" />
          <path d="M7 12.4v2.4l2.8-2.4" />
          <rect x="12" y="10" width="8.5" height="6.6" rx="2" fill="var(--lavender)" />
          <path
            d="M16.2 12.8c-.6-.9-2-.5-2 .5 0 .9 2 2.1 2 2.1s2-1.2 2-2.1c0-1-1.4-1.4-2-.5z"
            fill="var(--paper)"
            stroke="none"
          />
        </svg>
      )
    case 'event':
      return (
        <svg {...base} width="100%" height="100%" aria-hidden="true">
          <path d="M3 6.5c3 2.2 6 2.2 9 0s6-2.2 9 0" />
          <path d="M5.5 6.8l1.4 3.1 1.4-3.6z" fill="var(--coral)" />
          <path d="M11 7.5l1.2 3.2 1.4-3.4z" fill="var(--lemon)" />
          <path d="M16.4 6.7l1.4 3.1 1.3-3.6z" fill="var(--sky)" />
          <g stroke="var(--coral)">
            <line x1="12" y1="15" x2="12" y2="20" />
            <line x1="9.2" y1="15.6" x2="8" y2="19.8" />
            <line x1="14.8" y1="15.6" x2="16" y2="19.8" />
          </g>
        </svg>
      )
  }
}

export function ArrowRight() {
  return (
    <svg {...base} width="20" height="20" aria-hidden="true">
      <line x1="4.5" y1="12" x2="18" y2="12" />
      <path d="M12.5 6l6 6-6 6" />
    </svg>
  )
}

export function Pause() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="currentColor">
      <rect x="6.5" y="5" width="3.4" height="14" rx="1" />
      <rect x="14.1" y="5" width="3.4" height="14" rx="1" />
    </svg>
  )
}

export function Play() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="currentColor">
      <path d="M7 5l11 7-11 7z" />
    </svg>
  )
}

export function MotionWaves() {
  return (
    <svg {...base} width="18" height="18" aria-hidden="true">
      <path d="M3 12h2.5l2-6 3 12 2.2-8 1.6 4H21" />
    </svg>
  )
}

export function Sparkle() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true" fill="currentColor">
      <path d="M12 3l1.6 6.4L20 11l-6.4 1.6L12 19l-1.6-6.4L4 11l6.4-1.6z" />
    </svg>
  )
}
