import { services } from '../content'
import { Reveal } from './Reveal'
import { ServiceIcon } from './icons'

export function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-head">
          <span className="code">B</span>
          <h2>窓口のご案内</h2>
          <span className="tech-label">／ MADOGUCHI</span>
        </div>
        <div className="services__grid">
          {services.map((s, i) => (
            <Reveal key={s.code} delay={i * 0.1} variant="rise">
              <article className="service">
                <span className="service__code">{s.code}</span>
                <div className="service__icon">
                  <ServiceIcon name={s.icon} />
                </div>
                <h3 className="service__title">{s.title}</h3>
                <p className="service__desc">{s.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
