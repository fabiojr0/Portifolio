import React from "react";
import LanguageLabel from "./LanguageLabel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useTheme } from "../hooks/useTheme";

function Projects() {
  const { theme, setTheme } = useTheme();
  const iconStyles = {
    color: theme === "dark" ? "#ffffff" : "#000000",
    fontSize: "20px",
  };

  const projectsImgs = [
    {
      name: "Sound Scout",
      desc: "Projeto consumindo da API do Spotify.",
      img: "./projects/soundScout.png",
      languages: [{ React: "bg-blue-500" }, { Tailwind: "bg-sky-500" }],
      repoLink: "https://github.com/fabiojr0/SoundScout",
      hr: true,
    },
    {
      name: "Pipocando Filmes",
      desc: "Projeto consumindo APIs de filme da OMDB e TMDB.",
      img: "./projects/Pipocando.png",
      languages: [{ React: "bg-blue-500" }, { Tailwind: "bg-sky-500" }],
      repoLink: "https://github.com/fabiojr0/Pipocando-filmes",
      hr: true,
    },
    {
      name: "Flor do Dia",
      desc: "Trabalho para a faculdade, a ideia foi fazer floricultura fictícia.",
      img: "./projects/FlorDoDia.png",
      languages: [
        { HTML: "bg-orange-700" },
        { CSS: "bg-blue-700" },
        { JavaScript: "bg-yellow-400" },
      ],
      repoLink: "https://github.com/fabiojr0/Flor-do-Dia",
      hr: true,
    },
    {
      name: "Marvelous",
      desc: "Projeto Tailwind, consumindo API da Marvel.",
      img: "./projects/Marvelous.png",
      languages: [
        { HTML: "bg-orange-700" },
        { Tailwind: "bg-sky-500" },
        { JavaScript: "bg-yellow-400" },
      ],
      repoLink: "https://github.com/fabiojr0/MarveLous",
      hr: false,
    },
  ];

  return (
    <div
      className="flex flex-col justify-between items-center gap-10"
      id="Projects"
    >
      <h2 className="gradientText gradientBP font-bold text-xl">Projetos</h2>
      <div className="flex flex-col items-center p-2 gap-6 sm:items-start w-full">
        {projectsImgs.map((item) => {
          return (
            <a
              key={item.name}
              className="flex flex-col items-center gap-6 cursor-pointer"
              target="_blank"
              href={item.repoLink}
              rel="noreferrer"
            >
              <div className="flex max-lg:flex-wrap items-center gap-4 w-screen px-4 sm:h-60 sm:px-16">
                <img
                  src={item.img}
                  className="h-2/3 aspect-[19/9] rounded-xl sm:w-auto drop-shadow-xl lg:h-full"
                />
                <div className="flex flex-col gap-2">
                  <div className="cursor-pointer flex gap-1 items-center dark:text-zinc-100">
                    <h3 className="font-semibold text-sm sm:text-xl">
                      {item.name}
                    </h3>{" "}
                    <FontAwesomeIcon icon={faGithub} style={iconStyles} />
                  </div>
                  <div className="flex items-center gap-2">
                    {item.languages.map((language) => {
                      return (
                        <LanguageLabel
                          color={Object.values(language)}
                          name={Object.keys(language)}
                          key={Object.keys(language)}
                        />
                      );
                    })}
                  </div>
                  <p className="text-xs sm:text-base dark:text-zinc-200">
                    {item.desc}
                  </p>
                </div>
              </div>
              {item.hr === true ? (
                <hr className="bg-varPink w-5/6 h-0.5 sm:w-4/5" />
              ) : (
                <></>
              )}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
