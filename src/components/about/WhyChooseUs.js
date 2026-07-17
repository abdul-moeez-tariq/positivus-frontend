import React from "react";
import { motion } from "framer-motion";

import {
  HiOutlineBolt,
  HiOutlineShieldCheck,
  HiOutlineCodeBracket,
  HiOutlineCpuChip,
  HiOutlineUsers,
  HiOutlineChartBar,
  HiArrowRight,
} from "react-icons/hi2";

const features = [
  {
    icon: HiOutlineBolt,
    title: "Fast Performance",
    description:
      "We create lightning-fast websites and applications optimized for speed, SEO and user experience.",
  },
  {
    icon: HiOutlineShieldCheck,
    title: "Secure Solutions",
    description:
      "Security-focused development with modern practices and reliable architecture.",
  },
  {
    icon: HiOutlineCodeBracket,
    title: "Clean Code",
    description:
      "Maintainable and scalable code following professional development standards.",
  },
  {
    icon: HiOutlineCpuChip,
    title: "Modern Technology",
    description:
      "Using React, Next.js, Node.js, React Native, Firebase and modern tools.",
  },
  {
    icon: HiOutlineUsers,
    title: "Dedicated Team",
    description:
      "Experienced designers and developers focused on creating quality products.",
  },
  {
    icon: HiOutlineChartBar,
    title: "Business Growth",
    description:
      "Digital solutions designed to improve conversions and business growth.",
  },
];

const stats = [
  {
    number: "150+",
    title: "Projects",
  },
  {
    number: "40+",
    title: "Happy Clients",
    highlight: true,
  },
  {
    number: "8+",
    title: "Countries",
    highlight: true,
  },
  {
    number: "98%",
    title: "Satisfaction",
  },
];

function WhyChooseUs() {
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
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full bg-[#B9FF66] px-5 py-2 text-sm font-semibold text-black">
            Why Choose Us
          </span>

          <h2 className="mt-6 text-3xl font-bold text-black sm:text-4xl lg:text-5xl">
            We Build More Than
            <br />
            Just Software
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-gray-600">
            We create digital products that combine creativity, technology and
            business strategy.
          </p>
        </motion.div>

        {/* Features */}

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
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
                className="group rounded-3xl border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#B9FF66]">
                  <Icon className="text-3xl text-black" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-black">
                  {item.title}
                </h3>

                <p className="mt-4 leading-relaxed text-gray-600">
                  {item.description}
                </p>

                <div className="mt-6 flex items-center gap-3 text-sm font-semibold text-black">
                  Learn More
                  <HiArrowRight className="transition duration-300 group-hover:translate-x-2" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}

        <div className="mt-20 rounded-3xl bg-black p-8 sm:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="rounded-full bg-[#B9FF66] px-5 py-2 text-sm font-semibold text-black">
                Our Commitment
              </span>

              <h3 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
                Your Success Is Our Achievement
              </h3>

              <p className="mt-5 leading-relaxed text-gray-300">
                We focus on creating reliable, scalable and high-quality digital
                solutions that help businesses grow faster.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-5">
              {stats.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -6,
                  }}
                  className={`rounded-3xl p-6 text-center ${
                    item.highlight ? "bg-[#B9FF66]" : "bg-white"
                  }`}
                >
                  <h4 className="text-4xl font-bold text-black">
                    {item.number}
                  </h4>

                  <p className="mt-2 text-sm text-gray-600">{item.title}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
