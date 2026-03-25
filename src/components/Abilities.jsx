import React from "react";
import { skillCategories } from "../data/portfolio";
import { useScrollReveal } from "../hooks/useScrollReveal";
import SkillCard from "./SkillCard";
import SectionHeader from "./ui/SectionHeader";

function Habilities() {
  const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.05 });

  return (
    <div className="py-20 sm:py-28 relative" id="Habilities">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Skills"
          title="Habilidades"
          description="Tecnologias e ferramentas que utilizo para criar soluções inovadoras"
        />

        <div
          ref={gridRef}
          className="max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
        >
          {skillCategories.map((category, index) => (
            <SkillCard
              key={category.title}
              category={category}
              index={index}
              isVisible={gridVisible}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Habilities;
