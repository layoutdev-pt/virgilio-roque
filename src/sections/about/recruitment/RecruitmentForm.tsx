import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const RecruitmentForm: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    role: '',
    experience: '',
    availability: '',
    contractType: '',
    link: '',
    about: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isChecked) return;
    
    setStatus('loading');
    
    try {
      const response = await fetch('/api/recruitment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', location: '', role: '', experience: '', availability: '', contractType: '', link: '', about: '' });
        setIsChecked(false);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  return (
    <section className="w-full bg-background py-16 px-4 font-sora">
      <div className="bg-surface rounded-lg p-8 md:p-16 lg:p-20 max-w-7xl mx-auto my-16">
        
        {/* Título do Formulário */}
        <div className="mb-12 border-b border-gray-300 pb-6">
          <h2 className="font-sora text-3xl md:text-4xl lg:text-5xl font-bold text-contrast">
            Recrutamento
          </h2>        </div>
        
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {/* Nome */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-contrast mb-2">Nome Completo *</label>
            <input type="text" id="name" required value={formData.name} onChange={handleChange} className="w-full bg-white border border-gray-200 rounded-md px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-contrast mb-2">Email *</label>
            <input type="email" id="email" required value={formData.email} onChange={handleChange} className="w-full bg-white border border-gray-200 rounded-md px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>

          {/* Telefone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-contrast mb-2">Telefone</label>
            <input type="tel" id="phone" value={formData.phone} onChange={handleChange} className="w-full bg-white border border-gray-200 rounded-md px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>

          {/* Localidade */}
          <div>
            <label htmlFor="location" className="block text-sm font-semibold text-contrast mb-2">Localidade / Residência</label>
            <input type="text" id="location" value={formData.location} onChange={handleChange} className="w-full bg-white border border-gray-200 rounded-md px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>

          {/* Área De Interesse */}
          <div>
            <label htmlFor="role" className="block text-sm font-semibold text-contrast mb-2">Área De Interesse *</label>
            <select id="role" required value={formData.role} onChange={handleChange} className="w-full bg-white border border-gray-200 rounded-md px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary">
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
            <label htmlFor="experience" className="block text-sm font-semibold text-contrast mb-2">Anos De Experiência *</label>
            <select id="experience" required value={formData.experience} onChange={handleChange} className="w-full bg-white border border-gray-200 rounded-md px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary">
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
            <label htmlFor="availability" className="block text-sm font-semibold text-contrast mb-2">Disponibilidade *</label>
            <select id="availability" required value={formData.availability} onChange={handleChange} className="w-full bg-white border border-gray-200 rounded-md px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary">
              <option value="" disabled>Selecione...</option>
              <option value="Imediata">Imediata</option>
              <option value="Em 15 Dias">Em 15 Dias</option>
              <option value="em 1 Mês">em 1 Mês</option>
              <option value="a Negociar">a Negociar</option>
            </select>
          </div>

          {/* Tipo De Contrato */}
          <div>
            <label htmlFor="contractType" className="block text-sm font-semibold text-contrast mb-2">Tipo De Contrato *</label>
            <select id="contractType" required value={formData.contractType} onChange={handleChange} className="w-full bg-white border border-gray-200 rounded-md px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary">
              <option value="" disabled>Selecione...</option>
              <option value="Tempo Integral">Tempo Integral</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Projeto Específico">Projeto Específico</option>
              <option value="Prestação de Serviços">Prestação de Serviços</option>
            </select>
          </div>

          {/* Anexos (Full Width) */}
          <div className="col-span-1 md:col-span-2">
            <label htmlFor="link" className="block text-sm font-semibold text-contrast mb-2">Anexos</label>
            <input type="text" id="link" value={formData.link} onChange={handleChange} placeholder="Link da Pasta / Documento ( Exp: C.V. )" className="w-full bg-white border border-gray-200 rounded-md px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>

          {/* Fale-Nos De Si (Full Width) */}
          <div className="col-span-1 md:col-span-2">
            <label htmlFor="about" className="block text-sm font-semibold text-contrast mb-2">Fale-Nos De Si</label>
            <textarea id="about" value={formData.about} onChange={handleChange} className="w-full bg-white border border-gray-200 rounded-md px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary min-h-[120px] resize-y" placeholder="Adicione alguma informação relevante..."></textarea>
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

          {/* Status Messages */}
          <div className="col-span-1 md:col-span-2">
            {status === 'success' && (
              <div className="bg-green-50 text-green-700 p-4 rounded-md text-sm font-medium">
                Candidatura enviada com sucesso. Entraremos em contacto brevemente!
              </div>
            )}
            {status === 'error' && (
              <div className="bg-red-50 text-red-700 p-4 rounded-md text-sm font-medium">
                Ocorreu um erro ao enviar a candidatura. Por favor, tente novamente mais tarde.
              </div>
            )}
          </div>

          {/* Botão de Envio */}
          <div className="col-span-1 md:col-span-2">
            <button 
              type="submit" 
              disabled={status === 'loading'}
              className={`w-fit text-white font-semibold py-3 px-8 rounded-full flex items-center gap-2 transition-opacity mt-4 ${
                status === 'loading' ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary hover:opacity-90'
              }`}
            >
              {status !== 'loading' && (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              )}
              {status === 'loading' ? 'A enviar candidatura...' : 'Enviar Candidatura'}
            </button>
          </div>

        </form>
      </div>
    </section>
  );
};
