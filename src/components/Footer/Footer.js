import { motion } from "framer-motion";
import logo from "../../assets/images/logos/in2next-logo.png";

import FooterLinks from "./FooterLinks";
import Newsletter from "./Newsletter";
import SocialLinks from "./SocialLinks";
import FooterBottom from "./FooterBottom";

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white py-10">
      {/* Animated Background Glow */}

      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -60, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Main Footer Card */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="overflow-hidden rounded-[40px] border border-gray-200 bg-white p-8 shadow-xl sm:p-10 lg:p-12"
        >
          {/* Top Content */}

          <div className="flex flex-col gap-12 xl:flex-row xl:justify-between">
            {/* Company Info */}

            <div className="max-w-md">
              <div className="inline-flex items-center p-2 rounded-2xl">
                <div className="rounded-xl bg-white px-4 py-2">
                  <img
                    src={logo}
                    alt="IN2NEXT Solutions"
                    className="h-12 w-auto object-contain sm:h-20"
                  />
                </div>
              </div>

              <p className="mt-2 text-base leading-8 text-gray-600 sm:text-lg">
                We build modern digital solutions, scalable web applications,
                and powerful software experiences that help businesses grow in
                the digital world.
              </p>

              <div className="mt-5">
                <SocialLinks />
              </div>
            </div>

            {/* Links */}

            <FooterLinks />
          </div>

          {/* Newsletter */}

          <div className="mt-14">
            <Newsletter />
          </div>
        </motion.div>

        {/* Footer Bottom */}

        <FooterBottom />
      </div>
    </footer>
  );
}

export default Footer;
