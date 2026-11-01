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
      <div className="relative z-0 bg-primary">
        {/* Hero Section with original flowing line background */}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        {/* Content sections: Subtle star density */}
        <div className="relative z-0">
          <StarsCanvas density="subtle" />
          <div className="relative z-[1]">
            <About />
            <Experience />
            <Tech />
            <Works />
            <Certificates />
            <CodingProfiles />
          </div>
        </div>

        {/* Contact and Footer: Deep-space dense stars in Cyan, Blue, Pink, Purple */}
        <div className="relative z-0">
          <StarsCanvas density="deep-space" />
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
