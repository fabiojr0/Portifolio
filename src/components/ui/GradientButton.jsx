import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function GradientButton({ href, icon, children, className = "", ...props }) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center justify-center px-7 py-3.5 bg-gradient-to-r from-red-500 via-rose-500 to-rose-500 text-white font-semibold rounded-xl shadow-lg shadow-red-500/15 hover:shadow-xl hover:shadow-red-500/20 transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] text-sm sm:text-base animate-gradient ${className}`}
      {...props}
    >
      {icon && <FontAwesomeIcon icon={icon} className="mr-2 group-hover:animate-bounce" />}
      {children}
    </a>
  );
}

export default GradientButton;
