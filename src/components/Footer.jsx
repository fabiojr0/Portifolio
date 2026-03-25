import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { navLinks, personalInfo } from "../data/portfolio";
import SocialLinks from "./ui/SocialLinks";

function FooterBrand() {
  return (
    <div className="sm:col-span-2 lg:col-span-1">
      <h3 className="text-2xl font-bold text-white mb-2">
        <span className="text-red-400">FJr</span>
      </h3>
      <p className="text-zinc-400 leading-relaxed text-sm sm:text-base mt-3">
        {personalInfo.shortDescription}
      </p>
    </div>
  );
}

function FooterQuickLinks() {
  return (
    <div>
      <h3 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider mb-4">
        Links Rápidos
      </h3>
      <ul className="space-y-2.5">
        {navLinks.map((link) => (
          <li key={link.to}>
            <a
              href={`#${link.to}`}
              className="text-zinc-400 hover:text-red-400 transition-colors duration-300 text-sm sm:text-base inline-flex items-center group"
            >
              <span className="w-0 group-hover:w-4 h-px bg-red-400 mr-0 group-hover:mr-2 transition-all duration-300" />
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterContact() {
  return (
    <div>
      <h3 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider mb-4">
        Contato
      </h3>
      <div className="space-y-3">
        <a
          href={personalInfo.phoneHref}
          className="flex items-center text-zinc-400 hover:text-red-400 transition-colors duration-300 text-sm sm:text-base"
        >
          <FontAwesomeIcon icon={faPhone} className="mr-3 text-red-500/60 text-sm" />
          {personalInfo.phone}
        </a>
        <a
          href={`mailto:${personalInfo.email}`}
          className="flex items-center text-zinc-400 hover:text-red-400 transition-colors duration-300 text-sm sm:text-base"
        >
          <FontAwesomeIcon icon={faEnvelope} className="mr-3 text-red-500/60 text-sm" />
          {personalInfo.email}
        </a>
        <SocialLinks variant="dark" className="mt-5" />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="relative overflow-hidden w-full">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-950" />

      {/* Subtle decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-red-500/[0.03] rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-rose-500/[0.03] rounded-full blur-3xl" />

      <div className="relative">
        <div className="h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12">
            <FooterBrand />
            <FooterQuickLinks />
            <FooterContact />
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-zinc-800/60">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <p className="text-zinc-500 text-xs sm:text-sm text-center">
              © {new Date().getFullYear()} {personalInfo.name}. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
