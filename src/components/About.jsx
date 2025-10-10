import { faBriefcase, faGraduationCap, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function About() {
    const timelineData = [
        {
            title: "Formação Profissional",
            subtitle: "Unisociesc",
            description: "Atualmente cursando o 3º período de Sistemas de Informação",
            icon: faGraduationCap,
            iconBg: "bg-blue-500",
            year: "2022"
        },
        {
            title: "Experiência Profissional",
            subtitle: "Desenvolvedor Full-Stack",
            description: "Participando da empresa Júnior da Unidade Anima Consultoria",
            icon: faBriefcase,
            iconBg: "bg-purple-500",
            year: "2023+"
        },
        {
            title: "Trabalho Voluntário",
            subtitle: "Monitor",
            description: "Contribuo com monitorias de programação e desenvolvimento web",
            icon: faHeart,
            iconBg: "bg-pink-500",
            year: "2023+"
        }
    ];

  return (
    <div className="py-20 bg-white" id="About">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold gradientText gradientBP mb-4">
            Sobre mim
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Minha jornada no desenvolvimento de software
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-500"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {timelineData.map((item, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline Icon */}
                  <div className={`relative z-10 w-16 h-16 ${item.iconBg} rounded-full flex items-center justify-center text-white shadow-lg`}>
                    <FontAwesomeIcon icon={item.icon} className="text-xl" />
                  </div>
                  
                  {/* Timeline Content */}
                  <div className="ml-8 flex-1">
                    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-800 mb-1">
                            {item.title}
                          </h3>
                          <p className="text-lg font-semibold text-gray-600">
                            {item.subtitle}
                          </p>
                        </div>
                        <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                          {item.year}
                        </span>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
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
