import React from "react";
import { motion } from "framer-motion";
import { HiShieldCheck } from "react-icons/hi2";

function PrivacyHero() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-20 sm:px-10 lg:px-16">
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-lime-300 opacity-30 blur-3xl"></div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center text-center">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.6,
          }}
          className="flex h-20 w-20 items-center justify-center rounded-full bg-black text-lime-300"
        >
          <HiShieldCheck className="text-5xl" />
        </motion.div>

        <motion.h1
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mt-8 max-w-4xl text-4xl font-bold text-black sm:text-5xl lg:text-6xl"
        >
          Your Privacy Matters To Us
        </motion.h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
          We respect your privacy and are committed to protecting your personal
          information with transparency and security.
        </p>

        <div className="mt-8 rounded-full bg-lime-300 px-6 py-3 text-sm font-medium text-black">
          Last Updated: July 2026
        </div>
      </div>
    </section>
  );
}

export default PrivacyHero;
