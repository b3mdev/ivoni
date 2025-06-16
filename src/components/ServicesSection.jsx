import React from 'react';
import { services } from '../data/services';

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-16 bg-[#f0f0f0]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-center font-['Playfair_Display'] mb-10 text-gray-800">
          Os Nossos <span className="font-['Sacramento'] text-[#9c8158]">Serviços</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
              <div className="text-center mb-4">
                <div className="inline-block p-4 rounded-full bg-[#f7f5f0] text-[#9c8158]">
                  <i className={`fas ${service.icon} text-2xl`}></i>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-medium text-gray-800 mb-2">{service.name}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
              
              <button className="w-full mt-6 py-2 bg-[#9c8158] hover:bg-[#82683e] text-white rounded-full font-medium text-sm transition-colors">
                SAIBA MAIS
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;