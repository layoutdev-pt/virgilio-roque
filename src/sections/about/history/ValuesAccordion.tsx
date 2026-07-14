import React, { useState } from 'react';
import img1 from '@/assets/images/random/quadro_1-4/quadro_01.webp';
import img2 from '@/assets/images/random/quadro_1-4/quadro_02.webp';
import img3 from '@/assets/images/random/quadro_1-4/quadro_03.webp';
import img4 from '@/assets/images/random/quadro_1-4/quadro_04.webp';

const valuesData = [
  {
    id: 1,
    number: "01",
    title: "Missão",
    description: "Construir infraestruturas de excelência que valorizam as comunidades e impulsionam o progresso sustentável. A nossa missão é aliar inovação técnica à solidez de décadas de experiência.",
    image: img1
  },
  {
    id: 2,
    number: "02",
    title: "Experiência",
    description: "Com mais de 30 anos no terreno, já erguemos milhares de lares e dezenas de obras públicas. O nosso portefólio reflete o conhecimento profundo das dinâmicas e exigências do setor da construção.",
    image: img2
  },
  {
    id: 3,
    number: "03",
    title: "Compromisso",
    description: "Comprometemo-nos com a transparência, segurança e rigor em cada etapa. Cumprimos orçamentos e prazos, respeitando o investimento e a visão dos nossos clientes.",
    image: img3
  },
  {
    id: 4,
    number: "04",
    title: "Confiança",
    description: "Acreditamos que obras sólidas começam com relações sólidas. Somos o parceiro fiável para projetos ambiciosos, garantindo paz de espírito desde as fundações até à entrega das chaves.",
    image: img4
  }
];

export const ValuesAccordion: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(1);
  const [bgImageId, setBgImageId] = useState<number>(1);

  const handlePanelClick = (id: number) => {
    if (activeId === id) {
      setActiveId(null);
    } else {
      setActiveId(id);
      setBgImageId(id);
    }
  };

  return (
    <section className="w-full bg-background py-4 px-4 md:py-6 md:px-12 lg:py-[30px] lg:px-[90px]">
      <div className="relative w-full h-[800px] md:h-[600px] lg:h-[700px] overflow-hidden rounded-[20px] bg-contrast shadow-2xl">
        {/* Background Image Layer (Global) */}
        {valuesData.map((val) => (
          <div 
            key={`bg-${val.id}`}
            className={`absolute inset-0 z-0 transition-opacity duration-700 ease-in-out ${
              bgImageId === val.id ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={val.image} 
              alt={val.title} 
              className="w-full h-full object-cover opacity-60 md:opacity-90" 
            />
            {/* Overlay Escuro para melhor leitura de fundo */}
            <div className="absolute inset-0 bg-contrast/50 md:bg-contrast/30"></div>
          </div>
        ))}

        {/* Panels Layer */}
        <div className="absolute inset-0 z-10 flex flex-col md:flex-row w-full h-full">
          {valuesData.map((item, index) => {
            const isActive = activeId === item.id;
            const isLast = index === valuesData.length - 1;

            return (
              <div
                key={item.id}
                onClick={() => handlePanelClick(item.id)}
                className={`
                  group cursor-pointer transition-colors duration-500 ease-in-out overflow-hidden relative flex-1
                  ${!isLast ? 'border-b md:border-b-0 md:border-r border-white/20' : ''}
                  ${isActive ? 'bg-primary text-background' : 'bg-transparent hover:bg-black/20 text-background'}
                `}
              >
                {/* Active Content */}
                <div 
                  className={`absolute inset-0 flex flex-col px-6 pb-8 md:px-8 md:pb-10 lg:px-10 lg:pb-12 justify-end transition-opacity duration-500 delay-150 ${
                    isActive ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'
                  }`}
                >
                  <h3 className="font-sora text-2xl md:text-3xl font-bold mb-4 text-contrast">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base lg:text-lg font-normal! leading-relaxed text-contrast/90">
                    {item.description}
                  </p>
                </div>

                {/* Inactive Content */}
                <div 
                  className={`absolute inset-0 flex flex-col px-6 pb-8 md:px-8 md:pb-10 lg:px-10 lg:pb-12 justify-end items-start transition-opacity duration-300 ${
                    !isActive ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'
                  }`}
                >
                  <span className="font-sora text-7xl md:text-9xl lg:text-[120px] leading-none font-bold text-white/70 mb-2 md:mb-4">
                    {item.number}
                  </span>
                  <h3 className="font-sora text-xl md:text-2xl font-bold text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
