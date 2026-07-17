import React from "react";
import { motion } from "framer-motion";

import { FaLinkedinIn } from "react-icons/fa6";

import { HiEnvelope } from "react-icons/hi2";

const teamMembers = [
  {
    name: "Muhammad Ali",
    role: "Founder & Full Stack Developer",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Sarah Khan",
    role: "UI/UX Designer",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Ahmed Hassan",
    role: "Frontend Developer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Fatima Noor",
    role: "Backend Developer",
    image:
      "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?auto=format&fit=crop&w=500&q=80",
  },
];

function TeamPreview() {
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
            Our Team
          </span>

          <h2 className="mt-6 text-3xl font-bold text-black sm:text-4xl lg:text-5xl">
            Meet The People Behind Positivus
          </h2>

          <p className="mt-5 max-w-2xl text-base text-gray-600 sm:text-lg">
            A team of passionate designers and developers working together to
            create exceptional digital experiences.
          </p>
        </motion.div>

        {/* Team Cards */}

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
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
                y: -10,
              }}
              className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:shadow-xl"
            >
              {/* Image */}

              <div className="relative h-72 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover transition duration-500 hover:scale-110"
                />

                {/* Social */}

                <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-3 rounded-full bg-white px-4 py-2 opacity-0 transition duration-300 group-hover:opacity-100">
                  <FaLinkedinIn className="text-xl text-black" />

                  <HiEnvelope className="text-xl text-black" />
                </div>
              </div>

              {/* Content */}

              <div className="p-6">
                <h3 className="text-xl font-bold text-black">{member.name}</h3>

                <p className="mt-2 text-sm text-gray-600">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamPreview;
