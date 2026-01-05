import React, { useState, useEffect } from 'react';
import { CHECKOUT_LINK } from '../constants';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 glass-card border-b-white/5' : 'py-6 bg-transparent border-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tighter text-white">
          SENSE <span className="text-[#FFD700]">STUDIO</span>
        </div>
        
        <a 
          href={CHECKOUT_LINK}
          className="hidden md:inline-flex items-center justify-center px-6 py-2 text-sm font-semibold tracking-wide text-[#050505] transition-transform duration-300 bg-[#FFD700] rounded-full hover:scale-105 hover:shadow-[0_0_15px_rgba(255,215,0,0.4)]"
        >
          QUERO COMPRAR
        </a>
      </div>
    </nav>
  );
};

export default Navbar;