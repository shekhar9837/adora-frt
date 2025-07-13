import React from "react";
import { motion } from "motion/react";
import { Link } from "react-scroll";
import { MenuIcon } from "lucide-react";

const Navbar: React.FC = () => {
    const fadeUpVariants = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
};

  return (
    // <nav>
    <motion.div 
    variants={fadeUpVariants}
       initial="initial"
          animate="animate"
          transition={{ duration: 0.5, delay: 0.4 }}
    className="max-w-[1200px]  md:mx-auto flex items-center justify-between py-3 px-2 md:px-8 md:rounded-xl bg-gray-100 backdrop-blur-sm border border-gray-100 shadow-md">
      {/* Left: Brand */}
      <Link
        to="/"
        smooth={true}
        duration={500}
        className="hidden md:flex flex-1 font-medium text-xl tracking-wider text-neutral-800 hover:text-neutral-900 cursor-pointer"
      >
        Adora
      </Link>

      <div>
        <MenuIcon className="md:hidden flex text-neutral-800 cursor-pointer" />
      </div>

      {/* Center: Nav Links */}
      <div className="flex-2 hidden md:flex justify-center gap-8 font-medium text-neutral-800">
        <Link
          to="features"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-blue-500 transition-colors duration-300"
        >
          Features
        </Link>
        <Link to="faq" smooth={true} duration={500} 
                  className="cursor-pointer hover:text-blue-500 transition-colors duration-300"
>
          FAQ
        </Link>
      </div>

      {/* Right: Buttons */}
      <div className="flex items-center gap-2 shadow-3xl shadow-blue-300">
        <motion.button
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "tween", stiffness: 100, duration: 0 }}
          className="bg-gradient-to-b from-neutral-700 to-neutral-900 border-none text-white px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 shadow-neutral-200 hover:shadow-xl hidden md:flex"
        >
          Login
        </motion.button>
        <motion.button
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "tween", stiffness: 100, duration: 0 }}
          className="bg-gradient-to-b from-blue-400 to-blue-500 border-none text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 shadow-blue-200 hover:shadow-xl flex items-center gap-2"
        >
          <span className="p-1 bg-white rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="8"
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
    </motion.div>
    // </nav>
  );
};

export default Navbar;
