import { faEye, faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-scroll";
import Navbar from "./Navbar";

function Home() {
  return (
    <div id="Home" className="min-h-[70vh] bg-gray-50 pt-20">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <Navbar />
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="flex-1 space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="space-y-3 lg:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800">Olá, sou o</h1>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold gradientText gradientBP">
                Fábio Júnior
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-600">Desenvolvedor Front-end</p>
            </div>

            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Especializado em criar experiências web modernas e responsivas. Transformo ideias em interfaces elegantes
              e funcionais.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="./curriculo_fabio_junior.pdf"
                target="_blank"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm sm:text-base"
              >
                <FontAwesomeIcon icon={faFileArrowDown} className="mr-2" />
                Baixar currículo
              </a>
              <Link
                to="Projects"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 cursor-pointer bg-white text-gray-800 font-semibold rounded-lg border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
              >
                <FontAwesomeIcon icon={faEye} className="mr-2" />
                Ver projetos
              </Link>
            </div>
          </div>

          {/* Right Visual */}
          <div className="flex-1 flex justify-center lg:justify-end w-full lg:w-auto">
            <div className="aspect-video w-[90vw] lg:max-w-[35vw] rounded-2xl shadow-2xl overflow-hidden">
              <img src="./gradient.png" alt="Abstract waves design" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
