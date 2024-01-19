import MobileNavigation from "@/components/layout/MobileNavigation";
import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";
import Image from "@/components/ui/Image";
import useScroll from "@/hooks/useScroll";
import useWindowSize from "@/hooks/useWindowSize";
import { cn } from "@/lib/utils";
import { useState } from "react";

const links = [
  {
    label: "About",
    href: "/#about",
  },
  {
    label: "Work",
    href: "/#work",
  },
] as const;

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const windowSize = useWindowSize();
  const { scrollY } = useScroll();

  const hasScrolledPastHeroSection = scrollY > windowSize.height - 1;
  const isBackgroundShown = hasScrolledPastHeroSection || isMobileMenuOpen;

  return (
    <header aria-label="Primary" className="fixed top-0 z-40 w-full">
      <div
        className={cn(
          "border-b-0.5 py-2 transition-colors duration-500",
          isBackgroundShown
            ? "border-neutrals-600 bg-neutrals-900/90 backdrop-blur-md supports-[backdrop-filter]:bg-neutrals-900/50"
            : "border-transparent bg-transparent "
        )}
      >
        <Container>
          <div className="grid grid-cols-3">
            <div className="flex items-center md:hidden">
              <MobileNavigation.Toggle
                isOpen={isMobileMenuOpen}
                onIsOpenChange={setIsMobileMenuOpen}
              />
            </div>
            <nav
              aria-label="Primary"
              className="hidden items-center gap-x-6 md:flex"
            >
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative p-1 text-sm uppercase text-tune_in-pastel after:absolute after:inset-x-0 after:bottom-0 after:h-px after:scale-x-0 after:bg-gradient-to-r after:from-transparent after:via-neutrals-200 after:to-transparent after:transition-transform hover:after:-scale-x-100 focus-visible:after:-scale-x-100"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center justify-center text-tune_in-pastel">
              <p>Jay Vaghani</p>
            </div>
            <div className="flex items-center justify-end">
              <ButtonLink
                href="/#contact"
                size="small"
                isGhost
                className="text-tune_in-pastel border-tune_in-pastel"
              >
                Hit me up
              </ButtonLink>
            </div>
          </div>
        </Container>
      </div>
      <MobileNavigation
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        links={links}
      />
      <MobileNavigation.Overlay
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
}

export default Header;
