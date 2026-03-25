import React from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

function SectionHeader({ subtitle, title, description }) {
  const [ref, isVisible] = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`text-center mb-14 sm:mb-20 reveal ${isVisible ? "visible" : ""}`}
    >
      <p className="text-sm font-semibold text-red-600 dark:text-red-400 tracking-widest uppercase mb-3">
        {subtitle}
      </p>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-800 dark:text-zinc-100 tracking-tight mb-4">
        {title}
      </h2>
      <p className="text-base sm:text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
        {description}
      </p>
    </div>
  );
}

export default SectionHeader;
