import React from 'react';
import { Check } from 'lucide-react';

interface PriceCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

const PriceCard: React.FC<PriceCardProps> = ({ title, price, description, features, isPopular }) => (
  <div className={`bg-white rounded-xl ${isPopular ? 'ring-2 ring-blue-600 shadow-lg scale-105' : 'border border-gray-200 shadow-sm'} p-8 flex flex-col h-full`}>
    {isPopular && (
      <span className="bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full self-start mb-4">
        Más Popular
      </span>
    )}
    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <div className="mb-4">
      <span className="text-4xl font-bold text-gray-900">{price}</span>
      <span className="text-gray-600 ml-2">/mes</span>
    </div>
    <p className="text-gray-600 mb-6">{description}</p>
    <ul className="space-y-3 mb-8 flex-grow">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <Check className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
          <span className="text-gray-600">{feature}</span>
        </li>
      ))}
    </ul>
    <a
      href="#contacto"
      className={`text-center py-3 px-6 rounded-lg font-medium transition-colors ${
        isPopular
          ? 'bg-blue-600 hover:bg-blue-700 text-white'
          : 'bg-white hover:bg-gray-50 text-blue-600 border border-blue-200'
      }`}
    >
      {isPopular ? 'Comenzar Ahora' : 'Saber Más'}
    </a>
  </div>
);

const Pricing: React.FC = () => {
  const plans = [
    {
      title: 'Inicial',
      price: '€49',
      description: 'Perfecto para pequeñas empresas y startups.',
      features: [
        'Dashboard básico personalizable',
        'Hasta 5 usuarios',
        'Análisis de datos mensual',
        'Exportación básica de informes',
        'Soporte por email'
      ]
    },
    {
      title: 'Profesional',
      price: '€129',
      description: 'Solución completa para empresas en crecimiento.',
      features: [
        'Dashboard avanzado personalizable',
        'Hasta 20 usuarios',
        'Análisis de datos en tiempo real',
        'Exportación avanzada de informes',
        'Integración con otras plataformas',
        'Soporte prioritario',
        'Acceso a API'
      ],
      isPopular: true
    },
    {
      title: 'Empresarial',
      price: '€299',
      description: 'Máxima potencia para grandes organizaciones.',
      features: [
        'Dashboard premium totalmente personalizado',
        'Usuarios ilimitados',
        'Análisis predictivo avanzado',
        'Integración total con sistemas existentes',
        'Consultor dedicado',
        'Soporte 24/7',
        'Seguridad y cumplimiento empresarial',
        'Capacitación personalizada'
      ]
    }
  ];

  return (
    <section id="precios" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="bg-blue-50 text-blue-600 text-sm font-medium px-4 py-1 rounded-full">PRECIOS</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-gray-900">Planes adaptados a tus necesidades</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Elije el plan que mejor se adapte a las necesidades de tu empresa. Todos los planes incluyen actualizaciones regulares.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <PriceCard
              key={index}
              title={plan.title}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              isPopular={plan.isPopular}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center bg-blue-50 rounded-xl p-8 max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-gray-900 mb-4">¿Necesitas una solución a medida?</h3>
          <p className="text-gray-600 mb-6">
            Desarrollamos soluciones personalizadas para casos de uso específicos. Contáctanos para discutir tus necesidades.
          </p>
          <a
            href="#contacto"
            className="inline-block bg-white hover:bg-gray-50 text-blue-600 font-medium px-6 py-3 rounded-lg border border-blue-200 transition-all shadow-sm hover:shadow-md"
          >
            Contactar para Plan Personalizado
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;