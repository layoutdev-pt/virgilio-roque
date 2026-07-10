import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const RecruitmentForm: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <section className="w-full bg-background py-16 px-4 font-sora">
      <div className="bg-surface rounded-lg p-8 md:p-16 lg:p-20 max-w-7xl mx-auto my-16">
        
        {/* Título do Formulário */}
        <div className="mb-12 border-b border-gray-300 pb-6">
          <h2 className="font-sora text-3xl md:text-4xl lg:text-5xl font-bold text-contrast">
            Recrutamento
          </h2>        </div>
        
        <form className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {/* Nome */}
          <div>
            <label className="block text-sm font-semibold text-contrast mb-2">Nome Completo *</label>
            <input type="text" className="w-full bg-white border border-gray-200 rounded-md px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary" required />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-contrast mb-2">Email *</label>
            <input type="email" className="w-full bg-white border border-gray-200 rounded-md px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary" required />
          </div>

          {/* Telefone */}
          <div>
            <label className="block text-sm font-semibold text-contrast mb-2">Telefone</label>
            <input type="tel" className="w-full bg-white border border-gray-200 rounded-md px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>

          {/* Localidade */}
          <div>
            <label className="block text-sm font-semibold text-contrast mb-2">Localidade / Residência</label>
            <input type="text" className="w-full bg-white border border-gray-200 rounded-md px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>

          {/* Área De Interesse */}
          <div>
            <label className="block text-sm font-semibold text-contrast mb-2">Área De Interesse *</label>
            <select className="w-full bg-white border border-gray-200 rounded-md px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary" required defaultValue="">
              <option value="" disabled>Selecione...</option>
              <option value="Pedreiro">Pedreiro</option>
              <option value="Carpinteiro">Carpinteiro</option>
              <option value="Eletricista">Eletricista</option>
              <option value="Canalizador">Canalizador</option>
              <option value="Pintor">Pintor</option>
              <option value="Gestor de Obra">Gestor de Obra</option>
              <option value="Engenheiro Civil">Engenheiro Civil</option>
              <option value="Arquiteto">Arquiteto</option>
              <option value="Administrativa/Financeira">Administrativa/Financeira</option>
              <option value="Outra">Outra</option>
            </select>
          </div>

          {/* Anos De Experiência */}
          <div>
            <label className="block text-sm font-semibold text-contrast mb-2">Anos De Experiência *</label>
            <select className="w-full bg-white border border-gray-200 rounded-md px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary" required defaultValue="">
              <option value="" disabled>Selecione...</option>
              <option value="Sem Experiência">Sem Experiência</option>
              <option value="1-3 anos">1-3 anos</option>
              <option value="3-5 anos">3-5 anos</option>
              <option value="5-10 anos">5-10 anos</option>
              <option value="+10 anos">+10 anos</option>
            </select>
          </div>

          {/* Disponibilidade */}
          <div>
            <label className="block text-sm font-semibold text-contrast mb-2">Disponibilidade *</label>
            <select className="w-full bg-white border border-gray-200 rounded-md px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary" required defaultValue="">
              <option value="" disabled>Selecione...</option>
              <option value="Imediata">Imediata</option>
              <option value="Em 15 Dias">Em 15 Dias</option>
              <option value="em 1 Mês">em 1 Mês</option>
              <option value="a Negociar">a Negociar</option>
            </select>
          </div>

          {/* Tipo De Contrato */}
          <div>
            <label className="block text-sm font-semibold text-contrast mb-2">Tipo De Contrato *</label>
            <select className="w-full bg-white border border-gray-200 rounded-md px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary" required defaultValue="">
              <option value="" disabled>Selecione...</option>
              <option value="Tempo Integral">Tempo Integral</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Projeto Específico">Projeto Específico</option>
              <option value="Prestação de Serviços">Prestação de Serviços</option>
            </select>
          </div>

          {/* Anexos (Full Width) */}
          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm font-semibold text-contrast mb-2">Anexos</label>
            <input type="text" placeholder="Link da Pasta / Documento ( Exp: C.V. )" className="w-full bg-white border border-gray-200 rounded-md px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>

          {/* Fale-Nos De Si (Full Width) */}
          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm font-semibold text-contrast mb-2">Fale-Nos De Si</label>
            <textarea className="w-full bg-white border border-gray-200 rounded-md px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary min-h-[120px] resize-y" placeholder="Adicione alguma informação relevante..."></textarea>
          </div>

          {/* Aceitação Legal */}
          <div className="col-span-1 md:col-span-2 mt-2">
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

          {/* Botão de Envio */}
          <div className="col-span-1 md:col-span-2">
            <button type="submit" className="w-fit bg-primary text-white font-semibold py-3 px-8 rounded-full flex items-center gap-2 hover:opacity-90 transition-opacity mt-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
              Enviar Candidatura
            </button>
          </div>

        </form>
      </div>
    </section>
  );
};
