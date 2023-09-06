import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faMoon, faSun, faFileArrowDown } from '@fortawesome/free-solid-svg-icons';


function Home() {
    const iconStyles = {
      color: "#ffffff",
      fontSize: "32px"
    }

    return (
      <>
      <div className='relative'>
        <img src="./wavesMobile.png" alt="waves" className="md:hidden w-screen object-cover"/>
        <div className='absolute top-0 p-4 w-screen flex justify-between'>
          <a href='https://github.com/fabiojr0' target='_blank'>
            <FontAwesomeIcon icon={faGithub} style={iconStyles} />

          </a>
          <a href='https://www.linkedin.com/in/fabiojr0/' target='_blank'>
            <FontAwesomeIcon icon={faLinkedin} style={iconStyles} />

          </a>
          <FontAwesomeIcon icon={faMoon} style={iconStyles} />
          <FontAwesomeIcon icon={faSun} style={iconStyles} className='hidden' />
        </div>
        <div className='w-screen px-4 md:px-8 flex justify-between'>
          <span className='flex gap-2 flex-col'>
            <h1 className='gradientText gradientBP text-lg font-bold whitespace-nowrap'>Olá, sou o Fábio Júnior</h1>
            <p className='text-sm font-semibold'>Desenvolvedor Front-end</p>
              <button className='gradientBP text-white py-2 font-semibold relative w-40 active:translate-y-1 transition-all hover:text-black'>
                Baixar currículo <FontAwesomeIcon icon={faFileArrowDown} />
                <img src='./blueWave.png' className='absolute h-10 -left-1 top-0'/>
                <img src='./purpleWave.png' className='absolute h-10 -right-1 top-0'/>
              </button>
          </span>
          <img src='./portifolioLogo.png' className='h-24 w-24'/>
        </div>
      </div>
      </>
    )
}
  
export default Home;
  