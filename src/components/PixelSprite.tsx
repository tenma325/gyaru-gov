import { useEffect, useRef } from 'react'
import { useMotion } from '../motion'
import {
  MASCOT_H,
  MASCOT_W,
  blinkLine,
  blinkToSkin,
  mascotPalette,
  mascotSketch,
  sparkleCells,
} from '../mascot'

const inSet = (set: [number, number][], x: number, y: number) =>
  set.some(([sx, sy]) => sx === x && sy === y)

export function PixelSprite({ scale = 8, className }: { scale?: number; className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null)
  const { motionOn } = useMotion()

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.imageSmoothingEnabled = false

    const paint = (blink: boolean, bounce: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const oy = -bounce * scale
      for (let y = 0; y < MASCOT_H; y++) {
        const row = mascotSketch[y]
        for (let x = 0; x < MASCOT_W; x++) {
          let ch = row[x]
          if (ch === '.') continue
          if (blink) {
            if (inSet(blinkLine, x, y)) ch = 'O'
            else if (inSet(blinkToSkin, x, y)) ch = 'S'
          }
          const color = mascotPalette[ch]
          if (!color) continue
          ctx.fillStyle = color
          ctx.fillRect(x * scale, y * scale + oy, scale, scale)
        }
      }
      if (bounce > 0) {
        ctx.fillStyle = mascotPalette.E
        for (const [sx, sy] of sparkleCells) {
          ctx.fillRect(sx * scale, sy * scale + oy, scale, scale)
        }
      }
    }

    if (!motionOn) {
      paint(false, 0)
      return
    }

    // 待機ループ: 開→まばたき→開→バウンス。緩急で機械的にならないように。
    const timeline = [
      { blink: false, bounce: 0, dur: 1500 },
      { blink: true, bounce: 0, dur: 140 },
      { blink: false, bounce: 0, dur: 180 },
      { blink: false, bounce: 1, dur: 130 },
      { blink: false, bounce: 0, dur: 150 },
    ]
    const total = timeline.reduce((s, f) => s + f.dur, 0)
    let raf = 0
    let lastKey = ''
    const start = performance.now()
    const tick = (now: number) => {
      let t = (now - start) % total
      let cur = timeline[0]
      for (const f of timeline) {
        if (t < f.dur) {
          cur = f
          break
        }
        t -= f.dur
      }
      const key = `${cur.blink}-${cur.bounce}`
      if (key !== lastKey) {
        paint(cur.blink, cur.bounce)
        lastKey = key
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [motionOn, scale])

  return (
    <canvas
      ref={ref}
      className={`pixel-canvas ${className ?? ''}`}
      width={MASCOT_W * scale}
      height={MASCOT_H * scale}
      role="img"
      aria-label="ドット絵のギャル職員「ガル子」の立ち姿"
      style={{ width: MASCOT_W * scale, height: MASCOT_H * scale }}
    />
  )
}
