const quickLinks = [
  {
    id: 1,
    title: "About Us",
    href: "/about",
  },
  {
    id: 2,
    title: "Services",
    href: "#services",
  },
  {
    id: 3,
    title: "Case Studies",
    href: "#use-cases",
  },
  {
    id: 4,
    title: "Our Process",
    href: "#process",
  },
  {
    id: 5,
    title: "Team",
    href: "#team",
  },
];

const services = [
  {
    id: 1,
    title: "Web Development",
  },
  {
    id: 2,
    title: "Mobile Apps",
  },
  {
    id: 3,
    title: "UI / UX Design",
  },
  {
    id: 4,
    title: "SEO",
  },
  {
    id: 5,
    title: "Digital Marketing",
  },
];

const resources = [
  {
    id: 1,
    title: "Blog",
  },
  {
    id: 2,
    title: "Careers",
  },
  {
    id: 3,
    title: "Privacy Policy",
  },
  {
    id: 4,
    title: "Terms & Conditions",
  },
  {
    id: 5,
    title: "Contact",
    href: "/contact",
  },
];

function FooterLinks() {
  return (
    <div className="grid flex-1 grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {/* Quick Links */}
      <div>
        <h3 className="mb-6 text-xl font-semibold text-white">Quick Links</h3>

        <ul className="space-y-4">
          {quickLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className="text-gray-300 transition-all duration-300 hover:pl-2 hover:text-[#B9FF66]"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Services */}
      <div>
        <h3 className="mb-6 text-xl font-semibold text-white">Services</h3>

        <ul className="space-y-4">
          {services.map((service) => (
            <li key={service.id}>
              <button
                type="button"
                className="text-left text-gray-300 transition-all duration-300 hover:pl-2 hover:text-[#B9FF66]"
              >
                {service.title}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Resources */}
      <div>
        <h3 className="mb-6 text-xl font-semibold text-white">Resources</h3>

        <ul className="space-y-4">
          {resources.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                className="text-left text-gray-300 transition-all duration-300 hover:pl-2 hover:text-[#B9FF66]"
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FooterLinks;
