import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#f0f0f0] pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Column */}
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-4">Sobre Nós</h3>
            <p className="text-gray-600 mb-4">
              A Cortinas Ivoni oferece soluções elegantes e funcionais em cortinas 
              e persianas para sua casa ou escritório. Contamos com profissionais 
              qualificados e produtos de alta qualidade.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-[#9c8158] transition-colors">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-[#9c8158] transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-[#9c8158] transition-colors">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-[#9c8158] transition-colors">Instalação de Cortinas</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#9c8158] transition-colors">Cortinas Personalizadas</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#9c8158] transition-colors">Manutenção</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#9c8158] transition-colors">Consultoria</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#9c8158] transition-colors">Persianas</a></li>
            </ul>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-4">Links Úteis</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-[#9c8158] transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#9c8158] transition-colors">Termos e Condições</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#9c8158] transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#9c8158] transition-colors">Carreiras</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#9c8158] transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-4">Contacte-nos</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <i className="fas fa-map-marker-alt text-[#9c8158] mr-2"></i>
                <span className="text-gray-600">Rua Principal, 123, Centro, Lisboa</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone-alt text-[#9c8158] mr-2"></i>
                <span className="text-gray-600">+351 912 345 678</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope text-[#9c8158] mr-2"></i>
                <span className="text-gray-600">info@cortinasivoni.pt</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-gray-300 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Cortinas Ivoni. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-4">
              <div className="bg-blue-700 h-6 w-10 rounded text-white text-xs flex items-center justify-center">VISA</div>
              <div className="bg-orange-500 h-6 w-10 rounded text-white text-xs flex items-center justify-center">MC</div>
              <div className="bg-green-600 h-6 w-10 rounded text-white text-xs flex items-center justify-center">MB</div>
              <div className="bg-blue-500 h-6 w-10 rounded text-white text-xs flex items-center justify-center">MULTIB</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;