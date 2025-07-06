
import { motion } from "motion/react";

const Features = () => {

  const featureList = [
    {
      id: 1,
      smallSlogan: "Smart Scene Generation",
      title: "Create polished, on-brand scenes for your product in seconds.",
      description:
        "Place your product in scenes designed to convert. Instantly generate branded, studio-quality visuals tailored for your audience—no set design, no hassle.",
      image: "/virtual-try-on.png",
    },
    {
      id: 2,
      smallSlogan: "Product Mockups",
      title: "Powered Product Mockups",
      description:
        "Transform boring photos into scroll-stopping ads. Our AI creates professional product mockups that grab attention and drive sales.",
      image: "/wireless-earbuds.png",
    },
    {
      id: 3,
      smallSlogan: "Virtual Model Try-On",
      title: "Virtual Model Try-On",
      description:
        "No studios, no hiring. Just launch-ready ads. Our AI creates realistic lifestyle scenes with virtual models showcasing your products.",
      image: "/black-bottle.png",
    },
  ];

  return (
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
          <div
            key={feature.id}
          className={`flex  w-full ${feature.id % 2 ===0 ? "flex-row-reverse": 'flex-row'}  gap-16 items-center bg-white border-white rounded-[2rem] overflow-hidden  shadow-lg relative`}>
            
         
             <div className="space-y-6 w-full md:w-[50%] py-16 px-12">
              <div className="flex items-center gap-3">
                <h3 className="text-sm font-medium  text-blue-600 border border-white rounded-2xl px-3 py-1 shadow-md">
                  {feature.smallSlogan}
                </h3>
              </div>
              <p className="text-5xl font-semibold text-neutral-800">
                {feature.title}
              </p>
              <p className="text-neutral-600">{feature.description}</p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6">
                <motion.button
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "tween", stiffness: 100, duration: 0 }}
                  className="bg-gradient-to-b w-full from-blue-400 to-blue-500 inset-shadow-sm border-none inset-shadow-blue-300 hover:inset-shadow-blue-400  text-white px-8 py-4 rounded-2xl font-semibold text-md  transition-all duration-300 shadow-blue-200 hover:shadow-xl flex items-center justify-center gap-2"
                >
                  Get Started for free
                </motion.button>
              </div>
            </div>

            <div className="relative w-full md:w-[50%]">
              {/* <div className="bg-gradient-to-br from-[#f4f7ff] to-white rounded-2xl p-8 shadow-xl"> */}
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-[60vh] object-cover  transition-all duration-500"
                  
                  />
              {/* </div> */}
            </div>
            
           
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
