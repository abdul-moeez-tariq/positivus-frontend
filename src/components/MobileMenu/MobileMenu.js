import { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

import {
  IoArrowForward,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoGithub,
} from "react-icons/io5";

export default function MobileMenu({ isMenuOpen, setIsMenuOpen, navLinks }) {
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const socialLinks = [
    {
      icon: IoLogoLinkedin,
      url: "https://linkedin.com",
    },
    {
      icon: IoLogoTwitter,
      url: "https://twitter.com",
    },
    {
      icon: IoLogoFacebook,
      url: "https://facebook.com",
    },
    {
      icon: IoLogoInstagram,
      url: "https://instagram.com",
    },
    {
      icon: IoLogoGithub,
      url: "https://github.com",
    },
  ];

  return (
    <>
      {/* Overlay */}

      <div
        onClick={closeMenu}
        className={`fixed left-0 right-0 bottom-0 top-24 z-40 bg-black/20 backdrop-blur-sm transition-all duration-500 ${
          isMenuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      />

      {/* Sidebar */}

      <aside
        className={`fixed left-0 top-24 z-40 flex h-[calc(100vh-6rem)] w-full max-w-xs flex-col bg-white shadow-2xl transition-all duration-500 ease-out ${
          isMenuOpen
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0"
        }`}
      >
        {/* Scroll Area */}

        <div className="no-scrollbar flex-1 overflow-y-auto">
          <nav className="p-5">
            <ul className="flex flex-col gap-3">
              {navLinks.map((item) => (
                <li key={item.id}>
                  <NavLink
                    to={item.href}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `group flex items-center justify-between rounded-2xl px-5 py-4 text-lg font-medium transition-all duration-300 ${
                        isActive
                          ? "bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/20"
                          : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                      }`
                    }
                  >
                    <span>{item.title}</span>

                    <IoArrowForward className="transition-transform duration-300 group-hover:translate-x-2" />
                  </NavLink>
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              onClick={closeMenu}
              className="mt-8 flex items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-6 py-4 text-lg font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1"
            >
              Request a Quote
            </Link>
          </nav>

          {/* Social */}

          <div className="border-t border-gray-100 p-5">
            <p className="font-semibold text-gray-800">Follow Us</p>

            <div className="mt-4 flex gap-3">
              {socialLinks.map(({ icon: Icon, url }, index) => (
                <a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1"
                >
                  <Icon className="text-xl" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
