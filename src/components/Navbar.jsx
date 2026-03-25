import { faBars, faXmark, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { navLinks } from "../data/portfolio";
import { useTheme } from "../hooks/useTheme";
import MobileMenu from "./MobileMenu";
import NavLink from "./ui/NavLink";
import SocialLinks from "./ui/SocialLinks";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full sticky top-0 z-50 transition-all duration-300`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-xl sm:text-2xl font-bold">
            <span className="text-red-500">FJr</span>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} label={link.label} />
            ))}
          </div>

          {/* Right side: Theme toggle + Social + Mobile toggle */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-lg flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:text-red-500 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30 transition-all duration-300 cursor-pointer"
              aria-label="Alternar tema"
            >
              <FontAwesomeIcon
                icon={theme === "dark" ? faSun : faMoon}
                className="text-lg"
              />
            </button>

            <SocialLinks />

            {/* Mobile menu button */}
            <button
              className="md:hidden text-zinc-500 dark:text-zinc-400 hover:text-red-500 dark:hover:text-red-400 transition-colors p-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <FontAwesomeIcon
                icon={isMenuOpen ? faXmark : faBars}
                className="text-xl"
              />
            </button>
          </div>
        </div>

        <MobileMenu
          isOpen={isMenuOpen}
          links={navLinks}
          onClose={() => setIsMenuOpen(false)}
        />
      </div>
    </nav>
  );
}

export default Navbar;
