import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  HiSparkles,
  HiBolt,
  HiShieldCheck,
  HiCodeBracket,
  HiCpuChip,
  HiUserGroup,
  HiChartBar,
  HiArrowRight,
} from "react-icons/hi2";

const features = [
  {
    icon: HiBolt,
    title: "Lightning Fast Performance",
    description:
      "We build high-performance websites and applications optimized for speed, SEO and smooth user experience.",
  },
  {
    icon: HiShieldCheck,
    title: "Enterprise Security",
    description:
      "Secure architecture with modern authentication, data protection and reliable development practices.",
  },
  {
    icon: HiCodeBracket,
    title: "Clean Scalable Code",
    description:
      "Maintainable and scalable code structures built with modern development standards.",
  },
  {
    icon: HiCpuChip,
    title: "Advanced Technologies",
    description:
      "Using React, Next.js, Node.js, React Native, AI and cloud technologies to build future-ready solutions.",
  },
  {
    icon: HiUserGroup,
    title: "Experienced Team",
    description:
      "A skilled team of designers and developers creating impactful digital products for businesses.",
  },
  {
    icon: HiChartBar,
    title: "Business Growth",
    description:
      "Digital solutions focused on improving customer experience, conversions and long-term growth.",
  },
];

const stats = [
  {
    number: "150+",
    title: "Projects Delivered",
  },
  {
    number: "40+",
    title: "Happy Clients",
  },
  {
    number: "8+",
    title: "Countries Served",
  },
  {
    number: "98%",
    title: "Success Rate",
  },
];

function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
      {/* Background */}

      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl" />

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
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-5 py-2 text-sm font-semibold text-white shadow-lg">
            <HiSparkles className="text-lg" />
            Why Choose IN2NEXT
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Technology That
            <span className="block bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Creates Real Impact
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
            We combine innovation, strategy and modern technologies to create
            secure, scalable and high-performance digital solutions.
          </p>
        </motion.div>

        {/* Feature Cards */}

        <div className="mt-16 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {features.map((item, index) => {
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
                  delay: index * 0.08,
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
          hover:shadow-2xl
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

                  {/* Title */}

                  <h3 className="mt-7 text-2xl font-bold text-gray-900">
                    {item.title}
                  </h3>

                  {/* Description */}

                  <p
                    className="
              mt-4 flex-1
              text-sm leading-7
              text-gray-600
              sm:text-base
            "
                  >
                    {item.description}
                  </p>

                  {/* Button */}

                  <Link
                    to="/services"
                    className="
              group/button mt-7
              inline-flex w-fit
              items-center gap-3
              rounded-full
              bg-gradient-to-r
              from-cyan-500 via-blue-600 to-purple-600
              px-6 py-3
              text-sm font-semibold
              text-white
              shadow-lg
              transition duration-300
              hover:-translate-y-1
              hover:shadow-xl
            "
                  >
                    Explore Services
                    <span
                      className="
                flex h-7 w-7
                items-center justify-center
                rounded-full
                bg-white/20
                transition duration-300
                group-hover/button:translate-x-1
              "
                    >
                      <HiArrowRight className="text-sm" />
                    </span>
                  </Link>

                  {/* Hover Accent Line */}

                  <div className="mt-8">
                    <div
                      className="
                h-1
                w-0
                rounded-full
                bg-gradient-to-r
                from-cyan-500 via-blue-600 to-purple-600
                transition-all duration-500
                group-hover:w-full
              "
                    />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Stats Section */}

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
          className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{
                y: -8,
              }}
              transition={{
                duration: 0.3,
              }}
              className="group rounded-3xl border border-gray-200 bg-white p-6 text-center shadow-sm transition duration-300 hover:border-cyan-300 hover:shadow-xl"
            >
              <h3 className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-4xl font-black text-transparent sm:text-5xl">
                {item.number}
              </h3>

              <p className="mt-3 text-sm font-medium text-gray-500">
                {item.title}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Premium CTA */}

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
          className="relative mt-24 overflow-hidden rounded-[40px] bg-slate-950 px-6 py-10 sm:px-10 sm:py-14 lg:px-16"
        >
          {/* Background Glow */}

          <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />

          <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl" />

          <div className="relative grid items-center gap-12 lg:grid-cols-2">
            {/* Content */}

            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-5 py-2 text-sm font-semibold text-white shadow-lg">
                <HiSparkles className="text-lg" />
                Our Commitment
              </span>

              <h3 className="mt-7 text-3xl font-black leading-normal text-white sm:text-4xl lg:text-5xl">
                Building Digital Solutions
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  That Move Businesses Forward
                </span>
              </h3>

              <p className="mt-6 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                We don't just develop software. We create reliable digital
                products that improve efficiency, customer experience and
                business growth.
              </p>

              <Link
                to="/contact"
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-7 py-3 text-sm font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Let's Work Together
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 transition duration-300 group-hover:translate-x-1">
                  <HiArrowRight className="text-sm" />
                </span>
              </Link>
            </div>

            {/* CTA Stats */}

            <div className="grid grid-cols-2 gap-5">
              {stats.map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{
                    y: -6,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl transition duration-300 hover:border-cyan-400/40"
                >
                  <h4 className="text-3xl font-black text-white sm:text-4xl">
                    {item.number}
                  </h4>

                  <p className="mt-2 text-sm text-slate-400">{item.title}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
