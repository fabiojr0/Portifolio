import {  faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import { Link } from 'react-scroll';

function Navbar() {
    return (
    <nav className='w-full bg-white/90 backdrop-blur-sm shadow-sm'>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            {/* Logo */}
            <div className="text-2xl font-bold text-gray-800">
                FJr
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:flex gap-8">
                <Link 
                    className='text-gray-600 hover:text-gray-800 font-medium cursor-pointer transition-colors' 
                    to='Home' 
                    spy={true} 
                    duration={500} 
                    offset={-80} 
                    smooth
                >
                    Início
                </Link>
                <Link 
                    className='text-gray-600 hover:text-gray-800 font-medium cursor-pointer transition-colors' 
                    to='Habilities' 
                    spy={true} 
                    duration={500} 
                    offset={-80} 
                    smooth
                >
                    Habilidades
                </Link>
                <Link 
                    className='text-gray-600 hover:text-gray-800 font-medium cursor-pointer transition-colors' 
                    to='Projects' 
                    spy={true} 
                    duration={500} 
                    offset={-80} 
                    smooth
                >
                    Projetos
                </Link>
                <Link 
                    className='text-gray-600 hover:text-gray-800 font-medium cursor-pointer transition-colors' 
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
            <div className="flex gap-4">
                <a
                    href="https://github.com/fabiojr0"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-600 hover:text-gray-800 transition-colors"
                >
                    <FontAwesomeIcon icon={faGithub} className="text-xl" />
                </a>
                <a
                    href="https://www.linkedin.com/in/fabiojr0/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-600 hover:text-gray-800 transition-colors"
                >
                    <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
                </a>
                <a
                    href="mailto:dev.fabiojunior@gmail.com"
                    className="text-gray-600 hover:text-gray-800 transition-colors"
                >
                </a>
            </div>
        </div>
    </nav>
    )
}

export default Navbar;