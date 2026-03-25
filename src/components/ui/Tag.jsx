import React from "react";

function Tag({ label, bgClass = "bg-red-50 dark:bg-red-950/30", textClass = "text-red-700 dark:text-red-300" }) {
  return (
    <span
      className={`px-3 py-1.5 ${bgClass} ${textClass} text-xs sm:text-sm font-medium rounded-lg pointer-events-none`}
    >
      {label}
    </span>
  );
}

export default Tag;
