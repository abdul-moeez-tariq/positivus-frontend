import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  HiArrowRight,
  HiCalendarDays,
  HiUser,
} from "react-icons/hi2";


function FeaturedPost() {
  return (
    <section className="bg-gray-50 px-6 py-20 sm:px-10 lg:px-16">


      <div className="mx-auto max-w-7xl">


        <motion.div

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
            duration: 0.6,
          }}

          className="grid overflow-hidden rounded-3xl border border-gray-200 bg-white lg:grid-cols-2"

        >


          {/* Image Area */}
          <div className="relative flex min-h-80 items-center justify-center bg-black p-8">


            <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-lime-300 opacity-20 blur-3xl"></div>



            <motion.div

              animate={{
                y: [0, -10, 0],
              }}

              transition={{
                duration: 3,
                repeat: Infinity,
              }}

              className="relative flex h-52 w-52 items-center justify-center rounded-3xl bg-lime-300"

            >


              <div className="flex h-36 w-36 items-center justify-center rounded-3xl bg-black text-center">


                <p className="text-xl font-bold text-white">
                  Featured
                  <br />
                  Article
                </p>


              </div>


            </motion.div>


          </div>




          {/* Content */}
          <div className="flex flex-col p-8 sm:p-10 lg:p-12">


            <span className="w-fit rounded-full bg-lime-300 px-5 py-2 text-sm font-medium text-black">
              Featured Post
            </span>



            <h2 className="mt-6 text-3xl font-bold text-black sm:text-4xl">
              How digital transformation helps businesses grow faster
            </h2>



            <p className="mt-5 text-base leading-relaxed text-gray-600">
              Discover how modern technologies, automation and
              strategic digital solutions help companies improve
              performance and create better customer experiences.
            </p>



            {/* Meta */}
            <div className="mt-8 flex flex-wrap gap-6">


              <div className="flex items-center gap-3">

                <HiUser className="text-xl text-black" />

                <p className="text-sm text-gray-600">
                  Admin Team
                </p>

              </div>



              <div className="flex items-center gap-3">

                <HiCalendarDays className="text-xl text-black" />

                <p className="text-sm text-gray-600">
                  July 18, 2026
                </p>

              </div>


            </div>



            <Link

              to="/blog/digital-transformation"

              className="group mt-8 flex w-fit items-center gap-3 rounded-full bg-black px-7 py-3 text-sm font-medium text-white transition duration-300 hover:bg-green-600"

            >

              Read Article


              <HiArrowRight className="transition duration-300 group-hover:translate-x-1" />

            </Link>


          </div>



        </motion.div>


      </div>


    </section>
  );
}


export default FeaturedPost;