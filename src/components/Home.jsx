import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faMoon,
  faSun,
  faFileArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "./Navbar";
import { useTheme } from "../hooks/useTheme";

function Home() {
  const iconStyles = {
    color: "#ffffff",
    fontSize: "32px",
  };

  const { theme, setTheme } = useTheme();

  return (
    <div id="Home">
      <div className="relative">
        <img
          src="./wavesMobile.png"
          alt="waves"
          className="md:hidden w-screen object-cover"
        />
        <img
          src="./waves.png"
          alt="waves"
          className="max-md:hidden h-screen object-cover absolute right-0 top 0"
        />
        <div className="absolute top-0 p-4 w-screen flex justify-between items-center">
          <Navbar />
          <span className="flex justify-between items-center md:gap-8 max-md:w-screen">
            <a
              href="https://github.com/fabiojr0"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} style={iconStyles} />
            </a>
            <a
              href="https://www.linkedin.com/in/fabiojr0/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} style={iconStyles} />
            </a>
            <FontAwesomeIcon
              icon={theme === "dark" ? faSun : faMoon}
              style={iconStyles}
              className="cursor-pointer"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            />
          </span>
        </div>
        <div className="w-screen px-4 md:px-8 flex justify-between md:h-screen md:items-center md:pl-16">
          <span className="flex gap-2 flex-col">
            <h1 className="gradientText gradientBP text-lg font-bold whitespace-nowrap md:text-3xl">
              Olá, sou o Fábio Júnior
            </h1>
            <p className="text-sm font-semibold md:text-lg dark:text-white">
              Desenvolvedor Front-end
            </p>
            <button
              className="gradientBP text-white py-2 font-semibold relative w-40 active:translate-y-1 
              transition-all hover:text-zinc-200 shadow-lg"
            >
              <a href="./curriculo_fabio_junior.pdf" target="_blank">
                Baixar currículo <FontAwesomeIcon icon={faFileArrowDown} />
              </a>
              <img
                src="./blueWave.png"
                className="absolute h-10 -left-1 top-0"
              />
              <img
                src="./purpleWave.png"
                className="absolute h-10 -right-1 top-0"
              />
            </button>
          </span>
          <img
            src={
              theme === "dark"
                ? "./portifolioLogoWhite.png"
                : "./portifolioLogo.png"
            }
            className="h-24 w-24"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
