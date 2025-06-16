import React from 'react';

const ContactSection = () => {
  return (
    <section id="contacto" className="py-16 bg-[#f5f5f5]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-center font-['Playfair_Display'] mb-10 text-gray-800">
          Entre em <span className="font-['Sacramento'] text-[#9c8158]">Contacto</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-xl font-medium mb-4 text-gray-800">Envie-nos uma mensagem</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-1">Nome</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#9c8158]"
                  placeholder="Seu nome completo"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#9c8158]"
                  placeholder="Seu endereço de email"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-600 mb-1">Telefone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#9c8158]"
                  placeholder="Seu número de telefone"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-600 mb-1">Mensagem</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#9c8158]"
                  placeholder="Como podemos ajudá-lo(a)?"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-[#9c8158] hover:bg-[#82683e] text-white py-3 rounded-md font-medium transition-colors"
              >
                ENVIAR MENSAGEM
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div>
            <div className="bg-white p-8 rounded-xl shadow-sm mb-6">
              <h3 className="text-xl font-medium mb-6 text-gray-800">Informações de Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-[#9c8158] mr-4">
                    <i className="fas fa-map-marker-alt text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700">Endereço</h4>
                    <p className="text-gray-600">Rua Principal, 123, Centro<br />Lisboa, Portugal</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-[#9c8158] mr-4">
                    <i className="fas fa-phone-alt text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700">Telefone</h4>
                    <p className="text-gray-600">+351 912 345 678</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-[#9c8158] mr-4">
                    <i className="fas fa-envelope text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700">Email</h4>
                    <p className="text-gray-600">info@cortinasivoni.pt</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-medium mb-4 text-gray-800">Horário de Funcionamento</h3>
              <div className="space-y-2 text-gray-600">
                <p>Segunda a Sexta: 9h - 18h</p>
                <p>Sábado: 9h - 13h</p>
                <p>Domingo: Fechado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;