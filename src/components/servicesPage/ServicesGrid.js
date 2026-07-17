import React from "react";
import { motion } from "framer-motion";

import ServiceCard from "./ServiceCard";

import {
  HiCodeBracket,
  HiDevicePhoneMobile,
  HiPaintBrush,
  HiMegaphone,
  HiCloud,
  HiChartBar,
} from "react-icons/hi2";

const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Building fast, scalable and modern websites using the latest technologies and industry standards.",
    icon: HiCodeBracket,
  },
  {
    id: 2,
    title: "Mobile App Development",
    description:
      "Creating powerful Android and iOS applications with smooth user experiences.",
    icon: HiDevicePhoneMobile,
  },
  {
    id: 3,
    title: "UI/UX Design",
    description:
      "Designing beautiful interfaces that improve usability and customer engagement.",
    icon: HiPaintBrush,
  },
  {
    id: 4,
    title: "Digital Marketing",
    description:
      "Helping businesses grow through effective marketing strategies and campaigns.",
    icon: HiMegaphone,
  },
  {
    id: 5,
    title: "Cloud Solutions",
    description:
      "Providing secure and reliable cloud infrastructure for modern businesses.",
    icon: HiCloud,
  },
  {
    id: 6,
    title: "Business Analytics",
    description:
      "Transforming business data into valuable insights for better decisions.",
    icon: HiChartBar,
  },
];

function ServicesGrid() {
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
          <span className="rounded-full bg-lime-300 px-5 py-2 text-sm font-medium text-black">
            What We Offer
          </span>

          <h2 className="mt-6 max-w-3xl text-3xl font-bold text-black sm:text-4xl lg:text-5xl">
            Complete digital services for your business growth
          </h2>

          <p className="mt-6 max-w-2xl text-base text-gray-600 sm:text-lg">
            From designing experiences to building powerful applications, we
            provide everything you need to succeed in the digital world.
          </p>
        </motion.div>

        {/* Services Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                delay: index * 0.1,
              }}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesGrid;
