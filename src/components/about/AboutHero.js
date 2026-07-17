import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  HiArrowRight,
  HiSparkles,
  HiCheckCircle,
  HiRocketLaunch,
} from "react-icons/hi2";

function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-20 sm:px-10 lg:px-16">
      {/* Background Glow */}

      <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-[#B9FF66]/30 blur-3xl"></div>

      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-green-400/10 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left Content */}

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
            {/* Badge */}

            <span className="flex w-fit items-center gap-2 rounded-full bg-[#B9FF66] px-5 py-2 text-sm font-semibold text-black">
              <HiSparkles className="text-lg" />
              About Positivus
            </span>

            {/* Heading */}

            <h1 className="mt-7 text-4xl font-bold leading-tight text-black sm:text-5xl lg:text-6xl">
              Building Digital
              <br />
              Experiences That
              <br />
              Inspire Growth
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
              We create modern websites, scalable web applications, and digital
              experiences that help businesses grow faster with innovative
              technology.
            </p>

            {/* Features */}

            <div className="mt-8 grid gap-4">
              <div className="flex items-center gap-3">
                <HiCheckCircle className="text-xl text-[#B9FF66]" />

                <p className="text-gray-700">Premium UI / UX Design</p>
              </div>

              <div className="flex items-center gap-3">
                <HiCheckCircle className="text-xl text-[#B9FF66]" />

                <p className="text-gray-700">Full Stack Development</p>
              </div>

              <div className="flex items-center gap-3">
                <HiCheckCircle className="text-xl text-[#B9FF66]" />

                <p className="text-gray-700">Scalable Digital Solutions</p>
              </div>
            </div>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="group flex items-center gap-3 rounded-full bg-black px-7 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#B9FF66] hover:text-black"
              >
                Start Your Project
                <HiArrowRight className="transition duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                to="/services"
                className="rounded-full border border-black px-7 py-3 text-sm font-semibold text-black transition duration-300 hover:bg-black hover:text-white"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>

          {/* Right Visual */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
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
            className="relative flex justify-center"
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="w-full max-w-md rounded-3xl border border-gray-200 bg-gray-50 p-6 shadow-xl"
            >
              <div className="rounded-3xl bg-white p-6">
                <div className="grid grid-cols-2 gap-5">
                  <div className="rounded-2xl bg-gray-100 p-5 text-center">
                    <h3 className="text-3xl font-bold text-black">150+</h3>

                    <p className="mt-2 text-sm text-gray-600">Projects</p>
                  </div>

                  <div className="rounded-2xl bg-gray-100 p-5 text-center">
                    <h3 className="text-3xl font-bold text-black">40+</h3>

                    <p className="mt-2 text-sm text-gray-600">Clients</p>
                  </div>

                  <div className="rounded-2xl bg-gray-100 p-5 text-center">
                    <h3 className="text-3xl font-bold text-black">8+</h3>

                    <p className="mt-2 text-sm text-gray-600">Countries</p>
                  </div>

                  <div className="rounded-2xl bg-[#B9FF66] p-5 text-center">
                    <h3 className="text-3xl font-bold text-black">98%</h3>

                    <p className="mt-2 text-sm text-black">Satisfaction</p>
                  </div>
                </div>

                <div className="mt-6 rounded-3xl bg-black p-6">
                  <HiRocketLaunch className="text-4xl text-[#B9FF66]" />

                  <h3 className="mt-4 text-2xl font-bold text-white">
                    Building Future Ready Products
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-gray-300">
                    We combine creativity, strategy and modern technology to
                    create powerful digital experiences.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Floating Card */}

            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="absolute -left-8 top-12 hidden rounded-3xl bg-black px-6 py-5 shadow-xl lg:block"
            >
              <p className="text-3xl font-bold text-[#B9FF66]">5+</p>

              <p className="text-sm text-white">Years Experience</p>
            </motion.div>

            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="absolute -right-8 bottom-12 hidden rounded-3xl bg-[#B9FF66] px-6 py-5 shadow-xl lg:block"
            >
              <p className="text-3xl font-bold text-black">A+</p>

              <p className="text-sm text-black">Code Quality</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;
