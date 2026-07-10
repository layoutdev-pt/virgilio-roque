import React, { useEffect, useRef, useState } from 'react';

const steps = [
  {
    id: 1,
    title: "Ideia & Planeamento",
    description: "Partilhe connosco a sua visão. A nossa equipa desenha o projeto à medida das suas necessidades e apresenta um orçamento detalhado e transparente.",
    icon: "https://api.iconify.design/lucide:pen-tool.svg"
  },
  {
    id: 2,
    title: "Execução da Obra",
    description: "Deitamos mãos à obra com rigor e prazos definidos. Garantimos um acompanhamento constante para que saiba sempre a que ritmo avançamos.",
    icon: "https://api.iconify.design/lucide:hard-hat.svg"
  },
  {
    id: 3,
    title: "Inspeção Final",
    description: "Realizamos um controlo de qualidade minucioso, garantindo que todos os acabamentos estão perfeitos e de acordo com o padrão exigido.",
    icon: "https://api.iconify.design/lucide:clipboard-check.svg"
  },
  {
    id: 4,
    title: "Entrega da Chave",
    description: "O seu novo espaço está pronto. Entregamos o projeto \"chave na mão\", pronto a ser vivido ou rentabilizado.",
    icon: "https://api.iconify.design/lucide:key.svg"
  }
];

export const CustomerJourney: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-contrast pt-16 md:pt-24 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden font-sora">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Header Elements */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="border border-primary text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            Caminho do Cliente
          </div>
          <h2 className="text-3xl md:text-5xl text-background font-bold leading-tight max-w-2xl">
            O Seu Projeto em <span className="text-primary">4 Passos</span>
          </h2>
        </div>

        {/* Steps Layout */}
        <div className="relative w-full">
          {/* Timeline Lines */}
          {/* Linha horizontal Base (Desktop) */}
          <div className="hidden md:block absolute top-[48px] left-[12.5%] right-[12.5%] h-[1px] bg-surface/20 z-0"></div>
          {/* Linha horizontal Animada (Desktop) */}
          <div 
            className="hidden md:block absolute top-[48px] left-[12.5%] h-[1px] bg-primary z-0 transition-all duration-[2000ms] ease-linear" 
            style={{ width: isVisible ? '75%' : '0%' }}
          ></div>
          
          {/* Linha vertical Base (Mobile) */}
          <div className="md:hidden absolute left-1/2 top-[48px] bottom-[48px] w-[1px] -translate-x-1/2 bg-surface/20 z-0"></div>
          {/* Linha vertical Animada (Mobile) */}
          <div 
            className="md:hidden absolute left-1/2 top-[48px] w-[1px] -translate-x-1/2 bg-primary z-0 transition-all duration-[2000ms] ease-linear" 
            style={{ height: isVisible ? 'calc(100% - 96px)' : '0%' }}
          ></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative z-10">
            {steps.map((step, index) => {
              const itemDelay = index * 500;
              return (
              <div 
                key={step.id} 
                className={`group flex flex-col items-center text-center cursor-pointer transition-all duration-700 ease-out ${isVisible ? 'opacity-100 grayscale-0' : 'opacity-40 grayscale'}`}
                style={{ transitionDelay: `${itemDelay}ms` }}
              >
                {/* Icon Card */}
                <div className="relative z-10 w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-sec flex items-center justify-center mb-8 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_10px_40px_-10px_var(--color-primary)]">
                  <img 
                    src={step.icon} 
                    alt={step.title} 
                    className="w-10 h-10 object-contain filter invert brightness-0 contrast-100 opacity-90"
                  />
                  
                  {/* Mini-badge numérico */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-contrast text-background text-sm font-bold flex items-center justify-center rounded-full shadow-lg border-[3px] border-background/10">
                    0{step.id}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-background mb-3 transition-colors duration-300 group-hover:text-primary">
                  {step.title}
                </h3>
                <p className="text-sm text-surface/80 leading-relaxed px-2">
                  {step.description}
                </p>

                {/* Indicador Inferior */}
                <div className="h-[2px] w-0 bg-primary mt-6 transition-all duration-300 ease-out group-hover:w-12 rounded-full"></div>
              </div>
            )})}
          </div>
        </div>

      </div>
    </section>
  );
};

export default CustomerJourney;
