import Hero from './components/Hero'
import Features from './components/Features'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Navbar from './components/Navbar'


function App() {

  return (
    <div className="">
      <div className="sticky left-0 right-0 top-0 md:top-5 z-50 md:mx-4">
        <Navbar />
      </div>
      {/* <div className="bg-red-500"> */}
        <Hero />
        {/* <TrustedBy /> */}
        {/* <HowItWorks /> */}
        <Features />
        {/* <AdGallery /> */}
        {/* <Pricing/> */}
        <FAQ />
        {/* <FinalCTA /> */}
        <Footer />
      {/* </div> */}
    </div>
  )
}

export default App
