import React from "react";

function Tag({ label, bgClass = "bg-indigo-50", textClass = "text-indigo-600" }) {
  return (
    <span
      className={`px-3 py-1.5 ${bgClass} ${textClass} text-xs sm:text-sm font-medium rounded-lg pointer-events-none`}
    >
      {label}
    </span>
  );
}

export default Tag;
