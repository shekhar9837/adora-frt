import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import Navbar from './components/Navbar'


function App() {

  return (
    <div className="">
      <div className="sticky left-0 right-0 top-5 z-50">
        <Navbar />
      </div>
      {/* <div className="bg-red-500"> */}
        <Hero />
        {/* <TrustedBy /> */}
        <HowItWorks />
        <Features />
        {/* <AdGallery /> */}
        <FAQ />
        <FinalCTA />
        <Footer />
      {/* </div> */}
    </div>
  )
}

export default App
