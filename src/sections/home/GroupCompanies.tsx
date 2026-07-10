import React from 'react';
import logoPrincipal from '../../assets/images/logos/virgilio_roque/WEBP/Principal.webp';
import logoMonteSerrano from '../../assets/images/logos/Monte_Serrano.webp';
import logoCovialvi from '../../assets/images/logos/logotiposnovoCovialvi/Logo-Branco-SemFundo.webp';
import imgBuilding from '../../assets/images/random/building.webp';
import imgConstruction from '../../assets/images/random/construction.webp';
import imgMatiMateriais from '../../assets/images/logos/Mati_Materiais.webp';

const TextSection = () => (
  <div className="flex flex-col items-center text-center px-4 mb-8 md:mb-10">
    <div className="flex items-center gap-4 mb-4 md:mb-6">
      <div className="h-px w-12 bg-contrast"></div>
      <span className="font-sora text-contrast tracking-widest text-md font-semibold">
        Desde 1993
      </span>
      <div className="h-px w-12 bg-contrast"></div>
    </div>
    
    <h2 className="font-sora text-3xl md:text-5xl lg:text-6xl text-contrast leading-tight max-w-4xl font-bold tracking-tight">
      Oferecemos <img src={imgBuilding} alt="Edifício" className="inline-block h-[1.2em] w-auto align-top object-contain" /> sonhos reais,<br className="hidden md:block" />
      desde novas 
      <span className="inline-flex items-center justify-center bg-primary rounded-full p-[5px] mx-1 align-middle ">
        <img src={imgConstruction}  className="inline-block h-[0.5em] w-auto object-contain" />
      </span> 
      obras até<br className="hidden md:block" />
      reabilitações.
    </h2>
    
    <div className="flex items-center gap-4 mt-8 md:mt-10 mb-6 md:mb-8">
      <div className="h-px w-16 bg-contrast"></div>
      <span className="font-sora text-contrast tracking-wider text-md font-medium">
        Empresas Do Mesmo Grupo
      </span>
      <div className="h-px w-16 bg-contrast"></div>
    </div>
  </div>
);

const Carousel = () => {
  const logos = [
    { src: logoPrincipal, alt: "Virgílio Roque" },
    { src: logoMonteSerrano, alt: "Monte Serrano" },
    { src: logoCovialvi, alt: "Covialvi" },
    { src: imgMatiMateriais, alt: "Mati Materiais" },
  ];

  // Duplicating the list a few times to ensure smooth infinite scrolling
  const carouselItems = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos];

  return (
    <div className="w-full overflow-hidden relative py-4 md:py-6">
      {/* Gradient masks for smooth fade in/out at the edges */}
      <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
      
      <div className="flex w-max animate-marquee">
        {carouselItems.map((logo, index) => (
          <div key={index} className="flex-shrink-0 w-40 md:w-64 lg:w-80 mx-4 md:mx-8 flex items-center justify-center h-24 md:h-32 lg:h-40">
            <img 
              src={logo.src} 
              alt={logo.alt} 
              className={`max-w-full max-h-full object-contain transition-all duration-300 opacity-70 hover:opacity-100`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export const GroupCompanies: React.FC = () => {
  return (
    <section className="w-full bg-background py-8 md:py-[30px] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <TextSection />
        <Carousel />
      </div>
    </section>
  );
};

export default GroupCompanies;
