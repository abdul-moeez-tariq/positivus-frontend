import React from "react";
import { Link } from "react-router-dom";
import { HiArrowUpRight } from "react-icons/hi2";

function UseCaseCard({ title, description, icon: Icon }) {
  return (
    <div className="group flex h-full flex-col rounded-3xl border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-black hover:shadow-xl">
      {/* Icon */}
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-lime-300 transition duration-300 group-hover:bg-lime-300 group-hover:text-black">
        <Icon className="text-3xl" />
      </div>

      {/* Content */}
      <h3 className="mt-8 text-2xl font-bold text-black">{title}</h3>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-600">
        {description}
      </p>

      {/* Button */}
      <Link
        to={`/use-cases/${title.toLowerCase().replaceAll(" ", "-")}`}
        className="group/link mt-8 flex items-center gap-3 text-sm font-medium text-black"
      >
        Explore Solution
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white transition duration-300 group-hover/link:bg-lime-300 group-hover/link:text-black">
          <HiArrowUpRight className="text-lg transition duration-300 group-hover/link:rotate-45" />
        </span>
      </Link>
    </div>
  );
}

export default UseCaseCard;
