import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Shield, X } from 'lucide-react';

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('klipp_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('klipp_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleDismiss = () => {
    localStorage.setItem('klipp_cookie_consent', 'dismissed');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.aside
          aria-label="Consentimiento de cookies"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 left-6 right-6 sm:left-auto sm:right-8 sm:max-w-md z-[180] pointer-events-auto"
        >
          <div className="relative p-6 sm:p-7 rounded-3xl bg-[#03141f]/95 backdrop-blur-2xl border border-gold/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] text-white overflow-hidden">
            {/* Ambient subtle glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
                  <Shield size={16} />
                </div>
                <div>
                  <span className="text-gold font-mono text-[9px] tracking-[0.3em] uppercase block">
                    PRIVACIDAD & COOKIES
                  </span>
                  <p className="text-xs font-serif text-white/90 tracking-wide font-normal">
                    Experiencia Segura y Discreta
                  </p>
                </div>
              </div>
              <button
                onClick={handleDismiss}
                className="text-white/40 hover:text-white transition-colors p-1"
                aria-label="Cerrar notificación"
              >
                <X size={16} />
              </button>
            </div>

            <p className="text-white/70 text-xs font-light leading-relaxed mb-6">
              Empleamos cookies técnicas esenciales para garantizar una navegación fluida y confidencial. Consulte nuestra{' '}
              <Link 
                to="/cookies" 
                onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' })}
                className="text-gold underline underline-offset-2 hover:text-white transition-colors"
              >
                Política de Cookies
              </Link>.
            </p>

            <div className="flex items-center gap-3">
              <button
                onClick={handleAccept}
                className="flex-1 bg-white text-base py-3 px-4 rounded-full text-xs font-medium tracking-wider hover:bg-gold hover:text-white transition-all duration-500 shadow-md active:scale-95"
              >
                Aceptar
              </button>
              <Link
                to="/cookies"
                onClick={() => {
                  setIsVisible(false);
                  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                }}
                className="px-4 py-3 rounded-full border border-white/15 text-xs font-medium tracking-wider text-white/70 hover:text-white hover:border-gold/50 transition-all text-center"
              >
                Detalles
              </Link>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};
