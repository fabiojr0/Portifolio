import React from "react";

function Habilities() {
  const tecnologiesImgs = [
    {
      name: "React",
      img: "./tecnologies/react.png",
    },
    {
      name: "Tailwind CSS",
      img: "./tecnologies/tailwindcss.svg",
    },
    {
      name: "TypeScript",
      img: "./tecnologies/typescript.png",
    },
    {
      name: "JavaScript",
      img: "./tecnologies/js.png",
    },
    {
      name: "Figma",
      img: "./tecnologies/figma.png",
    },
    {
      name: "HTML",
      img: "./tecnologies/html.png",
    },
    {
      name: "CSS",
      img: "./tecnologies/css.png",
    },
    {
      name: "Java",
      img: "./tecnologies/java.png",
    },
    {
      name: "Python",
      img: "./tecnologies/python.png",
    },
    {
      name: "Node.js",
      img: "./tecnologies/node-js.png",
    },
    {
      name: "C#",
      img: "./tecnologies/c-sharp.png",
    },
    {
      name: "Unity",
      img: "./tecnologies/unity.png",
    },
    {
      name: "SQL",
      img: "./tecnologies/sql.png",
    },
    {
      name: "Git",
      img: "./tecnologies/git.png",
    },
  ];

  return (
    <div
      className="flex flex-col justify-between items-center gap-10"
      id="Habilities"
    >
      <h2 className="gradientText gradientBP font-bold text-xl">Habilidades</h2>
      <div className="flex flex-wrap justify-between md:justify-start gap-8 px-16 lg:px-40 2xl:px-96">
        {tecnologiesImgs.map((item) => {
          return (
            <div
              className="group flex flex-col items-center justify-center drop-shadow-xl gap-4 max-w-[80px]"
              key={item.name}
            >
              <img
                src={item.img}
                className="w-full aspect-square group-hover:scale-125 transition-all "
                alt={item.name}
              />
              <p className="lg:scale-0 text-center group-hover:scale-100 font-semibold transition-all text-gray-700 dark:text-zinc-100">
                {item.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Habilities;
