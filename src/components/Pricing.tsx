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
      title: 'Plan Esencial',
      price: '$100.000',
      description: 'Ideal para emprendedores o pequeños negocios que quieren empezar a tomar decisiones basadas en datos.',
      features: [
        'Dashboard básico con métricas clave',
        'Panel de control de stock o ventas',
        'Visualización en Power BI o Google Data Studio',
        'Reportes mensuales con insights',
        'Integración con Excel o Google Sheets',
        'Soporte por WhatsApp o email'
      ]
    },
    {
      title: 'Plan Estratégico',
      price: '$250.000',
      description: 'Para negocios que necesitan automatización, reportes avanzados y seguimiento continuo.',
      features: [
        'Dashboard interactivo personalizado',
        'Alertas automáticas de stock y pricing',
        'Integración con Mercado Libre o e-commerce propio',
        'Reportes por categoría, margen y rotación',
        'Actualización semanal y soporte prioritario'



      ],
      isPopular: true
    },
    {
      title: 'Plan Personalizado',
      price: 'Consultar',
      description: 'Para empresas que buscan una solución a medida, adaptada a sus procesos y necesidades específicas.',
      features: [
        'Análisis avanzado de datos',
        'Integración con sistemas ERP o CRM',
        'Desarrollo de dashboards personalizados',
        'Consultoría y capacitación continua',
        'Soporte técnico dedicado'
      ]
    }
  ];

  return (
    <section id="precios" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="bg-blue-50 text-blue-600 text-sm font-medium px-4 py-1 rounded-full">PRECIOS</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-gray-900">Planes pensados para pymes reales</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Elegí el plan que mejor se ajuste a tu nivel de digitalización. Ambos incluyen acompañamiento personalizado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
          <h3 className="text-xl font-bold text-gray-900 mb-4">¿Querés algo más adaptado a tu negocio?</h3>
          <p className="text-gray-600 mb-6">
            Podemos crear un plan a medida según tus procesos, canales de venta y tipo de productos.
          </p>
          <a
            href="#contacto"
            className="inline-block bg-white hover:bg-gray-50 text-blue-600 font-medium px-6 py-3 rounded-lg border border-blue-200 transition-all shadow-sm hover:shadow-md"
          >
            Consultar por plan personalizado
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
