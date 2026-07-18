import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";

import logo from "../../assets/images/logos/logo.png";

import { HiOutlineMenuAlt3 } from "react-icons/hi";

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

          <Link to="/" className="group flex items-center gap-3">
            <img
              src={logo}
              alt="Positivus"
              className="h-10 w-auto transition duration-300 group-hover:rotate-6"
            />

            <h1 className="text-3xl font-bold tracking-tight text-black">
              Positivus
            </h1>
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
                          ? "bg-[#B9FF66] text-black shadow-xl shadow-[#B9FF66]/40"
                          : "text-gray-600 hover:bg-gray-100 hover:text-black"
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
              className="hidden items-center justify-center rounded-2xl border border-black px-8 py-4 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-black hover:text-white lg:flex"
            >
              Request a Quote
            </Link>

            <button
              onClick={() => setIsMenuOpen(true)}
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-200 text-3xl transition-all duration-300 hover:bg-[#B9FF66] lg:hidden"
              aria-label="Open Menu"
            >
              <HiOutlineMenuAlt3 />
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
