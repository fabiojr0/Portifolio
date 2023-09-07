import React from 'react';
import { faGraduationCap, faUserTie, faPersonChalkboard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function About() {
    const aboutInfos = [
        {
            title: "Formação Profissional",
            date: "2022.2",
            type: "Unilasalle",
            desc: "Atualmente cursando o 3º período de Sistemas de Informação",
            icon: <FontAwesomeIcon icon={faGraduationCap}/>
        },
        {
            title: "Experiência Profissional",
            date: "2023.1",
            type: "Desenvolvedor Full-Stack",
            desc: "Participando da empresa júnior da Unilasalle Ânimo Consultoria",
            icon: <FontAwesomeIcon icon={faUserTie}/>
        },
        {
            title: "Trabalho voluntario",
            date: "2023.1",
            type: "Monitor",
            desc: "Contribuo com monitorias de programação e desenvolvimento web",
            icon: <FontAwesomeIcon icon={faPersonChalkboard} />
        }
    ]

  return (
    <div className='flex flex-col items-center' id='About'>
        <h2 className='gradientText gradientBP font-bold text-xl'>Sobre mim</h2>
        <div className='flex flex-col items-start p-4 gap-6 sm:flex-row sm:items-center sm:justify-around sm:w-screen sm:p-16 sm:gap-8'>
            {
                aboutInfos.map((item) => {
                    return (
                        <div className='flex flex-col items-start gap-2 sm:w-1/4' key={item.title}>
                            <h3 className='font-semibold flex gap-1 lg:text-lg dark:text-zinc-100'>{item.title}{item.icon}</h3>
                            <div className='flex items-center gap-4'>
                                <p className='text-sm lg:text-base dark:text-zinc-200'>{item.date}</p>
                                <hr className='bg-white w-0.5 h-4 '/>
                                <p className='text-sm lg:text-base dark:text-zinc-200'>{item.type}</p>
                            </div>
                            <p className='text-sm lg:text-base dark:text-zinc-200'>{item.desc}</p>
                        </div>
                    ) 
                    
                })
            }
        </div>
    </div>
  )
}

export default About
