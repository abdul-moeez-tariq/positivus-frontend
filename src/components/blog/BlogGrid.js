import React from "react";
import { motion } from "framer-motion";

import BlogCard from "./BlogCard";

const blogs = [
  {
    id: 1,
    category: "Technology",
    title: "How AI is transforming modern businesses",
    description:
      "Explore how artificial intelligence is helping companies automate processes and improve efficiency.",
    date: "July 12, 2026",
  },
  {
    id: 2,
    category: "Design",
    title: "Why great UX design matters for businesses",
    description:
      "Learn why user experience plays an important role in building successful digital products.",
    date: "July 08, 2026",
  },
  {
    id: 3,
    category: "Development",
    title: "Building scalable web applications",
    description:
      "Discover modern development practices for creating fast and reliable applications.",
    date: "July 02, 2026",
  },
  {
    id: 4,
    category: "Marketing",
    title: "Digital marketing strategies that work",
    description:
      "Understand effective marketing techniques that help brands reach more customers.",
    date: "June 28, 2026",
  },
  {
    id: 5,
    category: "Business",
    title: "How technology drives business growth",
    description:
      "See how digital transformation creates new opportunities for companies.",
    date: "June 22, 2026",
  },
  {
    id: 6,
    category: "Technology",
    title: "The future of cloud solutions",
    description:
      "A guide to understanding cloud technology and its business benefits.",
    date: "June 18, 2026",
  },
];

function BlogGrid() {
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
          <span className="rounded-full bg-lime-300 px-5 py-2 text-sm font-medium text-black">
            Latest Articles
          </span>

          <h2 className="mt-6 text-3xl font-bold text-black sm:text-4xl lg:text-5xl">
            Latest insights and updates
          </h2>

          <p className="mt-6 max-w-2xl text-base text-gray-600 sm:text-lg">
            Stay updated with the latest trends, ideas and strategies from our
            experts.
          </p>
        </motion.div>

        {/* Blog Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
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
            >
              <BlogCard blog={blog} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogGrid;
