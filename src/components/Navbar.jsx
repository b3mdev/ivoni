import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-b from-gray-50 to-white py-4 shadow-sm">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="flex items-center">
            <img src="/assets/images/cortinas-ivoni-logo.svg" alt="Cortinas Ivoni" className="h-12 mr-3" />
            <span className="text-3xl font-['Playfair_Display'] text-primary hover:text-secondary transition-colors">
              Cortinas Ivoni
            </span>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'} text-secondary`}></i>
          </button>
        </div>

        {/* Navigation Menu */}
        <div className={`${menuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-center mt-4 md:mt-0 w-full md:w-auto`}>
          <ul className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-8 text-sm font-medium">
            <li><a href="#inicio" className="text-gray-700 hover:text-secondary transition-colors">Início</a></li>
            <li><a href="#sobre" className="text-gray-700 hover:text-secondary transition-colors">Sobre Nós</a></li>
            <li><a href="#servicos" className="text-gray-700 hover:text-secondary transition-colors">Serviços</a></li>
            <li><a href="#galeria" className="text-gray-700 hover:text-secondary transition-colors">Galeria</a></li>
            <li><a href="#contacto" className="text-gray-700 hover:text-secondary transition-colors">Contacto</a></li>
          </ul>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-4 mt-4 md:mt-0 md:ml-8">
            <div className="flex space-x-2 ml-2">
              <a href="#" className="text-gray-700 hover:text-secondary transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-700 hover:text-secondary transition-colors">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-700 hover:text-secondary transition-colors">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;