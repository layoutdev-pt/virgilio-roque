import React from 'react';
import watermark from '../../../assets/images/logos/virgilio_roque/WEBP/totalmente_branco.webp';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full bg-contrast py-24 md:py-32 overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute inset-y-0 left-0 opacity-5 pointer-events-none translate-x-[-30%] md:translate-x-[-40%]">
        <img 
          src={watermark} 
          alt="Watermark Virgílio Roque" 
          className="h-full w-auto object-cover ml-[600px]"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-6xl font-sora text-background font-bold">
          Sobre a Empresa
        </h1>
        
        <p className="mt-6 text-surface/70 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          Our expertise ensures durable and seamless construction, tailored to meet your vision and bring your project to life.
        </p>
      </div>
    </section>
  );
};
