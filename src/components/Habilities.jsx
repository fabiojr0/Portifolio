import React from 'react';


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
            name: "MongoDB",
            img: "./tecnologies/mongodb.png",
        },
    ]

  return (
    <div className='flex flex-col justify-between items-center gap-10' id='Habilities'>
        <h2 className='gradientText gradientBP font-bold text-xl'>Habilidades</h2>
        <div className='grid grid-cols-4 grid-rows-3 gap-4 p-4 md:grid-cols-6 md:grid-rows-2 md:px-8 lg:px-40 md:gap-2 lg:gap-0'>
            {tecnologiesImgs.map((item) => {
                return (
                    <div className='group flex flex-col items-center justify-center drop-shadow-xl' key={item.name}>
                        <img src={item.img} className='w-full h-full p-3 sm:p-10 lg:p-16'  alt={item.name}/>
                        <p className='max-sm:hidden scale-0 group-hover:scale-100 font-semibold transition-all text-gray-700 dark:text-zinc-100'>{item.name}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Habilities
