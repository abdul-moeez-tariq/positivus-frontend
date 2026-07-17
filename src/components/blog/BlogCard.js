import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { HiArrowRight, HiCalendarDays } from "react-icons/hi2";

function BlogCard({ blog }) {
  return (
    <motion.article
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.3,
      }}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white transition duration-300 hover:shadow-xl"
    >
      {/* Image Placeholder */}
      <div className="relative flex h-56 items-center justify-center bg-black">
        <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-lime-300 opacity-20 blur-3xl"></div>

        <div className="flex h-28 w-28 items-center justify-center rounded-3xl bg-lime-300 transition duration-300 group-hover:scale-110">
          <p className="text-center text-lg font-bold text-black">
            Blog
            <br />
            Image
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        {/* Category */}
        <span className="w-fit rounded-full bg-lime-300 px-4 py-2 text-xs font-semibold text-black">
          {blog.category}
        </span>

        <h3 className="mt-5 text-2xl font-bold text-black">{blog.title}</h3>

        <p className="mt-4 text-sm leading-relaxed text-gray-600">
          {blog.description}
        </p>

        {/* Date */}
        <div className="mt-6 flex items-center gap-3">
          <HiCalendarDays className="text-xl text-black" />

          <p className="text-sm text-gray-500">{blog.date}</p>
        </div>

        {/* Button */}
        <Link
          to="/blog/article"
          className="group mt-auto flex w-fit items-center gap-3 pt-6 text-sm font-semibold text-black"
        >
          Read Article
          <HiArrowRight className="transition duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.article>
  );
}

export default BlogCard;
