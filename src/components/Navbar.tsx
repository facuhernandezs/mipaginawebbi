import React, { useState, useEffect } from 'react';
import { Menu, X, BarChart2 } from 'lucide-react';
import { Link } from './ui/Link';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <BarChart2 
              className="h-8 w-8 text-blue-600 mr-2" 
              strokeWidth={2.5} 
            />
            <span className="text-2xl font-bold text-gray-900">TODA BI</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <Link href="#inicio" className="text-gray-800 hover:text-blue-600 transition-colors">Inicio</Link>
            <Link href="#caracteristicas" className="text-gray-800 hover:text-blue-600 transition-colors">Características</Link>
            <Link href="#producto" className="text-gray-800 hover:text-blue-600 transition-colors">Producto</Link>
            <Link href="#precios" className="text-gray-800 hover:text-blue-600 transition-colors">Precios</Link>
            <Link href="#testimonios" className="text-gray-800 hover:text-blue-600 transition-colors">Testimonios</Link>
            <Link href="#contacto" className="text-gray-800 hover:text-blue-600 transition-colors">Contacto</Link>
          </div>
          
          <div className="hidden md:flex">
            <a 
              href="#demo" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-lg transition-all shadow-md hover:shadow-lg"
            >
              Solicitar Demo
            </a>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full top-full left-0 py-4 animate-fadeIn">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link 
              href="#inicio" 
              className="text-gray-800 hover:text-blue-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </Link>
            <Link 
              href="#caracteristicas" 
              className="text-gray-800 hover:text-blue-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Características
            </Link>
            <Link 
              href="#producto" 
              className="text-gray-800 hover:text-blue-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Producto
            </Link>
            <Link 
              href="#precios" 
              className="text-gray-800 hover:text-blue-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Precios
            </Link>
            <Link 
              href="#testimonios" 
              className="text-gray-800 hover:text-blue-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Testimonios
            </Link>
            <Link 
              href="#contacto" 
              className="text-gray-800 hover:text-blue-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </Link>
            <a 
              href="#demo" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition-all text-center"
              onClick={() => setIsOpen(false)}
            >
              Solicitar Demo
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;