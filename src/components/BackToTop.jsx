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

    const handleScroll = () => {
        if (window.pageYOffset > 100) {
        setIsVisible(true);
        } else {
        setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
      <div className={`fixed max-sm:hidden rounded-full right-4 bottom-4 bg-varPink h-8 w-8 grid place-items-center
       hover:bg-varBlue transition-all ${isVisible ? 'scale-100' : 'scale-0'} cursor-pointer`} 
      onClick={scrollToTop}>
        <FontAwesomeIcon icon={faArrowUp} style={{color: "#ffffff"}}/>
      </div>
    )
  }
  
  export default BackToTop
  