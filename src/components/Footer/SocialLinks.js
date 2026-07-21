import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa6";

import { FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  {
    id: 1,
    icon: <FaLinkedinIn />,
    href: "https://linkedin.com/",
    label: "LinkedIn",
  },

  {
    id: 2,
    icon: <FaGithub />,
    href: "https://github.com/",
    label: "GitHub",
  },

  {
    id: 3,
    icon: <FaXTwitter />,
    href: "https://twitter.com/",
    label: "Twitter",
  },

  {
    id: 4,
    icon: <FaInstagram />,
    href: "https://instagram.com/",
    label: "Instagram",
  },

  {
    id: 5,
    icon: <FaFacebookF />,
    href: "https://facebook.com/",
    label: "Facebook",
  },
];

function SocialLinks() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {socialLinks.map((item, index) => (
        <motion.a
          key={item.id}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
          initial={{
            opacity: 0,
            y: 20,
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
          whileHover={{
            y: -8,
            rotate: 5,
          }}
          className="group relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-gray-200 bg-white text-xl text-gray-700 shadow-sm transition-all duration-300 hover:border-transparent hover:text-white"
        >
          {/* Animated Gradient Background */}

          <span className="absolute inset-0 scale-0 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 transition-transform duration-500 group-hover:scale-100" />

          {/* Glow */}

          <span className="absolute inset-0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-60 bg-blue-500" />

          <span className="relative z-10 transition-all duration-300 group-hover:scale-125">
            {item.icon}
          </span>
        </motion.a>
      ))}
    </div>
  );
}

export default SocialLinks;
