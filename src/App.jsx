import { BrowserRouter } from "react-router-dom"
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Tech from './components/Tech'
import Works from './components/Works'
import Certificates from './components/Certificates'
import CodingProfiles from './components/CodingProfiles'
import Contact from './components/Contact'
import StarsCanvas from './components/canvas/Stars'
import Footer from './components/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary min-h-screen w-full overflow-x-hidden" style={{ backgroundColor: "#050816" }}>
        {/* Global fixed subtle star field (strictly viewport-sized 100vw x 100vh, never over-allocates) */}
        <StarsCanvas density="subtle" fixed={true} />

        {/* Hero Section with original flowing line background */}
        <div className="relative z-[1] bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        {/* Content sections */}
        <div className="relative z-[1]">
          <About />
          <Experience />
          <Tech />
          <Works />
          <Certificates />
          <CodingProfiles />
        </div>

        {/* Contact and Footer: Deep-space dense stars overlay */}
        <div className="relative z-[1] overflow-hidden">
          <StarsCanvas density="deep-space" fixed={false} />
          <div className="relative z-[1]">
            <Contact />
            <Footer />
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
