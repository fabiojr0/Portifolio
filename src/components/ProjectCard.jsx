import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Tag from "./ui/Tag";

function ProjectCard({ project, index, isVisible }) {
  return (
    <div
      className={`group flex flex-col w-full max-w-sm rounded-2xl border border-gray-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10 hover:border-transparent will-change-transform reveal ${isVisible ? "visible" : ""} stagger-${index + 1}`}
    >
    <div className="flex flex-col h-full bg-white rounded-2xl overflow-hidden">
      {/* Project Image with overlay */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <img
          src={project.img}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Floating action on hover */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <a
            href={project.demoLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full text-indigo-600 hover:bg-white shadow-lg transition-colors"
          >
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-sm" />
          </a>
        </div>
      </div>

      {/* Project Content */}
      <div className="flex flex-col flex-1 p-5 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
          {project.name}
        </h3>
        <p className="text-sm sm:text-base text-gray-500 mb-4 flex-1">
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
              className="flex-1 inline-flex items-center justify-center px-4 py-2.5 border border-gray-200 text-gray-700 font-medium rounded-xl hover:border-indigo-300 hover:text-indigo-600 transition-all duration-300 text-sm"
            >
              <FontAwesomeIcon icon={faGithub} className="mr-2" />
              Código
            </a>
          )}
          <a
            href={project.demoLink}
            target="_blank"
            rel="noreferrer"
            className="flex-1 inline-flex items-center justify-center px-4 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium rounded-xl shadow-md shadow-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5 transition-all duration-300 text-sm"
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
