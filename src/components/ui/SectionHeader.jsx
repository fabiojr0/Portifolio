import React from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

function SectionHeader({ subtitle, title, description }) {
  const [ref, isVisible] = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`text-center mb-14 sm:mb-20 reveal ${isVisible ? "visible" : ""}`}
    >
      <p className="text-sm font-medium text-indigo-500 tracking-wider uppercase mb-3">
        {subtitle}
      </p>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradientText gradientBP mb-4">
        {title}
      </h2>
      <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto">
        {description}
      </p>
    </div>
  );
}

export default SectionHeader;
