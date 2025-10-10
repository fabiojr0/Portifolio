import { faEye, faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-scroll";
import Navbar from "./Navbar";

function Home() {
  return (
    <div id="Home" className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <Navbar />
      </div>

      {/* Hero Section */}
      <div className="max-w-screen mx-auto px-6 pt-20 pb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-gray-800">Olá, sou o</h1>
              <h1 className="text-2xl md:text-4xl lg:text-7xl font-bold gradientText gradientBP">Fábio Júnior</h1>
              <p className="text-xl lg:text-2xl font-semibold text-gray-600">Desenvolvedor Front-end</p>
            </div>

            <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
              Especializado em criar experiências web modernas e responsivas. Transformo ideias em interfaces elegantes
              e funcionais.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="./curriculo_fabio_junior.pdf"
                target="_blank"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
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
                className="inline-flex items-center justify-center px-8 py-4 cursor-pointer bg-white text-gray-800 font-semibold rounded-lg border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 hover:scale-105"
              >
                <FontAwesomeIcon icon={faEye} className="mr-2" />
                Ver projetos
              </Link>
            </div>
          </div>

          {/* Right Visual */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="aspect-video h-80 lg:h-96 rounded-2xl shadow-2xl overflow-hidden">
              <img src="./gradient.png" alt="Abstract waves design" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
