import React from 'react';
import { PageHero } from '../../sections/shared/PageHero';

const CookiesPolicy: React.FC = () => {
  return (
    <main className="w-full bg-background flex flex-col min-h-[calc(100vh-80px)]">
      <PageHero 
        title="Política de Cookies" 
        subtitle="Como utilizamos cookies para melhorar a sua experiência."
      />
      
      <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-contrast/80 leading-relaxed font-sora">
        
        <div className="bg-surface/50 rounded-3xl border border-gray-100 p-8 md:p-12 shadow-sm flex flex-col gap-8">
          
          <div className="text-sm text-contrast/60 mb-2 border-b border-gray-200 pb-6 flex flex-col gap-1">
            <p><strong className="font-semibold text-contrast">Última atualização:</strong> 10 de julho de 2026</p>
            <p><strong className="font-semibold text-contrast">Website:</strong> www.virgilioroque.com</p>
            <p><strong className="font-semibold text-contrast">Entidade Responsável:</strong> Virgilio Roque - Sociedade de Construção Civil, Lda</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-contrast mb-4">1. O que são Cookies?</h2>
            <p>
              Os &quot;cookies&quot; são pequenos ficheiros de texto armazenados no seu computador ou dispositivo móvel através do navegador de internet (browser) quando visita um website, permitindo garantir a segurança e o correto funcionamento técnico da página.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-contrast mb-4">2. Que Cookies utilizamos?</h2>
            <p className="mb-4">
              O website da Virgilio Roque foi desenvolvido com uma abordagem de respeito total pela privacidade, dispensando tecnologias intrusivas de rastreio. Por este motivo, utilizamos exclusivamente Cookies Estritamente Necessários (Técnicos).
            </p>
            <p>
              Estes cookies são indispensáveis para que o website funcione de forma segura e responsiva (por exemplo, para garantir o processamento seguro do envio de mensagens e o upload de ficheiros nos formulários de contacto e recrutamento). Como são essenciais para a prestação do serviço, a legislação europeia não exige o consentimento prévio para a sua instalação.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-contrast mb-4">3. O que NÃO utilizamos</h2>
            <p className="mb-4">
              Para assegurar uma navegação transparente e livre de rastreadores, declaramos formalmente que este website:
            </p>
            <ul className="list-disc pl-6 space-y-4 font-medium text-contrast">
              <li>NÃO utiliza cookies analíticos ou de estatística de tráfego.</li>
              <li>NÃO utiliza cookies de publicidade direcionada, marketing ou retargeting.</li>
              <li>NÃO utiliza pixéis de rastreio de redes sociais (como o Facebook Pixel) nem partilha dados de navegação com terceiros.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-contrast mb-4">4. Gestão e Desativação de Cookies</h2>
            <p>
              Sendo os nossos cookies de natureza puramente técnica, o utilizador pode gerir as suas preferências através das definições de privacidade do seu próprio navegador (Google Chrome, Safari, Microsoft Edge, Mozilla Firefox, etc.). Alertamos, contudo, que o bloqueio destes cookies essenciais poderá impedir o funcionamento e o envio correto dos formulários presentes no site.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-contrast mb-4">5. Contacto</h2>
            <p>
              Para qualquer esclarecimento adicional sobre as nossas práticas técnicas, contacte-nos através do e-mail: <a href="mailto:virgilioroque.lda@gmail.com" className="text-primary hover:underline font-semibold">virgilioroque.lda@gmail.com</a>.
            </p>
          </div>
          
        </div>
      </section>
    </main>
  );
};

export default CookiesPolicy;
