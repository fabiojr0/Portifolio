import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Footer() {
  return (
    <footer className="py-12 sm:py-16 border-t border-gray-700 w-full">
      <div className="w-full flex flex-col items-center mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* About Section */}
          <div className="sm:col-span-2 lg:col-span-1 ">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Fábio Júnior</h3>
            <p className=" leading-relaxed text-sm sm:text-base">
              Desenvolvedor Front-end apaixonado por criar experiências digitais incríveis.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#Home" className=" transition-colors text-sm sm:text-base">Início</a></li>
              <li><a href="#Habilities" className=" transition-colors text-sm sm:text-base">Habilidades</a></li>
              <li><a href="#Projects" className=" transition-colors text-sm sm:text-base">Projetos</a></li>
              <li><a href="#About" className=" transition-colors text-sm sm:text-base">Sobre</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faPhone} className="mr-3 text-blue-400 text-sm sm:text-base" />
                <span className=" text-sm sm:text-base">(21) 98249-1902</span>
              </div>
              <div className="flex items-center">
                <span className=" text-sm sm:text-base break-all">dev.fabiojunior@gmail.com</span>
              </div>
              <div className="flex gap-4 mt-4">
                <a
                  href="https://github.com/fabiojr0"
                  target="_blank"
                  rel="noreferrer"
                  className=" transition-colors"
                >
                  <FontAwesomeIcon icon={faGithub} className="text-xl sm:text-2xl" />
                </a>
                <a
                  href="https://www.linkedin.com/in/fabiojr0/"
                  target="_blank"
                  rel="noreferrer"
                  className=" transition-colors"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="text-xl sm:text-2xl" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
      </div>
        <div className="border-t border-gray-700 pt-6 sm:pt-8 text-center">
          <p className="text-gray-400 text-xs sm:text-sm">
            © 2025 Fábio Júnior. Todos os direitos reservados.
          </p>
        </div>
    </footer>
  )
}
export default Footer