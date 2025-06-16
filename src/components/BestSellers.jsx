import React from 'react';
import { products } from '../data/products';

const BestSellers = () => {
  return (
    <section className="py-16 bg-[#f3d5c1]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-center font-['Playfair_Display'] mb-10 text-[#554a45]">
          explore our <span className="font-['Sacramento'] text-[#c17a56]">Best Sellers</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-4">
              <div className="relative mb-4 rounded-lg overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
                {product.isNew && (
                  <span className="absolute top-2 right-2 bg-[#c17a56] text-white text-xs py-1 px-2 rounded-full">
                    NEW
                  </span>
                )}
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-medium text-[#554a45] mb-1">{product.name}</h3>
                <p className="text-[#c17a56] font-medium">{product.price}</p>
              </div>
              
              <button className="w-full mt-4 py-2 bg-[#c17a56] hover:bg-[#a45a36] text-white rounded-full font-medium text-sm transition-colors">
                ADD TO CART
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;