import React from 'react';
import { ChevronRight, BarChart2, PieChart, LineChart, Activity } from 'lucide-react';

const ProductShowcase: React.FC = () => {
  return (
    <section id="producto" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="bg-blue-50 text-blue-600 text-sm font-medium px-4 py-1 rounded-full">NUESTRO PRODUCTO</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-gray-900">Una plataforma completa de análisis</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Descubre cómo nuestro dashboard puede transformar tus datos en insights estratégicos para tu empresa.
          </p>
        </div>
        
        <div className="relative mx-auto max-w-5xl">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200">
            <div className="flex items-center bg-gray-800 px-4 py-2">
              <div className="flex space-x-2 mr-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex space-x-4 text-gray-400 text-sm">
                <span className="text-white">Dashboard Principal</span>
                <span>Análisis de Ventas</span>
                <span>Comportamiento de Usuarios</span>
              </div>
            </div>
            
            <div className="grid grid-cols-12 gap-4 p-6">
              {/* Sidebar */}
              <div className="col-span-2 bg-gray-50 rounded-lg p-3">
                <div className="flex items-center space-x-2 mb-6">
                  <BarChart2 className="h-5 w-5 text-blue-600" />
                  <span className="font-medium text-sm">TODA BI</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 bg-blue-50 text-blue-600 p-2 rounded-md">
                    <BarChart2 className="h-4 w-4" />
                    <span className="text-sm">Dashboard</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600 p-2 rounded-md hover:bg-gray-100">
                    <PieChart className="h-4 w-4" />
                    <span className="text-sm">Reportes</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600 p-2 rounded-md hover:bg-gray-100">
                    <LineChart className="h-4 w-4" />
                    <span className="text-sm">Análisis</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600 p-2 rounded-md hover:bg-gray-100">
                    <Activity className="h-4 w-4" />
                    <span className="text-sm">Métricas</span>
                  </div>
                </div>
              </div>
              
              {/* Main content */}
              <div className="col-span-10 space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-800">Dashboard Ejecutivo</h3>
                  <div className="flex space-x-2">
                    <select className="px-3 py-1 border border-gray-200 rounded-md text-sm text-gray-600 bg-white">
                      <option>Último Mes</option>
                      <option>Último Trimestre</option>
                      <option>Último Año</option>
                    </select>
                    <button className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm font-medium">
                      Exportar
                    </button>
                  </div>
                </div>
                
                {/* KPI Cards */}
                <div className="grid grid-cols-4 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Ingresos Totales</div>
                    <div className="text-2xl font-bold text-gray-900">€849,521</div>
                    <div className="text-xs text-green-600 mt-1">+24.5% vs. anterior</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Usuarios Activos</div>
                    <div className="text-2xl font-bold text-gray-900">12,841</div>
                    <div className="text-xs text-green-600 mt-1">+8.3% vs. anterior</div>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Tiempo Promedio</div>
                    <div className="text-2xl font-bold text-gray-900">3.8 min</div>
                    <div className="text-xs text-red-600 mt-1">-2.1% vs. anterior</div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Conversión</div>
                    <div className="text-2xl font-bold text-gray-900">5.34%</div>
                    <div className="text-xs text-green-600 mt-1">+1.2% vs. anterior</div>
                  </div>
                </div>
                
                {/* Charts */}
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-8 bg-white border border-gray-100 p-4 rounded-lg shadow-sm">
                    <h4 className="text-sm font-medium text-gray-700 mb-4">Tendencia de Ingresos por Canal</h4>
                    <div className="h-48 w-full bg-gray-50 rounded-lg flex items-end px-4 space-x-2">
                      <div className="h-1/4 w-1/12 bg-blue-300 rounded-t"></div>
                      <div className="h-2/5 w-1/12 bg-blue-400 rounded-t"></div>
                      <div className="h-1/3 w-1/12 bg-blue-500 rounded-t"></div>
                      <div className="h-3/5 w-1/12 bg-blue-500 rounded-t"></div>
                      <div className="h-2/4 w-1/12 bg-blue-600 rounded-t"></div>
                      <div className="h-3/4 w-1/12 bg-blue-600 rounded-t"></div>
                      <div className="h-1/2 w-1/12 bg-blue-700 rounded-t"></div>
                      <div className="h-4/5 w-1/12 bg-blue-700 rounded-t"></div>
                      <div className="h-3/5 w-1/12 bg-blue-800 rounded-t"></div>
                      <div className="h-full w-1/12 bg-blue-800 rounded-t"></div>
                      <div className="h-4/6 w-1/12 bg-blue-900 rounded-t"></div>
                      <div className="h-5/6 w-1/12 bg-blue-900 rounded-t"></div>
                    </div>
                  </div>
                  <div className="col-span-4 bg-white border border-gray-100 p-4 rounded-lg shadow-sm">
                    <h4 className="text-sm font-medium text-gray-700 mb-4">Distribución de Usuarios</h4>
                    <div className="h-48 w-full bg-gray-50 rounded-lg flex items-center justify-center">
                      <div className="relative h-32 w-32 rounded-full border-8 border-blue-500 flex items-center justify-center">
                        <div className="absolute h-24 w-24 rounded-full border-8 border-green-400"></div>
                        <div className="absolute h-16 w-16 rounded-full border-8 border-yellow-300"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white border border-gray-100 p-4 rounded-lg shadow-sm">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-sm font-medium text-gray-700">Principales Métricas por Segmento</h4>
                    <button className="text-blue-600 text-sm flex items-center">
                      Ver detalles <ChevronRight className="h-4 w-4 ml-1" />
                    </button>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="min-w-full">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Segmento</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ingresos</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Usuarios</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Conversión</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tendencia</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-4 py-3 text-sm text-gray-900">Empresarial</td>
                          <td className="px-4 py-3 text-sm text-gray-900">€342,651</td>
                          <td className="px-4 py-3 text-sm text-gray-900">1,426</td>
                          <td className="px-4 py-3 text-sm text-gray-900">8.3%</td>
                          <td className="px-4 py-3 text-sm text-green-600">↑ 12.4%</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm text-gray-900">PYME</td>
                          <td className="px-4 py-3 text-sm text-gray-900">€248,932</td>
                          <td className="px-4 py-3 text-sm text-gray-900">3,841</td>
                          <td className="px-4 py-3 text-sm text-gray-900">6.7%</td>
                          <td className="px-4 py-3 text-sm text-green-600">↑ 8.9%</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm text-gray-900">Startup</td>
                          <td className="px-4 py-3 text-sm text-gray-900">€156,284</td>
                          <td className="px-4 py-3 text-sm text-gray-900">5,912</td>
                          <td className="px-4 py-3 text-sm text-gray-900">4.2%</td>
                          <td className="px-4 py-3 text-sm text-red-600">↓ 2.1%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-100 rounded-full opacity-50 z-0"></div>
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-indigo-100 rounded-full opacity-50 z-0"></div>
        </div>
        
        <div className="flex justify-center mt-12">
          <a 
            href="#demo" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-all shadow-md hover:shadow-xl"
          >
            Solicitar Demo Personalizada
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;