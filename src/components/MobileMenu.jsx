import React from "react";
import NavLink from "./ui/NavLink";

function MobileMenu({ isOpen, links, onClose }) {
  return (
    <div
      className={`md:hidden overflow-hidden transition-all duration-300 ${
        isOpen ? "max-h-64 opacity-100 mt-4" : "max-h-0 opacity-0"
      }`}
    >
      <div className="flex flex-col gap-1 py-2 border-t border-zinc-200/50 dark:border-zinc-700/50">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            label={link.label}
            variant="mobile"
            onClick={onClose}
          />
        ))}
      </div>
    </div>
  );
}

export default MobileMenu;
