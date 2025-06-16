import React from 'react';

const AboutSection = () => {
  return (
    <section id="sobre" className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
          SOBRE NÓS
        </h2>
        
        <div className="w-16 h-1 bg-secondary mx-auto my-4"></div>
        
        <p className="text-gray-700 mb-6 leading-relaxed">
          A Cortinas Ivoni é uma empresa especializada em soluções personalizadas 
          para decoração de janelas. Com mais de 15 anos de experiência, oferecemos 
          os melhores produtos do mercado com atendimento exclusivo e dedicado.
        </p>
        
        <p className="text-gray-700 mb-8 leading-relaxed">
          Nossa missão é transformar ambientes através de cortinas e persianas 
          que combinam funcionalidade, estética e qualidade superior. Trabalhamos 
          com os melhores fornecedores e artesãos para garantir resultados excepcionais.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-secondary hover:bg-primary text-white py-3 px-8 rounded-full font-medium transition-colors">
            CONHEÇA NOSSA HISTÓRIA
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;