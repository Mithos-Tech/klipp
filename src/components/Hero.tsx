import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { HERO_DESTINATIONS, SOCIAL_LINKS } from '../data/constants';
import { smoothNavigate } from '../utils/navigation';

export const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = HERO_DESTINATIONS[currentIndex];
  const navigate = useNavigate();
  const location = useLocation();

  // Preload all 4 hero destination images in memory on mount
  useEffect(() => {
    HERO_DESTINATIONS.forEach((dest) => {
      const img = new Image();
      img.src = dest.image;
    });
  }, []);

  return (
    <section 
      id="inicio" 
      className="relative min-h-[720px] sm:min-h-[780px] lg:min-h-0 h-[100dvh] lg:h-screen w-full overflow-hidden flex items-center bg-base"
    >
      {/* Background Images - 100% natural, pristine, full color with negative space */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {HERO_DESTINATIONS.map((dest, idx) => {
          const isActive = currentIndex === idx;
          return (
            <motion.img 
              key={dest.id}
              src={dest.image} 
              alt={dest.title} 
              initial={false}
              animate={{ 
                opacity: isActive ? 1 : 0,
                scale: isActive ? 1 : 1.05,
              }}
              transition={{ 
                opacity: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
                scale: { duration: 6, ease: [0.22, 1, 0.36, 1] }
              }}
              className={`absolute inset-0 w-full h-full object-cover object-center will-change-[opacity,transform] ${
                isActive ? 'z-10' : 'z-0'
              }`}
              loading={idx === 0 ? "eager" : "lazy"}
              decoding="async"
              fetchPriority={idx === 0 ? "high" : "auto"}
              referrerPolicy="no-referrer"
            />
          );
        })}
      </div>

      {/* Content Container - Perfect Framer Golden Ratio breathing room */}
      <div className="relative z-[45] max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-28 sm:pt-36 md:pt-40 lg:pt-0 pb-36 sm:pb-32 lg:pb-16">
        {/* Left Side Info - The Holy Trinity: Monumental Title + Poetic Subtitle + Glass CTA */}
        <div className="lg:col-span-8 flex flex-col items-start">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Main Title - Degradado Vertical: Blanco arriba con predominio y #683C13 en la base */}
              <h1 
                style={{
                  backgroundImage: 'linear-gradient(to bottom, #FFFFFF 0%, #FFFFFF 65%, #C59972 82%, #683C13 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
                className="text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-[9.5rem] font-serif font-light mb-2 sm:mb-4 pb-1 sm:pb-3 leading-[0.88] tracking-tighter select-none drop-shadow-[0_2px_16px_rgba(0,0,0,0.45)]"
              >
                {current.title}
              </h1>

              {/* Subtitle - Evocative Italic Serif en Blanco Puro Nítido */}
              <p 
                style={{ color: '#ffffff' }}
                className="italic text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-white font-light tracking-wide drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]"
              >
                {current.subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Persistent CTA Button - Never unmounts, permanent zero-flicker glass effect */}
          <div className="mt-6 sm:mt-10">
            <button 
              onClick={() => {
                smoothNavigate('/#destinos', navigate, location.pathname);
              }}
              aria-label="Explorar destinos"
              style={{ color: '#ffffff' }}
              className="group relative overflow-hidden inline-flex items-center space-x-3.5 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full font-medium transition-all duration-300 bg-white/[0.08] hover:bg-white/[0.18] backdrop-blur-md border border-white/30 hover:border-white text-white active:scale-95 cursor-pointer shadow-sm hover:shadow-lg transform-gpu"
            >
              <span 
                style={{ color: '#ffffff' }}
                className="tracking-normal text-sm sm:text-base font-medium text-white"
              >
                Explorar destino
              </span>
              <ArrowRight size={16} style={{ color: '#ffffff' }} className="group-hover:translate-x-1.5 transition-transform duration-300 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Mini Gallery & Navigation */}
      <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-0 w-full z-[50] px-6 pointer-events-none">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-end gap-3 sm:gap-6">
          <div className="flex items-center w-full md:w-auto md:ml-auto gap-3 sm:gap-6 pointer-events-auto">
            <span className="hidden sm:inline-block text-[11px] tracking-widest font-semibold whitespace-nowrap text-white/80">
              Explorar
            </span>
            <div className="flex space-x-3 sm:space-x-5 overflow-x-auto py-1 no-scrollbar w-full sm:w-auto justify-start sm:justify-end px-1 snap-x snap-mandatory touch-pan-x select-none">
              {HERO_DESTINATIONS.map((dest, idx) => (
                <motion.button
                  key={dest.id}
                  whileTap={{ scale: 0.94 }}
                  onClick={() => setCurrentIndex(idx)}
                  className={`group relative flex-shrink-0 w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer snap-center bg-transparent ${
                    currentIndex === idx 
                      ? 'border-2 border-white scale-105 shadow-xl' 
                      : 'border border-white/30 opacity-70 hover:opacity-100 hover:border-white/80 hover:scale-[1.02]'
                  }`}
                >
                  <img 
                    src={dest.image} 
                    alt={dest.title} 
                    className={`w-full h-full object-cover transition-transform duration-700 ${currentIndex === idx ? 'scale-110' : 'group-hover:scale-115'}`}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                  <div className={`absolute bottom-0 left-0 w-full py-1 px-1.5 bg-black/50 backdrop-blur-xs transition-opacity duration-300 ${
                    currentIndex === idx ? 'opacity-100' : 'opacity-0 sm:group-hover:opacity-100'
                  }`}>
                    <p className="text-[10px] sm:text-[11px] font-medium tracking-wide text-white truncate text-center">
                      {dest.title}
                    </p>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Vertical Socials (Right Side) */}
      <div className="hidden sm:flex absolute right-6 sm:right-10 xl:right-16 top-1/2 -translate-y-1/2 z-40 flex-col space-y-8 sm:space-y-10 items-center">
        <div className="w-px h-12 sm:h-24 mb-4 sm:mb-6 bg-white/40" />
        {SOCIAL_LINKS.map((social, idx) => (
          <a 
            key={idx} 
            href={social.href} 
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-white/80 transition-all duration-300 transform hover:scale-125" 
            aria-label="Social link"
          >
            <social.icon size={15} className="sm:w-4 sm:h-4" />
          </a>
        ))}
        <div className="w-px h-12 sm:h-24 mt-4 sm:mb-6 bg-white/40" />
      </div>
    </section>
  );
};
