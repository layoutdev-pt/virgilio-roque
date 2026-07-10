import React from "react";
import { useNavigate } from "react-router-dom";
import type { Service } from "../../types/types";

import imgExp1 from "../../assets/images/random/experiencia-1.jpeg";
import imgExp2 from "../../assets/images/random/experiencia-2.jpeg";
import imgExp3 from "../../assets/images/random/experiencia-3.jpeg";
import imgExp4 from "../../assets/images/random/experiencia-4.jpeg";

export const statsData: Service[] = [
  {
    id: "stat-1",
    number: "01",
    title: "Projetos à Medida",
    description: "Qualidade e atenção aos detalhes",
    iconName: "https://api.iconify.design/lucide:ruler.svg",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "stat-2",
    number: "02",
    title: "Rigor e Ética",
    description: "Transparência em todas as relações",
    iconName: "https://api.iconify.design/lucide:scale.svg",
    image:
      "https://images.unsplash.com/photo-1542621334-a254cf47733d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "stat-3",
    number: "03",
    title: "Design Inovador",
    description: "Técnicas modernas e soluções avançadas.",
    iconName: "https://api.iconify.design/lucide:lightbulb.svg",
    image:
      "https://images.unsplash.com/photo-1503694978374-8a2fa686963a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

export const servicesData: Service[] = [
  {
    id: "exp-1",
    number: "01",
    title: "Projeto Habitacional",
    description:
      "Moradias e complexos residenciais focados na inovação e na qualidade.",
    iconName: "https://api.iconify.design/lucide:hard-hat.svg",
    image: imgExp1,
  },
  {
    id: "exp-2",
    number: "02",
    title: "Reabilitação Urbana",
    description:
      "Devolver vida a edifícios, valorizando o património e a sustentabilidade",
    iconName: "https://api.iconify.design/lucide:hammer.svg",
    image: imgExp2,
  },
  {
    id: "exp-3",
    number: "03",
    title: "Setor Social",
    description:
      "Obras especializadas para o setor geriátrico e equipamentos de apoio social",
    iconName: "https://api.iconify.design/lucide:building-2.svg",
    image: imgExp3,
  },
  {
    id: "exp-4",
    number: "04",
    title: "Obras Públicas",
    description:
      "Infraestruturas e projetos públicos entregues com rigor, dentro do prazo.",
    iconName: "https://api.iconify.design/lucide:wrench.svg",
    image: imgExp4,
  },
];

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
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
        <div className="w-16 h-16 shrink-0 opacity-80 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110">
          <img
            src={service.iconName}
            alt={`Ícone ${service.title}`}
            className="w-full h-full object-contain filter invert-0 group-hover:invert"
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
            A Especialização que o Seu Projeto Exige
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
            pronta.{" "}
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

