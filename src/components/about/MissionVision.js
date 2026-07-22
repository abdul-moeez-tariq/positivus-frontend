import { motion } from "framer-motion";

import { HiSparkles, HiFlag, HiEye, HiArrowTrendingUp } from "react-icons/hi2";

const items = [
  {
    title: "Our Mission",
    description:
      "We help businesses transform ideas into powerful digital solutions through modern technology, intelligent systems and scalable software products.",
    icon: HiFlag,
  },

  {
    title: "Our Vision",
    description:
      "We aim to become a trusted technology partner by creating innovative, secure and future-ready digital experiences for businesses worldwide.",
    icon: HiEye,
  },

  {
    title: "Continuous Growth",
    description:
      "We continuously improve our skills, adopt emerging technologies and build solutions that create long-term value for our clients.",
    icon: HiArrowTrendingUp,
  },
];

function MissionVision() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
      {/* Background Glow */}

      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}

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
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold text-white backdrop-blur-md">
            <HiSparkles className="text-lg text-cyan-400" />
            Mission • Vision • Growth
          </span>

          <h2 className="mt-8 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            Building The Future
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              With Purpose
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-400 sm:text-lg">
            Our purpose is simple — create technology that solves real problems,
            empowers businesses and delivers meaningful digital experiences.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
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
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -12,
                }}
                className={`relative overflow-hidden rounded-[32px] border p-8 backdrop-blur-xl transition duration-500 ${
                  index === 1
                    ? "border-cyan-400/40 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 shadow-2xl shadow-blue-500/20"
                    : "border-white/10 bg-white/5 hover:border-white/20"
                }`}
              >
                {/* Glow */}

                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-400/20 blur-3xl" />

                {/* Icon */}

                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white shadow-xl">
                  <Icon className="text-3xl" />
                </div>

                {/* Title */}

                <h3 className="mt-8 text-2xl font-bold text-white">
                  {item.title}
                </h3>

                {/* Description */}

                <p className="mt-5 text-sm leading-8 text-gray-300 sm:text-base">
                  {item.description}
                </p>

                {/* Bottom Accent */}

                <div className="mt-8 flex items-center gap-3">
                  <span className="h-1 w-10 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500" />

                  <span className="text-sm font-semibold text-gray-400">
                    IN2NEXT Solutions
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom Statement */}

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
            duration: 0.7,
          }}
          className="mx-auto mt-16 max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl sm:p-10"
        >
          <h3 className="text-2xl font-bold text-white sm:text-3xl">
            Technology With A Meaningful Impact
          </h3>

          <p className="mt-4 text-sm leading-8 text-gray-400 sm:text-base">
            We believe successful digital products are not only built with code,
            but with innovation, strategy and a deep understanding of people and
            businesses.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default MissionVision;
