import React from 'react';
import equipaImg from '../../../assets/images/random/equipa.webp';

export const TeamImage: React.FC = () => {
  return (
    <section className="w-full bg-surface px-4 py-8 md:p-12 lg:p-[90px]">
      <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-[20px] shadow-2xl">
        <img 
          src={equipaImg} 
          alt="Equipa Virgílio Roque" 
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
        />
      </div>
    </section>
  );
};
