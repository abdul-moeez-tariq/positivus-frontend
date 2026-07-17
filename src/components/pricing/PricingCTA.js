import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { HiArrowRight, HiRocketLaunch, HiCheckCircle } from "react-icons/hi2";

function PricingCTA() {
  return (
    <section className="px-6 py-20 sm:px-10 lg:px-16">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-black px-8 py-14 sm:px-12 lg:px-16">
        {/* Background Effects */}
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-lime-300 opacity-20 blur-3xl"></div>

        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-green-500 opacity-20 blur-3xl"></div>

        <div className="relative grid items-center gap-10 lg:grid-cols-2">
          {/* Content */}
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="flex flex-col"
          >
            <span className="w-fit rounded-full bg-lime-300 px-5 py-2 text-sm font-medium text-black">
              Start Today
            </span>

            <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Ready to choose your perfect plan?
            </h2>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg">
              Let's build a powerful digital solution that helps your business
              grow, scale and succeed.
            </p>

            {/* Benefits */}
            <div className="mt-8 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <HiCheckCircle className="text-xl text-lime-300" />

                <p className="text-sm text-gray-300">
                  Flexible pricing options
                </p>
              </div>

              <div className="flex items-center gap-3">
                <HiCheckCircle className="text-xl text-lime-300" />

                <p className="text-sm text-gray-300">Expert development team</p>
              </div>

              <div className="flex items-center gap-3">
                <HiCheckCircle className="text-xl text-lime-300" />

                <p className="text-sm text-gray-300">
                  Long-term business support
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="group flex items-center gap-3 rounded-full bg-lime-300 px-7 py-3 text-sm font-semibold text-black transition duration-300 hover:bg-white"
              >
                Contact Us
                <HiArrowRight className="transition duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                to="/use-cases"
                className="rounded-full border border-white px-7 py-3 text-sm font-medium text-white transition duration-300 hover:bg-white hover:text-black"
              >
                View Use Cases
              </Link>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="flex justify-center"
          >
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="flex h-72 w-72 items-center justify-center rounded-full bg-lime-300"
            >
              <div className="flex h-48 w-48 flex-col items-center justify-center rounded-full bg-black text-center">
                <HiRocketLaunch className="text-5xl text-lime-300" />

                <p className="mt-4 text-xl font-bold text-white">Grow Faster</p>

                <p className="text-sm text-gray-400">With The Right Plan</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default PricingCTA;
