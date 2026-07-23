import { motion } from "framer-motion";

import {
  HiRectangleGroup,
  HiUserGroup,
  HiBolt,
  HiShieldCheck,
  HiPaintBrush,
  HiHeart,
  HiLightBulb,
  HiSparkles,
} from "react-icons/hi2";

const values = [
  {
    icon: HiSparkles,
    title: "Innovation",
    description:
      "We combine creativity and modern technology to build digital solutions that create meaningful business impact.",
  },

  {
    icon: HiUserGroup,
    title: "Collaboration",
    description:
      "We believe in transparent communication and strong partnerships to achieve better results together.",
  },

  {
    icon: HiBolt,
    title: "Performance",
    description:
      "We create fast, scalable and optimized digital products that deliver exceptional user experiences.",
  },

  {
    icon: HiShieldCheck,
    title: "Quality",
    description:
      "We follow professional engineering standards to build secure, reliable and maintainable solutions.",
  },

  {
    icon: HiPaintBrush,
    title: "Creativity",
    description:
      "We transform ideas into unique digital experiences through innovative thinking and smart design.",
  },

  {
    icon: HiHeart,
    title: "Commitment",
    description:
      "We focus on long-term relationships by providing continuous support and real business value.",
  },
];

const cardAnimation = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: {
    opacity: 1,
    y: 0,
  },
};

function Values() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
      {/* Background Glow */}

      <motion.div
        animate={{
          x: [0, 70, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -70, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}

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
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-5 py-2 text-sm font-semibold text-white shadow-lg">
            <HiRectangleGroup className="text-lg" />
            Our Values
          </span>

          <h2 className="mt-8 text-4xl font-black leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
            The Principles
            <span className="block bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Behind Our Success
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
            Our values define how we build products, collaborate with clients
            and create meaningful digital experiences that drive growth.
          </p>
        </motion.div>

        {/* Cards */}

        <motion.div
          variants={{
            hidden: {},

            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
          className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-3"
        >
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <motion.article
                key={value.title}
                variants={cardAnimation}
                whileHover={{
                  y: -10,
                }}
                transition={{
                  duration: 0.4,
                }}
                className="group relative flex h-full overflow-hidden rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition duration-500 hover:border-cyan-300 hover:shadow-2xl"
              >
                {/* Glow */}

                <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

                <div className="relative flex flex-1 flex-col">
                  {/* Icon */}

                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      rotate: 8,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white shadow-lg"
                  >
                    <Icon className="text-3xl" />
                  </motion.div>

                  {/* Content */}

                  <h3 className="mt-7 text-2xl font-bold text-gray-900">
                    {value.title}
                  </h3>

                  <p className="mt-4 flex-1 text-sm leading-8 text-gray-600 sm:text-base">
                    {value.description}
                  </p>

                  {/* Footer */}

                  <div className="mt-8 flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-400">
                      0{index + 1}
                    </span>

                    {/* Hover Line */}

                    <div className="h-1 w-20 overflow-hidden rounded-full bg-gray-100">
                      <div className="h-full w-0 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 transition-all duration-500 group-hover:w-full" />
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Philosophy */}

        <motion.div
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
            duration: 0.8,
          }}
          className="relative mt-20 overflow-hidden rounded-[36px] bg-gray-950 px-7 py-10 sm:px-10 lg:px-14 lg:py-14"
        >
          <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />

          <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />

          <div className="relative grid items-center gap-8 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-5 py-2 text-sm font-semibold text-white shadow-lg">
                <HiLightBulb className="text-lg" />
                Our Philosophy
              </span>

              <h3 className="mt-7 text-3xl font-black leading-tight text-white sm:text-4xl">
                Building Technology
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  With Purpose
                </span>
              </h3>
            </div>

            <p className="text-base leading-8 text-gray-300 sm:text-lg">
              We believe great technology is created by combining innovation,
              quality engineering and strong relationships. Every solution we
              build is focused on helping businesses grow faster and smarter.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Values;
