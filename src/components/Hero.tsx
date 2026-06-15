import { hero } from '../content'
import { FluidBackground } from './FluidBackground'
import { ArrowRight } from './icons'

export function Hero() {
  return (
    <section className="hero section" id="top">
      <FluidBackground />
      <div className="container hero__grid">
        <div>
          <p className="tech-label" style={{ marginBottom: 'var(--space-sm)' }}>
            S1 — GYARU-GOV ／ 総合案内
          </p>
          <h1 className="hero__title">
            <span className="l1">{hero.headlineLines[0]}</span>
            <span className="l2">{hero.headlineLines[1]}</span>
            <span className="l3">
              <em>{hero.headlineLines[2]}</em>
            </span>
          </h1>
          <p className="hero__sub">{hero.sub}</p>
          <div className="hero__cta">
            <a className="btn" href="#services">
              {hero.cta}
              <ArrowRight />
            </a>
            <a className="btn btn--ghost" href="#about">
              行政×ギャルって？
            </a>
          </div>
        </div>
        <div className="hero__stage">
          <div className="frag frag--halftone frag--live" style={{ padding: 'var(--space-md)' }}>
            <img
              src={import.meta.env.BASE_URL + "mascot-pixel.png"}
              alt="ドット絵のギャル職員「ガル子」"
              className="mascot-image mascot-image--hero"
              width={384}
              height={384}
            />
          </div>
          <span className="stamp" style={{ position: 'absolute', bottom: '-12px', right: '4px' }}>
            受付中
          </span>
        </div>
      </div>
    </section>
  )
}
