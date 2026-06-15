import { useState } from 'react'
import { hero } from '../content'
import { useMotion } from '../motion'
import { Pause, Play, Sparkle } from './icons'

// 装飾の短句のみ。実質情報は「お知らせ」セクションに静的併置（情報依存なし）。
export function Marquee() {
  const { motionOn } = useMotion()
  const [playing, setPlaying] = useState(true)
  const effective = playing && motionOn
  const items = [...hero.bannerTicker, ...hero.bannerTicker]
  const loop = [...items, ...items]

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track" data-playing={effective}>
        {loop.map((t, i) => (
          <span className="marquee__item" key={i}>
            {t}
            <Sparkle />
          </span>
        ))}
      </div>
      <button
        type="button"
        className="marquee__pause"
        onClick={() => setPlaying((p) => !p)}
        aria-label={effective ? 'お知らせ帯の流れを止める' : 'お知らせ帯を流す'}
      >
        {effective ? <Pause /> : <Play />}
      </button>
    </div>
  )
}
