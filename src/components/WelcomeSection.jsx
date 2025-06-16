import React from 'react';

const WelcomeSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-[#fcf5e8] to-[#f9e4d9]">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#554a45]">
          WELCOME TO BOHO AESTHETICS
        </h2>
        
        <div className="w-16 h-1 bg-[#c17a56] mx-auto my-4"></div>
        
        <p className="text-[#6b5f59] mb-6 leading-relaxed">
          At Boho Aesthetics, we believe in creating a lifestyle that embraces natural beauty, 
          sustainability, and artistic expression. Our carefully curated collection brings together 
          handcrafted pieces that tell stories, celebrate craftsmanship, and inspire a life of mindfulness.
        </p>
        
        <p className="text-[#6b5f59] mb-8 leading-relaxed">
          From ethically sourced home decor to artisan-made fashion pieces, 
          every item in our shop is selected to help you create spaces that feel 
          warm, authentic, and connected to the beauty of the natural world.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-[#c17a56] hover:bg-[#a45a36] text-white py-3 px-8 rounded-full font-medium transition-colors">
            LEARN MORE
          </button>
          <button className="bg-[#c17a56] hover:bg-[#a45a36] text-white py-3 px-8 rounded-full font-medium transition-colors">
            SHOP NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;