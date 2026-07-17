import React from "react";
import { motion } from "framer-motion";

import {
  HiSparkles,
  HiUserGroup,
  HiBolt,
  HiShieldCheck,
  HiLightBulb,
  HiHeart,
} from "react-icons/hi2";

const values = [
  {
    icon: HiSparkles,
    title: "Innovation",
    description:
      "We use modern technologies and creative thinking to build solutions that make a real impact.",
  },
  {
    icon: HiUserGroup,
    title: "Collaboration",
    description:
      "We work closely with clients to understand goals and create solutions together.",
  },
  {
    icon: HiBolt,
    title: "Performance",
    description:
      "We focus on creating fast, scalable and high-performing digital products.",
  },
  {
    icon: HiShieldCheck,
    title: "Quality",
    description:
      "We follow best practices to deliver reliable and maintainable solutions.",
  },
  {
    icon: HiLightBulb,
    title: "Creativity",
    description:
      "We transform ideas into unique digital experiences through creative approaches.",
  },
  {
    icon: HiHeart,
    title: "Commitment",
    description:
      "We build long-term relationships by providing continuous support and value.",
  },
];

function Values() {
  return (
    <section className="bg-white px-6 py-20 sm:px-10 lg:px-16">
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
            Our Values
          </span>

          <h2 className="mt-6 text-3xl font-bold text-black sm:text-4xl lg:text-5xl">
            What Drives Us Forward
          </h2>

          <p className="mt-5 max-w-2xl text-base text-gray-600 sm:text-lg">
            Our values define how we work, how we build products and how we
            create meaningful partnerships.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <motion.div
                key={value.title}
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
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
                className="rounded-3xl border border-gray-200 bg-gray-50 p-7 transition duration-300 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#B9FF66]">
                  <Icon className="text-3xl text-black" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-black">
                  {value.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Values;
