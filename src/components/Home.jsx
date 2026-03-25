import { faEye, faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-scroll";
import { personalInfo } from "../data/portfolio";
import Navbar from "./Navbar";
import AnimatedBlobs from "./ui/AnimatedBlobs";
import GradientButton from "./ui/GradientButton";

function HeroImage() {
  return (
    <div className="flex-1 flex justify-center lg:justify-end w-full lg:w-auto animate-fadeInUp-delay-3">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-rose-500/10 rounded-3xl blur-2xl" />
        <div className="relative aspect-video w-[85vw] lg:max-w-[32vw] rounded-3xl shadow-xl shadow-zinc-900/5 dark:shadow-black/20 overflow-hidden animate-float border border-zinc-200/60 dark:border-zinc-700/40">
          <img
            src={personalInfo.heroImage}
            alt="Fábio programando"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

function HeroContent() {
  return (
    <div className="flex-1 space-y-6 lg:space-y-8 text-center lg:text-left">
      <div className="space-y-3 lg:space-y-4 animate-fadeInUp">
        <p className="text-sm sm:text-base font-semibold text-red-600 dark:text-red-400 tracking-widest uppercase">
          {personalInfo.role}
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-zinc-800 dark:text-zinc-100 tracking-tight leading-none">
          Olá, sou o
        </h1>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-zinc-900 dark:text-white tracking-tight leading-none">
          {personalInfo.name}
          <span className="text-red-500">.</span>
        </h1>
      </div>

      <p className="text-base sm:text-lg text-zinc-500 dark:text-zinc-400 max-w-[55ch] mx-auto lg:mx-0 leading-relaxed animate-fadeInUp-delay-1">
        {personalInfo.description}
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fadeInUp-delay-2">
        <GradientButton
          href={personalInfo.resumeUrl}
          target="_blank"
          icon={faFileArrowDown}
        >
          Baixar currículo
        </GradientButton>

        <Link
          to="Projects"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="inline-flex items-center justify-center px-7 py-3.5 cursor-pointer bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 font-semibold rounded-xl border border-zinc-200 dark:border-zinc-700 hover:border-red-300 dark:hover:border-red-500 hover:text-red-600 dark:hover:text-red-400 transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] shadow-sm hover:shadow-md text-sm sm:text-base"
        >
          <FontAwesomeIcon icon={faEye} className="mr-2" />
          Ver projetos
        </Link>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div id="Home" className="relative min-h-[80vh] w-full flex justify-center items-center bg-[#fafafa] dark:bg-zinc-950 transition-colors duration-300">
      <div className="h-full w-full max-w-7xl">
        <div className="absolute top-0 left-0 right-0 z-10">
          <Navbar />
        </div>

        <AnimatedBlobs />

        <div className="relative mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-36 pb-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            <HeroContent />
            <HeroImage />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
