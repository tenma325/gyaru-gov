import { motion, useScroll, useTransform } from 'framer-motion'
import { useMotion } from '../motion'

// 流動ブロブ＋回路ゴースト。テキストを含まない純背景レイヤのみ視差（振幅≤24px）。
export function FluidBackground() {
  const { motionOn } = useMotion()
  const { scrollY } = useScroll()
  const yUp = useTransform(scrollY, [0, 900], [0, -24])
  const yDown = useTransform(scrollY, [0, 900], [0, 18])

  return (
    <div className="blobs" aria-hidden="true">
      <motion.span className="blob blob--1" style={motionOn ? { y: yUp } : undefined} />
      <motion.span className="blob blob--2" style={motionOn ? { y: yDown } : undefined} />
      <motion.span className="blob blob--3" style={motionOn ? { y: yUp } : undefined} />
      <motion.span className="blob blob--4" style={motionOn ? { y: yDown } : undefined} />
      <div className="circuit-ghost" />
    </div>
  )
}
