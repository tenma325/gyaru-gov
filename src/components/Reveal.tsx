import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { useMotion } from '../motion'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  variant?: 'rise' | 'pop'
}

// 画面内に入ったら一度だけ立ち上がる。motionOff時は最終状態で即表示。
export function Reveal({ children, className, delay = 0, variant = 'rise' }: RevealProps) {
  const { motionOn } = useMotion()
  if (!motionOn) return <div className={className}>{children}</div>

  const variants =
    variant === 'pop'
      ? { hidden: { opacity: 0, scale: 0.9 }, show: { opacity: 1, scale: 1 } }
      : { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}
