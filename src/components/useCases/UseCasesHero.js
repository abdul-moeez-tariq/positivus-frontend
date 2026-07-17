import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  HiArrowRight,
  HiChartBar,
  HiBolt,
  HiUserGroup,
} from "react-icons/hi2";


function UseCasesHero() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-20 sm:px-10 lg:px-16">


      {/* Background Shape */}
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
            Use Cases
          </span>



          <h1 className="mt-6 text-4xl font-bold leading-tight text-black sm:text-5xl lg:text-6xl">
            Real solutions for real business challenges
          </h1>



          <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
            Discover how our digital solutions help businesses improve
            efficiency, automate workflows and create better experiences
            for their customers.
          </p>



          <div className="mt-8 flex flex-wrap gap-4">


            <Link
              to="/contact"
              className="group flex items-center gap-3 rounded-full bg-black px-7 py-3 text-sm font-medium text-white transition duration-300 hover:bg-green-600"
            >

              Start Your Project

              <HiArrowRight className="transition duration-300 group-hover:translate-x-1" />

            </Link>



            <Link
              to="/services"
              className="rounded-full border border-black px-7 py-3 text-sm font-medium text-black transition duration-300 hover:bg-black hover:text-white"
            >

              Explore Services

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


            {/* Main Card */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="rounded-3xl bg-black p-8 shadow-2xl"
            >


              <div className="flex items-center justify-between">

                <h3 className="text-xl font-bold text-white">
                  Business Growth
                </h3>


                <div className="rounded-full bg-lime-300 px-3 py-1 text-xs font-semibold text-black">
                  Live
                </div>

              </div>



              <div className="mt-8 grid gap-4 sm:grid-cols-3">


                <div className="rounded-2xl bg-zinc-900 p-4">

                  <HiChartBar className="text-3xl text-lime-300" />

                  <p className="mt-3 text-2xl font-bold text-white">
                    85%
                  </p>

                  <p className="text-xs text-gray-400">
                    Growth
                  </p>

                </div>



                <div className="rounded-2xl bg-zinc-900 p-4">

                  <HiBolt className="text-3xl text-lime-300" />

                  <p className="mt-3 text-2xl font-bold text-white">
                    2x
                  </p>

                  <p className="text-xs text-gray-400">
                    Faster
                  </p>

                </div>



                <div className="rounded-2xl bg-zinc-900 p-4">

                  <HiUserGroup className="text-3xl text-lime-300" />

                  <p className="mt-3 text-2xl font-bold text-white">
                    10K+
                  </p>

                  <p className="text-xs text-gray-400">
                    Users
                  </p>

                </div>


              </div>


            </motion.div>



            {/* Floating Card */}
            <motion.div
              animate={{
                x: [0, 10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="absolute -bottom-8 -left-6 rounded-3xl bg-lime-300 p-6 shadow-xl"
            >

              <p className="text-sm font-medium text-black">
                Smart Digital Solutions
              </p>


              <p className="mt-2 text-3xl font-bold text-black">
                +45%
              </p>


              <p className="text-xs text-black">
                Performance Increase
              </p>

            </motion.div>


          </div>


        </motion.div>


      </div>


    </section>
  );
}


export default UseCasesHero;