import { useState } from 'react';
import { ToggleLeft, ToggleRight } from 'lucide-react';

const AdGallery = () => {
  const [viewMode, setViewMode] = useState('social');
  const [hoveredAd, setHoveredAd] = useState<number | null>(null);

  const ads = [
    { id: 1, title: 'Instagram Story', style: 'Minimal', color: 'from-blue-400 to-cyan-400' },
    { id: 2, title: 'Facebook Ad', style: 'Gradient', color: 'from-purple-400 to-pink-400' },
    { id: 3, title: 'LinkedIn Post', style: 'Professional', color: 'from-gray-400 to-gray-600' },
    { id: 4, title: 'Twitter Ad', style: 'Bold', color: 'from-orange-400 to-red-400' },
    { id: 5, title: 'TikTok Ad', style: 'Trendy', color: 'from-green-400 to-teal-400' },
    { id: 6, title: 'Pinterest Pin', style: 'Aesthetic', color: 'from-pink-400 to-purple-400' },
    { id: 7, title: 'YouTube Thumbnail', style: 'Clickbait', color: 'from-red-400 to-orange-400' },
    { id: 8, title: 'Snapchat Ad', style: 'Playful', color: 'from-yellow-400 to-orange-400' },
    { id: 9, title: 'Google Ad', style: 'Clean', color: 'from-blue-400 to-purple-400' },
  ];

  return (
    <section className="py-24 bg-[#f4f7ff]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4">
            Generated Ad Gallery
          </h2>
          <p className="text-xl text-[#4d4d4d] max-w-2xl mx-auto mb-8">
            See what's possible with AI-powered ad creation
          </p>
          
          {/* View Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`font-medium ${viewMode === 'social' ? 'text-[#3420e5]' : 'text-[#4d4d4d]'}`}>
              Social View
            </span>
            <button
              onClick={() => setViewMode(viewMode === 'social' ? 'print' : 'social')}
              className="text-[#3420e5] hover:scale-110 transition-transform duration-300"
            >
              {viewMode === 'social' ? <ToggleLeft size={32} /> : <ToggleRight size={32} />}
            </button>
            <span className={`font-medium ${viewMode === 'print' ? 'text-[#3420e5]' : 'text-[#4d4d4d]'}`}>
              Print View
            </span>
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {ads.map((ad) => (
            <div
              key={ad.id}
              className="break-inside-avoid relative group cursor-pointer"
              onMouseEnter={() => setHoveredAd(ad.id)}
              onMouseLeave={() => setHoveredAd(null)}
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className={`h-64 bg-gradient-to-br ${ad.color} relative overflow-hidden`}>
                  {/* Before/After Slider Effect */}
                  <div className={`absolute inset-0 bg-gray-200 transition-all duration-500 ${
                    hoveredAd === ad.id ? 'translate-x-0' : 'translate-x-full'
                  }`}>
                    <div className="h-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-gray-400 text-sm mb-2">Plain Text</div>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <p className="text-gray-800 font-medium">Simple product description</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Styled Ad */}
                  <div className={`absolute inset-0 transition-all duration-500 ${
                    hoveredAd === ad.id ? 'translate-x-full' : 'translate-x-0'
                  }`}>
                    <div className="h-full flex items-center justify-center">
                      <div className="text-center text-white">
                        <h3 className="text-xl font-bold mb-2">{ad.title}</h3>
                        <p className="text-sm opacity-90">{ad.style} Style</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Ad Labels */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                  <span className="text-xs font-semibold text-[#1a1a1a]">{ad.title}</span>
                </div>
                <div className="absolute top-4 right-4 bg-[#3420e5] text-white rounded-lg px-3 py-1">
                  <span className="text-xs font-semibold">{ad.style}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdGallery;