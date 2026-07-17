import React from "react";
import { motion } from "framer-motion";

import { HiStar } from "react-icons/hi2";

import { FaQuoteLeft } from "react-icons/fa6";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CEO, TechNova",
    image: "https://i.pravatar.cc/150?img=32",
    review:
      "Working with Positivus has been an outstanding experience. Their team delivered a modern, high-performance platform that exceeded all expectations.",
  },
  {
    id: 2,
    name: "Michael Brown",
    position: "Founder, StartupX",
    image: "https://i.pravatar.cc/150?img=12",
    review:
      "Professional, creative and highly responsive. Every milestone was delivered on time with exceptional quality.",
  },
  {
    id: 3,
    name: "Emily Davis",
    position: "Marketing Director",
    image: "https://i.pravatar.cc/150?img=47",
    review:
      "Their UI/UX expertise completely transformed our product. Customers loved the experience after launch.",
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
    highlight: true,
  },
  {
    number: "98%",
    title: "Satisfaction",
    highlight: true,
  },
  {
    number: "5★",
    title: "Average Rating",
  },
];

function Testimonials() {
  return (
    <section className="bg-gray-50 px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-[#B9FF66] px-5 py-2 text-sm font-semibold text-black">
            Testimonials
          </span>

          <h2 className="mt-6 text-3xl font-bold text-black sm:text-4xl lg:text-5xl">
            What Our Clients
            <br />
            Say About Us
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-gray-600">
            We create long-term partnerships by delivering quality digital
            experiences and measurable results.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
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
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <HiStar key={star} className="text-xl text-yellow-400" />
                  ))}
                </div>

                <FaQuoteLeft className="text-4xl text-[#B9FF66]" />
              </div>

              <p className="mt-6 leading-relaxed text-gray-600">
                "{item.review}"
              </p>

              <div className="mt-8 flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-14 w-14 rounded-full object-cover"
                />

                <div>
                  <h4 className="font-bold text-black">{item.name}</h4>

                  <p className="text-sm text-gray-500">{item.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}

        <div className="mt-20 rounded-3xl bg-black p-8 sm:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="rounded-full bg-[#B9FF66] px-5 py-2 text-sm font-semibold text-black">
                Client Satisfaction
              </span>

              <h3 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
                Trusted By Businesses Around The World
              </h3>

              <p className="mt-5 leading-relaxed text-gray-300">
                Our mission is to create premium digital experiences through
                transparent communication, quality development and long-term
                support.
              </p>

              <blockquote className="mt-8 border-l-4 border-[#B9FF66] pl-5 text-lg italic text-white">
                "Client success is our greatest achievement."
              </blockquote>
            </div>

            <div>
              <div className="grid grid-cols-2 gap-5">
                {stats.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      y: -6,
                    }}
                    className={`rounded-3xl p-6 text-center ${
                      item.highlight ? "bg-[#B9FF66]" : "bg-white"
                    }`}
                  >
                    <h4 className="text-4xl font-bold text-black">
                      {item.number}
                    </h4>

                    <p className="mt-2 text-sm text-gray-600">{item.title}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 rounded-3xl bg-white p-6">
                <h4 className="text-xl font-bold text-black">
                  Why Clients Choose Us
                </h4>

                <div className="mt-5 flex flex-wrap gap-3">
                  {[
                    "Transparent Communication",
                    "Premium Quality",
                    "On-Time Delivery",
                    "Long-Term Support",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700"
                    >
                      ✓ {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
