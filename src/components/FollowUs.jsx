import React from 'react';

const FollowUs = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-[#f9e4d9] to-[#fce6dc]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl mb-2 text-[#554a45] font-['Playfair_Display']">
          follow us on 
          <i className="fas fa-rainbow ml-2 text-[#c17a56]"></i>
        </h2>
        
        <p className="text-[#6b5f59] mb-8">@bohoaesthetics</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Instagram Style Post 1 */}
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <div className="overflow-hidden rounded-lg">
              <img 
                src="/assets/images/social/insta-post1.jpg" 
                alt="Boho lifestyle photo" 
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex justify-between items-center mt-4">
              <div className="flex space-x-3">
                <button><i className="far fa-heart text-[#c17a56]"></i></button>
                <button><i className="far fa-comment text-[#c17a56]"></i></button>
                <button><i className="far fa-paper-plane text-[#c17a56]"></i></button>
              </div>
              <button><i className="far fa-bookmark text-[#c17a56]"></i></button>
            </div>
            <p className="text-left mt-2 text-sm text-[#6b5f59]">
              Morning rituals with our handcrafted ceramics collection ✨ #boholifestyle
            </p>
          </div>
          
          {/* Instagram Style Post 2 */}
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <div className="overflow-hidden rounded-lg">
              <img 
                src="/assets/images/social/insta-post2.jpg" 
                alt="Boho workspace" 
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex justify-between items-center mt-4">
              <div className="flex space-x-3">
                <button><i className="far fa-heart text-[#c17a56]"></i></button>
                <button><i className="far fa-comment text-[#c17a56]"></i></button>
                <button><i className="far fa-paper-plane text-[#c17a56]"></i></button>
              </div>
              <button><i className="far fa-bookmark text-[#c17a56]"></i></button>
            </div>
            <p className="text-left mt-2 text-sm text-[#6b5f59]">
              Creating sacred spaces with our new home collection 🌿 #bohohome
            </p>
          </div>
        </div>
        
        <button className="mt-10 border border-[#c17a56] text-[#c17a56] hover:bg-[#c17a56] hover:text-white py-3 px-8 rounded-full font-medium transition-colors">
          VIEW MORE ON INSTAGRAM
        </button>
      </div>
    </section>
  );
};

export default FollowUs;