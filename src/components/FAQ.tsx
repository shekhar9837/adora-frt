import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Can I customize the ad styles?",
      answer: "Absolutely! Adora offers extensive customization options. You can adjust colors, fonts, layouts, and even create your own brand templates. Our AI learns your preferences and suggests styles that match your brand identity."
    },
    {
      question: "What file formats do I get?",
      answer: "We provide multiple formats including PNG, JPG, PDF, and SVG for print materials. For digital use, we offer optimized formats for each platform including Instagram Stories, Facebook Ads, LinkedIn posts, and more."
    },
    {
      question: "Is this free to use?",
      answer: "Yes! Adora offers a generous free tier that includes 10 ad generations per month. For unlimited access and premium features, our Pro plan starts at just $19/month."
    },
    {
      question: "How does the AI understand my brand?",
      answer: "Our AI analyzes your uploaded content, brand colors, and previous designs to understand your unique style. The more you use Adora, the better it becomes at creating ads that perfectly match your brand voice."
    },
    {
      question: "Can I use these ads commercially?",
      answer: "Yes, all ads generated through Adora come with full commercial usage rights. You own the content and can use it across any platform or medium without restrictions."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-[#4d4d4d]">
            Everything you need to know about Adora
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <h3 className="text-lg font-semibold text-[#1a1a1a] pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp size={24} className="text-[#3420e5]" />
                  ) : (
                    <ChevronDown size={24} className="text-[#4d4d4d]" />
                  )}
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-6">
                  <p className="text-[#4d4d4d] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;