import React, { useState, useEffect } from "react";

// Import images
const imgCidadeNova = "/images/obras/CIDADE NOVA/08.png";
const imgEstacao = "/images/obras/estacao torotosendo/01.jpg";
const imgFaculdade = "/images/obras/faculdade de medicina/01.png";
const imgLar = "/images/obras/lar/ERPI001.png";
const imgQuinta = "/images/obras/quinta do pinheiro/01.jpg";

// Assets Extras
const videoLar = "/images/obras/lar/lar covialvi.mp4";

import { Link } from "react-router-dom";

const projects = [
  { id: 1, title: "Cidade Nova", image: imgCidadeNova, url: "/portfolio/cidade-nova" },
  { id: 2, title: "Estação de Tortosendo", image: imgEstacao, url: "/portfolio/estacao-tortosendo" },
  { id: 3, title: "Edifício junto à Faculdade de Medicina", image: imgFaculdade, url: "/portfolio/faculdade-medicina" },
  { id: 4, title: "ERPI do Peso", image: imgLar, url: "/portfolio/erpi-do-peso" },
  { id: 5, title: "Quinta do Pinheiro", image: imgQuinta, url: "/portfolio/quinta-do-pinheiro" },
];

const extendedProjects = [...projects, ...projects, ...projects, ...projects, ...projects];

export const Portfolio: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(projects.length * 2);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Auto-play logic with reset on interaction
  useEffect(() => {
    if (!isTransitioning) return;
    
    const timer = setTimeout(() => {
      if (document.visibilityState === 'visible') {
        setCurrentIndex((prev) => Math.min(prev + 1, extendedProjects.length - 1));
      }
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [currentIndex, isTransitioning]);

  // Restore transition after jumping
  useEffect(() => {
    if (!isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  const nextSlide = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => Math.min(prev + 1, extendedProjects.length - 1));
  };

  const prevSlide = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleTransitionEnd = (e: React.TransitionEvent) => {
    // Only fire on transform, and ensure we're targeting the track itself
    if (e.propertyName !== "transform") return;

    // Keep it within the center block (indices 10 to 14 if projects.length is 5)
    if (currentIndex < projects.length * 2 || currentIndex >= projects.length * 3) {
      setIsTransitioning(false);
      setCurrentIndex((currentIndex % projects.length) + projects.length * 2);
    }
  };

  return (
    <section className="w-full bg-background pt-16 md:pt-24 pb-16 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 px-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-8 bg-contrast/30"></div>
            <span className="text-contrast/60 uppercase tracking-wider text-sm">
              O Nosso Portefólio
            </span>
            <div className="h-px w-8 bg-contrast/30"></div>
          </div>
          <h2 className="text-3xl md:text-5xl text-contrast font-bold max-w-2xl leading-tight">
            Três Décadas de Projetos
          </h2>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col xl:flex-row w-full gap-8 xl:gap-0 items-stretch">
          {/* Left: 1:1 Video -> Agora Cartão de Destaque Premium */}
          <div className="w-full xl:w-[600px] 2xl:w-[700px] flex-shrink-0 px-4 sm:px-6 lg:px-8 self-stretch">
            {/* Design Premium: Vídeo "Full-Bleed" com Overlay Gradient */}
            <div className="w-full h-[350px] sm:h-[450px] xl:h-full relative rounded-2xl overflow-hidden shadow-2xl group">
              <video
                src={videoLar}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradiente de proteção para o texto (escurece apenas a zona superior) */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-transparent opacity-80 pointer-events-none transition-opacity duration-500"></div>

              {/* Título Flutuante */}
              <div className="absolute top-0 left-0 w-full p-8 z-10 flex flex-col pointer-events-none">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center justify-center bg-primary text-white text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                    Em Destaque
                  </span>
                </div>
                <h3 className="text-background text-2xl md:text-3xl lg:text-4xl font-bold drop-shadow-lg tracking-tight">
                  Novo ERPI do Peso
                </h3>
              </div>
              
              {/* Botão Ver Detalhes */}
              <Link
                to="/portfolio/erpi-do-peso"
                className="absolute top-6 right-6 z-20 flex items-center bg-primary text-background h-10 rounded-full px-4 shadow-xl hover:bg-sec transition-colors"
              >
                <span className="font-bold text-sm mr-2">
                  Ver Detalhes
                </span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right: Carousel */}
          <div className="carousel-viewport w-full flex-1 relative flex items-center overflow-hidden py-4 xl:py-0">
            {/* Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-2 md:left-4 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-primary hover:bg-sec text-white shadow-md transition-all"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 md:right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-primary hover:bg-sec text-white shadow-md transition-all"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>

            {/* Carousel Track */}
            <div className="w-full py-4">
              <div
                className={`flex carousel-portfolio-track ${isTransitioning ? "transition-transform duration-500 ease-in-out" : ""}`}
                style={
                  { "--current-index": currentIndex } as React.CSSProperties
                }
                onTransitionEnd={handleTransitionEnd}
              >
                {extendedProjects.map((project, idx) => {
                  const isActive = idx === currentIndex;
                  return (
                    <div
                      key={`${project.id}-${idx}`}
                      className="w-[80vw] sm:w-[400px] md:w-[450px] flex-shrink-0 px-2 portfolio-item"
                    >
                      <div
                        className={`relative rounded-2xl overflow-hidden aspect-square md:aspect-[4/5] ${
                          isTransitioning ? "transition-all duration-500" : ""
                        } ${
                          isActive
                            ? "scale-100 opacity-100 shadow-xl"
                            : "scale-90 opacity-40"
                        }`}
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover bg-surface"
                        />
                        {/* Link Button */}
                        {isActive && (
                          <Link
                            to={project.url}
                            className="absolute top-4 right-4 z-20 flex items-center bg-white text-contrast h-10 rounded-full px-4 shadow-lg hover:bg-primary hover:text-white transition-colors"
                            aria-label={`Ver projeto ${project.title}`}
                          >
                            <span className="font-bold text-sm mr-2">
                              Ver Detalhes
                            </span>
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M7 17L17 7" />
                              <path d="M7 7h10v10" />
                            </svg>
                          </Link>
                        )}
                      </div>

                      {/* Title */}
                      <div
                        className={`mt-4 text-center ${isTransitioning ? "transition-opacity duration-500" : ""} ${isActive ? "opacity-100" : "opacity-0"}`}
                      >
                        <h3 className="text-contrast font-bold text-lg">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
