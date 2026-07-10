import React from 'react';
import heroVideo from '../../assets/videos/Virgílio Roque Lda - Covialvi (720P).mp4';

export const Hero: React.FC = () => {
  return (
    <section className="w-full min-h-screen flex flex-col  bg-surface p-[30px] sm:p-[30px]">
      <div className="relative flex-grow rounded-[30px] overflow-hidden flex flex-col shadow-2xl">
        {/* Video Background */}
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        
        {/* Dark Overlay - Garante a legibilidade do texto base sobre o vídeo */}
        <div className="absolute inset-0 bg-contrast/40 z-0" />
      </div>
    </section>
  );
};

export default Hero;
