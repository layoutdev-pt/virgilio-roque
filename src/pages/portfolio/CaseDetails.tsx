// src/pages/portfolio/CaseDetails.tsx
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PageHero } from '../../sections/shared/PageHero';
import { portfolioData } from '../../data/portfolioData';

export default function CaseDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Find the project based on the ID parameter
  const project = portfolioData.find((p) => String(p.id) === id);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Reset carousel when project changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [id]);

  // 404 Fallback State: Interceção de ID Inválido
  if (!project) {
    return (
      <main className="w-full min-h-screen flex flex-col bg-background font-sora">
        <PageHero 
          title="Erro 404" 
          subtitle="Projeto não encontrado." 
        />
        <div className="flex-1 flex flex-col items-center justify-center p-8 text-center min-h-[50vh]">
          <h2 className="text-3xl md:text-4xl font-bold text-contrast mb-6">Projeto não encontrado</h2>
          <p className="text-gray-600 mb-8 max-w-md">
            O projeto solicitado pode ter sido movido ou o URL não está correto. Por favor, regresse à galeria principal para explorar as nossas obras.
          </p>
          <button 
            onClick={() => navigate('/portfolio')}
            className="bg-primary text-white font-semibold py-3 px-8 rounded-full hover:bg-orange-600 transition-colors"
          >
            Regressar ao Portefólio
          </button>
        </div>
      </main>
    );
  }

  const handlePrev = () => {
    if (!project.coverImages) return;
    setCurrentImageIndex((prev) => (prev === 0 ? project.coverImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    if (!project.coverImages) return;
    setCurrentImageIndex((prev) => (prev === project.coverImages.length - 1 ? 0 : prev + 1));
  };

  // Active Project Rendering
  return (
    <main className="w-full min-h-screen flex flex-col bg-background font-sora">
      <PageHero 
        title="Detalhes do Projeto" 
        subtitle="Os nossos projetos de destaque revelam o rigor e a excelência que aplicamos em cada obra." 
      />
      
      {/* Content Container */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
        
        {/* Botão de Voltar */}
        <button 
          onClick={() => navigate('/portfolio')}
          className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors mb-8 font-semibold"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Voltar à Galeria
        </button>

        {/* A. Hero do Caso (Imagem com Botões e Indicadores) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 h-auto lg:h-[70vh]">
          
          {/* Imagem Principal (8 colunas) */}
          <div className="lg:col-span-8 relative rounded-3xl overflow-hidden shadow-sm group bg-gray-100 min-h-[400px]">
            {project.coverImages[currentImageIndex].endsWith('.mp4') ? (
              <video
                src={project.coverImages[currentImageIndex]}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <img 
                src={project.coverImages[currentImageIndex]} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            )}

            {/* Controlos de Navegação do Carrossel (Visíveis no Hover) */}
            {project.coverImages.length > 1 && (
              <>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <button 
                  onClick={handlePrev}
                  className="absolute top-1/2 left-4 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/90 hover:bg-white rounded-full text-primary shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
                  aria-label="Imagem Anterior"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                  </svg>
                </button>
                <button 
                  onClick={handleNext}
                  className="absolute top-1/2 right-4 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/90 hover:bg-white rounded-full text-primary shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
                  aria-label="Próxima Imagem"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>

                {/* Indicadores Visuais (Dots) */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {project.coverImages.map((_, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex ? 'bg-primary w-6' : 'bg-white/60 hover:bg-white'}`}
                      aria-label={`Ir para a imagem ${idx + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Galeria Secundária (4 colunas) - 2 fotos, altura flex-1 */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {project.gallery && project.gallery.slice(0, 2).map((img, idx) => (
              <div key={idx} className="flex-1 relative w-full rounded-2xl overflow-hidden shadow-sm">
                <img 
                  src={img} 
                  alt={`Galeria secundária ${idx + 1}`} 
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  width="3840"
                  height="2160"
                />
              </div>
            ))}
          </div>

        </div>

        {/* B. Corpo Inferior (Texto + Cartão) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-12">
          
          {/* Esquerda: Tipografia e Conteúdo (8 colunas) */}
          <div className="lg:col-span-8">
            {/* Título Principal */}
            <h1 className="text-3xl md:text-4xl font-sora font-bold uppercase text-contrast mb-2">
              {project.title}
            </h1>
            
            {/* Localização / Marker (Simulado como no mockup) */}
            <div className="flex items-center gap-2 mb-10 text-gray-500 font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-gray-600">
                <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.724 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
              <span>Covilhã, Portugal</span> {/* Localização mockada para exemplo da maquete */}
            </div>
            
            {/* Visão Geral */}
            <h2 className="text-2xl font-bold mb-4 text-contrast">Visão Geral</h2>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              {project.overviewSummary}
            </p>
            {project.overviewDetailed && (
              <p className="text-gray-700 leading-relaxed text-base md:text-lg mt-4">
                {project.overviewDetailed}
              </p>
            )}

            {/* Secções (Subtítulos e Listas) */}
            {project.sections && project.sections.map((section, index) => (
              <div key={index} className="mt-8">
                <h3 className="border-l-4 border-primary pl-3 text-xl font-bold text-contrast">
                  {section.subtitle}
                </h3>
                <ul className="list-none pl-4 mt-4 text-gray-700 leading-relaxed space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <span className="text-primary text-xl leading-none mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Citação (Opcional) */}
            {project.quote && (
              <blockquote className="mt-16 p-8 bg-gray-50 border-l-4 border-primary italic text-lg md:text-xl text-gray-600 rounded-r-2xl">
                "{project.quote}"
              </blockquote>
            )}
          </div>

          {/* Direita: Cartão de CTA (4 colunas) */}
          <div className="lg:col-span-4 font-sora">
            {/* Cartão Fixo (Sticky) de Contacto */}
            <div className="border border-surface/50 rounded-3xl p-8 text-center bg-surface shadow-md sticky top-32">
              <h3 className="text-2xl font-bold text-contrast mb-4">Tem um projeto em mente?</h3>
              <p className="text-base text-contrast/70 mb-8 leading-relaxed">
                Exija o padrão de qualidade técnica, sustentabilidade e acabamentos premium deste projeto na sua futura casa.
              </p>
              <button 
                onClick={() => navigate('/contactos')}
                className="bg-primary text-background w-full py-4 rounded-full font-bold hover:bg-sec transition-colors text-lg shadow-sm"
              >
                Solicitar Orçamento
              </button>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
