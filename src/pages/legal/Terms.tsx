import React from 'react';
import { PageHero } from '../../sections/shared/PageHero';

const Terms: React.FC = () => {
  return (
    <main className="w-full bg-background flex flex-col min-h-[calc(100vh-80px)]">
      <PageHero 
        title="Termos e Condições" 
        subtitle="Regras de utilização do nosso website."
      />
      
      <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-contrast/80 leading-relaxed font-sora">
        
        <div className="bg-surface/50 rounded-3xl border border-gray-100 p-8 md:p-12 shadow-sm flex flex-col gap-8">
          
          <div className="text-sm text-contrast/60 mb-2 border-b border-gray-200 pb-6 flex flex-col gap-1">
            <p><strong className="font-semibold text-contrast">Última atualização:</strong> 10 de julho de 2026</p>
            <p><strong className="font-semibold text-contrast">Website:</strong> www.virgilioroque.com</p>
            <p><strong className="font-semibold text-contrast">Entidade Responsável:</strong> Virgilio Roque - Sociedade de Construção Civil, Lda (NIF: 503 022 578)</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-contrast mb-4">1. Objeto e Aceitação</h2>
            <p>
              O presente documento estabelece as regras que regulam o acesso e a utilização do website oficial da Virgilio Roque, Lda. Ao navegar nesta página e utilizar os nossos formulários, o utilizador aceita integralmente os presentes Termos e Condições e a Política de Privacidade. Caso não concorde, deverá cessar imediatamente a sua utilização.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-contrast mb-4">2. Finalidade do Website</h2>
            <p className="mb-4">
              O website tem como objetivos apresentar o portefólio da empresa, agilizar o contacto e gerir candidaturas espontâneas:
            </p>
            
            <ul className="list-disc pl-6 space-y-4">
              <li><strong>Caráter Informativo:</strong> As imagens, descrições de obras e serviços servem para demonstrar a capacidade técnica e experiência da empresa.</li>
              <li><strong>Orçamentação e Agendamento:</strong> O preenchimento do formulário de contacto/agendamento não constitui qualquer vínculo contratual. A formalização de orçamentos e adjudicação de obras exige uma avaliação técnica detalhada e documentação legal própria.</li>
              <li><strong>Recrutamento:</strong> Ao submeter a sua candidatura e efetuar o upload do seu currículo, o utilizador aceita que o seu perfil seja analisado para vagas na empresa.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-contrast mb-4">3. Propriedade Intelectual</h2>
            <p>
              Todo o conteúdo presente no website (textos, logótipos, design, estrutura e código) é propriedade exclusiva da Virgilio Roque - Sociedade de Construção Civil, Lda. É estritamente proibida a cópia, reprodução, alteração ou distribuição destes conteúdos (especialmente as fotografias de obras e estaleiros) por terceiros ou entidades concorrentes sem autorização prévia por escrito.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-contrast mb-4">4. Responsabilidade do Utilizador</h2>
            <p>
              O utilizador compromete-se a fornecer informações verdadeiras nos formulários e a não utilizar o website para fins ilícitos, envio de spam ou introdução de ficheiros maliciosos/vírus (nomeadamente no upload de currículos) que possam comprometer a segurança da nossa infraestrutura.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-contrast mb-4">5. Alojamento e Disponibilidade</h2>
            <p>
              O website encontra-se alojado através da plataforma Vercel. A Virgilio Roque não se responsabiliza por eventuais interrupções temporárias de serviço resultantes de manutenções técnicas ou falhas nos servidores de alojamento, reservando-se o direito de suspender o acesso ao site para atualizações sem aviso prévio.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-contrast mb-4">6. Livro de Reclamações Eletrónico</h2>
            <p>
              Em cumprimento do disposto no Decreto-Lei n.º 74/2017, informamos que a empresa dispõe de Livro de Reclamações Eletrónico. Caso o deseje, poderá exercer o seu direito através da plataforma oficial: <a href="https://www.livroreclamacoes.pt" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">www.livroreclamacoes.pt</a>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-contrast mb-4">7. Alterações e Foro Competente</h2>
            <p>
              A Virgilio Roque reserva-se o direito de alterar estes Termos a qualquer momento. Os presentes Termos regem-se pela legislação portuguesa. Para a resolução de qualquer litígio emergente da utilização deste website, é convencionado como competente o foro da Comarca de Castelo Branco / Covilhã, com expressa renúncia a qualquer outro.
            </p>
          </div>
          
        </div>
      </section>
    </main>
  );
};

export default Terms;
