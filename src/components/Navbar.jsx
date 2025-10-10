import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import { Link } from 'react-scroll';

function Navbar() {
    return (
    <nav className='w-full bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
            <div className="flex justify-between items-center">
                {/* Logo */}
                <div className="text-xl sm:text-2xl font-bold text-gray-800">
                    FJr
                </div>
                
                {/* Navigation Links - Hidden on mobile */}
                <div className="hidden md:flex gap-6 lg:gap-8">
                    <Link 
                        className='text-gray-600 hover:text-gray-800 font-medium cursor-pointer transition-colors text-sm lg:text-base' 
                        to='Home' 
                        spy={true} 
                        duration={500} 
                        offset={-80} 
                        smooth
                    >
                        Início
                    </Link>
                    <Link 
                        className='text-gray-600 hover:text-gray-800 font-medium cursor-pointer transition-colors text-sm lg:text-base' 
                        to='Habilities' 
                        spy={true} 
                        duration={500} 
                        offset={-80} 
                        smooth
                    >
                        Habilidades
                    </Link>
                    <Link 
                        className='text-gray-600 hover:text-gray-800 font-medium cursor-pointer transition-colors text-sm lg:text-base' 
                        to='Projects' 
                        spy={true} 
                        duration={500} 
                        offset={-80} 
                        smooth
                    >
                        Projetos
                    </Link>
                    <Link 
                        className='text-gray-600 hover:text-gray-800 font-medium cursor-pointer transition-colors text-sm lg:text-base' 
                        to='About' 
                        spy={true} 
                        duration={500} 
                        offset={-80} 
                        smooth
                    >
                        Sobre
                    </Link>
                </div>
                
                {/* Social Icons */}
                <div className="flex gap-3 sm:gap-4">
                    <a
                        href="https://github.com/fabiojr0"
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-600 hover:text-gray-800 transition-colors"
                    >
                        <FontAwesomeIcon icon={faGithub} className="text-lg sm:text-xl" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/fabiojr0/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-600 hover:text-gray-800 transition-colors"
                    >
                        <FontAwesomeIcon icon={faLinkedin} className="text-lg sm:text-xl" />
                    </a>
                </div>
            </div>
        </div>
    </nav>
    )
}

export default Navbar;