import { PenTool, Palette, Eye, Download } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: PenTool,
      title: 'Write Your Message',
      description: 'Simply type what you want your ad to say. No design skills needed.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Palette,
      title: 'Choose a Style',
      description: 'Pick from our curated collection of proven ad templates.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Eye,
      title: 'Preview Instantly',
      description: 'See your ad come to life with AI-generated visuals in seconds.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Download,
      title: 'Download or Share',
      description: 'Export in any format or share directly to your favorite platform.',
      color: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <section className="py-24 bg-[#f4f7ff]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4">
            How It Works
          </h2>
          <p className="text-xl text-[#4d4d4d] max-w-2xl mx-auto">
            From concept to conversion in just four simple steps
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <step.icon size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#1a1a1a] mb-3">
                {step.title}
              </h3>
              <p className="text-[#4d4d4d] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;