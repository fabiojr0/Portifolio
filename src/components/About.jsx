import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function About() {
    const timelineData = [
        {
            title: "Formação Profissional",
            subtitle: "Unilasalle RJ",
            description: "Atualmente cursando o 7º período de Sistemas de Informação",
            icon: faGraduationCap,
            iconBg: "bg-blue-500",
            year: "2022 - Atualmente"
        },
        {
            title: "Experiência Profissional",
            subtitle: "Desenvolvedor Front-end - Baoo Market",
            description: "Desenvolvo o site e app, com a proposta de delivery focado em mercado.",
            icon: faBriefcase,
            iconBg: "bg-purple-500",
            year: "2023 - Atualmente"
        }
    ];

  return (
    <div className="py-16 sm:py-20 " id="About">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradientText gradientBP mb-4">
            Sobre mim
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Minha jornada no desenvolvimento de software
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line - Hidden on mobile */}
            <div className="hidden sm:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-500"></div>
            
            {/* Timeline Items */}
            <div className="space-y-8 sm:space-y-12">
              {timelineData.map((item, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline Icon */}
                  <div className={`relative z-10 w-12 h-12 sm:w-16 sm:h-16 ${item.iconBg} rounded-full flex items-center justify-center text-white shadow-lg flex-shrink-0`}>
                    <FontAwesomeIcon icon={item.icon} className="text-lg sm:text-xl" />
                  </div>
                  
                  {/* Timeline Content */}
                  <div className="ml-4 sm:ml-8 flex-1">
                    <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-all duration-300">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1">
                            {item.title}
                          </h3>
                          <p className="text-base sm:text-lg font-semibold text-gray-600">
                            {item.subtitle}
                          </p>
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-gray-500 bg-gray-100 px-2 sm:px-3 py-1 rounded-full self-start">
                          {item.year}
                        </span>
                      </div>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
