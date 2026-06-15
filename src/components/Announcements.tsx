import { announcements } from '../content'
import { Reveal } from './Reveal'

export function Announcements() {
  return (
    <section className="section" id="news">
      <div className="container">
        <div className="section-head">
          <span className="code">S3</span>
          <h2>お知らせ</h2>
          <span className="tech-label">／ OSHIRASE</span>
        </div>
        <div className="news">
          {announcements.map((a, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <div className="news__row">
                <time className="news__date">{a.date}</time>
                <span className="chip" data-tone={a.tone}>
                  {a.tag}
                </span>
                <p className="news__text">{a.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
