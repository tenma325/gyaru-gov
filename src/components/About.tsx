import { about } from '../content'
import { Reveal } from './Reveal'

export function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-head">
          <span className="code">S4</span>
          <h2>このサイトは</h2>
        </div>
        <div className="about">
          <Reveal className="about__body measure">
            <h3 style={{ fontSize: 'clamp(1.4rem, 3.5vw, 2.2rem)', marginBottom: 'var(--space-md)' }}>
              {about.heading}
            </h3>
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Reveal>
          <Reveal variant="pop">
            <div className="gap-figure">
              <div className="gap-figure__row">
                <span className="gap-figure__chip" style={{ background: 'var(--sky)' }}>
                  行政
                </span>
                <span className="gap-figure__x">×</span>
                <span className="gap-figure__chip" style={{ background: 'var(--coral)' }}>
                  ギャル
                </span>
              </div>
              <span className="tech-label">＝ やさしい役所</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
