import { motion } from 'motion/react';
const FinalCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-[#f4f7ff] via-[#e8f4ff] to-[#f4f7ff] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-radial from-[#3420e5]/5 via-transparent to-transparent" />
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#3420e5]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      
      {/* <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div className="space-y-8">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles size={32} className="text-[#3420e5]" />
            <h2 className="text-4xl md:text-6xl font-bold text-[#1a1a1a]">
              Start Creating Beautiful Ads from Plain Text
            </h2>
          </div>
          
          <p className="text-xl md:text-2xl text-[#4d4d4d] max-w-2xl mx-auto leading-relaxed">
            Join thousands of creators who've already transformed their marketing with AI-powered ad generation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <button className="bg-[#3420e5] hover:bg-[#2818c7] text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-3 group">
              <Sparkles size={24} className="group-hover:rotate-12 transition-transform" />
              Try It Now
            </button>
            
            <button className="text-[#3420e5] font-semibold text-lg hover:text-[#2818c7] transition-colors duration-300 flex items-center gap-2 group">
              See Example Ads
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="pt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-[#3420e5]">10k+</div>
                <div className="text-[#4d4d4d] font-medium">Ads Created</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-[#3420e5]">95%</div>
                <div className="text-[#4d4d4d] font-medium">Satisfaction Rate</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-[#3420e5]">&lt; 10s</div>
                <div className="text-[#4d4d4d] font-medium">Average Generation Time</div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

       {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6 relative z-50">
              <motion.button
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "tween", stiffness: 100, duration: 0 }}
                className="bg-gradient-to-b w-[30rem] h-[7rem] from-blue-400 to-blue-500 inset-shadow-sm border-none inset-shadow-blue-300 hover:inset-shadow-blue-400  text-white px-8 py-4 rounded-2xl font-semibold text-4xl  transition-all duration-300 shadow-blue-200 hover:shadow-xl flex items-center justify-center gap-2"
              >
                {/* <Sparkles size={20} /> */}
                <span className="p-2 bg-white rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                    className="text-blue-500"
                  >
                    <path d="M231.4,44.34s0,.1,0,.15l-58.2,191.94a15.88,15.88,0,0,1-14,11.51q-.69.06-1.38.06a15.86,15.86,0,0,1-14.42-9.15L107,164.15a4,4,0,0,1,.77-4.58l57.92-57.92a8,8,0,0,0-11.31-11.31L96.43,148.26a4,4,0,0,1-4.58.77L17.08,112.64a16,16,0,0,1,2.49-29.8l191.94-58.2.15,0A16,16,0,0,1,231.4,44.34Z"></path>
                  </svg>
                </span>
                Get Started
              </motion.button>
            </div>
    </section>
  );
};

export default FinalCTA;