import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  HiArrowRight,
  HiDocumentText,
  HiUserGroup,
  HiChartBar,
} from "react-icons/hi2";

function BlogHero() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-20 sm:px-10 lg:px-16">
      {/* Background */}
      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-lime-300 opacity-30 blur-3xl"></div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        {/* Left Content */}
        <motion.div
          initial={{
            opacity: 0,
            x: -40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="flex flex-col"
        >
          <span className="w-fit rounded-full bg-lime-300 px-5 py-2 text-sm font-medium text-black">
            Our Blog
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-black sm:text-5xl lg:text-6xl">
            Insights, ideas and strategies to grow your business
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
            Explore expert insights, industry trends and practical guides that
            help businesses build better digital experiences.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/blog"
              className="group flex items-center gap-3 rounded-full bg-black px-7 py-3 text-sm font-medium text-white transition duration-300 hover:bg-green-600"
            >
              Read Latest Articles
              <HiArrowRight className="transition duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              to="/contact"
              className="rounded-full border border-black px-7 py-3 text-sm font-medium text-black transition duration-300 hover:bg-black hover:text-white"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.7,
          }}
          className="flex justify-center"
        >
          <div className="relative w-full max-w-md">
            {/* Main Blog Card */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="rounded-3xl bg-black p-8 shadow-2xl"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <HiDocumentText className="text-3xl text-lime-300" />

                  <h3 className="text-xl font-bold text-white">
                    Latest Insights
                  </h3>
                </div>

                <span className="rounded-full bg-lime-300 px-3 py-1 text-xs font-semibold text-black">
                  New
                </span>
              </div>

              <h4 className="mt-8 text-2xl font-bold text-white">
                The future of digital transformation
              </h4>

              <p className="mt-4 text-sm leading-relaxed text-gray-400">
                Learn how modern businesses use technology, automation and
                design to stay ahead.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="rounded-2xl bg-zinc-900 p-4">
                  <HiDocumentText className="text-2xl text-lime-300" />

                  <p className="mt-3 text-2xl font-bold text-white">50+</p>

                  <p className="text-xs text-gray-400">Articles</p>
                </div>

                <div className="rounded-2xl bg-zinc-900 p-4">
                  <HiUserGroup className="text-2xl text-lime-300" />

                  <p className="mt-3 text-2xl font-bold text-white">10K+</p>

                  <p className="text-xs text-gray-400">Readers</p>
                </div>

                <div className="rounded-2xl bg-zinc-900 p-4">
                  <HiChartBar className="text-2xl text-lime-300" />

                  <p className="mt-3 text-2xl font-bold text-white">95%</p>

                  <p className="text-xs text-gray-400">Growth</p>
                </div>
              </div>
            </motion.div>

            {/* Floating Card */}
            <motion.div
              animate={{
                x: [0, 12, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="absolute -bottom-8 -left-6 rounded-3xl bg-lime-300 p-6 shadow-xl"
            >
              <p className="text-sm font-medium text-black">Featured Topic</p>

              <p className="mt-2 text-2xl font-bold text-black">
                AI & Technology
              </p>

              <p className="text-xs text-black">Latest Industry Trends</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default BlogHero;
