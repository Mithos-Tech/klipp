import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { ArrowRight, Sparkles, Globe, Compass } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { smoothNavigate } from '../utils/navigation';

export const FinalCTA = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

  const springY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <section 
      id="empezar"
      ref={containerRef}
      className="py-48 sm:py-72 relative overflow-hidden scroll-mt-24"
    >
      {/* Explicit Background Layer */}
      <div className="absolute inset-0 bg-base -z-20" />

      {/* Immersive Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <motion.div 
          style={{ y: springY }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vh] opacity-40"
        >
          <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-gold/15 rounded-full animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-white/10 rounded-full animate-pulse delay-1000" />
        </motion.div>
        
        {/* Noise Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.05] mix-blend-soft-light pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          style={{ opacity, scale }}
          className="text-center"
        >
          <div className="flex items-center justify-center mb-12">
            <span className="text-gold font-mono text-xs tracking-widest font-medium">
              Comienza tu Viaje
            </span>
          </div>

          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-serif font-light text-white leading-[0.9] tracking-tighter">
            Tu próxima <span className="italic text-white/40">historia</span><br />
            comienza <span className="text-gold relative inline-block">
              aquí
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 1, ease: "circOut" }}
                className="absolute -bottom-4 left-0 h-px bg-gold/50"
              />
            </span>
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-20"
          >
            <button 
              onClick={() => {
                smoothNavigate('#contacto', navigate, location.pathname);
              }}
              aria-label="Solicitar consultoría"
              className="group relative inline-flex items-center space-x-6 bg-white text-base px-10 py-5 rounded-full overflow-hidden transition-all duration-700 hover:shadow-[0_0_60px_rgba(255,255,255,0.2)] cursor-pointer"
            >
              <span className="relative z-10 text-xs sm:text-sm font-medium tracking-wider text-base group-hover:text-white transition-colors duration-700">Solicitar Consultoría</span>
              <ArrowRight size={16} className="relative z-10 text-base group-hover:text-white transition-colors duration-700 group-hover:translate-x-2 transition-transform" />
              <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.22, 1, 0.36, 1]" />
            </button>
          </motion.div>
        </motion.div>

        {/* Feature Grid - Subtle Micro-details */}
        <div className="mt-48 grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-4xl mx-auto">
          {[
            { icon: Globe, label: "Destinos Exclusivos", detail: "Acceso a lugares remotos y privados" },
            { icon: Compass, label: "Guías Expertos", detail: "Narradores de historias y cultura" },
            { icon: Sparkles, label: "Lujo Auténtico", detail: "Detalles que transforman el viaje" }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 * idx }}
              className="text-center group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center mx-auto mb-6 group-hover:border-gold/30 group-hover:bg-gold/5 transition-all duration-500">
                <item.icon size={20} className="text-white/20 group-hover:text-gold transition-colors" />
              </div>
              <h4 className="text-white/80 text-xs tracking-wider font-medium mb-1.5">{item.label}</h4>
              <p className="text-white/40 text-xs tracking-wide font-light leading-relaxed">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
