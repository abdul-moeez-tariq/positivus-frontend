import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const footerColumns = [
  {
    id: 1,
    title: "Company",
    links: [
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
        title: "Contact",
        href: "/contact",
      },
    ],
  },

  {
    id: 2,
    title: "Services",
    links: [
      {
        id: 1,
        title: "Web Development",
        href: "/services/web-development",
      },
      {
        id: 2,
        title: "Mobile App Development",
        href: "/services/mobile-development",
      },
      {
        id: 3,
        title: "UI/UX Design",
        href: "/services/ui-ux-design",
      },
      {
        id: 4,
        title: "Backend Development",
        href: "/services/backend-development",
      },
      {
        id: 5,
        title: "Cloud Solutions",
        href: "/services/cloud-solutions",
      },
    ],
  },

  {
    id: 3,
    title: "Resources",
    links: [
      {
        id: 1,
        title: "Blog",
        href: "/blog",
      },
      {
        id: 2,
        title: "Careers",
        href: "/careers",
      },
      {
        id: 3,
        title: "Privacy Policy",
        href: "/privacy-policy",
      },
      {
        id: 4,
        title: "Terms & Conditions",
        href: "/terms-and-conditions",
      },
      {
        id: 5,
        title: "Cookie Policy",
        href: "/cookie-policy",
      },
    ],
  },
];

function FooterLinks() {
  return (
    <div className="grid flex-1 grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {footerColumns.map((column, index) => (
        <motion.div
          key={column.id}
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
            duration: 0.5,
            delay: index * 0.15,
          }}
        >
          <h3 className="text-xl font-bold text-gray-900">{column.title}</h3>

          <ul className="mt-6 flex flex-col gap-4">
            {column.links.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.href}
                  className="group flex items-center gap-2 text-gray-600 transition-all duration-300 hover:text-blue-600"
                >
                  <span className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 opacity-0 transition-all duration-300 group-hover:opacity-100" />

                  <span className="transition-transform duration-300 group-hover:translate-x-2">
                    {link.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}

export default FooterLinks;
