import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { socialLinks } from "../../data/portfolio";

function SocialLinks({ className = "", iconSize = "text-lg sm:text-xl", variant = "light" }) {
  const variants = {
    light: "text-zinc-400 dark:text-zinc-500 hover:text-red-600 dark:hover:text-red-400",
    dark: "w-10 h-10 rounded-xl bg-zinc-800/80 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-red-500/20",
  };

  const linkClass = variants[variant] || variants.light;

  if (variant === "dark") {
    return (
      <div className={`flex gap-3 ${className}`}>
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className={`${linkClass} transition-all duration-300`}
            aria-label={link.label}
          >
            <FontAwesomeIcon icon={link.icon} className="text-lg" />
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className={`flex gap-3 sm:gap-4 ${className}`}>
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.url}
          target="_blank"
          rel="noreferrer"
          className={`${linkClass} transition-colors duration-300`}
          aria-label={link.label}
        >
          <FontAwesomeIcon icon={link.icon} className={iconSize} />
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
