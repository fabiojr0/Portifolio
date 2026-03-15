import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function OutlineButton({ icon, children, className = "", ...props }) {
  return (
    <button
      className={`inline-flex items-center justify-center px-7 py-3.5 cursor-pointer bg-white text-gray-700 font-semibold rounded-xl border border-gray-200 hover:border-indigo-300 hover:text-indigo-600 transition-all duration-300 hover:-translate-y-0.5 shadow-sm hover:shadow-md text-sm sm:text-base ${className}`}
      {...props}
    >
      {icon && <FontAwesomeIcon icon={icon} className="mr-2" />}
      {children}
    </button>
  );
}

export default OutlineButton;
