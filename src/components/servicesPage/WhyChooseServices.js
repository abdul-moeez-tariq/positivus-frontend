import React from "react";
import { motion } from "framer-motion";

import {
  HiBolt,
  HiShieldCheck,
  HiUserGroup,
  HiChartBarSquare,
  HiSparkles,
} from "react-icons/hi2";

const benefits = [
  {
    id: "01",
    title: "Expert Team",
    description:
      "Our skilled developers and designers create reliable digital solutions tailored to your business needs.",
    icon: HiUserGroup,
  },
  {
    id: "02",
    title: "Modern Technology",
    description:
      "We use the latest tools and technologies to build fast, scalable and future-ready products.",
    icon: HiBolt,
  },
  {
    id: "03",
    title: "Secure Solutions",
    description:
      "Security and quality are our priorities to ensure your digital products stay protected.",
    icon: HiShieldCheck,
  },
  {
    id: "04",
    title: "Business Growth",
    description:
      "Our solutions are designed to improve performance, increase engagement and grow revenue.",
    icon: HiChartBarSquare,
  },
];

function WhyChooseServices() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-20 sm:px-8 lg:px-10">
      {/* Background Glow */}
      <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
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
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg">
            <HiSparkles className="text-lg" />
            Why Choose Us
          </span>

          <h2 className="mt-6 text-3xl font-black text-slate-900 sm:text-4xl lg:text-5xl">
            Built Different.
            <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Delivered Better.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            We don't just build websites and applications — we create digital
            solutions that help businesses grow faster.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
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
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:border-cyan-300 hover:shadow-xl sm:p-8"
              >
                {/* Glow */}
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

                {/* Icon */}
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 text-white shadow-lg transition duration-300 group-hover:scale-110">
                  <Icon className="text-3xl" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900 transition duration-300 group-hover:text-cyan-600">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>

                {/* Number */}
                <span className="absolute bottom-5 right-6 text-5xl font-black text-slate-100 transition duration-300 group-hover:text-cyan-100">
                  {item.id}
                </span>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseServices;
