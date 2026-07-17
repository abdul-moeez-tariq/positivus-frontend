import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { HiArrowRight, HiRocketLaunch, HiSparkles } from "react-icons/hi2";

function AboutCTA() {
  return (
    <section className="bg-white px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl bg-black px-8 py-14 sm:px-12 lg:px-16">
          {/* Background Glow */}

          <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#B9FF66]/20 blur-3xl"></div>

          <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-green-500/10 blur-3xl"></div>

          <div className="relative grid items-center gap-12 lg:grid-cols-2">
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
              <span className="flex w-fit items-center gap-2 rounded-full bg-[#B9FF66] px-5 py-2 text-sm font-semibold text-black">
                <HiSparkles className="text-lg" />
                Let's Work Together
              </span>

              <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Ready To Build Your Next Digital Product?
              </h2>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg">
                Partner with our team to create modern, scalable and
                high-performing digital experiences that help your business
                grow.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="group flex items-center gap-3 rounded-full bg-[#B9FF66] px-7 py-3 text-sm font-semibold text-black transition duration-300 hover:bg-white"
                >
                  Start Your Project
                  <HiArrowRight className="transition duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  to="/services"
                  className="rounded-full border border-white px-7 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-white hover:text-black"
                >
                  Explore Services
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
                className="flex h-72 w-72 items-center justify-center rounded-full bg-[#B9FF66]"
              >
                <div className="flex h-52 w-52 flex-col items-center justify-center rounded-full bg-black text-center">
                  <HiRocketLaunch className="text-5xl text-[#B9FF66]" />

                  <h3 className="mt-4 text-2xl font-bold text-white">
                    Grow Faster
                  </h3>

                  <p className="mt-2 text-sm text-gray-400">
                    With Digital Solutions
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutCTA;
