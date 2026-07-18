// // MobileMenu.jsx
// import { useEffect } from "react";
// import {
//   IoClose,
//   IoArrowForward,
//   IoLogoLinkedin,
//   IoLogoTwitter,
//   IoLogoFacebook,
// } from "react-icons/io5";

// export default function MobileMenu({ isMenuOpen, setIsMenuOpen, navLinks }) {
//   useEffect(() => {
//     document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
//     const esc = (e) => e.key === "Escape" && setIsMenuOpen(false);
//     window.addEventListener("keydown", esc);
//     return () => {
//       document.body.style.overflow = "auto";
//       window.removeEventListener("keydown", esc);
//     };
//   }, [isMenuOpen, setIsMenuOpen]);

//   const close = () => setIsMenuOpen(false);

//   return (
//     <>
//       <div
//         onClick={close}
//         className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
//       />
//       <aside
//         className={`fixed right-0 top-0 z-50 flex h-screen w-full max-w-sm flex-col rounded-l-3xl bg-white shadow-2xl transition-transform duration-500 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
//       >
//         <div className="flex items-center justify-between border-b px-6 py-6">
//           <h2 className="text-3xl font-semibold">Menu</h2>
//           <button
//             onClick={close}
//             className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 hover:bg-lime-300 hover:rotate-90 transition"
//           >
//             <IoClose className="text-2xl" />
//           </button>
//         </div>
//         <nav className="flex-1 px-6 py-8">
//           <ul className="space-y-2">
//             {navLinks.map((i) => (
//               <li key={i.id}>
//                 <a
//                   href={i.href}
//                   onClick={close}
//                   className="group flex items-center justify-between rounded-2xl px-5 py-4 text-lg hover:bg-lime-300 transition"
//                 >
//                   <span>{i.title}</span>
//                   <IoArrowForward className="transition group-hover:translate-x-1" />
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </nav>
//         <div className="px-6">
//           <a
//             href="/contact"
//             onClick={close}
//             className="flex justify-center rounded-2xl bg-black px-6 py-4 text-white hover:bg-lime-300 hover:text-black transition"
//           >
//             Request a Quote
//           </a>
//         </div>
//         <div className="mt-8 border-t px-6 py-6">
//           <p className="mb-4 text-sm text-gray-500">Follow us</p>
//           <div className="flex gap-4">
//             {[IoLogoLinkedin, IoLogoTwitter, IoLogoFacebook].map((I, idx) => (
//               <a
//                 key={idx}
//                 href="/"
//                 className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 hover:bg-lime-300 transition"
//               >
//                 <I />
//               </a>
//             ))}
//           </div>
//         </div>
//       </aside>
//     </>
//   );
// }

import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  IoClose,
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
    const esc = (e) => e.key === "Escape" && setIsMenuOpen(false);
    window.addEventListener("keydown", esc);
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", esc);
    };
  }, [isMenuOpen, setIsMenuOpen]);

  const close = () => setIsMenuOpen(false);

  const socialLinks = [
    {
      icon: IoLogoLinkedin,
      url: "https://linkedin.com/company/your-company",
    },
    {
      icon: IoLogoTwitter,
      url: "https://twitter.com/your-company",
    },
    {
      icon: IoLogoFacebook,
      url: "https://facebook.com/your-company",
    },
    {
      icon: IoLogoInstagram,
      url: "https://instagram.com/your-company",
    },
    {
      icon: IoLogoGithub,
      url: "https://github.com/your-company",
    },
  ];

  return (
    <>
      <div
        onClick={close}
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-all duration-300 ${
          isMenuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-screen w-full max-w-sm flex-col overflow-y-auto bg-white shadow-2xl transition-transform duration-500 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="border-b border-gray-200 bg-[#191A23] p-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="rounded-full bg-[#B9FF66] px-4 py-2 text-xs font-bold uppercase tracking-wider">
                Positivus
              </span>
              {/* <h2 className="mt-4 text-3xl font-bold text-white">
                Explore Our Agency
              </h2> */}
              <p className="mt-2 text-gray-300">Build. Grow. Scale.</p>
            </div>
            <button
              onClick={close}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl transition hover:rotate-90 hover:bg-[#B9FF66]"
            >
              <IoClose />
            </button>
          </div>
        </div>

        <nav className="flex-1 p-6">
          <ul className="space-y-3">
            {navLinks.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={item.href}
                  onClick={close}
                  className={({ isActive }) =>
                    `group flex items-center justify-between rounded-2xl px-5 py-4 text-lg font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-[#B9FF66] text-black shadow-lg"
                        : "text-[#191A23] hover:bg-gray-100"
                    }`
                  }
                >
                  <span>{item.title}</span>
                  <IoArrowForward className="transition group-hover:translate-x-1" />
                </NavLink>
              </li>
            ))}
          </ul>

          <Link
            to="/contact"
            onClick={close}
            className="mt-8 flex items-center justify-center rounded-2xl bg-[#191A23] px-6 py-4 text-lg font-semibold text-white transition hover:bg-[#B9FF66] hover:text-black"
          >
            Request a Quote
          </Link>
        </nav>

        <div className="border-t border-gray-200 p-6">
          <p className="mb-4 font-semibold text-[#191A23]">Follow Us</p>
          <div className="flex gap-3">
            {socialLinks.map(({ icon: Icon, url }, index) => (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 transition-all duration-300 hover:-translate-y-1 hover:bg-[#B9FF66]"
              >
                <Icon className="text-xl" />
              </a>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}
