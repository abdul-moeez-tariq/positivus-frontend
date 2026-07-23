import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  HiArrowRight,
  HiChatBubbleLeftRight,
  HiStar,
  HiSparkles,
  HiCheckCircle,
} from "react-icons/hi2";

import { FaQuoteLeft } from "react-icons/fa6";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechNova",
    image: "https://i.pravatar.cc/150?img=32",
    review:
      "IN2NEXT transformed our digital platform with a modern solution that improved performance, usability and customer experience.",
  },

  {
    id: 2,
    name: "Michael Brown",
    role: "Founder, StartupX",
    image: "https://i.pravatar.cc/150?img=12",
    review:
      "A professional team with excellent communication. They delivered exactly what we needed with outstanding quality.",
  },

  {
    id: 3,
    name: "Emily Davis",
    role: "Marketing Director",
    image: "https://i.pravatar.cc/150?img=47",
    review:
      "Their development approach and attention to detail helped us create a product our users truly love.",
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
    number: "98%",
    title: "Client Satisfaction",
  },

  {
    number: "5★",
    title: "Average Rating",
  },
];

const trustPoints = [
  "Modern Technology",
  "Clean Development",
  "Fast Delivery",
  "Scalable Solutions",
  "Dedicated Support",
  "Premium Quality",
];

function Testimonials() {
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
          <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-5 py-2 text-sm font-semibold text-white shadow-lg">
            <HiChatBubbleLeftRight className="text-lg" />
            Client Testimonials
          </span>

          <h2 className="mt-8 text-4xl font-black leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Trusted By Businesses
            <span className="block bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Around The World
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
            We build long-term partnerships by delivering reliable, scalable and
            high-quality digital solutions that create measurable business
            impact.
          </p>
        </motion.div>

        {/* Testimonial Cards */}

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.id}
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
                delay: index * 0.12,
              }}
              whileHover={{
                y: -10,
              }}
              className="group relative flex h-full overflow-hidden rounded-[36px] border border-gray-200 bg-white p-8 shadow-sm transition duration-500 hover:border-cyan-300 hover:shadow-2xl"
            >
              {/* Hover Glow */}

              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

              <div className="relative flex flex-1 flex-col">
                {/* Top */}

                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <HiStar key={star} className="text-xl text-yellow-400" />
                    ))}
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white shadow-lg transition duration-500 group-hover:rotate-12">
                    <FaQuoteLeft />
                  </div>
                </div>

                {/* Review */}

                <p className="mt-8 flex-1 text-base leading-8 text-gray-600">
                  "{item.review}"
                </p>

                {/* User */}

                <div className="mt-8 flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="h-16 w-16 rounded-2xl object-cover ring-4 ring-cyan-100"
                  />

                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {item.name}
                    </h3>

                    <p className="text-sm text-gray-500">{item.role}</p>
                  </div>
                </div>

                {/* Hover Line */}

                <div className="mt-8 h-1 w-full overflow-hidden rounded-full bg-gray-100">
                  <div className="h-full w-0 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 transition-all duration-500 group-hover:w-full" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Client Success Section */}

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
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
          className="relative mt-24 overflow-hidden rounded-[40px] bg-slate-950 p-8 sm:p-10 lg:p-14"
        >
          {/* Glow */}

          <motion.div
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl"
          />

          <motion.div
            animate={{
              x: [0, -50, 0],
              y: [0, 40, 0],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl"
          />

          <div className="relative grid items-center gap-12 lg:grid-cols-2">
            {/* Content */}

            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-5 py-2 text-sm font-semibold text-white shadow-lg">
                <HiCheckCircle className="text-lg" />
                Client Satisfaction
              </span>

              <h3 className="mt-8 text-4xl font-black leading-tight text-white sm:text-5xl">
                Building Trust Through
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Exceptional Results
                </span>
              </h3>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
                We don't just deliver projects. We build long-term partnerships
                through transparent communication, modern technology and
                reliable engineering practices.
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 shadow-lg">
                  <HiCheckCircle className="text-3xl text-white" />
                </div>

                <p className="max-w-sm text-lg font-semibold text-white">
                  Creating digital products that deliver real business impact.
                </p>
              </div>
            </div>

            {/* Stats Cards */}

            <div className="grid grid-cols-2 gap-5">
              {stats.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -8,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl"
                >
                  <div className="absolute inset-x-0 bottom-0 h-1 w-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 transition-all duration-500 group-hover:w-full" />

                  <h4 className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-4xl font-black text-transparent sm:text-5xl">
                    {item.number}
                  </h4>

                  <p className="mt-3 text-sm text-slate-300">{item.title}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Why Clients Choose Us */}

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
          className="mt-12 rounded-[36px] border border-gray-200 bg-gray-50 p-8 sm:p-10"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-5 py-2 text-sm font-semibold text-white shadow-lg">
                <HiStar className="text-lg" />
                Why Choose Us
              </span>

              <h3 className="mt-6 text-3xl font-black text-gray-900 sm:text-4xl">
                Trusted Partner For
                <span className="block pb-2 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Digital Growth
                </span>
              </h3>

              <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
                We combine technology expertise, creative thinking and business
                understanding to deliver solutions that create measurable value.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {trustPoints.map((item, index) => (
                <motion.span
                  key={item}
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.05,
                  }}
                  className="rounded-full border border-cyan-200 bg-white px-5 py-2 text-sm font-semibold text-gray-700 shadow-sm transition duration-300 hover:border-blue-500 hover:bg-blue-50"
                >
                  ✓ {item}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}

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
          className="relative mt-24 overflow-hidden rounded-[40px] bg-slate-950 px-6 py-12 sm:px-10 sm:py-16 lg:px-16"
        >
          {/* Animated Glow */}

          <motion.div
            animate={{
              x: [0, 60, 0],
              y: [0, -40, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-cyan-500/30 blur-3xl"
          />

          <motion.div
            animate={{
              x: [0, -60, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-purple-500/30 blur-3xl"
          />

          {/* Pattern */}

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_40%)]" />

          <div className="relative flex flex-col items-center text-center">
            {/* Badge */}

            <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-5 py-2 text-sm font-semibold text-white shadow-lg">
              <HiSparkles className="text-lg" />
              Let's Create Something Amazing
            </span>

            {/* Heading */}

            <h3 className="mt-8 max-w-4xl text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
              Ready To Build Your
              <span className="block pb-2 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Next Digital Experience?
              </span>
            </h3>

            {/* Description */}

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Partner with IN2NEXT to create scalable software, modern
              applications and future-ready digital solutions that help your
              business grow faster.
            </p>

            {/* Button */}

            <Link
              to="/contact"
              className="group mt-8 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-8 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              Start Your Project
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>

            {/* Trust Badges */}

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {["Fast Delivery", "Expert Team", "Scalable Solutions"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/20 bg-white/5 px-5 py-2 text-sm font-medium text-slate-200 backdrop-blur-xl"
                  >
                    ✓ {item}
                  </span>
                ),
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials;
