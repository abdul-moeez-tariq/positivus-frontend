import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      setShowButton(scrollTop > 300);

      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,

      behavior: "smooth",
    });
  };

  return (
    <motion.button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      initial={{
        scale: 0,
      }}
      animate={{
        scale: showButton ? 1 : 0,
      }}
      transition={{
        duration: 0.3,
      }}
      className={`fixed bottom-6 right-6 z-[999] flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 p-[3px] shadow-xl shadow-blue-500/30 transition-all duration-300 hover:-translate-y-2 sm:bottom-8 sm:right-8 ${
        showButton
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      }`}
      style={{
        background: `conic-gradient(
          from 0deg,
          #06b6d4 ${scrollProgress}%,
          #9333ea ${scrollProgress}%,
          #e5e7eb ${scrollProgress}%
        )`,
      }}
    >
      {/* Inner Button */}

      <span className="flex h-full w-full items-center justify-center rounded-full bg-white transition-all duration-300 hover:bg-gray-50">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white transition-transform duration-300 hover:scale-110">
          <FaArrowUp className="text-lg" />
        </span>
      </span>
    </motion.button>
  );
}

export default ScrollToTop;
