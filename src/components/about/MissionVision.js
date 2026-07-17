import React from "react";
import { motion } from "framer-motion";

import { HiFlag, HiEye, HiArrowTrendingUp } from "react-icons/hi2";

function MissionVision() {
  return (
    <section className="bg-gray-50 px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="flex flex-col items-center text-center"
        >
          <span className="rounded-full bg-[#B9FF66] px-5 py-2 text-sm font-semibold text-black">
            Mission & Vision
          </span>

          <h2 className="mt-6 text-3xl font-bold text-black sm:text-4xl lg:text-5xl">
            Building Technology With Purpose
          </h2>

          <p className="mt-5 max-w-2xl text-base text-gray-600 sm:text-lg">
            Our mission and vision guide everything we create, helping us
            deliver meaningful digital solutions.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {/* Mission */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
            }}
            className="rounded-3xl bg-black p-8"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#B9FF66]">
              <HiFlag className="text-3xl text-black" />
            </div>

            <h3 className="mt-6 text-2xl font-bold text-white">Our Mission</h3>

            <p className="mt-4 leading-relaxed text-gray-300">
              To empower businesses with innovative digital solutions that
              improve efficiency, growth and customer experiences.
            </p>
          </motion.div>

          {/* Vision */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
            className="rounded-3xl border border-gray-200 bg-white p-8"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#B9FF66]">
              <HiEye className="text-3xl text-black" />
            </div>

            <h3 className="mt-6 text-2xl font-bold text-black">Our Vision</h3>

            <p className="mt-4 leading-relaxed text-gray-600">
              To become a trusted technology partner that helps businesses
              create impactful digital experiences worldwide.
            </p>
          </motion.div>

          {/* Growth */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
            className="rounded-3xl bg-[#B9FF66] p-8"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black">
              <HiArrowTrendingUp className="text-3xl text-[#B9FF66]" />
            </div>

            <h3 className="mt-6 text-2xl font-bold text-black">Our Growth</h3>

            <p className="mt-4 leading-relaxed text-black">
              Continuously improving our skills, technologies and processes to
              deliver better results for every project.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default MissionVision;
