import React from "react";
import { motion } from "framer-motion";

import { HiLightBulb, HiRocketLaunch, HiChartBar } from "react-icons/hi2";

function CompanyStory() {
  return (
    <section className="bg-white px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
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
            <span className="w-fit rounded-full bg-[#B9FF66] px-5 py-2 text-sm font-semibold text-black">
              Our Story
            </span>

            <h2 className="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Turning Ideas Into Powerful Digital Solutions
            </h2>

            <p className="mt-6 text-base leading-relaxed text-gray-600 sm:text-lg">
              Positivus started with a simple vision: helping businesses use
              technology to create meaningful digital experiences.
            </p>

            <p className="mt-5 text-base leading-relaxed text-gray-600 sm:text-lg">
              Over the years, we have worked with startups, growing companies
              and enterprises to build websites, applications and digital
              products that solve real business challenges.
            </p>

            <p className="mt-5 text-base leading-relaxed text-gray-600 sm:text-lg">
              Our team combines creativity, development expertise and strategic
              thinking to deliver solutions that create long-term value.
            </p>
          </motion.div>

          {/* Right Content */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
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
            className="grid gap-5"
          >
            {/* Card 1 */}

            <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6 transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#B9FF66]">
                  <HiLightBulb className="text-3xl text-black" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-black">
                    Our Beginning
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    Started with a passion for creating better digital
                    experiences.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}

            <div className="rounded-3xl border border-gray-200 bg-black p-6">
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#B9FF66]">
                  <HiRocketLaunch className="text-3xl text-black" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">Our Mission</h3>

                  <p className="mt-3 text-sm leading-relaxed text-gray-300">
                    Helping businesses grow through innovative technology
                    solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}

            <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6 transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#B9FF66]">
                  <HiChartBar className="text-3xl text-black" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-black">Our Growth</h3>

                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    Delivering scalable solutions for businesses worldwide.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default CompanyStory;
