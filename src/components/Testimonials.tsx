import React from 'react';

interface TestimonialProps {
  content: string;
  author: string;
  position: string;
  company: string;
  image: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ content, author, position, company, image }) => (
  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
    <div className="flex items-center space-x-1 mb-4">
      <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
      <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
      <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
      <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
      <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
    </div>
    <p className="text-gray-600 mb-6 italic">"{content}"</p>
    <div className="flex items-center">
      <img src={image} alt={author} className="w-12 h-12 rounded-full mr-4" />
      <div>
        <h4 className="text-gray-900 font-medium">{author}</h4>
        <p className="text-gray-500 text-sm">{position}, {company}</p>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      content: "TODA BI transformó por completo nuestra forma de analizar datos. Sus dashboards personalizados nos permitieron identificar oportunidades que antes pasábamos por alto, aumentando nuestros ingresos en un 23% en solo seis meses.",
      author: "Ana Martínez",
      position: "Directora de Marketing",
      company: "TechSolutions",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      content: "La implementación fue sorprendentemente rápida y el equipo de soporte es excepcional. Las visualizaciones son intuitivas incluso para usuarios sin experiencia técnica, lo que ha impulsado la adopción en toda nuestra organización.",
      author: "Carlos Ruiz",
      position: "CIO",
      company: "Grupo Financiero GR",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      content: "Como startup, necesitábamos una solución escalable que creciera con nosotros. TODA BI no solo cumplió con nuestras expectativas actuales, sino que nos ha proporcionado insights valiosos para nuestro plan de expansión internacional.",
      author: "Elena Gómez",
      position: "CEO",
      company: "InnovaHealth",
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  return (
    <section id="testimonios" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="bg-blue-50 text-blue-600 text-sm font-medium px-4 py-1 rounded-full">TESTIMONIOS</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-gray-900">Lo que dicen nuestros clientes</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Descubre cómo TODA BI ha ayudado a empresas de diferentes sectores a transformar sus datos en decisiones estratégicas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              content={testimonial.content}
              author={testimonial.author}
              position={testimonial.position}
              company={testimonial.company}
              image={testimonial.image}
            />
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
          <div className="bg-blue-600 text-white px-8 py-6 rounded-xl max-w-4xl flex flex-col md:flex-row items-center">
            <div className="md:w-3/4 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-xl font-bold mb-2">¿Listo para transformar tus datos?</h3>
              <p className="text-blue-100">
                Únete a las empresas que ya están aprovechando el poder de sus datos con TODA BI.
              </p>
            </div>
            <div className="md:w-1/4">
              <a 
                href="#demo" 
                className="whitespace-nowrap bg-white text-blue-600 font-medium px-6 py-3 rounded-lg inline-block hover:bg-gray-100 transition-colors"
              >
                Solicitar Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;