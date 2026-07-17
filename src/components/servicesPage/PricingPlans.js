import React from "react";
import { motion } from "framer-motion";
import { HiCheck } from "react-icons/hi2";

const plans = [
  {
    id: 1,
    name: "Starter",
    price: "$499",
    description: "Perfect for small businesses starting their digital journey.",
    features: [
      "Responsive Website",
      "Basic UI/UX Design",
      "SEO Optimization",
      "Email Support",
    ],
  },
  {
    id: 2,
    name: "Business",
    price: "$999",
    description:
      "Best choice for growing businesses that need advanced solutions.",
    popular: true,
    features: [
      "Custom Web Application",
      "Advanced UI/UX Design",
      "Database Integration",
      "Priority Support",
      "Performance Optimization",
    ],
  },
  {
    id: 3,
    name: "Enterprise",
    price: "Custom",
    description: "Complete digital solutions built for large organizations.",
    features: [
      "Scalable Architecture",
      "Dedicated Development Team",
      "Cloud Solutions",
      "24/7 Technical Support",
    ],
  },
];

function PricingPlans() {
  return (
    <section className="bg-gray-50 px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
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
            Choose the right plan for your business
          </h2>

          <p className="mt-6 max-w-2xl text-base text-gray-600 sm:text-lg">
            Flexible pricing options designed to fit your goals and help your
            business grow faster.
          </p>
        </motion.div>

        {/* Pricing Cards */}
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
              className={`relative flex flex-col rounded-3xl border p-8 transition duration-300 ${
                plan.popular
                  ? "border-black bg-black text-white shadow-2xl"
                  : "border-gray-200 bg-white text-black hover:border-black hover:shadow-xl"
              }`}
            >
              {plan.popular && (
                <span className="absolute right-6 top-6 rounded-full bg-lime-300 px-4 py-2 text-xs font-semibold text-black">
                  Popular
                </span>
              )}

              <h3 className="text-2xl font-bold">{plan.name}</h3>

              <div className="mt-6 flex items-end gap-2">
                <span className="text-5xl font-bold">{plan.price}</span>

                {plan.price !== "Custom" && (
                  <span className="pb-2 text-sm opacity-70">/project</span>
                )}
              </div>

              <p
                className={`mt-6 text-sm leading-relaxed ${
                  plan.popular ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {plan.description}
              </p>

              <div className="mt-8 flex flex-col gap-4">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <span
                      className={`flex h-6 w-6 items-center justify-center rounded-full ${
                        plan.popular
                          ? "bg-lime-300 text-black"
                          : "bg-black text-white"
                      }`}
                    >
                      <HiCheck className="text-sm" />
                    </span>

                    <span
                      className={`text-sm ${
                        plan.popular ? "text-gray-200" : "text-gray-700"
                      }`}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <button
                className={`mt-10 rounded-full px-6 py-3 text-sm font-medium transition duration-300 ${
                  plan.popular
                    ? "bg-lime-300 text-black hover:bg-white"
                    : "bg-black text-white hover:bg-green-600"
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingPlans;
