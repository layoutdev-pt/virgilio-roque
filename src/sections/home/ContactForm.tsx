import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import bgImage from '@/assets/images/random/obra_de_predio.webp';

// Custom Dropdown Component to match the design perfectly
const CustomSelect = ({ 
  label, 
  options, 
  placeholder,
  value,
  onChange
}: { 
  label: string, 
  options: string[], 
  placeholder: string,
  value: string,
  onChange: (val: string) => void
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="flex flex-col gap-2" ref={dropdownRef}>
      <label className="text-sm font-bold text-contrast">{label}</label>
      <div className="relative">
        <div 
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full border rounded-xl px-4 py-3 flex justify-between items-center cursor-pointer transition-colors bg-white ${
            isOpen ? 'border-primary ring-1 ring-primary' : 'border-contrast/10 hover:border-contrast/30'
          }`}
        >
          <span className={value ? 'text-contrast' : 'text-contrast/40'}>
            {value || placeholder}
          </span>
          <svg 
            className={`w-5 h-5 text-contrast/40 transition-transform duration-200 ${isOpen ? 'rotate-180 text-primary' : ''}`} 
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        
        {/* Dropdown List */}
        {isOpen && (
          <div className="absolute top-[calc(100%+8px)] left-0 w-full bg-white border border-contrast/10 rounded-xl shadow-xl z-20 overflow-hidden py-2">
            {options.map((opt) => (
              <div 
                key={opt}
                onClick={() => { onChange(opt); setIsOpen(false); }}
                className={`px-4 py-2.5 cursor-pointer text-contrast transition-colors ${
                  value === opt ? 'bg-primary/10 text-primary font-medium' : 'hover:bg-surface'
                }`}
              >
                {opt}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export const ContactForm: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    source: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isChecked) return;
    
    setStatus('loading');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', source: '', message: '' });
        setIsChecked(false);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  return (
    <section className="relative w-full flex items-start bg-background overflow-hidden pt-[150px] pb-16 md:pb-24 lg:pb-32">
      {/* Background Image (top 730px) */}
      <div className="absolute top-0 left-0 w-full h-[730px]">
        <img 
          src={bgImage} 
          alt="Obra em construção" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Floating Card */}
        <div className="w-full max-w-[600px] bg-white rounded-[24px] shadow-2xl p-8 md:p-12">
          
          {/* Header */}
          <div className="mb-10">
            <h2 className="text-3xl md:text-[32px] font-bold text-contrast mb-3">
              Agende um horário
            </h2>
            <p className="text-contrast/60 leading-relaxed text-[15px]">
              Pronto para começar? Liga-nos durante o nosso horário para verificares a nossa disponibilidade.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Grid for Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Nome Completo */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-contrast">Nome Completo</label>
                <input 
                  type="text" 
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ricardo Proença"
                  className="w-full border border-contrast/10 rounded-xl px-4 py-3 text-contrast placeholder:text-contrast/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors bg-white"
                />
              </div>

              {/* Endereço De Email */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-contrast">Endereço De Email</label>
                <input 
                  type="email" 
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ricardo@gmail.com"
                  className="w-full border border-contrast/10 rounded-xl px-4 py-3 text-contrast placeholder:text-contrast/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors bg-white"
                />
              </div>

              {/* Assunto (Dropdown customizado) */}
              <CustomSelect 
                label="Assunto"
                placeholder="Selecionar..."
                options={["Conceção", "Construção", "Reabilitação"]}
                value={formData.subject}
                onChange={(val) => setFormData(prev => ({ ...prev, subject: val }))}
              />

              {/* Como Nos Conheceu (Dropdown customizado) */}
              <CustomSelect 
                label="Como Nos Conheceu?"
                placeholder="Selecionar..."
                options={["Redes Sociais", "Recomendação", "Pesquisa no Google", "Já conhecia", "Outros..."]}
                value={formData.source}
                onChange={(val) => setFormData(prev => ({ ...prev, source: val }))}
              />

              {/* Mensagem (Textarea) */}
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-sm font-bold text-contrast">Mensagem</label>
                <textarea 
                  id="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Escreva aqui"
                  className="w-full border border-contrast/10 rounded-xl px-4 py-3 text-contrast placeholder:text-contrast/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors bg-white resize-none"
                ></textarea>
              </div>
            </div>

            {/* RGPD Consent */}
            <div className="mt-2 mb-4">
              <label className="flex items-start gap-3 cursor-pointer group" onClick={(e) => { e.preventDefault(); setIsChecked(!isChecked); }}>
                <div className={`relative flex items-center justify-center w-[18px] h-[18px] mt-0.5 rounded-[4px] border transition-colors shrink-0 ${
                  isChecked ? 'bg-primary border-primary' : 'border-contrast/30 bg-white group-hover:border-primary'
                }`}>
                  {isChecked && (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
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
            {status === 'success' && (
              <div className="bg-green-50 text-green-700 p-4 rounded-xl text-sm font-medium">
                A sua mensagem foi enviada com sucesso!
              </div>
            )}
            {status === 'error' && (
              <div className="bg-red-50 text-red-700 p-4 rounded-xl text-sm font-medium">
                Ocorreu um erro. Por favor, tente novamente.
              </div>
            )}

            {/* Submit CTA */}
            <div>
              <button 
                type="submit"
                disabled={status === 'loading'}
                className={`inline-flex items-center gap-2 text-white px-8 py-3.5 rounded-full font-bold transition-all hover:shadow-lg ${
                  status === 'loading' ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary hover:bg-primary/90 active:scale-[0.98]'
                }`}
              >
                <span>{status === 'loading' ? 'A enviar...' : 'Agendar Agora'}</span>
                {!status || status !== 'loading' && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                )}
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
};
