import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      setShowButton(scrollTop > 250);

      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress =
        documentHeight > 0 ? (scrollTop / documentHeight) * 100 : 0;

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 z-[999] flex h-16 w-16 items-center justify-center rounded-full bg-[#B9FF66] text-black shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-110 ${
        showButton
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-10 opacity-0"
      }`}
      style={{
        background: `conic-gradient(#191A23 ${scrollProgress}%, #B9FF66 ${scrollProgress}%)`,
      }}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#B9FF66]">
        <FaArrowUp className="text-lg" />
      </div>
    </button>
  );
}

export default ScrollToTop;
