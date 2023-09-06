import React from 'react';


function Projects() {
    const projectsImgs = [
        {
            name: "Pipocando Filmes",
            desc: "Projeto React - Tailwind , consumindo APIs de filme da OMDB e TMDB.",
            img : "./projects/Pipocando.png",
        },
        {
            name: "Flor do Dia",
            desc: "Trabalho para a faculdade, a ideia foi fazer floricultura fictícia.",
            img : "./projects/FlorDoDia.png",
        },
        {
            name: "Marvelous",
            desc: "Projeto Tailwind, consumindo API da Marvel.",
            img : "./projects/Marvelous.png",
        },
        {
            name: "Delícias da Carne",
            desc: "Trabalho para re-criar o site Delícias da carne Exóticas.",
            img : "./projects/DeliciasDaCarne.png"
        }
    ]

  return (
    <div className='flex flex-col justify-between items-center gap-10'>
        <h2 className='gradientText gradientBP font-bold text-xl'>Projetos</h2>
        <div className='flex flex-col items-center p-2 gap-2'>
            {projectsImgs.map((item) => {
                return (
                    <>
                    <div className='flex items-center gap-1 w-full' key={item.name}>
                        <img src={item.img} className='h-20 w-28 p-2 rounded-xl object-cover' />
                        <div className='flex flex-col'>
                            <h3 className='font-semibold text-sm'>{item.name}</h3>
                            <p className='text-xs'>{item.desc}</p>
                        </div>
                    </div>
                    <hr className="bg-varPink w-5/6 h-0.5"/>
                    </>
                ) 
                
            })}
        </div>
    </div>
  )
}

export default Projects
