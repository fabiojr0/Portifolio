import React from "react";
import Tag from "./ui/Tag";

const iconMap = {
  code: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  palette: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="13.5" cy="6.5" r="0.5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r="0.5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r="0.5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r="0.5" fill="currentColor" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </svg>
  ),
  wrench: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
};

function SkillCard({ category, index, isVisible }) {
  return (
    <div
      className={`group relative bg-white dark:bg-zinc-900 rounded-2xl p-6 sm:p-8 transition-all duration-500 hover:-translate-y-2 border border-zinc-100 dark:border-zinc-800 hover:border-zinc-200 dark:hover:border-zinc-700 hover:shadow-xl hover:shadow-red-500/[0.04] dark:hover:shadow-black/20 reveal ${isVisible ? "visible" : ""} stagger-${index + 1}`}
    >
      {/* Category Icon */}
      <div
        className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg shadow-red-500/10 group-hover:scale-105 transition-transform duration-300`}
      >
        {iconMap[category.iconType]}
      </div>

      {/* Category Title */}
      <h3 className="text-lg sm:text-xl font-bold text-zinc-800 dark:text-zinc-100 mt-5 mb-5 tracking-tight">
        {category.title}
      </h3>

      {/* Skills Tags */}
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <Tag
            key={skill}
            label={skill}
            bgClass={category.lightBg}
            textClass={category.lightText}
          />
        ))}
      </div>
    </div>
  );
}

export default SkillCard;
