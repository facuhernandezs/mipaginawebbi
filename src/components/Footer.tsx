import React from 'react';
import { BarChart2, Twitter, Instagram, Linkedin, Mail, PhoneCall } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <BarChart2 className="h-8 w-8 text-blue-400 mr-2" strokeWidth={2.5} />
              <span className="text-2xl font-bold">TODA BI</span>
            </div>
            <p className="text-gray-400 mb-6">
              Transformando datos en decisiones inteligentes para impulsar el crecimiento de tu negocio.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/todabi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/_todabi/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/todabi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/5491134567890"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <PhoneCall className="h-5 w-5" />
              </a>
              <a
                href="mailto:info@todabi.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Producto</h3>
            <ul className="space-y-2">
              <li><a href="#caracteristicas" className="text-gray-400 hover:text-white transition-colors">Características</a></li>
              <li><a href="#producto" className="text-gray-400 hover:text-white transition-colors">Dashboard</a></li>
              <li><a href="#precios" className="text-gray-400 hover:text-white transition-colors">Precios</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Guías</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Clientes</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Carreras</a></li>
              <li><a href="#contacto" className="text-gray-400 hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Términos de Servicio</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Política de Cookies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">GDPR</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} TODA BI. Todos los derechos reservados.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Español</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">English</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Français</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
