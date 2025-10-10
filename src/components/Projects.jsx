import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Projects() {
  const projects = [
    {
      name: "Grao Market",
      desc: "App de Delivery focado em mercados",
      img: "./projects/Baoo.png",
      tags: ["React", "Node.js", "MongoDB"],
      codeLink: "https://github.com/fabiojr0/SoundScout",
      demoLink: "https://github.com/fabiojr0/SoundScout"
    },
    {
      name: "Sound Scout",
      desc: "Projeto consumindo da API do Spotify",
      img: "./projects/soundScout.png",
      tags: ["React", "TypeScript"],
      codeLink: "https://github.com/fabiojr0/SoundScout",
      demoLink: "https://github.com/fabiojr0/SoundScout"
    },
    {
      name: "Pipocando Filmes",
      desc: "Projeto consumindo APIs de filme do OMDb e TMDb",
      img: "./projects/Pipocando.png",
      tags: ["React", "API"],
      codeLink: "https://github.com/fabiojr0/Pipocando-filmes",
      demoLink: "https://github.com/fabiojr0/Pipocando-filmes"
    }
  ];

  return (
    <div className="py-20 bg-gray-50" id="Projects">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold gradientText gradientBP mb-4">
            Projetos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Alguns dos projetos que desenvolvi recentemente
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              {/* Project Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.desc}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    <FontAwesomeIcon icon={faGithub} className="mr-2" />
                    Código
                  </a>
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    <FontAwesomeIcon icon={faPlay} className="mr-2" />
                    Demo
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
