import React from 'react';

export const TextMarquee: React.FC = () => {
  const text = "Ouvimos os teus desejos e compreendemos os teus objetivos.";
  
  // Repetir a frase algumas vezes
  const repetitions = Array(4).fill(text);

  return (
    <section className="relative w-full bg-background h-[150px] flex items-center overflow-hidden">
      {/* Máscara de opacidade para o fade-out nas extremidades */}
      <div 
        className="w-full flex"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)'
        }}
      >
        <div 
          className="flex w-max animate-marquee"
          style={{ animationDuration: '150s' }}
        >
          {/* Primeiro bloco */}
          <div className="flex items-center gap-12 px-6 text-[80px] md:text-[110px] lg:text-[130px] font-black text-contrast/30 tracking-tighter whitespace-nowrap leading-none pb-4">
            {repetitions.map((item, idx) => (
              <span key={`block1-${idx}`}>{item}</span>
            ))}
          </div>
          
          {/* Segundo bloco idêntico para o loop infinito sem quebras */}
          <div className="flex items-center gap-12 px-6 text-[80px] md:text-[110px] lg:text-[130px] font-black text-contrast/30 tracking-tighter whitespace-nowrap leading-none pb-4">
            {repetitions.map((item, idx) => (
              <span key={`block2-${idx}`}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
