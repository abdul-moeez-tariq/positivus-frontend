import { motion } from "framer-motion";

import { HiFlag, HiEye, HiArrowTrendingUp, HiSparkles } from "react-icons/hi2";

const missionItems = [
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
    <section className="relative overflow-hidden bg-slate-950 px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
      {/* Background Grid */}

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Glow */}

      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl" />

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
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-5 py-2 text-sm font-semibold text-white backdrop-blur-xl">
            <HiFlag />
            Mission • Vision • Growth
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            Building The Future
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              With Purpose
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Our purpose is simple — create technology that solves real problems,
            empowers businesses and delivers meaningful digital experiences.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-16 grid gap-7 md:grid-cols-3">
          {missionItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
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
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition duration-500 hover:border-cyan-400/40 hover:bg-white/10"
              >
                {/* Card Glow */}

                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 blur-3xl transition duration-500 group-hover:scale-125" />

                {/* Icon */}

                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white shadow-xl">
                  <Icon className="text-3xl" />
                </div>

                {/* Content */}

                <h3 className="mt-7 text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
                  {item.description}
                </p>

                {/* Accent */}

                <div className="mt-7 flex items-center gap-3">
                  <span className="h-1 w-12 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500" />

                  <span className="text-sm font-semibold text-slate-400">
                    IN2NEXT Solutions
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom CTA */}

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
          className="mx-auto mt-16 max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-7 text-center backdrop-blur-xl sm:p-10"
        >
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white">
            <HiSparkles className="text-2xl" />
          </div>

          <h3 className="mt-6 text-2xl font-bold text-white sm:text-3xl">
            Technology With A Meaningful Impact
          </h3>

          <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
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
