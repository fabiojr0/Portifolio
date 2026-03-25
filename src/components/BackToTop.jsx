import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"

function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.pageYOffset > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
      <button
        className={`fixed right-5 bottom-5 w-11 h-11 rounded-xl bg-gradient-to-br from-red-500 to-rose-500 text-white grid place-items-center shadow-lg shadow-red-500/15 hover:shadow-xl hover:shadow-red-500/20 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 ${
          isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        } cursor-pointer z-40`}
        onClick={scrollToTop}
        aria-label="Voltar ao topo"
      >
        <FontAwesomeIcon icon={faArrowUp} className="text-sm" />
      </button>
    )
}

export default BackToTop
