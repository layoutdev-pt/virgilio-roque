import React from "react";
import { useNavigate } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import {
  Ruler,
  Scale,
  Lightbulb,
  HardHat,
  Hammer,
  Building2,
  Wrench,
} from "lucide-react";

import imgExp1 from "@/assets/images/random/experiencia-1.jpeg";
import imgExp2 from "@/assets/images/random/experiencia-2.jpeg";
import imgExp3 from "@/assets/images/random/experiencia-3.jpeg";
import imgExp4 from "@/assets/images/random/experiencia-4.jpeg";

export interface ExperienceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  Icon: LucideIcon;
  image: string;
}

export const statsData: ExperienceItem[] = [
  {
    id: "stat-1",
    number: "01",
    title: "Projetos à Medida",
    description: "Construímos com qualidade e profissionalismo tendo sempre atenção aos detalhes",
    Icon: Ruler,
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "stat-2",
    number: "02",
    title: "Rigor e Ética",
    description: "Maxima transparência em todas as relacoes",
    Icon: Scale,
    image:
      "https://images.unsplash.com/photo-1542621334-a254cf47733d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "stat-3",
    number: "03",
    title: "Design Inovador",
    description: "Procuramos sempre inovar utilizando as técnicas mais recentes e as solução mais avançadas",
    Icon: Lightbulb,
    image:
      "https://images.unsplash.com/photo-1503694978374-8a2fa686963a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

export const servicesData: ExperienceItem[] = [
  {
    id: "exp-1",
    number: "01",
    title: "Projetos Habitacionais",
    description:
      "Moradias e complexos residenciais focados na inovação e na qualidade.",
    Icon: HardHat,
    image: imgExp1,
  },
  {
    id: "exp-2",
    number: "02",
    title: "Reabilitação Urbana",
    description:
      "Devolvemos vida a edifícios, valorizando o património, o ambiente e a sustentabilidade",
    Icon: Hammer,
    image: imgExp2,
  },
  {
    id: "exp-3",
    number: "03",
    title: "Setor Social",
    description:
      "Grande experiência em construção de equipamentos destinados a geriatria e equipamentos de apoio social",
    Icon: Building2,
    image: imgExp3,
  },
  {
    id: "exp-4",
    number: "04",
    title: "Obras Públicas",
    description:
      "Construção de infraestruturas e edifícios destinados ao setor publico com a qualidade e exigência que o mercado exige.",
    Icon: Wrench,
    image: imgExp4,
  },
];

interface ServiceCardProps {
  service: ExperienceItem;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const IconComponent = service.Icon;

  return (
    <div className="relative group overflow-hidden rounded-lg min-h-[200px] flex items-center cursor-pointer shadow-md bg-background">
      {/* Imagem de Fundo Base (visível apenas em hover) */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out scale-100 opacity-0 group-hover:scale-110 group-hover:opacity-100"
        style={{ backgroundImage: `url(${service.image})` }}
      />

      {/* Overlay de Degradê Animado no Hover (Laranja) */}
      <div className="absolute inset-0 bg-gradient-to-r from-contrast/90 via-primary/80 to-sec/90 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Conteúdo Frontal */}
      <div className="relative z-10 p-6 w-full flex items-center justify-between">
        <div className="flex items-center gap-6">
          {/* Círculo com o Número */}
          <div className="bg-surface group-hover:bg-background text-contrast font-bold text-xl w-14 h-14 rounded-full flex items-center justify-center shrink-0 shadow-sm transition-all duration-500 group-hover:scale-105">
            {service.number}
          </div>

          {/* Textos */}
          <div className="flex flex-col max-w-[280px]">
            <h3 className="text-contrast group-hover:text-background text-2xl font-bold mb-1 transition-all duration-500 group-hover:translate-x-1">
              {service.title}
            </h3>
            <p className="text-contrast/80 group-hover:text-background/90 text-sm transition-all duration-500 group-hover:translate-x-1 delay-75">
              {service.description}
            </p>
          </div>
        </div>

        {/* Ícone */}
        <div className="w-16 h-16 shrink-0 flex items-center justify-center opacity-80 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110">
          <IconComponent
            className="w-12 h-12 text-contrast transition-colors duration-500 group-hover:text-background"
            strokeWidth={1.5}
          />
        </div>
      </div>
    </div>
  );
};

export const Experience: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-background pt-8 md:pt-[30px] pb-16 md:pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-8 bg-contrast/30"></div>
            <span className="text-contrast/60 uppercase tracking-wider text-sm">
              A Nossa Experiência
            </span>
            <div className="h-[1px] w-8 bg-contrast/30"></div>
          </div>
          <h2 className="text-3xl md:text-5xl text-contrast font-bold max-w-2xl leading-tight">
            Temos a Equipa Especializada que o seu Projeto Exige
          </h2>
        </div>

        {/* Services Grid with Decorative Circle */}
        <div className="relative w-full">
          {/* Círculo Cinzento Decorativo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-surface rounded-full pointer-events-none"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>

        {/* Separator Line */}
        <div className="w-full h-[1px] bg-contrast/10 mt-16 mb-16"></div>

        {/* Footer Contact Text */}
        <div className="text-center">
          <p className="text-xl md:text-xl text-contrast/80">
            Evite o esforço da procura pela solução ideal. A nossa equipa está
            pronta a ajudá-lo.{" "}
            <span 
              onClick={() => navigate('/contactos')}
              className="font-bold text-primary cursor-pointer hover:text-contrast transition-colors"
            >
              Contacte-nos
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

