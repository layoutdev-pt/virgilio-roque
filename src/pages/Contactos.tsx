import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../sections/shared/PageHero';

// Icons using SVG to keep it consistent
const MapPinIcon = ({ className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const MailIcon = ({ className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
  </svg>
);

const PhoneIcon = ({ className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const Contactos: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <main className="w-full bg-background flex flex-col min-h-[calc(100vh-80px)]">
      <PageHero 
        title="Fale Connosco" 
        subtitle="Tem alguma dúvida ou pretende solicitar um orçamento? A nossa equipa está pronta para ajudar. Preencha o formulário ou utilize os nossos contactos diretos."
      />
      
      {/* 2. Secção (Grid Bidimensional) */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* 3. Coluna Esquerda (Informação de Contacto e Copy) */}
          <div className="flex flex-col bg-surface/50 rounded-2xl border border-gray-100 p-8 md:p-10 h-full">
            <span className="text-primary font-bold text-sm uppercase tracking-wider mb-4">
              Entre Em Contato
            </span>
            <h1 className="text-4xl md:text-5xl font-sora font-bold text-contrast mb-8 leading-tight">
              Comece a sua jornada connosco!
            </h1>

            <div className="flex flex-col gap-8 mt-4">
              
              {/* Bloco 1: Morada */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPinIcon className="text-primary w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-sora font-bold text-lg text-contrast mb-1">Localização</h3>
                  <a 
                    href="https://www.google.com/maps/place/Virgílio+Roque,+Lda/@40.2267831,-7.5066263,173m/data=!3m1!1e3!4m14!1m7!3m6!1s0xd3d23a009086e05:0xd2ce1b75dc072e1e!2sCovialvi+-+Investimentos+Imobiliários!8m2!3d40.2269197!4d-7.5067571!16s%2Fg%2F1tqcmh_7!3m5!1s0xd3d3cb4ed8ad153:0xcda7f9a80579d9c6!8m2!3d40.2267396!4d-7.5069052!16s%2Fg%2F11c5hy3rpk?entry=ttu&g_ep=EgoyMDI2MDcwNy4wIKXMDSoASAFQAw%3D%3D" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-contrast/70 hover:text-primary transition-colors text-base max-w-sm leading-relaxed"
                  >
                    Vírgilio Roque, Lda.<br/>
                    Parque Industrial do Tortosendo,<br/>
                    Lote 75 - Rua E, 6200-683 Tortosendo
                  </a>
                </div>
              </div>

              {/* Bloco 2: Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MailIcon className="text-primary w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-sora font-bold text-lg text-contrast mb-1">Email</h3>
                  <a href="mailto:virgilioroque.lda@gmail.com" className="text-contrast/70 hover:text-primary transition-colors text-base">
                    virgilioroque.lda@gmail.com
                  </a>
                </div>
              </div>

              {/* Bloco 3: Telefone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <PhoneIcon className="text-primary w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-sora font-bold text-lg text-contrast mb-1">Telefone / Fax</h3>
                  <div className="text-contrast/70 text-base flex flex-col gap-2 mt-1">
                    <p className="flex flex-col">
                      <span><span className="font-semibold text-contrast/90">TLF:</span> <a href="tel:+351275971394" className="hover:text-primary transition-colors">(+351) 275 971 394</a></span>
                      <span className="text-sm opacity-75 italic">(Chamada para a rede fixa nacional)</span>
                    </p>
                    <p>
                      <span className="font-semibold text-contrast/90">FAX:</span> <a href="tel:+351275971534" className="hover:text-primary transition-colors">(+351) 275 971 534</a>
                    </p>
                    <p className="flex flex-col">
                      <span>
                        <span className="font-semibold text-contrast/90">TLM:</span>{' '}
                        <a href="tel:+351967138082" className="hover:text-primary transition-colors">967 138 082</a> /{' '}
                        <a href="tel:+351967138116" className="hover:text-primary transition-colors">967 138 116</a> /{' '}
                        <a href="tel:+351962269776" className="hover:text-primary transition-colors">962 269 776</a>
                      </span>
                      <span className="text-sm opacity-75 italic">(Chamada para a rede móvel nacional)</span>
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* 4. Coluna Direita (Formulário de Agendamento) */}
          <div className="w-full h-full">
            <div className="bg-surface/50 rounded-2xl border border-gray-100 p-8 md:p-10 flex flex-col h-full">
              <h2 className="text-2xl font-bold font-sora text-contrast mb-2">Agende um horário</h2>
              <p className="text-contrast/60 mb-8">Pronto para começar? Envie-nos uma mensagem e a nossa equipa entrará em contacto consigo o mais breve possível.</p>
              
              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                
                {/* Linha 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-semibold text-contrast/80">Nome Completo</label>
                    <input type="text" id="name" placeholder="O seu nome" className="w-full bg-surface/30 border border-transparent focus:border-primary focus:bg-white rounded-xl px-5 py-3 outline-none transition-all text-contrast" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-semibold text-contrast/80">Endereço de Email</label>
                    <input type="email" id="email" placeholder="O seu email" className="w-full bg-surface/30 border border-transparent focus:border-primary focus:bg-white rounded-xl px-5 py-3 outline-none transition-all text-contrast" />
                  </div>
                </div>

                {/* Linha 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="subject" className="text-sm font-semibold text-contrast/80">Assunto</label>
                    <select id="subject" defaultValue="" className="w-full bg-surface/30 border border-transparent focus:border-primary focus:bg-white rounded-xl px-5 py-3 outline-none transition-all text-contrast appearance-none cursor-pointer">
                      <option value="" disabled>Selecione um assunto</option>
                      <option value="orcamento">Pedido de Orçamento</option>
                      <option value="visita">Agendar Visita</option>
                      <option value="informacao">Pedido de Informação</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="source" className="text-sm font-semibold text-contrast/80">Como Nos Conheceu?</label>
                    <select id="source" defaultValue="" className="w-full bg-surface/30 border border-transparent focus:border-primary focus:bg-white rounded-xl px-5 py-3 outline-none transition-all text-contrast appearance-none cursor-pointer">
                      <option value="" disabled>Selecione uma opção</option>
                      <option value="google">Pesquisa Google</option>
                      <option value="social">Redes Sociais</option>
                      <option value="recomendacao">Recomendação</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>
                </div>

                {/* Linha 3 */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-semibold text-contrast/80">Mensagem</label>
                  <textarea id="message" placeholder="Escreva aqui a sua mensagem..." className="w-full bg-surface/30 border border-transparent focus:border-primary focus:bg-white rounded-xl px-5 py-3 outline-none transition-all text-contrast min-h-[120px] resize-y"></textarea>
                </div>

                {/* Aceitação Legal */}
                <div className="mt-2">
                  <label className="flex items-start gap-3 cursor-pointer group" onClick={(e) => { e.preventDefault(); setIsChecked(!isChecked); }}>
                    <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded border transition-colors flex items-center justify-center ${isChecked ? 'bg-primary border-primary' : 'border-gray-300 group-hover:border-primary'}`}>
                      {isChecked && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      )}
                    </div>
                    <input 
                      type="checkbox" 
                      className="hidden" 
                      checked={isChecked}
                      onChange={() => setIsChecked(!isChecked)}
                      required
                    />
                    <span className="text-[13px] leading-relaxed text-contrast/70 select-none">
                      Li e aceito os{' '}
                      <Link to="/termos-e-condicoes" className="text-primary hover:underline font-medium" onClick={(e) => e.stopPropagation()}>Termos e Condições</Link>
                      {' '}e autorizo o tratamento dos meus dados apenas para efeitos de contacto, conforme a{' '}
                      <Link to="/politica-privacidade" className="text-primary hover:underline font-medium" onClick={(e) => e.stopPropagation()}>Política de Privacidade</Link>
                    </span>
                  </label>
                </div>

                {/* Botão */}
                <button type="submit" className="self-start mt-2 bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-full transition-colors flex items-center gap-2">
                  Agendar Agora
                </button>

              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Secção do Mapa (Base da Página) */}
      <section className="w-full max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16 mt-auto">
        {/* Usamos o pb do iframe embed link. Em mobile usa pointer-events-none para evitar scroll-trap */}
        <div className="w-full rounded-3xl overflow-hidden shadow-lg border border-gray-100">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3032.6508930491024!2d-7.509332023533602!3d40.2274880714704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd3d23a009086e05%3A0xd2ce1b75dc072e1e!2sCovialvi%20-%20Investimentos%20Imobili%C3%A1rios!5e0!3m2!1sen!2spt!4v1700000000000!5m2!1sen!2spt"
            width="100%" 
            height="500" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[400px] md:h-[500px] object-cover pointer-events-none md:pointer-events-auto"
          ></iframe>
        </div>
      </section>

    </main>
  );
};

export default Contactos;
