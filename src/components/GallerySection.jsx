import React from 'react';
import { galleryItems } from '../data/gallery';

const GallerySection = () => {
  return (
    <section id="galeria" className="py-16 bg-gradient-to-b from-[#ebebeb] to-[#f5f5f5]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl mb-2 text-gray-800 font-['Playfair_Display']">
          Galeria de Projetos
        </h2>
        
        <p className="text-gray-600 mb-8">Confira alguns dos nossos trabalhos realizados</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {galleryItems.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-xl shadow-sm">
              <div className="overflow-hidden rounded-lg">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-4 text-left">
                <h3 className="font-medium text-gray-800">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <button className="mt-10 border border-[#9c8158] text-[#9c8158] hover:bg-[#9c8158] hover:text-white py-3 px-8 rounded-full font-medium transition-colors">
          VER MAIS PROJETOS
        </button>
      </div>
    </section>
  );
};

export default GallerySection;