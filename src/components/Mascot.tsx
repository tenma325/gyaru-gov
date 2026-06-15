import { mascot } from '../content'
import { Reveal } from './Reveal'

export function Mascot() {
  return (
    <section className="section" id="mascot">
      <div className="container">
        <div className="section-head">
          <span className="code">S2</span>
          <h2>受付の主任、ガル子</h2>
        </div>
        <div className="mascot">
          <div>
            <div className="mascot__stage">
              <div className="mascot__plate" />
              <img
                src={import.meta.env.BASE_URL + "mascot-pixel.png"}
                alt="ドット絵のギャル職員「ガル子」"
                className="mascot-image"
                width={384}
                height={384}
              />
            </div>
            <p className="mascot__name">{mascot.name}</p>
            <p className="mascot__role">{mascot.role}</p>
          </div>
          <div>
            {mascot.speechLines.map((line, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="speech">{line}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
