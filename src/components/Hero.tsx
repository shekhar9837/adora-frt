import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Element } from "react-scroll";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const adExamples = [
    { id: 1, title: "Fashion Ad", image: "/alovera.png" },
    { id: 2, title: "Tech Product", image: "/black-bottle.png" },
    // { id: 3, title: "Food & Drink", image: "/dumbless.png" },
    // { id: 4, title: "Lifestyle", image: "/ear-buds.png" },
    { id: 2, title: "Beauty", image: "/heels.webp" },
    { id: 3, title: "Gadget", image: "/men-drinks.png" },
    { id: 4, title: "Smartphone", image: "/mug.png" },
    { id: 5, title: "Watch", image: "/placeholder2.png" },
    { id: 6, title: "Shoes", image: "/placeholder1.png" },
    { id: 7, title: "Bag", image: "/women-bagg.jpg" },
    // { id: 11, title: "Laptop", image: "/laptop.png" },
    { id: 8, title: "Heels", image: "/heels.webp" },
    // { id: 13, title: "keyboard", image: "/keyboard.png" },
    // { id: 14, title: "Notebook", image: "/notebook.png" },
    { id: 9, title: "Sunglasses", image: "/sunglasses.png" },
    // { id: 16, title: "wireless earbuds", image: "/wireless-earbuds.png" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % adExamples.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const fadeUpVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <Element name="/">
      <section className="relative w- flex items-center justify-center ">
        {/* Blue Glow Top */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "#ffffff",
            backgroundImage: `
          radial-gradient(
            circle at top center,
            rgba(59, 130, 246, 0.5),
            transparent 70%
          )
        `,
            filter: "blur(80px)",
            backgroundRepeat: "no-repeat",
          }}
        />

        <div className="relative  mx-auto pt-2 md:pt-28 pb-16 w-full">
          <div className="relative z-10">
            {/* Headline */}
            <div className="absolute inset-0    " />
            <div className="relative text-center px-4 pt-20 md:px-8 max-w-7xl mx-auto ">
              <motion.h1
                variants={fadeUpVariants}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-6xl font-semibold  leading-none tracking-tight"
              >
                Turn Text or Images
                <br className="hidden md:flex" />
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-500 ml-2 md:mx-0">
                  into Ads That
                </span>
                <br className="hidden md:inline-block" />
                <span className="mx-2 md:mx-0">Convert Instantly</span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                variants={fadeUpVariants}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-sm md:text-md text-slate-900 max-w-xs md:max-w-xl mx-auto font-medium mt-2"
              >
                Upload a product or enter a text. Get ad-ready visuals
                <br className="hidden md:flex" />
                in under 10 seconds.
              </motion.p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6">
                <motion.button
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  variants={fadeUpVariants}
                  initial="initial"
                  animate="animate"
                  // transition={{ duration: 0.5, delay: 0.2 }}
                  transition={{
                    type: "tween",
                    stiffness: 100,
                    duration: 0,
                    delay: 0.2,
                  }}
                  className="bg-gradient-to-b from-blue-400 to-blue-500 inset-shadow-sm border-none inset-shadow-blue-300 hover:inset-shadow-blue-400  text-white px-8 py-4 rounded-2xl font-semibold text-md  transition-all duration-300 shadow-blue-200 hover:shadow-xl flex items-center gap-2"
                >
                  {/* <Sparkles size={20} /> */}
                  <span className="p-1 bg-white rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
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
            </div>
          </div>

          <motion.div
            variants={fadeUpVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 0.8 }}
            className="pt-36 flex items-center justify-center pointer-events-none  overflow-hidden"
          >
            <motion.div
              className="flex transition-transform duration-1000 ease-in-out "
              style={{ transform: `translateX(-${currentSlide * 200}px)` }}
            >
              {/* Render two sets of adExamples for infinite looping effect */}
              {[...adExamples, ...adExamples].map((ad, idx) => (
                <div
                  key={`${ad.id}-${idx}`}
                  className="w-64 h-80 mx-4 flex-shrink-0 opacity-100 hover:opacity-50 transition-opacity duration-300 "
                >
                  <img
                    src={ad.image}
                    alt={ad.title}
                    width={256}
                    height={320}
                    className={`object-cover w-full h-full bg-gradien rounded-2xl shadow-xl flex items-center justify-center`}
                  />
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Element>
  );
};

export default Hero;
