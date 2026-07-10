import { PageHero } from '../../sections/shared/PageHero';
import { RecruitmentForm } from '../../sections/about/recruitment/RecruitmentForm';

export default function Recruitment() {
  return (
    <main className="w-full min-h-screen flex flex-col bg-background">
      <PageHero 
        title="Trabalhe Connosco | Oportunidades de Emprego em Construção Civil" 
        subtitle="A nossa empresa oferece oportunidades gratificantes, onde as suas competências ajudam a moldar espaços e a deixar uma marca duradoura."
      />
      <RecruitmentForm />
    </main>
  );
}
