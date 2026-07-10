import React from 'react';
import { PageHero } from '../../sections/shared/PageHero';
import { TeamImage } from '../../sections/about/history/TeamImage';
import GroupCompanies from '../../sections/shared/GroupCompanies';
import { ValuesAccordion } from '../../sections/about/history/ValuesAccordion';
import { Timeline } from '../../sections/about/history/Timeline';

export const History: React.FC = () => {
  return (
    <main className="w-full min-h-screen flex flex-col bg-surface">
      <PageHero 
        title="Sobre a Empresa" 
        subtitle="Descubra a história da Virgílio Roque, com décadas de solidez e excelência na construção. Conheça os valores que nos inspiram a construir o futuro, obra após obra." 
      />
      <TeamImage />
      <GroupCompanies />
      <ValuesAccordion />
      <Timeline />
      {/* Futuras secções desta página serão importadas e adicionadas aqui */}
    </main>
  );
};

export default History;
