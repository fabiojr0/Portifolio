import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function GradientButton({ href, icon, children, className = "", ...props }) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center justify-center px-7 py-3.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-0.5 text-sm sm:text-base animate-gradient ${className}`}
      {...props}
    >
      {icon && <FontAwesomeIcon icon={icon} className="mr-2 group-hover:animate-bounce" />}
      {children}
    </a>
  );
}

export default GradientButton;
