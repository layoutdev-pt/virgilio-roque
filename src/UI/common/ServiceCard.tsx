import React from "react";
import type { Service } from "../../types/types";

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="relative group overflow-hidden rounded-lg min-h-[200px] flex items-center cursor-pointer shadow-md">
      {/* Imagem de Fundo Base */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-110"
        style={{ backgroundImage: `url(${service.image})` }}
      />

      {/* Overlay Base (Garante leitura do texto antes do hover) */}
      <div className="absolute inset-0 bg-black/60 transition-opacity duration-500 group-hover:opacity-0" />

      {/* Overlay de Degradê Animado no Hover (Réplica Exata da Imagem Fornecida) */}
      {/* Transição de sépia escuro para amarelo vibrante */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#4a3f2b] via-[#8c6b20] to-[#fdb913] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Conteúdo Frontal */}
      <div className="relative z-10 p-6 w-full flex items-center justify-between">
        <div className="flex items-center gap-6">
          {/* Círculo com o Número */}
          <div className="bg-white text-black font-bold text-xl w-14 h-14 rounded-full flex items-center justify-center shrink-0 shadow-sm transition-transform duration-500 group-hover:scale-105">
            {service.number}
          </div>

          {/* Textos */}
          <div className="flex flex-col max-w-[280px]">
            <h3 className="text-white text-2xl font-bold mb-1 transition-transform duration-500 group-hover:translate-x-1">
              {service.title}
            </h3>
            <p className="text-white/90 text-sm transition-transform duration-500 group-hover:translate-x-1 delay-75">
              {service.description}
            </p>
          </div>
        </div>

        {/* Ícone */}
        <div className="w-16 h-16 shrink-0 opacity-80 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110">
          <img
            src={service.iconName}
            alt={`Ícone ${service.title}`}
            className="w-full h-full object-contain filter invert"
          />
        </div>
      </div>
    </div>
  );
};
