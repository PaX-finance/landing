import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const sections = [
  {
    title: "Product",
    links: [
      { name: "Overview", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Marketplace", href: "#" },
      { name: "Features", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "#" },
      { name: "Team", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Help", href: "#" },
      { name: "Sales", href: "#" },
      { name: "Advertise", href: "#" },
      { name: "Privacy", href: "#" },
    ],
  },
];

export const Footer = () => {
  return (
    <section className="py-24 text-white bg-[#222222]">
      <div className="px-4">
        <footer>
          <div className="flex flex-col items-start justify-between gap-12 lg:flex-row">
            {/* Brand Column */}
            <div className="max-w-xs">
              <div className="flex items-center gap-3">
                <p className="text-2xl font-bold hover:text-[#F26B3A] transition-colors">
                  Rooter
                </p>
              </div>
              <p className="mt-6 text-[15px] leading-relaxed">
              A smart payment terminal that cuts costs and boosts loyalty with every transaction.
              </p>
              <ul className="flex gap-4 mt-8">
                {[FaTwitter, FaLinkedin, FaGithub].map((Icon, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="hover:text-[#F26B3A] transition-colors"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Links Grid */}
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:gap-16">
              {sections.map((section) => (
                <div key={section.title}>
                  <h3 className="mb-5 font-semibold">{section.title}</h3>
                  <ul className="space-y-3.5">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-[15px] hover:text-[#F26B3A] transition-colors"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Copyright Section */}
          <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row gap-4 justify-between text-gray-400">
            <p className="text-sm">
              &copy; BUSL-1.1 {new Date().getFullYear()} - Rooter
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-[#F26B3A] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#F26B3A] transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};
