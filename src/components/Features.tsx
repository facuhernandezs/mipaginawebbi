import React from 'react';
import { LineChart, PieChart, BarChart2, TrendingUp, Search, Users, Lock, Zap } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
    <div className="mb-4 text-blue-600">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Features: React.FC = () => {
  const features = [
    {
      icon: <LineChart className="h-8 w-8" />,
      title: "Visualización Avanzada",
      description: "Transforma datos complejos en visualizaciones claras y comprensibles para mejorar la toma de decisiones."
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Análisis Predictivo",
      description: "Anticipa tendencias y comportamientos utilizando algoritmos de aprendizaje automático."
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "Exploración de Datos",
      description: "Herramientas intuitivas para explorar y filtrar grandes volúmenes de datos sin conocimientos técnicos."
    },
    {
      icon: <BarChart2 className="h-8 w-8" />,
      title: "Dashboards Personalizados",
      description: "Crea dashboards ajustados a tus necesidades específicas con métricas relevantes para tu negocio."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Colaboración en Equipo",
      description: "Comparte insights y colabora con tu equipo en tiempo real para un análisis más profundo."
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Seguridad Garantizada",
      description: "Protección de datos de nivel empresarial con encriptación y controles de acceso avanzados."
    },
    {
      icon: <PieChart className="h-8 w-8" />,
      title: "Métricas Comerciales",
      description: "Análisis especializado para KPIs de ventas, marketing y rendimiento financiero."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Rendimiento Optimizado",
      description: "Procesamiento rápido incluso con grandes volúmenes de datos para análisis en tiempo real."
    }
  ];

  return (
    <section id="caracteristicas" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="bg-blue-50 text-blue-600 text-sm font-medium px-4 py-1 rounded-full">CARACTERÍSTICAS</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-gray-900">Potentes herramientas de análisis</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Nuestras soluciones de BI están diseñadas para transformar tus datos en conocimientos accionables que impulsen el crecimiento de tu negocio.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;