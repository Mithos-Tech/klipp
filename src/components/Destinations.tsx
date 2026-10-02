import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { MapPin, ArrowUpRight, Globe, Compass } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { DESTINATIONS } from '../data/constants';
import { smoothNavigate } from '../utils/navigation';

export const Destinations = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <section id="tendencias" className="py-32 sm:py-48 bg-base relative overflow-hidden scroll-mt-24">
      {/* Background Atmosphere */}
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] atmosphere-blur opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 sm:mb-32"
        >
          <span className="text-gold font-mono text-xs tracking-widest uppercase mb-4 sm:mb-6 block font-medium">
            Tendencias | El Mapa Global
          </span>
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-serif font-light leading-[0.9] tracking-tighter text-white max-w-4xl">
            Nuestra red no conoce <span className="italic text-white/40">fronteras</span>, solo horizontes.
          </h2>
        </motion.div>

        {/* Main Content: Video + Minicards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left: Video Player (7/12) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 relative group"
          >
            <div className="relative aspect-video lg:aspect-[4/3] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
              <video 
                ref={videoRef}
                autoPlay 
                loop 
                muted 
                playsInline 
                preload="metadata"
                poster="https://res.cloudinary.com/dk1tkgjpj/image/upload/v1774066106/Machupichu_nzrpxb.webp"
                className="w-full h-full object-cover"
              >
                <source src="https://res.cloudinary.com/dk1tkgjpj/video/upload/v1773863547/klipp_site_bcj5vc.mp4" type="video/mp4" />
              </video>
              
              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 flex items-center space-x-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 pr-6">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Globe size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-[11px] text-white/50 tracking-wider font-medium">Cobertura</p>
                  <p className="text-sm text-white font-medium">Acceso Global 24/7</p>
                </div>
              </div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border-t border-r border-white/10 rounded-tr-[3rem] pointer-events-none" />
          </motion.div>

          {/* Right: Minicards (5/12) with Smooth Entrance from the Right */}
          <div className="lg:col-span-5 space-y-6">
            {DESTINATIONS.map((dest, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15, margin: "0px 0px -30px 0px" }}
                transition={{ 
                  duration: 0.85, 
                  delay: idx * 0.12, 
                  ease: [0.22, 1, 0.36, 1] 
                }}
                whileHover={{ x: 8, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                onClick={() => {
                  smoothNavigate('#contacto', navigate, location.pathname);
                }}
                className="group p-6 rounded-3xl border border-white/5 bg-white/[0.02] transition-all duration-500 cursor-pointer flex items-center justify-between select-none [-webkit-tap-highlight-color:transparent]"
              >
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden border border-white/10 flex-shrink-0">
                    <img 
                      src={dest.image} 
                      alt={dest.name} 
                      draggable={false}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 pointer-events-none select-none"
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 text-white/40 mb-1">
                      <MapPin size={11} className="text-gold/70" />
                      <span className="text-[11px] font-medium tracking-wider">Punto de Acceso 0{idx + 1}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-serif font-light text-white tracking-tight">
                      {dest.name}
                    </h3>
                  </div>
                </div>
                
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/20 group-hover:text-white group-hover:border-gold/50 group-hover:bg-gold/10 transition-all duration-500 flex-shrink-0">
                  <ArrowUpRight size={18} />
                </div>
              </motion.div>
            ))}

            {/* Bottom CTA for Section */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15, margin: "0px 0px -20px 0px" }}
              transition={{ 
                duration: 0.85, 
                delay: DESTINATIONS.length * 0.12, 
                ease: [0.22, 1, 0.36, 1] 
              }}
              className="pt-6"
            >
              <button 
                onClick={() => {
                  smoothNavigate('/#destinos', navigate, location.pathname);
                }}
                className="w-full py-5 rounded-full border border-white/15 text-white/70 text-xs tracking-wider font-medium hover:bg-white hover:text-base hover:border-white transition-all duration-500 flex items-center justify-center group cursor-pointer shadow-lg outline-none select-none"
              >
                <span>Ver Todos los Destinos</span>
                <Compass size={16} className="ml-3 group-hover:rotate-45 transition-transform duration-500" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
