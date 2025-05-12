import React, { useState } from 'react';
import { Send, Check } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    employees: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contacto" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            {/* ... info lateral igual ... */}
          </div>

          <div className="bg-white rounded-xl p-8 shadow-md border border-gray-200">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">¡Gracias por contactarnos!</h3>
                <p className="text-gray-600 text-center mb-6">
                  Hemos recibido tu mensaje. Un miembro de nuestro equipo se pondrá en contacto contigo pronto.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-lg transition-all"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form 
                name="contact" 
                method="POST" 
                data-netlify="true" 
                onSubmit={() => setSubmitted(true)}
              >
                <input type="hidden" name="form-name" value="contact" />
                <h3 className="text-xl font-bold mb-6 text-gray-900">Solicita información o una demo</h3>

                {/* campos como antes pero todos con name y value del state */}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre completo *</label>
                    <input type="text" name="name" required value={formState.name} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input type="email" name="email" required value={formState.email} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Empresa *</label>
                    <input type="text" name="company" required value={formState.company} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" />
                  </div>
                  <div>
                    <label htmlFor="employees" className="block text-sm font-medium text-gray-700 mb-1">Número de empleados</label>
                    <select name="employees" value={formState.employees} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg">
                      <option value="">Seleccionar</option>
                      <option value="1-10">1-10</option>
                      <option value="11-50">11-50</option>
                      <option value="51-200">51-200</option>
                      <option value="201-500">201-500</option>
                      <option value="500+">500+</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensaje *</label>
                  <textarea name="message" rows={4} required value={formState.message} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg"></textarea>
                </div>

                <div className="flex items-center mb-6">
                  <input type="checkbox" id="privacy" required className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                  <label htmlFor="privacy" className="ml-2 block text-sm text-gray-600">
                    Acepto la <a href="#" className="text-blue-600 hover:underline">política de privacidad</a>
                  </label>
                </div>

                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-3 rounded-lg transition-all flex items-center justify-center">
                  <Send className="h-5 w-5 mr-2" />
                  Enviar Mensaje
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
