import React, { useState } from "react";
import { motion } from "framer-motion";

import {
  HiCodeBracket,
  HiPaintBrush,
  HiBriefcase,
  HiMegaphone,
  HiCpuChip,
} from "react-icons/hi2";


const categories = [
  {
    id: 1,
    name: "Technology",
    icon: HiCpuChip,
  },
  {
    id: 2,
    name: "Development",
    icon: HiCodeBracket,
  },
  {
    id: 3,
    name: "Design",
    icon: HiPaintBrush,
  },
  {
    id: 4,
    name: "Business",
    icon: HiBriefcase,
  },
  {
    id: 5,
    name: "Marketing",
    icon: HiMegaphone,
  },
];


function BlogCategories() {

  const [active, setActive] = useState("Technology");


  return (
    <section className="bg-white px-6 py-16 sm:px-10 lg:px-16">


      <div className="mx-auto max-w-7xl">


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
            Categories
          </span>



          <h2 className="mt-6 text-3xl font-bold text-black sm:text-4xl">
            Explore topics that interest you
          </h2>



          <p className="mt-5 max-w-2xl text-base text-gray-600 sm:text-lg">
            Browse our latest insights, guides and industry
            updates by category.
          </p>


        </motion.div>




        {/* Categories */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">


          {
            categories.map((category, index) => {

              const Icon = category.icon;


              return (

                <motion.button

                  key={category.id}

                  initial={{
                    opacity: 0,
                    scale: 0.8,
                  }}

                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}

                  viewport={{
                    once: true,
                  }}

                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                  }}

                  onClick={() =>
                    setActive(category.name)
                  }

                  className={`group flex items-center gap-3 rounded-full px-6 py-3 text-sm font-medium transition duration-300 ${
                    active === category.name
                      ? "bg-black text-white"
                      : "border border-gray-200 bg-white text-black hover:border-black"
                  }`}

                >


                  <Icon
                    className={`text-xl ${
                      active === category.name
                        ? "text-lime-300"
                        : "text-black group-hover:text-lime-500"
                    }`}
                  />


                  {category.name}


                </motion.button>

              );

            })
          }


        </div>


      </div>


    </section>
  );
}


export default BlogCategories;