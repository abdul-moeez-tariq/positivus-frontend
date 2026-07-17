import React from "react";
import { motion } from "framer-motion";

import UseCaseCard from "./UseCaseCard";

import {
  HiHeart,
  HiBanknotes,
  HiShoppingCart,
  HiAcademicCap,
  HiHomeModern,
  HiRocketLaunch,
} from "react-icons/hi2";


const useCases = [
  {
    id: 1,
    title: "Healthcare",
    description:
      "Digital platforms that improve patient experience, healthcare management and operational efficiency.",
    icon: HiHeart,
  },
  {
    id: 2,
    title: "Finance",
    description:
      "Secure financial solutions that simplify transactions and improve business operations.",
    icon: HiBanknotes,
  },
  {
    id: 3,
    title: "E-Commerce",
    description:
      "Powerful online shopping experiences that help businesses increase sales and customer engagement.",
    icon: HiShoppingCart,
  },
  {
    id: 4,
    title: "Education",
    description:
      "Smart learning platforms that make education accessible and interactive.",
    icon: HiAcademicCap,
  },
  {
    id: 5,
    title: "Real Estate",
    description:
      "Modern property solutions that connect businesses with their customers.",
    icon: HiHomeModern,
  },
  {
    id: 6,
    title: "Startups",
    description:
      "Scalable digital products designed to help startups grow faster.",
    icon: HiRocketLaunch,
  },
];


function UseCasesGrid() {
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
            Business Solutions
          </span>



          <h2 className="mt-6 max-w-3xl text-3xl font-bold text-black sm:text-4xl lg:text-5xl">
            Solutions built for different industries
          </h2>



          <p className="mt-6 max-w-2xl text-base text-gray-600 sm:text-lg">
            Explore how our technology solutions solve real-world
            business problems and create measurable impact.
          </p>


        </motion.div>



        {/* Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">


          {useCases.map((item, index) => (

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
            >

              <UseCaseCard
                title={item.title}
                description={item.description}
                icon={item.icon}
              />

            </motion.div>

          ))}


        </div>


      </div>


    </section>
  );
}


export default UseCasesGrid;