import React from 'react';
import { motion } from 'motion/react';
import { PHILOSOPHY } from '../data/constants';

const PILLARS = [
  {
    id: '01',
    title: 'Legado de Bienestar',
    content: 'Revive la historia en los Baños del Inca. Transformamos tradiciones milenarias en experiencias de relajación profunda con un estándar de confort contemporáneo.',
    image: 'https://res.cloudinary.com/dk1tkgjpj/image/upload/v1774069448/ba%C3%B1os_del_incas_f1s3dn.webp',
    className: 'lg:col-span-1 lg:row-span-1'
  },
  {
    id: '02',
    title: 'Espectáculo Urbano',
    content: 'Descubre la magia de Lima bajo una nueva luz. Acceso preferencial a los eventos más vibrantes de la capital, donde el arte y el agua danzan en armonía.',
    image: 'https://res.cloudinary.com/dk1tkgjpj/image/upload/v1774069448/parque_de_las_agua_lw9saf.webp',
    className: 'lg:col-span-1 lg:row-span-1'
  },
  {
    id: '03',
    title: 'Exploración Remota',
    content: 'Llegamos donde otros no pueden. Nuestra logística de autor te permite descubrir joyas ocultas como las Minas de Carbón en Ica, con la seguridad y el estilo que nos define.',
    image: 'https://res.cloudinary.com/dk1tkgjpj/image/upload/v1774069449/playa_de_minas_de_carbons_opfjud.webp',
    className: 'lg:col-span-2 lg:row-span-1'
  }
];

export const Philosophy = () => {
  return (
    <section id="esencia" className="bg-base py-32 sm:py-48 overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-20 text-center lg:text-left flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-gold font-mono text-xs tracking-widest uppercase mb-4 sm:mb-6 block font-medium"
            >
              {PHILOSOPHY.subtitle}
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl sm:text-7xl md:text-8xl font-serif font-light text-white leading-[0.9] tracking-tighter"
            >
              Por qué <span className="italic text-white/40">viajamos</span> con KLIPP
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block pb-2 origin-left"
          >
            <div className="w-32 h-px bg-white/20" />
          </motion.div>
        </div>

        {/* Refined Bento Grid - 3 Columns Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Main Large Card - Spans 2 cols, Row 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 55 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15, margin: "0px 0px -40px 0px" }}
            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-2 relative h-[500px] rounded-[2.5rem] overflow-hidden group border border-white/10"
          >
            <img 
              src="https://res.cloudinary.com/dk1tkgjpj/image/upload/v1774069448/playa_de_punta_sals_hzapgd.webp" 
              alt="Punta Sal Luxury"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-base via-base/20 to-transparent opacity-90" />
            <div className="absolute inset-0 p-10 lg:p-14 flex flex-col justify-end">
              <div className="max-w-2xl">
                <span className="text-gold font-mono text-xs tracking-wider mb-4 block opacity-80 font-medium">Manifiesto</span>
                <h3 className="text-4xl lg:text-5xl font-serif font-light text-white mb-6 leading-[1.1]">
                  "El lujo es la libertad de encontrar tu propio <span className="italic">horizonte</span>."
                </h3>
                <p className="text-white/60 font-light leading-relaxed max-w-lg">
                  Desde las arenas blancas de Punta Sal hasta los rincones más remotos, diseñamos estancias donde el tiempo se detiene y el servicio se anticipa a cada deseo.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Pillar 1 - Spans 1 col, Row 1 */}
          <motion.div
            initial={{ opacity: 0, y: 55 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15, margin: "0px 0px -40px 0px" }}
            transition={{ duration: 0.95, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[500px] rounded-[2.5rem] overflow-hidden group border border-white/10"
          >
            <img 
              src={PILLARS[0].image} 
              alt={PILLARS[0].title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-base via-base/40 to-transparent opacity-90" />
            <div className="absolute inset-0 p-10 flex flex-col justify-end">
              <span className="text-gold font-mono text-xs tracking-wider mb-3 block font-medium">Capítulo {PILLARS[0].id}</span>
              <h4 className="text-3xl font-serif font-light text-white mb-4 tracking-tight">
                {PILLARS[0].title}
              </h4>
              <p className="text-white/60 text-sm font-light leading-relaxed">
                {PILLARS[0].content}
              </p>
            </div>
          </motion.div>

          {/* Pillar 2 - Spans 1 col, Row 2 */}
          <motion.div
            initial={{ opacity: 0, y: 55 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15, margin: "0px 0px -40px 0px" }}
            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[450px] rounded-[2.5rem] overflow-hidden group border border-white/10"
          >
            <img 
              src={PILLARS[1].image} 
              alt={PILLARS[1].title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-base via-base/40 to-transparent opacity-90" />
            <div className="absolute inset-0 p-10 flex flex-col justify-end">
              <span className="text-gold font-mono text-xs tracking-wider mb-3 block font-medium">Capítulo {PILLARS[1].id}</span>
              <h4 className="text-3xl font-serif font-light text-white mb-4 tracking-tight">
                {PILLARS[1].title}
              </h4>
              <p className="text-white/60 text-sm font-light leading-relaxed">
                {PILLARS[1].content}
              </p>
            </div>
          </motion.div>

          {/* Pillar 3 - Spans 1 col, Row 2 */}
          <motion.div
            initial={{ opacity: 0, y: 55 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15, margin: "0px 0px -40px 0px" }}
            transition={{ duration: 0.95, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[450px] rounded-[2.5rem] overflow-hidden group border border-white/10"
          >
            <img 
              src={PILLARS[2].image} 
              alt={PILLARS[2].title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-base via-base/40 to-transparent opacity-90" />
            <div className="absolute inset-0 p-10 flex flex-col justify-end">
              <span className="text-gold font-mono text-xs tracking-wider mb-3 block font-medium">Capítulo {PILLARS[2].id}</span>
              <h4 className="text-3xl font-serif font-light text-white mb-4 tracking-tight">
                {PILLARS[2].title}
              </h4>
              <p className="text-white/60 text-sm font-light leading-relaxed">
                {PILLARS[2].content}
              </p>
            </div>
          </motion.div>

          {/* Stats Card - Spans 1 col, Row 2 */}
          <motion.div
            initial={{ opacity: 0, y: 55 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15, margin: "0px 0px -40px 0px" }}
            transition={{ duration: 0.95, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[450px] rounded-[2.5rem] overflow-hidden border border-gold/20 bg-gold/[0.03] p-10 flex flex-col justify-center"
          >
            <div className="space-y-10">
              {PHILOSOPHY.stats.map((stat, idx) => (
                <div key={idx} className="flex items-baseline justify-between border-b border-white/5 pb-6 last:border-0 last:pb-0">
                  <span className="text-xs tracking-wider text-white/60 font-medium">{stat.label}</span>
                  <span className="text-5xl font-serif font-light text-white tracking-tighter tabular-nums">{stat.value}</span>
                </div>
              ))}
            </div>
            <div className="absolute top-0 right-0 p-8">
              <div className="w-2 h-2 bg-gold/40 rounded-full animate-pulse" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
