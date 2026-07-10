import React from "react";
import { Link } from "react-router-dom";

// Array dinâmico de projetos para popular a galeria Bento
const portfolioItems = [
  {
    id: "cidade-nova",
    title: "Empreedimento Cidade Nova",
    image: "src/assets/images/obras/CIDADE NOVA/01.png",
    description: "Covilhã",
  },
  {
    id: "quinta-do-pinheiro",
    title: "Bloco Habitacional - Quinta do Pinheiro",
    image: "src/assets/images/obras/quinta do pinheiro/01.jpg",
    description: "Covilhã",
  },
  {
    id: "faculdade-medicina",
    title: "Edifício junto à Faculdade de Medicina",
    image: "src/assets/images/obras/faculdade de medicina/04.png",
    description: "Covilhã",
  },
  {
    id: "estacao-tortosendo",
    title: "Estação de Tortosendo",
    image: "src/assets/images/obras/estacao torotosendo/01.jpg",
    description: "Tortosendo",
  },
  {
    id: "erpi-do-peso",
    title: "ERPI do Peso",
    image: "src/assets/images/obras/lar/ERPI001.png",
    description: "Covilhã",
  },
  // {   id: 6, title: 'Ponte Rodoviária', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200', description: 'Engenharia civil focada na mobilidade.' },
  // { id: 7, title: 'Resort & Spa', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200', description: 'Integração paisagística e acabamentos premium.' },
];

const getGridSpan = (index: number) => {
  // Exceção: O primeiro item fecha a Linha 1 com o Bloco de Texto (4 + 8 = 12)
  if (index === 0) return "md:col-span-8 row-span-1";

  // Ciclo fechado para os restantes itens. A matemática soma sempre 12 nas Linhas 2 e 3.
  const pattern = (index - 1) % 4;
  switch (pattern) {
    case 0:
      return "md:col-span-4 row-span-2"; // Imagem Alta (Esquerda)
    case 1:
      return "md:col-span-4 row-span-1"; // Imagem Quadrada (Centro Topo)
    case 2:
      return "md:col-span-4 row-span-1"; // Imagem Quadrada (Direita Topo)
    case 3:
      return "md:col-span-8 row-span-1"; // Imagem Larga (Centro/Direita Base - fecha a Imagem Alta)
    default:
      return "md:col-span-4 row-span-1";
  }
};

export const BentoGallery: React.FC = () => {
  return (
    <section className="w-full bg-background py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[320px] gap-6 grid-flow-dense max-w-7xl mx-auto px-4">
        {/* Bloco Primário de Texto Fixo (Não é imagem) */}
        <div className="col-span-1 md:col-span-4 row-span-1 flex flex-col justify-center bg-transparent pr-8">
          <h2 className="font-sora text-3xl md:text-4xl lg:text-4xl font-bold text-contrast mb-6">
            Descubra os melhores imóveis.
          </h2>
          <p className="text-gray-600 leading-relaxed text-base">
            Explore o nosso portefólio. Um reflexo visual de anos de dedicação,
            engenharia de precisão e da paixão inabalável por erguer
            infraestruturas que moldam o futuro.
          </p>
        </div>

        {/* Mapeamento Dinâmico de Obras */}
        {portfolioItems.map((item, index) => {
          return (
            <Link
              to={`/portfolio/${item.id}`}
              key={item.id}
              className={`relative group overflow-hidden rounded-2xl cursor-pointer bg-surface block ${getGridSpan(index)}`}
            >
              <img
                src={"/" + item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradiente de Fundo (Overlay) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

              {/* Metadados (Texto) */}
              <div className="absolute bottom-0 left-0 p-6 sm:p-8 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 text-left">
                <h3 className="font-sora text-white text-xl font-bold">
                  {item.title}
                </h3>
                <p className="font-sora text-white/80 text-sm mt-2">
                  {item.description}
                </p>
              </div>

              {/* Botão Circular (Arrow Action) */}
              <div className="absolute top-6 right-6 bg-white rounded-full w-12 h-12 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
