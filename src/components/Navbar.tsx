import React from "react";
import { motion } from "motion/react";

const Navbar: React.FC = () => {
  return (
    // <nav>
      <div
        className="max-w-[1200px]  mx-auto flex items-center justify-between py-3 px-8 rounded-xl bg-gray-100 backdrop-blur-sm"
      >
        {/* Left: Brand */}
        <div
          className="flex-1 font-bold text-xl tracking-wider text-slate-900"
        >
          Adora
        </div>

        {/* Center: Nav Links */}
        <div
          className="flex-2 flex justify-center gap-8 font-medium text-gray-900"
        >
          <a href="#product">Product</a>
          <a href="#features">Features</a>
          <a href="#faq">FAQ</a>
        </div>

        {/* Right: Buttons */}
        <div className="flex items-center gap-2 shadow-3xl shadow-blue-300">
          <motion.button
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "tween", stiffness: 100, duration: 0 }}
            className="bg-gradient-to-b from-neutral-700 to-neutral-900 border-none text-white px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 shadow-neutral-200 hover:shadow-xl"
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
      </div>
    // </nav>
  );
};

export default Navbar;
