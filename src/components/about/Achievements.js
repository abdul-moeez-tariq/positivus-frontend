import React from "react";
import { motion } from "framer-motion";

import {
  HiOutlineTrophy,
  HiOutlineUsers,
  HiOutlineBriefcase,
  HiOutlineGlobeAlt,
  HiOutlineStar,
} from "react-icons/hi2";

const achievements = [
  {
    icon: HiOutlineBriefcase,
    number: "150+",
    title: "Projects Completed",
  },
  {
    icon: HiOutlineUsers,
    number: "40+",
    title: "Happy Clients",
  },
  {
    icon: HiOutlineGlobeAlt,
    number: "8+",
    title: "Countries Served",
  },
  {
    icon: HiOutlineStar,
    number: "98%",
    title: "Client Satisfaction",
    highlight: true,
  },
];

const journey = [
  {
    year: "2021",
    title: "Company Founded",
    description:
      "Started our journey with a vision to build modern websites and digital experiences.",
  },
  {
    year: "2022",
    title: "50+ Successful Projects",
    description:
      "Expanded our services by delivering scalable and high-performance solutions.",
  },
  {
    year: "2023",
    title: "International Expansion",
    description:
      "Started working with businesses across different industries worldwide.",
  },
  {
    year: "Today",
    title: "Trusted Digital Partner",
    description:
      "Helping startups and enterprises build premium digital products.",
  },
];

function Achievements() {
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
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full bg-[#B9FF66] px-5 py-2 text-sm font-semibold text-black">
            Our Achievements
          </span>

          <h2 className="mt-6 text-3xl font-bold text-black sm:text-4xl lg:text-5xl">
            Milestones That
            <br />
            Define Our Journey
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-gray-600">
            Every achievement represents our commitment to innovation, quality
            and creating impactful digital experiences.
          </p>
        </motion.div>

        {/* Stats Cards */}

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((item, index) => {
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
                className={`rounded-3xl p-8 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl ${
                  item.highlight ? "bg-[#B9FF66]" : "bg-white"
                }`}
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-black">
                  <Icon className="text-3xl text-[#B9FF66]" />
                </div>

                <h3 className="mt-6 text-4xl font-bold text-black">
                  {item.number}
                </h3>

                <p className="mt-3 text-gray-600">{item.title}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Journey */}

        <div className="mt-20 grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="rounded-full bg-[#B9FF66] px-5 py-2 text-sm font-semibold text-black">
              Our Journey
            </span>

            <h3 className="mt-6 text-3xl font-bold text-black sm:text-4xl">
              Every Achievement Started With A Step
            </h3>

            <p className="mt-5 text-lg leading-relaxed text-gray-600">
              From our first project to becoming a trusted technology partner,
              every milestone helped us improve and grow.
            </p>
          </div>

          <div className="border-l-2 border-[#B9FF66] pl-8">
            {journey.map((item) => (
              <div key={item.year} className="relative pb-10 last:pb-0">
                <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-[#B9FF66]"></div>

                <span className="text-sm font-semibold uppercase tracking-widest text-green-600">
                  {item.year}
                </span>

                <h4 className="mt-3 text-xl font-bold text-black">
                  {item.title}
                </h4>

                <p className="mt-3 leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Banner */}

        <div className="mt-20 rounded-3xl bg-black p-8 sm:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#B9FF66]">
                <HiOutlineTrophy className="text-3xl text-black" />
              </div>

              <h3 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
                Award Winning Digital Agency
              </h3>

              <p className="mt-4 max-w-3xl text-gray-300">
                Our success comes from innovation, teamwork and delivering
                exceptional digital solutions for every client.
              </p>
            </div>

            <div className="rounded-3xl bg-[#B9FF66] px-10 py-8 text-center">
              <h4 className="text-5xl font-bold text-black">5★</h4>

              <p className="mt-3 font-medium text-black">Client Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achievements;
