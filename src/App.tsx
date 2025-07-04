
import TrustedBy from './components/TrustedBy'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import AdGallery from './components/AdGallery'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
// import './App.css'

function App() {

  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <TrustedBy />
      <HowItWorks />
      <Features />
      <AdGallery />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  )
}

export default App
