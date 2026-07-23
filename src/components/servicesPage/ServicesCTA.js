import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  HiArrowRight,
  HiSparkles,
  HiChatBubbleLeftRight,
} from "react-icons/hi2";

function ServicesCTA() {
  return (
    <section className="bg-white px-6 py-20 sm:px-8 lg:px-10">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 px-8 py-14 sm:px-12 lg:px-16">
        {/* Background Shapes */}
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-cyan-500 opacity-20 blur-3xl"></div>

        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-purple-600 opacity-20 blur-3xl"></div>

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
            <span className="flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-5 py-2 text-sm font-semibold text-white">
              <HiSparkles className="text-lg" />
              Let's Work Together
            </span>

            <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Ready to transform your idea into reality?
            </h2>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Partner with our team to build modern digital solutions that help
              your business grow and stay ahead.
            </p>

            <Link
              to="/contact"
              className="group mt-8 flex w-fit items-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-7 py-3 text-sm font-semibold text-white transition duration-300 hover:shadow-xl"
            >
              Start Your Project
              <HiArrowRight className="transition duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Right Card */}
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
              className="flex h-64 w-64 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 shadow-2xl sm:h-72 sm:w-72"
            >
              <div className="flex h-44 w-44 items-center justify-center rounded-full bg-slate-950 text-center">
                <div className="flex flex-col items-center">
                  <HiChatBubbleLeftRight className="text-4xl text-cyan-400" />

                  <p className="mt-3 text-4xl font-bold text-white">24/7</p>

                  <p className="text-sm text-slate-300">Support</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ServicesCTA;
