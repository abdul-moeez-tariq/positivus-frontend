import React from "react";
import { motion } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";

function ServiceCard({ title, description, icon: Icon }) {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.3,
      }}
      className="group flex h-full flex-col rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:border-black hover:shadow-xl"
    >
      {/* Icon */}
      <motion.div
        whileHover={{
          rotate: 8,
        }}
        transition={{
          duration: 0.3,
        }}
        className="flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-300 text-black"
      >
        <Icon className="text-3xl" />
      </motion.div>

      {/* Content */}
      <h3 className="mt-8 text-2xl font-bold text-black">{title}</h3>

      <p className="mt-4 text-base leading-relaxed text-gray-600">
        {description}
      </p>

      {/* Button */}
      <div className="mt-8 flex items-center">
        <button className="flex items-center gap-3 text-sm font-medium text-black transition duration-300 group-hover:text-green-600">
          Learn More
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition duration-300 group-hover:bg-green-600">
            <HiArrowUpRight className="text-lg" />
          </span>
        </button>
      </div>
    </motion.div>
  );
}

export default ServiceCard;
