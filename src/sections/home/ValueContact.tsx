import React from 'react';
import thumbnail from '@/assets/images/random/thumbnail.webp';

export const ValueContact: React.FC = () => {
  return (
    <section className="w-full bg-surface pt-[30px] pb-[20px] px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="flex flex-col">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[1px] w-8 bg-contrast/30"></div>
              <span className="text-contrast/60 uppercase tracking-wider text-sm font-semibold">
                Como Funciona
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl text-contrast font-bold max-w-3xl leading-tight">
              Unimos o nosso saber à tua visão para construir o espaço que idealizaste!
            </h2>
          </div>
          <a 
            href="/contactos" 
            className="inline-flex items-center gap-2 bg-white text-contrast px-6 py-3 rounded-full font-bold hover:bg-primary hover:text-white transition-colors self-start md:self-end shadow-sm"
          >
            <span>Contacte-Nos</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </a>
        </div>

        {/* Features / Differentials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Feature 1 */}
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 shrink-0 rounded-full bg-primary flex items-center justify-center text-white">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/><path d="M11 8v3l2 2"/></svg>
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl text-contrast font-bold mb-2">Fase de descoberta</h3>
              <p className="text-contrast/60 leading-relaxed">
                Começamos por ouvir a tua visão e as tuas necessidades para alinhar o projeto com os teus objetivos.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 shrink-0 rounded-full bg-contrast flex items-center justify-center text-primary">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl text-contrast font-bold mb-2">Estudo e Planeamento</h3>
              <p className="text-contrast/60 leading-relaxed">
                Analisamos a viabilidade técnica, apresentando soluções que respeitam o teu orçamento e prazos.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 shrink-0 rounded-full bg-white flex items-center justify-center text-contrast shadow-sm">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl text-contrast font-bold mb-2">Mãos à Obra</h3>
              <p className="text-contrast/60 leading-relaxed">
                Após a adjudicação, iniciamos a construção ou recuperação, garantindo o rigor e a qualidade que nos definem.
              </p>
            </div>
          </div>
        </div>

        {/* Video & Contact Box */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          
          {/* Left: Video Thumbnail */}
          <div className="w-full lg:w-3/5 relative rounded-3xl overflow-hidden group">
            <img 
              src={thumbnail} 
              alt="Apresentação Virgílio Roque" 
              className="w-full h-full object-cover aspect-video lg:aspect-auto"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
            
            {/* Play Button */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <a 
                href="https://www.youtube.com/watch?v=uaRDyczbXcQ"
                target="_blank"
                rel="noopener noreferrer"
                className="w-20 h-20 rounded-full flex items-center justify-center text-white hover:text-primary transition-all duration-300 animate-shadow-pulse hover:animate-none hover:scale-110 drop-shadow-2xl"
                aria-label="Ver vídeo de apresentação no Youtube"
              >
                <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-lg">
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Contact Box */}
          <div className="w-full lg:w-2/5 bg-white rounded-3xl p-8 md:p-12 shadow-sm flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl text-contrast font-bold mb-4">Agendar horários</h3>
            <p className="text-contrast/60 leading-relaxed mb-8">
              Pronto para começar? Liga-nos durante o nosso horário para verificares a nossa disponibilidade.
            </p>

            <div className="flex flex-col gap-4 mb-8">
              <div className="flex justify-between items-center border-b border-contrast/10 pb-4">
                <span className="text-contrast/80 font-medium">Segunda &ndash; Sexta</span>
                <span className="text-contrast font-bold">08:30 &ndash; 17:30</span>
              </div>
              <div className="flex justify-between items-center border-b border-contrast/10 pb-4">
                <span className="text-contrast/80 font-medium">Sábado e domingo</span>
                <span className="text-contrast font-bold">Fechado</span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-start gap-4 border-b border-contrast/10 pb-4">
                <span className="text-contrast/80 font-medium shrink-0">Email:</span>
                <a href="mailto:virgilioroque.lda@gmail.com" className="text-contrast font-bold hover:text-primary transition-colors text-right break-all">
                  virgilioroque.lda@gmail.com
                </a>
              </div>
              <div className="flex justify-between items-start gap-4">
                <span className="text-contrast/80 font-medium shrink-0">Contacto:</span>
                <div className="flex flex-col text-right">
                  <a href="tel:+351275971394" className="text-contrast font-bold hover:text-primary transition-colors">
                    (+351) 275 971 394
                  </a>
                  <span className="text-sm text-contrast/50 mt-1">(chamada para a rede fixa nacional)</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
