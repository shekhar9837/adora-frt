import { Element } from "react-scroll";
import FeatureCard from "./ui/feature-card";

const Features = () => {
  const featureList = [
    {
      id: 1,
      smallSlogan: "Smart Scene Generation",
      title: "Create polished, on-brand scenes for your product in seconds.",
      description:
        "Place your product in scenes designed to convert. Instantly generate branded, studio-quality visuals tailored for your audience—no set design, no hassle.",
      image: "/placeholder1.png",
    },
    {
      id: 2,
      smallSlogan: "Product Mockups",
      title: "Transform Boring Photos into Scroll-Stopping Ads",
      description:
        "Upload a product photo and get ad-ready mockups in seconds. No photoshoots or setups—just scroll-stopping creative, every time.",
      image: "/placeholder2.png",
    },
    {
      id: 3,
      smallSlogan: "Virtual Model Try-On",
      title: "Showcase your products on lifelike AI models, no photoshoots required.",
      description:
        "Perfect for apparel, beauty, wellness & lifestyle products. No studios, no hiring—just launch-ready ads with a single click.",
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
