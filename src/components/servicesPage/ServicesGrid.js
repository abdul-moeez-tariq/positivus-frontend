import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  HiCodeBracket,
  HiDevicePhoneMobile,
  HiPaintBrush,
  HiMegaphone,
  HiCloud,
  HiChartBar,
  HiArrowRight,
  HiCpuChip,
} from "react-icons/hi2";

const services = [
  {
    id: "01",
    title: "Web Development",
    description:
      "Building fast, scalable and modern websites using cutting-edge technologies and industry best practices.",
    icon: HiCodeBracket,
  },
  {
    id: "02",
    title: "Mobile App Development",
    description:
      "Creating powerful Android and iOS applications with smooth experiences and reliable performance.",
    icon: HiDevicePhoneMobile,
  },
  {
    id: "03",
    title: "UI/UX Design",
    description:
      "Designing intuitive and conversion-focused interfaces that deliver exceptional user experiences.",
    icon: HiPaintBrush,
  },
  {
    id: "04",
    title: "Digital Marketing",
    description:
      "Strategic marketing solutions that increase visibility, traffic and business growth.",
    icon: HiMegaphone,
  },
  {
    id: "05",
    title: "Cloud Solutions",
    description:
      "Secure and scalable cloud infrastructure designed for modern business requirements.",
    icon: HiCloud,
  },
  {
    id: "06",
    title: "Business Analytics",
    description:
      "Turning complex data into actionable insights for smarter business decisions.",
    icon: HiChartBar,
  },
];

function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <motion.article
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.3,
      }}
      className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:border-cyan-300 hover:shadow-xl sm:p-8"
    >
      {/* Hover Glow */}
      <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

      {/* Number */}
      <span className="absolute right-6 top-6 text-5xl font-black text-slate-100 transition duration-300 group-hover:text-cyan-100">
        {service.id}
      </span>

      {/* Icon */}
      <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 text-white shadow-lg transition duration-300 group-hover:scale-110">
        <Icon className="text-3xl" />
      </div>

      {/* Content */}
      <h3 className="relative mt-6 text-xl font-bold text-slate-900 transition duration-300 group-hover:text-cyan-600 sm:text-2xl">
        {service.title}
      </h3>

      <p className="relative mt-4 text-sm leading-7 text-slate-600 sm:text-base">
        {service.description}
      </p>

      {/* Footer */}
      <div className="relative mt-8 flex items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-widest text-cyan-600">
          Service
        </span>

        <span className="text-sm font-semibold text-slate-400">
          {service.id}
        </span>
      </div>

      {/* Inside Line */}
      <div className="relative mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 transition-all duration-500 group-hover:w-full" />
    </motion.article>
  );
}

function ServicesGrid() {
  return (
    <section className="relative overflow-hidden bg-slate-50 px-6 py-20 sm:px-8 lg:px-10">
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
            <HiCpuChip className="text-lg" />
            Our Expertise
          </span>

          <h2 className="mt-6 text-3xl font-black text-slate-900 sm:text-4xl lg:text-5xl">
            End-to-End Digital
            <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Solutions
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            From concept to launch and beyond, we create premium digital
            products that help businesses grow faster.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
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
                delay: index * 0.08,
              }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
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
            duration: 0.5,
          }}
          className="mt-14 flex justify-center"
        >
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:px-10 sm:py-5 sm:text-lg"
          >
            Discuss Your Project
            <HiArrowRight className="transition duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default ServicesGrid;
