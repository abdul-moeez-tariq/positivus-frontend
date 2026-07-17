import React from "react";
import { motion } from "framer-motion";

import {
  HiBolt,
  HiShieldCheck,
  HiUserGroup,
  HiChartBarSquare,
} from "react-icons/hi2";

const benefits = [
  {
    id: 1,
    title: "Expert Team",
    description:
      "Our skilled developers and designers create reliable digital solutions tailored to your business needs.",
    icon: HiUserGroup,
  },
  {
    id: 2,
    title: "Modern Technology",
    description:
      "We use the latest tools and technologies to build fast, scalable and future-ready products.",
    icon: HiBolt,
  },
  {
    id: 3,
    title: "Secure Solutions",
    description:
      "Security and quality are our priorities to ensure your digital products stay protected.",
    icon: HiShieldCheck,
  },
  {
    id: 4,
    title: "Business Growth",
    description:
      "Our solutions are designed to improve performance, increase engagement and grow revenue.",
    icon: HiChartBarSquare,
  },
];

function WhyChooseServices() {
  return (
    <section className="bg-black px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
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
          <span className="rounded-full bg-lime-300 px-5 py-2 text-sm font-medium text-black">
            Why Choose Us
          </span>

          <h2 className="mt-6 max-w-3xl text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            We build solutions that create real business impact
          </h2>

          <p className="mt-6 max-w-2xl text-base text-gray-300 sm:text-lg">
            Combining creativity, technology and strategy to deliver digital
            experiences that help your business move forward.
          </p>
        </motion.div>

        {/* Benefits */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
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
                className="group rounded-3xl border border-gray-800 bg-zinc-900 p-6 transition duration-300 hover:border-lime-300"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-300 text-black transition duration-300 group-hover:scale-110">
                  <Icon className="text-3xl" />
                </div>

                <h3 className="mt-8 text-xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-gray-400">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseServices;
