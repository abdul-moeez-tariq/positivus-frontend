// MobileMenu.jsx
import { useEffect } from "react";
import {
  IoClose,
  IoArrowForward,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoFacebook,
} from "react-icons/io5";

export default function MobileMenu({ isMenuOpen, setIsMenuOpen, navLinks }) {
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    const esc = (e) => e.key === "Escape" && setIsMenuOpen(false);
    window.addEventListener("keydown", esc);
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", esc);
    };
  }, [isMenuOpen, setIsMenuOpen]);

  const close = () => setIsMenuOpen(false);

  return (
    <>
      <div
        onClick={close}
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-screen w-full max-w-sm flex-col rounded-l-3xl bg-white shadow-2xl transition-transform duration-500 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between border-b px-6 py-6">
          <h2 className="text-3xl font-semibold">Menu</h2>
          <button
            onClick={close}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 hover:bg-lime-300 hover:rotate-90 transition"
          >
            <IoClose className="text-2xl" />
          </button>
        </div>
        <nav className="flex-1 px-6 py-8">
          <ul className="space-y-2">
            {navLinks.map((i) => (
              <li key={i.id}>
                <a
                  href={i.href}
                  onClick={close}
                  className="group flex items-center justify-between rounded-2xl px-5 py-4 text-lg hover:bg-lime-300 transition"
                >
                  <span>{i.title}</span>
                  <IoArrowForward className="transition group-hover:translate-x-1" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="px-6">
          <a
            href="/contact"
            onClick={close}
            className="flex justify-center rounded-2xl bg-black px-6 py-4 text-white hover:bg-lime-300 hover:text-black transition"
          >
            Request a Quote
          </a>
        </div>
        <div className="mt-8 border-t px-6 py-6">
          <p className="mb-4 text-sm text-gray-500">Follow us</p>
          <div className="flex gap-4">
            {[IoLogoLinkedin, IoLogoTwitter, IoLogoFacebook].map((I, idx) => (
              <a
                key={idx}
                href="/"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 hover:bg-lime-300 transition"
              >
                <I />
              </a>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}
