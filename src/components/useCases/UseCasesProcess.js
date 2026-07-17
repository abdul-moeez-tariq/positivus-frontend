import React from "react";
import { motion } from "framer-motion";

import {
  HiMagnifyingGlass,
  HiClipboardDocumentCheck,
  HiCodeBracket,
  HiRocketLaunch,
  HiChartBar,
} from "react-icons/hi2";


const processSteps = [
  {
    id: "01",
    title: "Discover",
    description:
      "We analyze your business goals, challenges and requirements to understand the right solution.",
    icon: HiMagnifyingGlass,
  },
  {
    id: "02",
    title: "Plan",
    description:
      "Our team creates a clear strategy and roadmap focused on achieving measurable results.",
    icon: HiClipboardDocumentCheck,
  },
  {
    id: "03",
    title: "Build",
    description:
      "We design and develop scalable digital solutions using modern technologies.",
    icon: HiCodeBracket,
  },
  {
    id: "04",
    title: "Launch",
    description:
      "We deploy your solution smoothly and ensure everything works perfectly.",
    icon: HiRocketLaunch,
  },
  {
    id: "05",
    title: "Optimize",
    description:
      "We continuously improve performance and help your business grow.",
    icon: HiChartBar,
  },
];


function UseCasesProcess() {
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
            Our Process
          </span>



          <h2 className="mt-6 max-w-3xl text-3xl font-bold text-black sm:text-4xl lg:text-5xl">
            Turning challenges into successful solutions
          </h2>



          <p className="mt-6 max-w-2xl text-base text-gray-600 sm:text-lg">
            A structured approach that helps us create digital
            products that deliver real business value.
          </p>


        </motion.div>



        {/* Process */}
        <div className="relative mt-14">


          {/* Desktop Line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gray-300 lg:block"></div>



          <div className="flex flex-col gap-8">


            {
              processSteps.map((step, index) => {

                const Icon = step.icon;


                return (

                  <motion.div

                    key={step.id}

                    initial={{
                      opacity: 0,
                      x: index % 2 === 0 ? -40 : 40,
                    }}

                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}

                    viewport={{
                      once: true,
                    }}

                    transition={{
                      duration: 0.6,
                    }}

                    className="relative grid gap-6 lg:grid-cols-2"
                  >



                    {/* Left Side */}
                    <div
                      className={`${
                        index % 2 === 0
                          ? "lg:flex lg:justify-end"
                          : "lg:order-2"
                      }`}
                    >


                      <div className="w-full rounded-3xl border border-gray-200 bg-white p-8 lg:max-w-md">


                        <div className="flex items-center gap-4">


                          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-lime-300">

                            <Icon className="text-3xl" />

                          </div>


                          <span className="text-4xl font-bold text-gray-200">
                            {step.id}
                          </span>


                        </div>



                        <h3 className="mt-7 text-2xl font-bold text-black">
                          {step.title}
                        </h3>



                        <p className="mt-4 text-sm leading-relaxed text-gray-600">
                          {step.description}
                        </p>


                      </div>


                    </div>



                    {/* Center Dot */}
                    <div className="absolute left-1/2 top-8 hidden h-5 w-5 -translate-x-1/2 rounded-full bg-lime-300 lg:block"></div>



                  </motion.div>

                );

              })
            }


          </div>


        </div>


      </div>


    </section>
  );
}


export default UseCasesProcess;