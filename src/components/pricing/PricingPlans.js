import React from "react";
import { motion } from "framer-motion";
import { HiCheckCircle } from "react-icons/hi2";

const plans = [
  {
    id: 1,
    name: "Starter",
    description:
      "Perfect for small businesses and startups starting their digital journey.",
    price: "$499",
    features: [
      "Landing page development",
      "Basic UI/UX design",
      "Email support",
      "Project consultation",
    ],
    popular: false,
  },
  {
    id: 2,
    name: "Professional",
    description:
      "Best choice for growing businesses that need scalable solutions.",
    price: "$999",
    features: [
      "Custom web application",
      "Advanced UI/UX design",
      "Priority support",
      "Performance optimization",
      "Analytics integration",
    ],
    popular: true,
  },
  {
    id: 3,
    name: "Enterprise",
    description:
      "Complete solutions for large organizations and complex projects.",
    price: "Custom",
    features: [
      "Dedicated development team",
      "Custom architecture",
      "24/7 support",
      "Advanced security",
      "Long-term partnership",
    ],
    popular: false,
  },
];

function PricingPlans() {
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
            Pricing Plans
          </span>

          <h2 className="mt-6 max-w-3xl text-3xl font-bold text-black sm:text-4xl lg:text-5xl">
            Flexible plans designed for your success
          </h2>

          <p className="mt-6 max-w-2xl text-base text-gray-600 sm:text-lg">
            Choose the plan that fits your business needs and scale whenever you
            are ready.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
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
              className={`relative flex flex-col rounded-3xl p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl ${
                plan.popular
                  ? "bg-black text-white"
                  : "border border-gray-200 bg-white"
              }`}
            >
              {plan.popular && (
                <div className="absolute right-6 top-6 rounded-full bg-lime-300 px-4 py-2 text-xs font-semibold text-black">
                  Most Popular
                </div>
              )}

              <h3
                className={`text-2xl font-bold ${
                  plan.popular ? "text-white" : "text-black"
                }`}
              >
                {plan.name}
              </h3>

              <p
                className={`mt-4 text-sm leading-relaxed ${
                  plan.popular ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {plan.description}
              </p>

              <div className="mt-8">
                <p
                  className={`text-5xl font-bold ${
                    plan.popular ? "text-white" : "text-black"
                  }`}
                >
                  {plan.price}
                </p>

                {plan.price !== "Custom" && (
                  <p
                    className={`text-sm ${
                      plan.popular ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    per project
                  </p>
                )}
              </div>

              {/* Features */}
              <div className="mt-8 flex flex-col gap-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <HiCheckCircle
                      className={`text-xl ${
                        plan.popular ? "text-lime-300" : "text-green-600"
                      }`}
                    />

                    <p
                      className={`text-sm ${
                        plan.popular ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              {/* Button */}
              <button
                className={`mt-10 rounded-full px-6 py-3 text-sm font-semibold transition duration-300 ${
                  plan.popular
                    ? "bg-lime-300 text-black hover:bg-white"
                    : "bg-black text-white hover:bg-lime-300 hover:text-black"
                }`}
              >
                Choose Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingPlans;
