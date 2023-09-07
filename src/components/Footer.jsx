import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useTheme } from '../hooks/useTheme';

function Footer() {
    const { theme , setTheme } = useTheme();
    const iconStyles = {
        color: theme === "dark" ? "#ffffff" : "#000000",
        fontSize: "32px"
    }

  return (
    <div className='flex flex-col justify-between items-center mb-6 dark:text-zinc-100'>
        <hr className="bg-varPink w-5/6 h-0.5"/>
        <div className='flex items-center justify-between w-screen p-4 sm:justify-around'>
            <p className='text-xs sm:text-base'>21982491902</p>
            <p className='text-xs sm:text-base'>dev.fabio.junior@gmail.com</p>
        </div>
        <div className='flex items-center justify-between w-screen p-4 sm:justify-around'>
            <span className='flex justify-between w-1/3 sm:justify-center sm:gap-4 sm:w-auto' >
            <a href='https://github.com/fabiojr0' target='_blank'>
                <FontAwesomeIcon icon={faGithub} style={iconStyles} />

            </a>
            <a href='https://www.linkedin.com/in/fabiojr0/' target='_blank'>
                <FontAwesomeIcon icon={faLinkedin} style={iconStyles} />

            </a>              
            </span>
            <h2 className='gradientBP gradientText font-semibold text-lg'>Fábio Júnior</h2>
        </div>
        <p className='text-xs text-zinc-600 sm:text-sm dark:text-zinc-200'>Direitos reservados ©2023</p>
    </div>
  )
  
  
}
export default Footer