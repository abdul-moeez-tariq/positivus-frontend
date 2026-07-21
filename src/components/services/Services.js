import { motion } from "framer-motion";

import ServiceCard from "./ServiceCard";
import servicesData from "./servicesData";

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white py-16 lg:py-24"
    >
      {/* Background Animation */}

      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section Heading */}

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
            duration: 0.7,
          }}
          className="flex flex-col gap-5 lg:flex-row lg:items-center"
        >
          <span className="w-fit rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-6 py-3 text-2xl font-bold text-white">
            Services
          </span>

          <p className="max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
            We provide innovative digital solutions including web development,
            backend systems, API integrations, and scalable technologies that
            help businesses grow faster.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{
                opacity: 0,
                y: 50,
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
                delay: index * 0.1,
              }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
