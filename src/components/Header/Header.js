import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";

import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

import logo from "../../assets/images/logos/in2next-logo.png";

import MobileMenu from "../mobileMenu/MobileMenu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    {
      id: 1,
      title: "About Us",
      href: "/about",
    },

    {
      id: 2,
      title: "Services",
      href: "/services",
    },

    {
      id: 3,
      title: "Use Cases",
      href: "/use-cases",
    },

    {
      id: 4,
      title: "Pricing",
      href: "/pricing",
    },

    {
      id: 5,
      title: "Blog",
      href: "/blog",
    },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "border-b border-gray-200 bg-white/80 shadow-xl backdrop-blur-xl"
            : "bg-white"
        }`}
      >
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="IN2NEXT Solutions"
              className="h-16 lg:h-20 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}

          <nav className="hidden lg:block">
            <ul className="flex items-center gap-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <NavLink
                    to={link.href}
                    className={({ isActive }) =>
                      `rounded-full px-5 py-2.5 text-base font-medium transition-all duration-300 hover:-translate-y-0.5

                      ${
                        isActive
                          ? "bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white shadow-xl shadow-blue-500/30"
                          : "text-gray-600 hover:bg-blue-50 hover:text-blue-700"
                      }

                      `
                    }
                  >
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Section */}

          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hidden items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30 lg:flex"
            >
              Request a Quote
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-gray-200 transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-500 hover:via-blue-600 hover:to-purple-600 hover:text-white lg:hidden"
            >
              {isMenuOpen ? (
                <IoClose className="text-3xl transition-all duration-300" />
              ) : (
                <HiOutlineMenuAlt3 className="text-3xl transition-all duration-300" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}

      <MobileMenu
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        navLinks={navLinks}
      />
    </>
  );
}
