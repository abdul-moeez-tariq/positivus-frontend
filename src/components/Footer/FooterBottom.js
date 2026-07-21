import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function FooterBottom() {
  const policyLinks = [
    {
      id: 1,
      title: "Privacy Policy",
      href: "/privacy-policy",
    },

    {
      id: 2,
      title: "Terms & Conditions",
      href: "/terms-and-conditions",
    },

    {
      id: 3,
      title: "Cookie Policy",
      href: "/cookie-policy",
    },
  ];

  return (
    <motion.section
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
        duration: 0.7,
      }}
      className="py-10"
    >
      {/* Divider */}

      <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

      <div className="flex flex-col items-center justify-center gap-6 pt-8 text-center">
        {/* Copyright */}

        <p className="text-sm text-gray-600 sm:text-base">
          © {new Date().getFullYear()}
          <span className="font-semibold  bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent">
            {" "}
            IN2NEXT
          </span>
          . All rights reserved.
        </p>

        {/* Policies */}

        <div className="flex flex-wrap items-center justify-center gap-5">
          {policyLinks.map((item, index) => (
            <div key={item.id} className="flex items-center gap-5">
              <Link
                to={item.href}
                className="text-sm font-medium text-gray-500 transition-all duration-300 hover:text-blue-600"
              >
                {item.title}
              </Link>

              {index !== policyLinks.length - 1 && (
                <span className="h-1 w-1 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600" />
              )}
            </div>
          ))}
        </div>

        {/* Developer Credit */}

        <p className="text-sm text-gray-500">
          Designed & Developed by
          <span className="font-semibold bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent">{" "}
            Abdul Moeez
          </span>
        </p>
      </div>
    </motion.section>
  );
}

export default FooterBottom;
