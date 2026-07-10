import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleOpenBanner = () => setIsVisible(true);
    window.addEventListener('openCookieSettings', handleOpenBanner);

    const hasConsented = localStorage.getItem('cookieConsent');
    let timer: ReturnType<typeof setTimeout>;
    if (!hasConsented) {
      // Small delay for better UX
      timer = setTimeout(() => {
        setIsVisible(true);
      }, 500);
    }
    
    return () => {
      window.removeEventListener('openCookieSettings', handleOpenBanner);
      if (timer) clearTimeout(timer);
    };
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 pointer-events-none flex justify-center">
      <div className="bg-white text-contrast rounded-2xl shadow-2xl p-6 md:p-8 max-w-4xl w-full pointer-events-auto border border-gray-100 flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center transition-all duration-500 ease-in-out">
        
        <div className="flex-1 flex flex-col gap-3 font-sora">
          <h3 className="text-xl font-bold text-contrast flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary shrink-0">
              <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/>
              <path d="M8.5 8.5v.01"/>
              <path d="M16 15.5v.01"/>
              <path d="M12 12v.01"/>
              <path d="M11 17v.01"/>
              <path d="M7 14v.01"/>
            </svg>
            Utilizamos cookies essenciais
          </h3>
          <p className="text-sm leading-relaxed text-contrast/80">
            Este website utiliza exclusivamente cookies técnicos estritamente necessários para garantir a sua segurança e o correto funcionamento da plataforma (nomeadamente no processamento dos nossos formulários). Não utilizamos cookies de estatística, rastreio ou publicidade. Ao continuar a navegar, concorda com a nossa <Link to="/politica-cookies" className="text-primary hover:underline font-semibold" onClick={() => setIsVisible(false)}>Política de Cookies</Link>.
          </p>
        </div>

        <button 
          onClick={handleAccept}
          className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-full transition-colors whitespace-nowrap self-stretch md:self-auto flex-shrink-0"
        >
          Compreendi
        </button>

      </div>
    </div>
  );
};
