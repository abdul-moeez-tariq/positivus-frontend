// import ctaImage from "../../assets/images/cta/ctaImage.png";

// function CTA() {
//   return (
//     <section className="bg-white py-16 lg:py-24">
//       <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
//         <div className="overflow-hidden rounded-[40px] bg-gray-100 shadow-sm">
//           <div className="flex flex-col items-center gap-12 p-8 sm:p-10 lg:flex-row lg:justify-between lg:p-14">
//             {/* Left Content */}
//             <div className="max-w-xl text-center lg:text-left">
//               <h2 className="text-3xl font-semibold leading-tight text-black sm:text-4xl">
//                 Let's make things happen
//               </h2>

//               <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
//                 Contact us today to learn more about how our Full Stack
//                 Development services can help your business grow with modern,
//                 scalable and high-performance web applications.
//               </p>

//               <a
//                 href="/contact"
//                 className="mt-8 inline-flex items-center justify-center rounded-2xl bg-black px-8 py-4 text-lg font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#B9FF66] hover:text-black hover:shadow-xl"
//               >
//                 Get your free proposal
//               </a>
//             </div>

//             {/* Right Image */}
//             <div className="flex justify-center">
//               <img
//                 src={ctaImage}
//                 alt="CTA Illustration"
//                 className="w-full max-w-xs transition duration-500 hover:scale-105 sm:max-w-sm lg:max-w-md"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default CTA;

import { motion } from "framer-motion";

import ctaImage from "../../assets/images/cta/ctaImage.png";

function CTA() {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 p-[1px] shadow-2xl"
        >
          {/* Inner Card */}

          <div className="relative overflow-hidden rounded-[40px] bg-white">
            {/* Animated Shine Effect */}

            <motion.div
              animate={{
                x: ["-100%", "200%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-y-0 w-40 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
            />

            <div className="relative flex flex-col items-center gap-12 p-8 sm:p-10 lg:flex-row lg:justify-between lg:p-14">
              {/* Content */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: -40,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.2,
                }}
                className="max-w-xl text-center lg:text-left"
              >
                <span className="inline-flex rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-5 py-2 text-sm font-semibold text-white">
                  Let's Build Something Great
                </span>

                <h2 className="mt-6 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                  Ready To Take Your Business
                  <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {" "}
                    To The Next Level?
                  </span>
                </h2>

                <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
                  Partner with IN2NEXT to create powerful digital solutions,
                  modern web experiences, and scalable technologies that help
                  your business grow faster.
                </p>

                <motion.a
                  href="/contact"
                  whileHover={{
                    y: -5,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="mt-8 inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-blue-500/30"
                >
                  Get Your Free Consultation
                </motion.a>
              </motion.div>

              {/* Image */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: 40,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.3,
                }}
                className="flex justify-center"
              >
                <img
                  src={ctaImage}
                  alt="IN2NEXT Solutions"
                  className="w-full max-w-xs sm:max-w-sm lg:max-w-md"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CTA;
