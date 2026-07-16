import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";

const socialLinks = [
  {
    id: 1,
    icon: <FaLinkedinIn />,
    href: "https://linkedin.com/moizy-codes",
    label: "LinkedIn",
  },
  {
    id: 2,
    icon: <FaGithub />,
    href: "https://github.com/moizycodes",
    label: "GitHub",
  },
  {
    id: 3,
    icon: <FaXTwitter />,
    href: "https://twitter.com/moizycodes",
    label: "Twitter",
  },
  {
    id: 4,
    icon: <FaInstagram />,
    href: "https://instagram.com/moizycodes",
    label: "Instagram",
  },
  {
    id: 5,
    icon: <FaFacebookF />,
    href: "https://facebook.com/moizycodes",
    label: "Facebook",
  },
];

function SocialLinks() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {socialLinks.map((item) => (
        <a
          key={item.id}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
          className="group relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-xl text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-[#B9FF66] hover:bg-[#B9FF66] hover:text-black hover:shadow-[0_0_35px_rgba(185,255,102,0.45)]"
        >
          {/* Glow Effect */}
          <span className="absolute inset-0 scale-0 rounded-2xl bg-[#B9FF66]/20 transition-transform duration-500 group-hover:scale-150"></span>

          {/* Icon */}
          <span className="relative z-10 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-125">
            {item.icon}
          </span>
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
