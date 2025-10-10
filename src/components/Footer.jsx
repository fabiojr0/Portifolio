import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {  faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Fábio Júnior</h3>
            <p className="text-gray-300 leading-relaxed">
              Desenvolvedor Front-end apaixonado por criar experiências digitais incríveis.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#Home" className="text-gray-300 hover:text-white transition-colors">Início</a></li>
              <li><a href="#Habilities" className="text-gray-300 hover:text-white transition-colors">Habilidades</a></li>
              <li><a href="#Projects" className="text-gray-300 hover:text-white transition-colors">Projetos</a></li>
              <li><a href="#About" className="text-gray-300 hover:text-white transition-colors">Sobre</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faPhone} className="mr-3 text-blue-400" />
                <span className="text-gray-300">(21) 98249-1902</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-300">dev.fabiojunior@gmail.com</span>
              </div>
              <div className="flex gap-4 mt-4">
                <a
                  href="https://github.com/fabiojr0"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <FontAwesomeIcon icon={faGithub} className="text-2xl" />
                </a>
                <a
                  href="https://www.linkedin.com/in/fabiojr0/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Fábio Júnior. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
export default Footer