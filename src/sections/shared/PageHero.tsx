import React, { useState, useEffect } from 'react';
import watermark from '../../assets/images/logos/virgilio_roque/WEBP/totalmente_branco.webp';

interface PageHeroProps {
  title: string;
  subtitle: string;
}

const useTypewriter = (text: string, speed: number = 60, delay: number = 0) => {
  const [visibleChars, setVisibleChars] = useState(0);

  useEffect(() => {
    let i = 0;
    setVisibleChars(0);
    
    const timeout = setTimeout(() => {
      const intervalId = setInterval(() => {
        i++;
        setVisibleChars(i);
        if (i >= text.length) {
          clearInterval(intervalId);
        }
      }, speed);
      
      return () => clearInterval(intervalId);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  return visibleChars;
};

export const PageHero: React.FC<PageHeroProps> = ({ title, subtitle }) => {
  const visibleCharsCount = useTypewriter(title, 40, 300);
  const isTitleDone = visibleCharsCount >= title.length;

  return (
    <section className="relative w-full bg-contrast py-24 md:py-32 overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute inset-y-0 left-0 opacity-5 pointer-events-none translate-x-0 md:translate-x-[300px]">
        <img 
          src={watermark} 
          alt="Watermark Virgílio Roque" 
          className="h-full w-auto object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        <h1 className="text-5xl md:text-6xl font-sora text-background font-bold whitespace-pre-wrap max-w-4xl mx-auto">
          {title.split('').map((char, index) => {
            const isVisible = index < visibleCharsCount;
            const hasCursor = (index === visibleCharsCount - 1) || (visibleCharsCount === 0 && index === 0);
            
            return (
              <span key={index} className="relative">
                <span className={isVisible ? 'opacity-100' : 'opacity-0'}>
                  {char}
                </span>
                
                {/* Cursor em movimento */}
                {hasCursor && !isTitleDone && (
                  <span className={`absolute top-[10%] bottom-[10%] w-[4px] bg-primary rounded-sm ${visibleCharsCount === 0 ? 'left-0' : 'left-full ml-[1px]'}`}></span>
                )}
              </span>
            );
          })}

        </h1>
        
        <p className={`mt-6 text-surface/70 max-w-2xl mx-auto text-base md:text-lg leading-relaxed transition-all duration-1000 ease-out delay-500 ${isTitleDone ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {subtitle}
        </p>

      </div>
    </section>
  );
};
