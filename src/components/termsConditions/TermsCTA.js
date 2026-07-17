import React from "react";
import { Link } from "react-router-dom";

function TermsCTA() {
  return (
    <section className="px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl rounded-3xl bg-black px-8 py-12 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Need More Information?
        </h2>

        <p className="mt-5 text-gray-300">
          Contact our team if you have questions about these terms.
        </p>

        <Link
          to="/contact"
          className="mt-8 inline-flex rounded-full bg-lime-300 px-8 py-3 text-sm font-semibold text-black transition duration-300 hover:bg-white"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}

export default TermsCTA;
