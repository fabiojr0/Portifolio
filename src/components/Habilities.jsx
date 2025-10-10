import React from "react";

function Habilities() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "💻",
      bgColor: "bg-blue-500",
      skills: ["NextJS", "React Native","React", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Design",
      icon: "🎨",
      bgColor: "bg-purple-500",
      skills: ["Figma", "UI/UX", "Responsive Design"],
    },
    // {
    //   title: "Backend",
    //   icon: "⚙️",
    //   bgColor: "bg-blue-600",
    //   skills: ["Node.js", "Java", "Python"]
    // },
    {
      title: "Ferramentas",
      icon: "🔧",
      bgColor: "bg-pink-500",
      skills: ["Git", "SQL", "Redux", "Unity"],
    },
  ];

  return (
    <div className="py-16 sm:py-20" id="Habilities">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradientText gradientBP mb-4">Habilidades</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Tecnologias e ferramentas que utilizo para criar soluções inovadoras
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 min-h-64"
            >
              {/* Category Icon */}
              <div
                className={`w-12 h-12 sm:w-16 sm:h-16 ${category.bgColor} rounded-full flex items-center justify-center text-white text-xl sm:text-2xl mb-4`}
              >
                {category.icon}
              </div>

              {/* Category Title */}
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">{category.title}</h3>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-2 sm:px-3 py-1 bg-blue-50 text-blue-700 text-xs sm:text-sm font-medium rounded-full pointer-events-none"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Habilities;
