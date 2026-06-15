import { MotionProvider } from './motion'
import { SvgDefs } from './components/SvgDefs'
import { Header } from './components/Header'
import { Marquee } from './components/Marquee'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Mascot } from './components/Mascot'
import { Announcements } from './components/Announcements'
import { About } from './components/About'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <MotionProvider>
      <a className="skip-link" href="#services">
        本文へスキップ
      </a>
      <SvgDefs />
      <Header />
      <Marquee />
      <main>
        <Hero />
        <Services />
        <Mascot />
        <Announcements />
        <About />
      </main>
      <Footer />
    </MotionProvider>
  )
}
