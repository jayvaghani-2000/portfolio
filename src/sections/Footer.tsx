import Container from "@/components/ui/Container";
import Icons from "@/components/ui/Icon";
import { useState } from "react";
import siteConfig from "@/config/site";

const primaryLinks = [
  {
    label: "About",
    href: "/#about",
  },
  {
    label: "Work",
    href: "/#work",
  },
  {
    label: "Customer Stories",
    href: "/#stories",
  },
  {
    label: "Contact",
    href: "/#contact",
  },
] as const;

const socials = [
  {
    label: "View GitHub profile",
    href: siteConfig.links.github,
    icon: Icons.GitHub,
  },
  {
    label: "View Instagram profile",
    href: siteConfig.links.instagram,
    icon: Icons.Instagram,
  },
  {
    label: "View LinkedIn profile",
    href: siteConfig.links.linkedin,
    icon: Icons.LinkedIn,
  },
] as const;

function Footer() {
  const [currentYear] = useState(() => new Date().getFullYear());

  return (
    <footer
      aria-label="Primary"
      className="relative z-10 w-full border-t-0.5 border-neutrals-600  bg-neutrals-900 py-3"
    >
      <Container>
        <nav
          aria-label="Primary"
          className="flex flex-wrap justify-center gap-6 py-12"
        >
          {primaryLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              className="text-sm uppercase text-neutrals-300 transition-colors hover:text-neutrals-50 focus-visible:text-neutrals-50"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <hr className="h-px border-0 bg-gradient-to-r from-transparent via-neutrals-600 to-transparent" />
        <div className="grid grid-cols-1 items-center justify-center gap-6 py-12 lg:grid-cols-3">
          <ul
            aria-label="Socials"
            className="flex flex-wrap justify-center gap-2"
          >
            {socials.map(({ label, href, icon: Icon }) => (
              <li key={href}>
                <a
                  href={href}
                  title={label}
                  rel="noreferrer"
                  target="_blank"
                  className="text-neutrals-300 transition-colors hover:text-neutrals-50 focus-visible:text-neutrals-50"
                >
                  <Icon aria-hidden className="h-7 w-7" />
                </a>
              </li>
            ))}
          </ul>
          <div className="flex justify-center lg:order-first lg:justify-start">
            <small className="text-xs text-neutrals-300">
              &copy; {currentYear} Jay Vaghani
            </small>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
