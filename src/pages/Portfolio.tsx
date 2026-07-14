import { PageHero } from '@/sections/shared/PageHero';
import { BentoGallery } from '@/sections/portfolio/BentoGallery';

export default function Portfolio() {
  return (
    <main className="w-full min-h-screen flex flex-col bg-background">
      <PageHero 
        title='As Nossas "Obras" Primas'
        subtitle="O nosso trabalho assegura obras rápidas e completas, à medida dos seus pedidos e para dar mais valor ao que constrói."
      />
      <BentoGallery />
    </main>
  );
}
