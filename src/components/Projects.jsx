import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Projects() {
  const projects = [
    {
      name: "Baoo Market",
      desc: "App de Delivery focado em mercados",
      img: "./projects/Baoo.png",
      tags: ["React Native", "Next.js", "Tailwind", "TypeScript"],
      demoLink: "https://baoomarket.com.br/",
    },
    {
      name: "Monteiro Castilho ADV",
      desc: "Site institucional para um Escritório de Advocacia",
      img: "./projects/mcadv.png",
      tags: ["Wordpress"],
      demoLink: "https://monteirocastilhoadv.com.br/",
    },
  ];

  return (
    <div className="py-16 sm:py-20 bg-gray-50" id="Projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradientText gradientBP mb-4">Projetos</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Alguns dos projetos que desenvolvi recentemente
          </p>
        </div>

        {/* Projects Grid */}
        <div className="flex flex-row items-center justify-center gap-12 flex-wrap">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-between bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              {/* Project Image */}
              <div className="flex-1 h-40 sm:h-48 overflow-hidden">
                <img src={project.img} alt={project.name} className="w-full h-full object-cover" />
              </div>

              {/* Project Content */}
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{project.name}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4">{project.desc}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 sm:px-3 py-1 bg-blue-50 text-blue-700 text-xs sm:text-sm font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  {project.codeLink && (
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-3 sm:px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
                    >
                      <FontAwesomeIcon icon={faGithub} className="mr-2 text-xs sm:text-sm" />
                      Código
                    </a>
                  )}
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-3 sm:px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
                  >
                    <FontAwesomeIcon icon={faPlay} className="mr-2 text-xs sm:text-sm" />
                    Site
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
