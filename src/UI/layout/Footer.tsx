import React from 'react';
import { Link } from 'react-router-dom';
import logo from '@/assets/images/logos/virgilio_roque/PNG/Principal_fundos_escuros.png';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-contrast pt-20 pb-8 px-4 sm:px-6 lg:px-8 w-full">
      <div className="max-w-[1920px] mx-auto">
        {/* Top Area (3 Columns) */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 justify-between mb-16">
          
          {/* Column 1: Brand & Contacts */}
          <div className="flex flex-col gap-8 lg:w-[45%]">
            {/* Logo and Slogan */}
            <div className="flex flex-col gap-2">
              <img 
                src={logo} 
                alt="Virgílio Roque" 
                className="h-[120px] w-auto object-contain self-start" 
              />
              <p className="text-surface text-lg ml-2">A construir o futuro</p>
            </div>
            
            {/* Description Text */}
            <p className="text-surface/80 text-base leading-relaxed max-w-md">
              Acompanhamos-te com todo o carinho na arquitetura e gestão de obra, transformando cada plano no lar que sempre sonhaste.
            </p>
            
            {/* Divider */}
            <div className="h-px w-full max-w-md bg-surface/20"></div>
            
            {/* Contacts Block */}
            <div className="text-surface/80 text-base flex flex-col gap-3">
              <p>Parque Industrial do Tortosendo, R. E 75, 6200-683 Tortosendo.</p>
              <p>
                <span className="font-bold text-surface">tlf:</span> (+351) 275 971 394 <span className="opacity-80">(Chamada para a rede fixa nacional)</span>
              </p>
              <p>
                <span className="font-bold text-surface">fax:</span> (+351) 275 971 534
              </p>
              <p className="leading-relaxed">
                <span className="font-bold text-surface">tlm:</span> 967 138 082 / 967 138 116 / 962 269 776 <br/>
                <span className="opacity-80">(Chamada para a rede móvel nacional)</span>
              </p>
            </div>
          </div>

          {/* Column 2: Legal Pages */}
          <div className="flex flex-col gap-8 lg:w-[25%] lg:pt-8">
            <h3 className="text-background font-bold text-lg">Páginas Legais</h3>
            <ul className="flex flex-col gap-6 text-surface/80">
              <li><Link to="/termos-e-condicoes" className="hover:text-primary transition-colors">Termos E Condições</Link></li>
              <li><Link to="/politica-privacidade" className="hover:text-primary transition-colors">Política De Privacidade</Link></li>
              <li><Link to="/politica-cookies" className="hover:text-primary transition-colors">Política De Cookies</Link></li>
              <li>
                <button 
                  onClick={() => window.dispatchEvent(new Event('openCookieSettings'))} 
                  className="hover:text-primary transition-colors text-left"
                >
                  Configurações de cookies
                </button>
              </li>
              <li><a href="https://www.livroreclamacoes.pt" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Livro de Reclamações</a></li>
            </ul>
          </div>

          {/* Column 3: Navigation */}
          <div className="flex flex-col gap-8 lg:w-[30%] lg:pt-8">
            <h3 className="text-background font-bold text-lg">Páginas</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-6 text-surface/80">
              <ul className="flex flex-col gap-6">
                <li><Link to="/" className="hover:text-primary transition-colors">Inicio</Link></li>
                <li><Link to="/sobre/historia" className="hover:text-primary transition-colors">A Nossa Historia</Link></li>
                <li><Link to="/sobre/recrutamento" className="hover:text-primary transition-colors">Recrutamento</Link></li>
                <li><Link to="/portfolio" className="hover:text-primary transition-colors">Portefólio</Link></li>
                <li><Link to="/contactos" className="hover:text-primary transition-colors">Contactos</Link></li>
              </ul>
            </div>
          </div>
          
        </div>

        {/* Bottom Area (Sub-Footer) */}
        <div className="relative pt-8 border-t border-surface/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-surface/60">
          <p className="md:w-1/3 text-center md:text-left">Direitos de autor e design de Virgílio Roque - @2026</p>
          <p className="md:w-1/3 text-center font-medium text-surface/80">Desenvolvido por Layout Agency</p>
          <p className="md:w-1/3 text-center md:text-right">Alvará de Construção n.º 37560-PUB</p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
