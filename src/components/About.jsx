import React from 'react';


function About() {
    const aboutInfos = [
        {
            title: "Formação Profissional",
            date: "2022.2",
            type: "Unilasalle",
            desc: "Atualmente cursando o 3º período de Sistemas de Informação",
        },
        {
            title: "Experiência Profissional",
            date: "2023.1",
            type: "Desenvolvedor Full-Stack",
            desc: "Participando da empresa júnior da Unilasalle Ânimo Consultoria",
        },
        {
            title: "Trabalho voluntario",
            date: "2023.1",
            type: "Monitor",
            desc: "Contribuo com monitorias de programação e desenvolvimento web",
        }
    ]

  return (
    <div className='flex flex-col items-center'>
        <h2 className='gradientText gradientBP font-bold text-xl'>Sobre mim</h2>
        <div className='flex flex-col items-start p-4 gap-6'>
            {
                aboutInfos.map((item) => {
                    return (
                        <div className='flex flex-col items-start gap-2'>
                            <h3 className='font-semibold'>{item.title}</h3>
                            <div className='flex items-center gap-4'>
                                <p className='text-sm'>{item.date}</p>
                                <hr className='bg-varPink w-0.5 h-4'/>
                                <p className='text-sm'>{item.type}</p>
                            </div>
                            <p className='text-sm'>{item.desc}</p>
                        </div>
                    ) 
                    
                })
            }
        </div>
    </div>
  )
}

export default About
