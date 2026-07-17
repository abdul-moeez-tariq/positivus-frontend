import React from "react";
import { motion } from "framer-motion";

import { HiEnvelope, HiArrowRight } from "react-icons/hi2";

function NewsletterSection() {
  return (
    <section className="px-6 py-20 sm:px-10 lg:px-16">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-black px-8 py-14 sm:px-12 lg:px-16">
        {/* Background Effects */}
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-lime-300 opacity-20 blur-3xl"></div>

        <div className="absolute bottom-0 left-0 h-60 w-60 rounded-full bg-green-500 opacity-20 blur-3xl"></div>

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
              Newsletter
            </span>

            <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Get the latest insights delivered to your inbox
            </h2>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg">
              Subscribe to receive expert tips, industry trends and digital
              growth strategies.
            </p>

            {/* Input */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <div className="flex flex-1 items-center gap-3 rounded-full bg-white px-5 py-3">
                <HiEnvelope className="text-xl text-black" />

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent text-sm text-black outline-none placeholder:text-gray-500"
                />
              </div>

              <button className="group flex items-center justify-center gap-3 rounded-full bg-lime-300 px-7 py-3 text-sm font-semibold text-black transition duration-300 hover:bg-white">
                Subscribe
                <HiArrowRight className="transition duration-300 group-hover:translate-x-1" />
              </button>
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
              className="flex h-64 w-64 items-center justify-center rounded-full bg-lime-300"
            >
              <div className="flex h-44 w-44 flex-col items-center justify-center rounded-full bg-black text-center">
                <HiEnvelope className="text-5xl text-lime-300" />

                <p className="mt-4 text-xl font-bold text-white">
                  Stay Updated
                </p>

                <p className="text-sm text-gray-400">Latest News</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default NewsletterSection;
