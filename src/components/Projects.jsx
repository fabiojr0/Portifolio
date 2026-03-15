import React from "react";
import { projects } from "../data/portfolio";
import { useScrollReveal } from "../hooks/useScrollReveal";
import ProjectCard from "./ProjectCard";
import SectionHeader from "./ui/SectionHeader";

function Projects() {
  const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.05 });

  return (
    <div className="py-20 sm:py-28 relative" id="Projects">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-50/30 to-transparent pointer-events-none" />

      <div className="relative   mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Portfolio"
          title="Projetos"
          description="Alguns dos projetos que desenvolvi recentemente"
        />

        <div
          ref={gridRef}
          className="flex flex-row items-stretch justify-center gap-8 lg:gap-10 flex-wrap"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={index}
              isVisible={gridVisible}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
