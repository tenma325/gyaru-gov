import { nav, site } from '../content'
import { useMotion } from '../motion'
import { MotionWaves } from './icons'

export function Header() {
  const { motionOn, toggle } = useMotion()
  return (
    <header className="header">
      <div className="container header__inner">
        <a className="brand" href="#top">
          <span className="brand__mark">{site.title}</span>
          <span className="brand__roman">{site.roman}</span>
        </a>
        <nav className="nav" aria-label="メインナビゲーション">
          <div className="nav__links">
            {nav.map((n) => (
              <a key={n.href} href={n.href}>
                {n.label}
              </a>
            ))}
          </div>
          <button
            type="button"
            className="motion-toggle"
            onClick={toggle}
            aria-pressed={!motionOn}
          >
            <MotionWaves />
            {motionOn ? '動きを止める' : '動きを出す'}
          </button>
        </nav>
      </div>
    </header>
  )
}
