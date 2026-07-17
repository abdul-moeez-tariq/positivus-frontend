import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { HiArrowRight, HiCheckCircle, HiSparkles } from "react-icons/hi2";

function PricingHero() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-20 sm:px-10 lg:px-16">
      {/* Background */}
      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-lime-300 opacity-30 blur-3xl"></div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        {/* Left Content */}
        <motion.div
          initial={{
            opacity: 0,
            x: -40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="flex flex-col"
        >
          <span className="w-fit rounded-full bg-lime-300 px-5 py-2 text-sm font-medium text-black">
            Simple Pricing
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-black sm:text-5xl lg:text-6xl">
            Choose a plan that helps your business grow
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
            Flexible pricing plans designed for startups, growing businesses and
            enterprises. Select the solution that matches your goals.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="group flex items-center gap-3 rounded-full bg-black px-7 py-3 text-sm font-medium text-white transition duration-300 hover:bg-green-600"
            >
              Get Started
              <HiArrowRight className="transition duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              to="/services"
              className="rounded-full border border-black px-7 py-3 text-sm font-medium text-black transition duration-300 hover:bg-black hover:text-white"
            >
              Explore Services
            </Link>
          </div>
        </motion.div>

        {/* Right Pricing Visual */}
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
            duration: 0.7,
          }}
          className="flex justify-center"
        >
          <div className="relative w-full max-w-md">
            {/* Main Card */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="rounded-3xl bg-black p-8 shadow-2xl"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <HiSparkles className="text-3xl text-lime-300" />

                  <h3 className="text-xl font-bold text-white">Premium Plan</h3>
                </div>

                <span className="rounded-full bg-lime-300 px-3 py-1 text-xs font-semibold text-black">
                  Popular
                </span>
              </div>

              <div className="mt-8">
                <p className="text-sm text-gray-400">Starting From</p>

                <p className="mt-2 text-5xl font-bold text-white">$999</p>

                <p className="text-sm text-gray-400">per project</p>
              </div>

              <div className="mt-8 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <HiCheckCircle className="text-xl text-lime-300" />

                  <p className="text-sm text-gray-300">
                    Custom digital solutions
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <HiCheckCircle className="text-xl text-lime-300" />

                  <p className="text-sm text-gray-300">Dedicated support</p>
                </div>

                <div className="flex items-center gap-3">
                  <HiCheckCircle className="text-xl text-lime-300" />

                  <p className="text-sm text-gray-300">Scalable technology</p>
                </div>
              </div>
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              animate={{
                x: [0, 12, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="absolute -bottom-8 -left-6 rounded-3xl bg-lime-300 p-6 shadow-xl"
            >
              <p className="text-sm font-medium text-black">Save More</p>

              <p className="mt-2 text-3xl font-bold text-black">30%</p>

              <p className="text-xs text-black">With Annual Plans</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default PricingHero;
