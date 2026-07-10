import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoPrincipal from '../../assets/images/logos/virgilio_roque/WEBP/Principal_simples.webp';
import bgDropdown from '../../assets/images/random/vr_background.png';

// --- Icons (SVGs) ---
const ChevronDown = ({ className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const ChevronRight = ({ className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="9" x2="21" y2="9"></line>
    <line x1="3" y1="15" x2="21" y2="15"></line>
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

// --- Component ---
export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSobreDropdownOpen, setIsSobreDropdownOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSobreDropdownOpen(false);
  }, [location.pathname]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white z-50 px-4 md:px-8 h-20 flex items-center justify-between border-b border-gray-100">
        
        {/* Left: Logo */}
        <Link to="/" className="flex items-center h-full">
          <img src={logoPrincipal} alt="Virgílio Roque" className="h-10 md:h-12 w-auto object-contain" />
        </Link>

        {/* Center: Desktop Links */}
        <div className="hidden lg:flex items-center gap-8 h-full">
          <Link to="/" className="group relative text-contrast font-medium flex items-center h-full">
            <span>Inicio</span>
            <span className="absolute bottom-6 left-0 w-full h-0.5 bg-contrast origin-bottom-right scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-bottom-left"></span>
          </Link>

          {/* Dropdown: Sobre Nós */}
          <div 
            className="group relative h-full flex items-center"
            onMouseEnter={() => setIsSobreDropdownOpen(true)}
            onMouseLeave={() => setIsSobreDropdownOpen(false)}
          >
            <div className="flex items-center gap-1 text-contrast font-medium">
              <span>Sobre Nós</span>
              <ChevronDown className={`transition-transform duration-300 ${isSobreDropdownOpen ? 'rotate-180' : ''}`} />
            </div>
            
            {/* Dropdown Menu */}
            <div 
              className={`absolute top-[70px] left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] py-4 w-56 transition-all duration-300 origin-top overflow-hidden ${isSobreDropdownOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}
              style={{ backgroundImage: `url(${bgDropdown})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div className="relative z-10 px-5 mb-2">
                <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold">Páginas Internas</span>
              </div>
              <div className="relative z-10 flex flex-col">
                <Link to="/sobre/historia" className="px-5 py-2 text-contrast hover:bg-gray-50/80 hover:text-primary transition-colors">A Nossa Historia</Link>
                <Link to="/sobre/recrutamento" className="px-5 py-2 text-contrast hover:bg-gray-50/80 hover:text-primary transition-colors">Recrutamento</Link>              </div>
            </div>
            <span className="absolute bottom-6 left-0 w-full h-0.5 bg-contrast origin-bottom-right scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-bottom-left"></span>
          </div>

          <Link to="/portfolio" className="group relative text-contrast font-medium flex items-center h-full">
            <span>Portefólio</span>
            <span className="absolute bottom-6 left-0 w-full h-0.5 bg-contrast origin-bottom-right scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-bottom-left"></span>
          </Link>

          <Link to="/contactos" className="group relative text-contrast font-medium flex items-center h-full">
            <span>Contactos</span>
            <span className="absolute bottom-6 left-0 w-full h-0.5 bg-contrast origin-bottom-right scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-bottom-left"></span>
          </Link>
        </div>

        {/* Right: CTA Button (Desktop) */}
        <div className="hidden lg:flex">
          <a 
            href="https://covialvi.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-2 bg-primary hover:bg-primary/90 text-contrast font-semibold px-6 py-3 rounded-full transition-colors overflow-hidden"
          >
            <div className="transition-all duration-300 overflow-hidden w-4 group-hover:w-0 group-hover:opacity-0 group-hover:-translate-x-4 flex-shrink-0">
              <ChevronRight />
            </div>
            <span>Comprar Imóvel</span>
            <div className="transition-all duration-300 overflow-hidden w-0 opacity-0 -translate-x-4 group-hover:w-4 group-hover:opacity-100 group-hover:translate-x-0 flex-shrink-0">
              <ChevronRight />
            </div>
          </a>
        </div>

        {/* Mobile: Hamburger Button */}
        <button 
          className="lg:hidden text-contrast p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {/* Mobile Menu Modal */}
      <div className={`fixed inset-0 bg-white z-40 lg:hidden transition-transform duration-300 ease-in-out pt-24 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col px-6 h-full overflow-y-auto pb-8">
          
          <Link to="/" className="text-3xl font-bold text-contrast py-6 border-b border-gray-100">Inicio</Link>
          
          {/* Mobile Accordion: Sobre Nós */}
          <div className="flex flex-col border-b border-gray-100">
            <button 
              className="flex items-center justify-between text-3xl font-bold text-contrast py-6"
              onClick={() => setIsSobreDropdownOpen(!isSobreDropdownOpen)}
            >
              <span>Sobre Nós</span>
              <ChevronDown className={`w-8 h-8 transition-transform duration-300 ${isSobreDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`flex flex-col gap-4 overflow-hidden transition-all duration-300 ${isSobreDropdownOpen ? 'max-h-[300px] pb-6' : 'max-h-0'}`}>
              <Link to="/sobre/historia" className="text-xl text-contrast/70 pl-4 py-2">A Nossa Historia</Link>
              <Link to="/sobre/recrutamento" className="text-xl text-contrast/70 pl-4 py-2">Recrutamento</Link>
            </div>
          </div>

          <Link to="/portfolio" className="text-3xl font-bold text-contrast py-6 border-b border-gray-100">Portefólio</Link>
          <Link to="/contactos" className="text-3xl font-bold text-contrast py-6">Contactar</Link>

          <div className="mt-auto pt-8">
            <a 
              href="https://covialvi.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-contrast font-bold text-lg px-6 py-4 rounded-full w-full transition-colors overflow-hidden"
            >
              <div className="transition-all duration-300 overflow-hidden w-4 group-hover:w-0 group-hover:opacity-0 group-hover:-translate-x-4 flex-shrink-0">
                <ChevronRight />
              </div>
              <span>Comprar Imóvel</span>
              <div className="transition-all duration-300 overflow-hidden w-0 opacity-0 -translate-x-4 group-hover:w-4 group-hover:opacity-100 group-hover:translate-x-0 flex-shrink-0">
                <ChevronRight />
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
