import React from "react";
import Tag from "./ui/Tag";

function SkillCard({ category, index, isVisible }) {
  return (
    <div
      className={`group relative bg-white rounded-2xl p-6 sm:p-8 transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-transparent hover:shadow-2xl hover:shadow-indigo-500/10 reveal ${isVisible ? "visible" : ""} stagger-${index + 1}`}
    >
      {/* Gradient border on hover */}
      <div
        className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 p-[1px]"
        style={{ background: "linear-gradient(135deg, var(--tw-gradient-stops))" }}
      />
      <div className="absolute inset-[1px] rounded-[15px] bg-white -z-[5] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Category Icon */}
      <div
        className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center text-white text-xl sm:text-2xl mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
      >
        {category.icon}
      </div>

      {/* Category Title */}
      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-5">
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
