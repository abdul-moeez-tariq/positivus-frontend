import { motion } from "framer-motion";

import {
  HiTrophy,
  HiUsers,
  HiGlobeAlt,
  HiStar,
  HiRocketLaunch,
} from "react-icons/hi2";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const achievements = [
  {
    icon: HiTrophy,
    number: "250+",
    title: "Projects Delivered",
    description:
      "Successfully delivered scalable digital products for startups and businesses.",
  },

  {
    icon: HiUsers,
    number: "120+",
    title: "Happy Clients",
    description:
      "Trusted by businesses through reliable solutions and long-term partnerships.",
  },

  {
    icon: HiGlobeAlt,
    number: "15+",
    title: "Countries Served",
    description:
      "Helping global businesses build modern digital experiences worldwide.",
  },

  {
    icon: HiStar,
    number: "99%",
    title: "Client Satisfaction",
    description:
      "Focused on quality, performance and exceptional user experience.",
  },
];

const journey = [
  {
    year: "2021",
    title: "The Beginning",
    description:
      "IN2NEXT started with a vision to help businesses grow through modern technology solutions.",
  },

  {
    year: "2022",
    title: "Expanding Capabilities",
    description:
      "Expanded expertise into full-stack development, UI/UX design and cloud-based solutions.",
  },

  {
    year: "2024",
    title: "Global Growth",
    description:
      "Delivered advanced digital products for clients across different industries worldwide.",
  },

  {
    year: "Today",
    title: "Innovation First",
    description:
      "Creating AI-powered, scalable and future-ready digital products.",
  },
];

function Achievements() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-10 sm:px-6">
      {/* Background Grid */}

      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

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
        className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl"
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
        className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-5 py-2 text-sm font-semibold text-white shadow-lg">
            <HiTrophy className="text-lg" />
            Our Achievements
          </span>

          <h2 className="mt-8 text-4xl font-black leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Milestones That
            <span className="block bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Define Our Success
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
            Our achievements represent years of dedication, innovation and
            commitment towards building reliable digital solutions for our
            clients.
          </p>
        </motion.div>

        {/* Achievement Cards */}

        <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {achievements.map((item, index) => {
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
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
                className="
          group relative flex h-full flex-col
          overflow-hidden rounded-3xl
          border border-gray-200
          bg-white p-7
          shadow-sm transition duration-500
          hover:border-cyan-300
          hover:shadow-xl
        "
              >
                {/* Hover Glow */}

                <div
                  className="
            absolute -right-20 -top-20
            h-40 w-40 rounded-full
            bg-cyan-400/20
            opacity-0 blur-3xl
            transition duration-500
            group-hover:opacity-100
          "
                />

                <div className="relative flex flex-1 flex-col">
                  {/* Icon */}

                  <div
                    className="
              flex h-16 w-16
              items-center justify-center
              rounded-2xl
              bg-gradient-to-r
              from-cyan-500 via-blue-600 to-purple-600
              text-white shadow-lg
            "
                  >
                    <Icon className="text-3xl" />
                  </div>

                  {/* Number */}

                  <h3
                    className="
              mt-7
              bg-gradient-to-r
              from-cyan-500 via-blue-600 to-purple-600
              bg-clip-text
              text-4xl font-black
              text-transparent
            "
                  >
                    {item.number}
                  </h3>

                  {/* Title */}

                  <h4 className="mt-3 text-xl font-bold text-gray-900">
                    {item.title}
                  </h4>

                  {/* Description */}

                  <p className="mt-4 text-sm leading-7 text-gray-600">
                    {item.description}
                  </p>

                  {/* Hover Line */}

                  <div className="mt-auto pt-8">
                    <div
                      className="
                h-1
                w-0
                rounded-full
                bg-gradient-to-r
                from-cyan-500 via-blue-600 to-purple-600
                transition-all
                duration-500
                group-hover:w-full
              "
                    />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Journey Section */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
          className="mt-28"
        >
          {/* Journey Header */}

          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-5 py-2 text-sm font-semibold text-white shadow-lg">
              <HiRocketLaunch className="text-lg" />
              Our Journey
            </span>

            <h3 className="mt-8 text-4xl font-black leading-tight text-gray-900 sm:text-5xl">
              Growing Through
              <span className="block bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Innovation & Experience
              </span>
            </h3>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
              Every milestone represents our dedication towards innovation,
              technology and creating impactful digital solutions.
            </p>
          </div>

          {/* Timeline Wrapper */}

          <div className="relative mx-auto mt-20 max-w-5xl">
            {/* Timeline Line */}

            <div className="absolute left-6 top-0 hidden h-full w-1 overflow-hidden rounded-full bg-gray-100 sm:block">
              <div className="h-full w-full bg-gradient-to-b from-cyan-500 via-blue-600 to-purple-600" />
            </div>

            <div className="flex flex-col gap-10">
              {journey.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{
                    opacity: 0,
                    x: 50,
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
                    delay: index * 0.15,
                  }}
                  className="relative sm:pl-20"
                >
                  {/* Timeline Point */}

                  <div className="absolute left-0 top-10 hidden h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 shadow-xl sm:flex">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white">
                      <div className="h-3 w-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600" />
                    </div>
                  </div>

                  {/* Card */}

                  <article
                    className="
            group
            relative
            overflow-hidden
            rounded-[32px]
            border
            border-gray-200
            bg-white
            p-7
            shadow-sm
            transition
            duration-500
            hover:-translate-y-2
            hover:border-cyan-300
            hover:shadow-2xl
            sm:p-8
            "
                  >
                    {/* Card Glow */}

                    <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-400/20 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

                    <div className="relative">
                      {/* Header */}

                      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <span className="text-sm font-bold uppercase tracking-widest text-cyan-600">
                            Milestone {index + 1}
                          </span>

                          <h4 className="mt-2 text-2xl font-black text-gray-900">
                            {item.title}
                          </h4>
                        </div>

                        {/* Year */}

                        <div className="flex h-14 w-fit items-center rounded-2xl bg-gradient-to-r from-cyan-50 via-blue-50 to-purple-50 px-6">
                          <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-xl font-black text-transparent">
                            {item.year}
                          </span>
                        </div>
                      </div>

                      {/* Description */}

                      <p className="mt-6 max-w-3xl text-sm leading-8 text-gray-600 sm:text-base">
                        {item.description}
                      </p>

                      {/* Animated Bottom Line */}

                      <div className="mt-8 h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
                        <div
                          className="
                  h-full
                  w-16
                  rounded-full
                  bg-gradient-to-r
                  from-cyan-500
                  via-blue-600
                  to-purple-600
                  transition-all
                  duration-700
                  group-hover:w-full
                  "
                        />
                      </div>
                    </div>
                  </article>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Achievements;
