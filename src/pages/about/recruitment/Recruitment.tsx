import React from 'react';
import { PageHero } from '@/sections/shared/PageHero';
import { RecruitmentForm } from '@/sections/about/recruitment/RecruitmentForm';

export const Recruitment: React.FC = () => {
  return (
    <main className="w-full min-h-screen flex flex-col bg-surface">
      <PageHero 
        title="Junte-se à Nossa Equipa" 
        subtitle="Construímos obras que duram gerações. Submeta a sua candidatura e venha fazer parte de uma equipa baseada na excelência e na confiança." 
      />
      <RecruitmentForm />
    </main>
  );
};
