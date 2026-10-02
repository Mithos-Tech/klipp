import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { smoothNavigate } from '../../utils/navigation';

export const BespokeHero = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden pt-40 pb-32">
      {/* Background Image with Parallax-like feel */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://res.cloudinary.com/dk1tkgjpj/image/upload/v1774200612/suspiros_subutf.webp" 
          alt="Puente de los Suspiros - Barranco"
          className="w-full h-full object-cover grayscale opacity-70 scale-105"
          loading="eager"
          decoding="async"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-base/60 to-transparent" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex justify-center items-center space-x-6 mb-12">
            <img 
              src="https://res.cloudinary.com/dk1tkgjpj/image/upload/v1774236478/Klipp_logo_lpy37r.svg" 
              alt="KLIPP Logo" 
              className="h-10 sm:h-14 w-auto brightness-0 invert opacity-40"
              referrerPolicy="no-referrer"
            />
            <span className="text-2xl sm:text-4xl font-sans font-medium tracking-[0.3em] text-white/30 uppercase">
              Klipp
            </span>
          </div>
          <span className="text-gold font-mono text-[10px] tracking-[0.6em] uppercase mb-8 block">
            EDICIÓN LIMITADA
          </span>
          <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] font-serif font-light text-white leading-[0.8] tracking-tighter mb-12">
            Lo <span className="italic text-white/60">Inalcanzable</span> <br />
            Hecho Realidad.
          </h1>
          
          <div className="flex flex-col items-center">
            <p className="text-white/70 text-lg md:text-xl font-light max-w-2xl leading-relaxed mb-12 mx-auto">
              Diseñamos experiencias que desafían la geografía y el tiempo. Para aquellos que han visto todo, pero aún no lo han sentido todo.
            </p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="flex flex-col items-center gap-6"
            >
              <button 
                onClick={() => {
                  smoothNavigate('#contacto', navigate, location.pathname);
                }}
                aria-label="Solicitar acceso"
                className="bg-white text-base px-10 py-4 sm:py-5 rounded-full text-xs font-medium tracking-wider hover:bg-gold hover:text-white transition-all duration-500 shadow-xl cursor-pointer"
              >
                Solicitar Acceso
              </button>
              <div className="flex flex-col items-center gap-4 mt-8">
                <span className="text-xs tracking-wider text-white/60 font-medium">Explorar el Manifiesto</span>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <ArrowDown size={16} className="text-gold/50" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Side Micro-Labels */}
      <div className="absolute left-10 bottom-20 hidden lg:block">
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-4 origin-left -rotate-90 translate-y-full">
            <span className="text-[8px] tracking-[0.5em] uppercase text-white/20 whitespace-nowrap">EST. 2026 — KLIPP BESPOKE</span>
            <div className="w-12 h-px bg-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
};
