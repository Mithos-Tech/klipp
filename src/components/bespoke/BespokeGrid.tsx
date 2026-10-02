import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { smoothNavigate } from '../../utils/navigation';

const SERVICES = [
  {
    id: '01',
    title: 'Flota Privada',
    description: 'Acceso a una flota global de jets y helicópteros, listos para despegar en 4 horas.',
    label: 'MOVILIDAD SIN LÍMITES',
    image: 'https://res.cloudinary.com/dk1tkgjpj/image/upload/v1774202905/Flota_Privada_mb5np6.webp',
  },
  {
    id: '02',
    title: 'Conserjería 24/7',
    description: 'Un equipo dedicado a resolver lo imposible, en cualquier zona horaria.',
    label: 'ASISTENCIA PERSONAL',
    image: 'https://res.cloudinary.com/dk1tkgjpj/image/upload/v1774202905/Conserjer%C3%ADa_247_na7ggy.webp',
  },
  {
    id: '03',
    title: 'Acceso Exclusivo',
    description: 'Entrada a eventos privados, museos cerrados al público y cenas con chefs estrella Michelin.',
    label: 'CURADURÍA CULTURAL',
    image: 'https://res.cloudinary.com/dk1tkgjpj/image/upload/v1774200612/plaza_mayor_lima_tm1asz.webp',
  },
  {
    id: '04',
    title: 'Seguridad y Privacidad',
    description: 'Protocolos de seguridad discretos y protección de datos de nivel diplomático.',
    label: 'PROTECCIÓN TOTAL',
    image: 'https://res.cloudinary.com/dk1tkgjpj/image/upload/v1774202905/Seguridad_y_Privacidad_xdosla.webp',
  }
];

export const BespokeGrid = () => {
  const [searchParams] = useSearchParams();
  const [activeIdx, setActiveIdx] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const serviceParam = searchParams.get('service');
    if (serviceParam !== null) {
      const idx = parseInt(serviceParam, 10);
      if (!isNaN(idx) && idx >= 0 && idx < SERVICES.length) {
        setActiveIdx(idx);
      }
    }
  }, [searchParams]);

  return (
    <section id="servicios-bespoke" className="py-48 bg-base relative overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-32">
          <span className="text-gold font-mono text-[10px] tracking-[0.5em] uppercase mb-8 block">
            SERVICIOS EXCLUSIVOS
          </span>
          <h2 className="text-5xl sm:text-7xl md:text-9xl font-serif font-light text-white leading-[0.8] tracking-tighter">
            La <span className="italic text-white/40">Excelencia</span> <br />
            como Estándar.
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-24 items-start">
          {/* Left: Interactive List */}
          <div className="w-full lg:w-1/2 space-y-0">
            {SERVICES.map((service, idx) => (
              <div 
                key={service.id}
                onMouseEnter={() => setActiveIdx(idx)}
                onClick={() => setActiveIdx(idx)}
                className="group py-12 cursor-pointer relative transition-all duration-500"
              >
                <div className="flex items-start gap-8">
                  <span className={`font-mono text-[10px] transition-colors duration-500 ${activeIdx === idx ? 'text-gold' : 'text-white/40'}`}>
                    {service.id}
                  </span>
                  <div className="flex-1">
                    <h3 className={`text-4xl md:text-6xl font-serif font-light transition-all duration-700 ${activeIdx === idx ? 'text-white translate-x-4' : 'text-white/50'}`}>
                      {service.title}
                    </h3>
                    <AnimatePresence initial={false}>
                      {activeIdx === idx && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="text-white/70 text-lg font-light mt-8 max-w-md leading-relaxed">
                            {service.description}
                          </p>
                          
                          {/* Mobile Image (Inside Accordion) */}
                          <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="lg:hidden mt-8 w-full aspect-video rounded-2xl overflow-hidden border border-white/5"
                          >
                            <img 
                              src={service.image} 
                              alt={service.title}
                              className="w-full h-full object-cover grayscale opacity-60"
                              loading="lazy"
                              decoding="async"
                              referrerPolicy="no-referrer"
                            />
                          </motion.div>

                          <button 
                            onClick={() => smoothNavigate('#contacto', navigate, location.pathname)}
                            className="mt-8 flex items-center gap-4 group/cta cursor-pointer bg-transparent border-0 p-0 text-left outline-none"
                            aria-label={`Consultar servicio ${service.title}`}
                          >
                            <div className="w-8 h-px bg-gold/40 group-hover/cta:w-12 group-hover/cta:bg-gold transition-all duration-300" />
                            <span className="text-[10px] tracking-[0.3em] uppercase text-gold group-hover/cta:text-white transition-colors duration-300 font-medium flex items-center gap-1.5">
                              <span>Consultar Servicio</span>
                              <ArrowUpRight size={13} className="group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 transition-transform" />
                            </span>
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Large Image Display (Desktop Only) */}
          <div className="hidden lg:block w-1/2 sticky top-48 aspect-[4/5] overflow-hidden rounded-3xl border border-white/5 bg-base">
            <AnimatePresence initial={false}>
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                className="absolute inset-0"
              >
                <img 
                  src={SERVICES[activeIdx].image} 
                  alt={SERVICES[activeIdx].title}
                  className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
