import React from 'react';

const HeroBanner = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-gray-50 to-gray-100 py-12 md:py-16">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 opacity-20">
        <i className="fas fa-circle text-4xl text-gray-400"></i>
      </div>
      <div className="absolute bottom-10 left-20 opacity-15">
        <i className="fas fa-square text-3xl text-gray-500"></i>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left side - Image */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="rounded-[20px] overflow-hidden max-w-md mx-auto shadow-lg">
              <img 
                src="/assets/images/hero-curtains.jpg" 
                alt="Cortinas Elegantes" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          {/* Right side - Text content */}
          <div className="w-full md:w-1/2 md:pl-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-['Playfair_Display'] text-gray-800 mb-6 leading-tight">
              Cortinas <span className="font-['Sacramento'] text-secondary">Ivoni</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-['Montserrat'] text-gray-700 mb-4">
              Elegância para seu lar
            </h2>
            <p className="mb-8 text-gray-600 max-w-md">
              Oferecemos soluções personalizadas em cortinas que combinam 
              sofisticação, qualidade e funcionalidade para transformar seus ambientes.
            </p>
            <button className="bg-secondary hover:bg-primary text-white py-3 px-8 rounded-full font-medium transition-colors">
              CONSULTAR AGORA
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;