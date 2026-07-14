import React, { useState, useEffect } from 'react';
import img01 from '@/assets/images/random/corrocel_hero/01vr.png';
import img02 from '@/assets/images/random/corrocel_hero/02vr.png';
import img03 from '@/assets/images/random/corrocel_hero/03vr.png';
import img04 from '@/assets/images/random/corrocel_hero/04vr.png';
import img05 from '@/assets/images/random/corrocel_hero/05vr.png';
import logoVirgilio from '@/assets/images/logos/virgilio_roque/PNG/Principal_fundos_escuros.png';

const heroImages = [img01, img02, img03, img04, img05];

export const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showLogo, setShowLogo] = useState(true);

  // Cycle images every 5 seconds, and reset timer if user manually interacts
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentImageIndex]);

  // Hide logo after 3 seconds with a smooth fade-out
  useEffect(() => {
    const logoTimer = setTimeout(() => {
      setShowLogo(false);
    }, 3000);
    return () => clearTimeout(logoTimer);
  }, []);

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
  };

  return (
    <section className="w-full min-h-[50vh] md:min-h-screen flex flex-col bg-surface p-4 sm:p-[30px]">
      <div className="relative flex-grow rounded-2xl sm:rounded-[30px] overflow-hidden flex flex-col shadow-2xl bg-gray-900 group">
        
        {/* Carousel Background */}
        {heroImages.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Hero background ${idx + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out z-0 ${
              idx === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}

        {/* Carousel Navigation Arrows */}
        <button 
          onClick={handlePrev}
          className="absolute top-1/2 left-2 sm:left-4 md:left-8 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-surface/80 hover:bg-surface backdrop-blur-md rounded-full text-primary shadow-lg transition-all duration-300 z-20 opacity-100 md:opacity-0 md:group-hover:opacity-100"
          aria-label="Imagem Anterior"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>
        
        <button 
          onClick={handleNext}
          className="absolute top-1/2 right-2 sm:right-4 md:right-8 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-surface/80 hover:bg-surface backdrop-blur-md rounded-full text-primary shadow-lg transition-all duration-300 z-20 opacity-100 md:opacity-0 md:group-hover:opacity-100"
          aria-label="Próxima Imagem"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>

        {/* Temporary Logo Overlay */}
        <div 
          className={`absolute inset-0 z-10 flex items-center justify-center transition-opacity duration-1000 pointer-events-none ${
            showLogo ? 'opacity-50' : 'opacity-0'
          }`}
        >
          <img 
            src={logoVirgilio} 
            alt="Virgílio Roque Logo" 
            className="w-2/3 md:w-1/2 lg:w-1/3 max-w-lg object-contain drop-shadow-2xl" 
          />
        </div>
        
        {/* Dark Overlay - Garante a legibilidade do texto base sobre o vídeo/imagens */}
        <div className="absolute inset-0 bg-contrast/40 z-0 pointer-events-none" />
      </div>
    </section>
  );
};

export default Hero;
