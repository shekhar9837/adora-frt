import { useState } from 'react';
import { ArrowRight, Wand2, Camera, Users } from 'lucide-react';

const Features = () => {
  const [activeToggle, setActiveToggle] = useState('final');

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 space-y-32">
        
        {/* Feature 1: Smart Scene Generation */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#3420e5] to-[#6366f1] rounded-xl flex items-center justify-center">
                <Wand2 size={24} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold text-[#1a1a1a]">Smart Scene Generation</h3>
            </div>
            <p className="text-xl text-[#4d4d4d] leading-relaxed">
              Transform basic product photos into professional marketing scenes. Our AI understands context and creates perfect backdrops that make your products shine.
            </p>
            <div className="flex items-center gap-4 mt-8">
              <button
                onClick={() => setActiveToggle('raw')}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeToggle === 'raw'
                    ? 'bg-[#3420e5] text-white'
                    : 'bg-gray-100 text-[#4d4d4d] hover:bg-gray-200'
                }`}
              >
                Raw Upload
              </button>
              <div className="text-[#4d4d4d]">↔</div>
              <button
                onClick={() => setActiveToggle('final')}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeToggle === 'final'
                    ? 'bg-[#3420e5] text-white'
                    : 'bg-gray-100 text-[#4d4d4d] hover:bg-gray-200'
                }`}
              >
                Final Output
              </button>
            </div>
            <button className="flex items-center gap-2 text-[#3420e5] font-semibold hover:gap-3 transition-all duration-300 group">
              Get Started for Free
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-[#f4f7ff] to-white rounded-2xl p-8 shadow-xl">
              <div className={`w-full h-80 rounded-xl transition-all duration-500 ${
                activeToggle === 'raw' 
                  ? 'bg-gradient-to-br from-gray-100 to-gray-200' 
                  : 'bg-gradient-to-br from-blue-400 to-purple-500'
              } flex items-center justify-center`}>
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Camera size={32} className="text-white" />
                  </div>
                  <p className="text-white font-semibold">
                    {activeToggle === 'raw' ? 'Original Product' : 'AI-Enhanced Scene'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 2: Product Mockups */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-xl">
              <div className="w-full h-80 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Wand2 size={32} className="text-white" />
                  </div>
                  <p className="text-white font-semibold">Product Mockup</p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Camera size={24} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold text-[#1a1a1a]">Powered Product Mockups</h3>
            </div>
            <p className="text-xl text-[#4d4d4d] leading-relaxed">
              Transform boring photos into scroll-stopping ads. Our AI creates professional product mockups that grab attention and drive sales.
            </p>
            <button className="flex items-center gap-2 bg-[#3420e5] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#2818c7] transition-all duration-300 group">
              Generate Now
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Feature 3: Virtual Model Try-On */}
        <div className="text-center space-y-8">
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center">
              <Users size={24} className="text-white" />
            </div>
            <h3 className="text-3xl font-bold text-[#1a1a1a]">Virtual Model Try-On</h3>
          </div>
          <p className="text-xl text-[#4d4d4d] max-w-3xl mx-auto leading-relaxed">
            No studios, no hiring. Just launch-ready ads. Our AI creates realistic lifestyle scenes with virtual models showcasing your products.
          </p>
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl p-8 shadow-xl">
              <div className="w-full h-80 bg-gradient-to-br from-pink-400 to-purple-500 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users size={32} className="text-white" />
                  </div>
                  <p className="text-white font-semibold">Virtual Model Scene</p>
                </div>
              </div>
            </div>
          </div>
          <button className="flex items-center gap-2 text-[#3420e5] font-semibold hover:gap-3 transition-all duration-300 group mx-auto">
            Get Started for Free
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;