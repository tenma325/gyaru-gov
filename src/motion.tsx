import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import type { ReactNode } from 'react'

interface MotionState {
  /** 装飾モーションを動かしてよいか（OS設定 AND ユーザートグル） */
  motionOn: boolean
  /** ユーザーが明示的にONにしているか */
  userMotion: boolean
  toggle: () => void
}

const MotionContext = createContext<MotionState | null>(null)

function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])
  return reduced
}

export function MotionProvider({ children }: { children: ReactNode }) {
  const prefersReduced = usePrefersReducedMotion()
  const [userMotion, setUserMotion] = useState(true)
  const motionOn = userMotion && !prefersReduced

  // CSS側ゲート（html[data-motion="off"]）を同期
  useEffect(() => {
    const el = document.documentElement
    if (motionOn) el.removeAttribute('data-motion')
    else el.setAttribute('data-motion', 'off')
  }, [motionOn])

  const toggle = useCallback(() => setUserMotion((v) => !v), [])

  const value = useMemo<MotionState>(
    () => ({ motionOn, userMotion, toggle }),
    [motionOn, userMotion, toggle],
  )

  return <MotionContext.Provider value={value}>{children}</MotionContext.Provider>
}

export function useMotion(): MotionState {
  const ctx = useContext(MotionContext)
  if (!ctx) throw new Error('useMotion must be used within MotionProvider')
  return ctx
}
