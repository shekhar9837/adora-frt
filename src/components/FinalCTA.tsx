import { Sparkles, ArrowRight } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-[#f4f7ff] via-[#e8f4ff] to-[#f4f7ff] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-radial from-[#3420e5]/5 via-transparent to-transparent" />
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#3420e5]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-4xl mx-auto px-6 text-center">
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
      </div>
    </section>
  );
};

export default FinalCTA;