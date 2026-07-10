// src/sections/home/Stats.tsx
import React, { useEffect, useRef, useState } from 'react';
import { statsData } from './Experience';

export const Stats: React.FC = () => {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-surface py-6 md:py-8 lg:py-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 md:gap-8">
        {statsData.map((stat, index) => (
          <div 
            key={stat.number} 
            className={`flex items-center relative transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            {/* Huge White Number */}
            <span className="text-[100px] md:text-[140px] text-background leading-none select-none tracking-tighter">
              {stat.number}
            </span>
            
            {/* Overlapping Text Content */}
            <div className="-ml-8 md:-ml-12 z-10 flex flex-col mt-4 md:mt-6">
              <h3 className="text-xl md:text-[22px] text-contrast mb-1">
                {stat.title}
              </h3>
              <p className="text-contrast/60 text-sm md:text-base leading-snug max-w-[200px] md:max-w-[240px]">
                {stat.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
