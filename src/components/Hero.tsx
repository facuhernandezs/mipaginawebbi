import React from 'react';
import { BarChart2, PieChart, TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="pt-28 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
              Potencia tus datos con <span className="text-blue-600">TODA BI</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              Transforma tus datos en decisiones inteligentes con nuestras soluciones de análisis y visualización. Dashboards personalizados que impulsan el crecimiento de tu negocio.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#contacto" className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-all shadow-md hover:shadow-xl text-center">
                Solicitar Demo
              </a>
              <a href="#caracteristicas" className="bg-white hover:bg-gray-50 text-blue-600 font-medium px-6 py-3 rounded-lg border border-blue-200 transition-all shadow-sm hover:shadow-md text-center">
                Conocer más
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 relative">
            <div className="relative z-10 bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
              <div className="bg-blue-600 p-3 flex justify-between items-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-white text-sm font-medium">Dashboard Ejecutivo</span>
                <span></span>
              </div>
              <div className="p-4 bg-white">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-medium text-sm text-gray-700">Ventas Mensuales</h3>
                      <TrendingUp className="h-4 w-4 text-green-500" />
                    </div>
                    <p className="text-2xl font-bold text-gray-900">€128,540</p>
                    <span className="text-xs text-green-600">+12.5% vs. anterior</span>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-medium text-sm text-gray-700">Nuevos Clientes</h3>
                      <BarChart2 className="h-4 w-4 text-purple-500" />
                    </div>
                    <p className="text-2xl font-bold text-gray-900">1,482</p>
                    <span className="text-xs text-purple-600">+8.3% vs. anterior</span>
                  </div>
                </div>
                <div className="bg-gray-50 h-40 rounded-lg flex items-center justify-center mb-4">
                  <PieChart className="h-32 w-32 text-blue-500 opacity-70" />
                </div>
                <div className="bg-gray-50 h-24 rounded-lg flex items-center justify-center">
                  <div className="w-full px-4 flex space-x-3">
                    <div className="h-16 w-1/6 bg-blue-400 rounded-sm"></div>
                    <div className="h-12 w-1/6 bg-blue-500 rounded-sm"></div>
                    <div className="h-8 w-1/6 bg-blue-600 rounded-sm"></div>
                    <div className="h-14 w-1/6 bg-blue-700 rounded-sm"></div>
                    <div className="h-10 w-1/6 bg-blue-800 rounded-sm"></div>
                    <div className="h-6 w-1/6 bg-blue-900 rounded-sm"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-indigo-100 rounded-full opacity-50 z-0"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-blue-100 rounded-full opacity-50 z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;