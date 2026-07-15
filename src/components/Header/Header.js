// Header.jsx
import { useEffect, useState } from "react";
import logo from "../../assets/images/logos/logo.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import MobileMenu from "../MobileMenu/MobileMenu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { id: 1, title: "About us", href: "#about" },
    { id: 2, title: "Services", href: "#services" },
    { id: 3, title: "Use Cases", href: "#use-cases" },
    { id: 4, title: "Pricing", href: "#pricing" },
    { id: 5, title: "Blog", href: "#blog" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200" : "bg-white"}`}
      >
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
          <a href="/" className="group flex items-center gap-3">
            <img
              src={logo}
              alt="Positivus"
              className="h-9 w-auto transition group-hover:rotate-6"
            />
            <h1 className="text-3xl font-semibold tracking-tight">Positivus</h1>
          </a>

          <nav className="hidden lg:block">
            <ul className="flex items-center gap-10">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="relative text-lg font-medium transition hover:text-lime-500 after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-0 after:bg-lime-400 after:transition-all hover:after:w-full"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden lg:flex items-center justify-center rounded-2xl border border-black px-8 py-4 transition hover:-translate-y-0.5 hover:bg-black hover:text-white"
            >
              Request a quote
            </a>
            <button
              onClick={() => setIsMenuOpen(true)}
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-200 text-3xl hover:bg-lime-300 lg:hidden"
              aria-label="Open Menu"
            >
              <HiOutlineMenuAlt3 />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        navLinks={navLinks}
      />
    </>
  );
}
