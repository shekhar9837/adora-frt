import { motion, useAnimation ,useInView} from "framer-motion";
// import { useInView } from    "react-intersection-observer";
import { useEffect, useRef } from "react";

const FeatureCard = ({ feature }: { feature: any }) => {
  const controls = useAnimation();
    const ref = useRef(null)

  const inView= useInView(ref);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const textVariants = {
    hidden: { opacity: 0, x: feature.id % 2 === 0 ? 30 : -30 },
    visible: { opacity: 1, x: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: feature.id % 2 === 0 ? -30 : 30 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div
      ref={ref}
      className={`flex w-full ${
        feature.id % 2 === 0
          ? "md:flex-row-reverse flex-col-reverse"
          : "md:flex-row flex-col"
      } md:gap-16 items-center bg-white rounded-[2rem] overflow-hidden shadow-lg relative`}
    >
      <motion.div
        initial="hidden"
        animate={controls}
        variants={textVariants}
        transition={{ duration: 0.6 }}
        className="space-y-6 w-full md:w-[50%] py-12 md:py-16 px-8 md:px-12"
      >
        <div className="flex items-center gap-3">
          <h3 className="text-sm font-medium text-blue-600 border border-white rounded-2xl px-3 py-1 shadow-md">
            {feature.smallSlogan}
          </h3>
        </div>
        <p className="text-xl md:text-5xl font-semibold text-neutral-800">
          {feature.title}
        </p>
        <p className="text-neutral-600">{feature.description}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6">
          <motion.button
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "tween", duration: 0.2 }}
            className="bg-gradient-to-b w-full from-blue-400 to-blue-500 text-white px-8 py-4 rounded-2xl font-semibold text-md shadow-blue-200 hover:shadow-xl flex items-center justify-center gap-2"
          >
            Get Started for free
          </motion.button>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={controls}
        variants={imageVariants}
        transition={{ duration: 0.6 }}
        className="relative w-full h-full md:w-[50%]"
      >
        <img
          src={feature.image}
          alt={feature.title}
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
};

export default FeatureCard;
