import React from 'react';
import { Link } from 'react-scroll';
import { useTheme } from '../hooks/useTheme';

function Navbar() {
    const { theme , setTheme } = useTheme();

    return (
    <nav className='max-md:hidden h-16 flex justify-between items-center w-screen'>
        <img src={theme === "dark" ? "./portifolioLogoWhite.png" : "./portifolioLogo.png"} alt="logo" className='h-full'/>
        <div className="flex gap-4 dark:text-zinc-100 text-gray-500">
            <Link className=' font-semibold cursor-pointer' to='Home' spy={true} duration={500} offset={0} smooth>Inicio</Link>
            <Link className=' font-semibold cursor-pointer' to='Habilities' spy={true} duration={500} offset={0} smooth>Habilidades</Link>
            <Link className=' font-semibold cursor-pointer' to='Projects' spy={true} duration={500} offset={0} smooth>Projetos</Link>
            <Link className=' font-semibold cursor-pointer' to='About' spy={true} duration={500} offset={0} smooth>Sobre</Link>
        </div>
        <span></span>
    </nav>
    )
}

export default Navbar;