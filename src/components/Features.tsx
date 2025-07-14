import { Element } from "react-scroll";
import FeatureCard from "./ui/feature-card";

const Features = () => {
  const featureList = [
  {
    id: 1,
    smallSlogan: "AI-Powered Scene Builder",
    title: "Generate Branded Product Scenes Instantly",
    description:
      "Effortlessly place your product into AI-designed environments built to drive conversions. Studio-quality, brand-aligned visuals—created in seconds, no set design needed.",
    image: "/placeholder1.png",
  },
  {
    id: 2,
    smallSlogan: "Instant Product Mockups",
    title: "Turn Simple Photos into High-Converting Ads",
    description:
      "Just upload your product image—our engine transforms it into professional ad creatives instantly. No expensive shoots, no creative block, just results.",
    image: "/placeholder2.png",
  },
  {
    id: 3,
    smallSlogan: "AI Model Try-On",
    title: "Display Products on Realistic AI Models, Instantly",
    description:
      "Ideal for fashion, skincare, and lifestyle brands. Showcase your items on hyper-realistic AI models—no photo sessions, no model bookings, just plug-and-play visuals.",
    image: "/placeholder3.png",
  },
];


  return (
    <Element name="features">
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 space-y-32">
          {/* Warm Orange Glow Left */}
          <div
            className="absolute inset-0 z-0"
            style={{
              background: "#ffffff",
              backgroundImage: `
        radial-gradient(
        circle at top left,
        rgba(100, 180, 255, 0.3),
        transparent 30%
        )
      `,
              filter: "blur(20px)",
              backgroundRepeat: "no-repeat",
            }}
          />

          <div className="text-center space-y-2 w-full flex flex-col items-center mb-1 relative">
            <div className="text-center space-y-2 max-w-lg  flex flex-col items-center mb-16  relative">
              <span className="text-sm  font-light text-blue-600 border border-white rounded-2xl px-3 py-1 shadow-md mb-4">
                Features
              </span>

              <h3 className="text-3xl font-medium text-neutral-950">
                Unlock Limitless Creativity with Powerful AI Features
              </h3>
              <p className="text-slate-700">
                Generate creatives that drive clicks, engagement, and sales - on
                autopilot
              </p>
            </div>
          </div>

          {featureList.map((feature) => (
  <FeatureCard key={feature.id} feature={feature} />
))}
        </div>
      </section>
    </Element>
  );
};

export default Features;
