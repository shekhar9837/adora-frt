import { useState, useEffect } from 'react';
import { Play, Sparkles } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const adExamples = [
    { id: 1, title: "Fashion Ad", color: "from-purple-400 to-pink-400" },
    { id: 2, title: "Tech Product", color: "from-blue-400 to-cyan-400" },
    { id: 3, title: "Food & Drink", color: "from-orange-400 to-red-400" },
    { id: 4, title: "Lifestyle", color: "from-green-400 to-teal-400" },
    { id: 5, title: "Beauty", color: "from-pink-400 to-purple-400" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % adExamples.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Radial gradient background */}
      <div className="absolute inset-0 bg-gradient-radial from-[#f4f7ff] via-white to-white opacity-60" />
      
      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-16">
        <div className="text-center space-y-8">
          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-[#1a1a1a] leading-tight tracking-tight">
            Turn Text into Ads That
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3420e5] to-[#6366f1]">
              Convert Instantly
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-[#4d4d4d] max-w-3xl mx-auto font-medium">
            Upload a product. Enter a line. Get ad‑ready visuals in under 10 seconds.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button className="bg-[#3420e5] hover:bg-[#2818c7] text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2">
              <Sparkles size={20} />
              Get Started
            </button>
            <button className="border-2 border-[#3420e5] text-[#3420e5] hover:bg-[#3420e5] hover:text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center gap-2">
              <Play size={20} />
              See It In Action
            </button>
          </div>
        </div>
        
        {/* Animated carousel */}
        <div className="mt-16 relative">
          <div className="flex justify-center overflow-hidden">
            <div className="flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${currentSlide * 280}px)` }}>
              {adExamples.map((ad) => (
                <div key={ad.id} className="w-64 h-96 mx-2 flex-shrink-0">
                  <div className={`w-full h-full bg-gradient-to-br ${ad.color} rounded-2xl shadow-lg opacity-80 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center`}>
                    <div className="text-white text-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Sparkles size={24} />
                      </div>
                      <h3 className="text-xl font-semibold">{ad.title}</h3>
                      <p className="text-sm opacity-90 mt-2">AI Generated</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Carousel indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {adExamples.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentSlide ? 'bg-[#3420e5]' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;