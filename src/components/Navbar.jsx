import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { navLinks } from "../data/portfolio";
import MobileMenu from "./MobileMenu";
import NavLink from "./ui/NavLink";
import SocialLinks from "./ui/SocialLinks";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass shadow-lg shadow-indigo-500/5" : "bg-transparent"
      }`}
    >
      <div className="  mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-xl sm:text-2xl font-bold">
            <span className="gradientText gradientBP">FJr</span>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} label={link.label} />
            ))}
          </div>

          {/* Right side: Social + Mobile toggle */}
          <div className="flex items-center gap-3 sm:gap-4">
            <SocialLinks />

            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-600 hover:text-indigo-600 transition-colors p-1"
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
