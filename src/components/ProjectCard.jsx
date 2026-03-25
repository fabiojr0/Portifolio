import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Tag from "./ui/Tag";

function ProjectCard({ project, index, isVisible }) {
  return (
    <div
      className={`group flex flex-col w-full max-w-sm rounded-2xl border border-zinc-100 dark:border-zinc-800 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-zinc-900/[0.04] dark:hover:shadow-black/20 hover:border-zinc-200 dark:hover:border-zinc-700 will-change-transform reveal ${isVisible ? "visible" : ""} stagger-${index + 1}`}
    >
    <div className="flex flex-col h-full bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden">
      {/* Project Image with overlay */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <img
          src={project.img}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Floating action on hover */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <a
            href={project.demoLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full text-red-600 hover:bg-white shadow-lg transition-colors"
          >
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-sm" />
          </a>
        </div>
      </div>

      {/* Project Content */}
      <div className="flex flex-col flex-1 p-5 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-zinc-800 dark:text-zinc-100 mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300 tracking-tight">
          {project.name}
        </h3>
        <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 mb-4 flex-1">
          {project.desc}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          {project.codeLink && (
            <a
              href={project.codeLink}
              target="_blank"
              rel="noreferrer"
              className="flex-1 inline-flex items-center justify-center px-4 py-2.5 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 font-medium rounded-xl hover:border-red-300 dark:hover:border-red-500 hover:text-red-600 dark:hover:text-red-400 transition-all duration-300 text-sm"
            >
              <FontAwesomeIcon icon={faGithub} className="mr-2" />
              Código
            </a>
          )}
          <a
            href={project.demoLink}
            target="_blank"
            rel="noreferrer"
            className="flex-1 inline-flex items-center justify-center px-4 py-2.5 bg-gradient-to-r from-red-500 to-rose-500 text-white font-medium rounded-xl shadow-md shadow-red-500/15 hover:shadow-lg hover:shadow-red-500/20 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 text-sm"
          >
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="mr-2 text-xs" />
            Visitar Site
          </a>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ProjectCard;
