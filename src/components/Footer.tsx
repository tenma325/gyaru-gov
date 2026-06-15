import { footer, site } from '../content'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <nav className="footer__links" aria-label="フッターリンク">
          {footer.links.map((l) => (
            <a key={l} href="#top">
              {l}
            </a>
          ))}
        </nav>
        <p className="footer__brand">
          {site.title} <span className="footer__roman">{site.roman}</span>
        </p>
        <p className="footer__disclaimer">{footer.disclaimer}</p>
      </div>
    </footer>
  )
}
