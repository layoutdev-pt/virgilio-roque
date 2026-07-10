import React from 'react';
import { PageHero } from '../../sections/shared/PageHero';

const PrivacyPolicy: React.FC = () => {
  return (
    <main className="w-full bg-background flex flex-col min-h-[calc(100vh-80px)]">
      <PageHero 
        title="Política de Privacidade" 
        subtitle="O nosso compromisso com a proteção dos seus dados pessoais."
      />
      
      <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-contrast/80 leading-relaxed font-sora">
        
        <div className="bg-surface/50 rounded-3xl border border-gray-100 p-8 md:p-12 shadow-sm flex flex-col gap-8">
          
          <div className="text-sm text-contrast/60 mb-2 border-b border-gray-200 pb-6 flex flex-col gap-1">
            <p><strong className="font-semibold text-contrast">Última atualização:</strong> 10 de julho de 2026</p>
            <p><strong className="font-semibold text-contrast">Website:</strong> www.virgilioroque.com</p>
            <p><strong className="font-semibold text-contrast">Entidade Responsável:</strong> Virgilio Roque - Sociedade de Construção Civil, Lda (NIF: 503 022 578)</p>
            <p><strong className="font-semibold text-contrast">Contacto:</strong> virgilioroque.lda@gmail.com | Tel.: 275 971 394 <span className="opacity-75 italic">(Chamada para a rede fixa nacional)</span></p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-contrast mb-4">1. O Compromisso com a Privacidade</h2>
            <p>
              A Virgilio Roque - Sociedade de Construção Civil, Lda é a entidade responsável pela recolha e tratamento dos dados pessoais submetidos através deste website, garantindo o rigoroso cumprimento do Regulamento Geral sobre a Proteção de Dados (RGPD) e da legislação portuguesa em vigor.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-contrast mb-4">2. Dados Recolhidos e Finalidades</h2>
            <p className="mb-4">
              Este website funciona como um portefólio digital e um canal de contacto direto, não dispondo de área reservada de cliente. A recolha de dados ocorre exclusivamente nos seguintes contextos, mediante preenchimento voluntário e consentimento ativo (caixa de seleção) nos nossos formulários:
            </p>
            
            <h3 className="text-lg font-bold text-contrast mt-6 mb-2">Formulário de Agendamento/Contacto Comercial:</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Dados recolhidos:</strong> Nome Completo, Endereço de E-mail, Assunto, Como Nos Conheceu e Mensagem.</li>
              <li><strong>Finalidade:</strong> Dar resposta a pedidos de contacto, esclarecimento de dúvidas, agendamento de reuniões técnicas e orçamentação.</li>
            </ul>

            <h3 className="text-lg font-bold text-contrast mt-6 mb-2">Formulário de Recrutamento:</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Dados recolhidos:</strong> Nome Completo, Endereço de E-mail, Contacto Telefónico, Localidade, Área de Interesse, Anos de Experiência, Disponibilidade, Tipo de Contrato, Ficheiro em Anexo (Upload de Currículo Vitae) e a mensagem "Fale-Nos De Si".</li>
              <li><strong>Finalidade:</strong> Avaliação do perfil do candidato para vagas atuais ou futuras na nossa empresa.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-contrast mb-4">3. Tratamento, Alojamento e Partilha de Dados</h2>
            <p>
              O nosso website encontra-se alojado na infraestrutura técnica da Vercel. Ao submeter um formulário, as informações e os ficheiros anexos são encaminhados de forma segura e direta para o nosso correio eletrónico corporativo (virgilioroque.lda@gmail.com), sendo tratados exclusivamente pela nossa equipa interna. A Virgilio Roque garante que não partilha, cede ou vende os seus dados a entidades terceiras para fins comerciais ou de marketing.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-contrast mb-4">4. Prazos de Conservação</h2>
            <ul className="list-disc pl-6 space-y-4">
              <li><strong>Dados de Contacto Comercial:</strong> Conservados pelo tempo estritamente necessário para dar resposta ao seu pedido, apresentar orçamentos ou até à conclusão de um eventual processo de adjudicação de obra.</li>
              <li><strong>Dados de Recrutamento (CVs):</strong> Os currículos submetidos e os dados associados à candidatura são mantidos na nossa base de dados interna por um período máximo de 12 meses. Findo este prazo, ou caso o candidato solicite, os documentos são eliminados definitivamente.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-contrast mb-4">5. Segurança</h2>
            <p>
              Implementamos as medidas técnicas adequadas para proteger os dados recolhidos. No entanto, o utilizador deve estar ciente de que a transmissão de informações pela Internet não é totalmente infalível, recaindo a nossa responsabilidade sobre a proteção interna dos dados após a sua receção.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-contrast mb-4">6. Direitos do Titular dos Dados</h2>
            <p>
              O utilizador detém o direito de solicitar o Acesso, Retificação, Limitação do tratamento ou o Apagamento definitivo dos seus dados pessoais. Para exercer qualquer um destes direitos, deverá enviar o seu pedido para <a href="mailto:virgilioroque.lda@gmail.com" className="text-primary hover:underline font-semibold">virgilioroque.lda@gmail.com</a>. Comprometemo-nos a processar o seu pedido no prazo máximo de 30 dias.
            </p>
          </div>
          
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
