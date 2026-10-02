import React from 'react';
import { motion } from 'motion/react';

const PROCESS_STEPS = [
  {
    id: '01',
    title: 'La Consulta Inicial',
    description: 'Un diálogo profundo para entender no solo dónde quiere ir, sino qué quiere sentir. Escuchamos lo que no se dice.',
    label: 'DEFINICIÓN DE DESEOS',
    icon: '⬡'
  },
  {
    id: '02',
    title: 'Arquitectura del Viaje',
    description: 'Nuestros diseñadores de expediciones crean un borrador maestro, seleccionando cada detalle con precisión quirúrgica.',
    label: 'DISEÑO ESTRUCTURAL',
    icon: '⬢'
  },
  {
    id: '03',
    title: 'Curaduría de Detalles',
    description: 'Desde el aroma de su suite hasta el acceso a eventos privados, cada elemento es curado para su máxima satisfacción.',
    label: 'REFINAMIENTO',
    icon: '⬡'
  },
  {
    id: '04',
    title: 'Ejecución Impecable',
    description: 'Su conserje personal supervisa cada segundo de su viaje, asegurando que la realidad supere al sueño.',
    label: 'SOPORTE 24/7',
    icon: '⬢'
  }
];

export const BespokeProcess = () => {
  return (
    <section className="py-48 bg-base relative overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] atmosphere-blur opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          {/* Left Sticky Content */}
          <div className="lg:sticky lg:top-48">
            <span className="text-gold font-mono text-[10px] tracking-[0.5em] uppercase mb-8 block">
              EL MÉTODO KLIPP
            </span>
            <h2 className="text-6xl sm:text-8xl md:text-9xl font-serif font-light text-white leading-[0.85] tracking-tighter mb-12">
              La ingeniería de la <span className="italic text-white/60">perfección</span>.
            </h2>
            <p className="text-white/70 text-xl font-light max-w-sm leading-relaxed mb-12">
              Un proceso riguroso que garantiza que cada viaje sea una obra maestra irrepetible.
            </p>
            
            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:border-gold transition-all duration-700">
                <div className="w-2 h-2 bg-gold rounded-full" />
              </div>
              <span className="text-[10px] tracking-[0.3em] uppercase text-white/40 group-hover:text-white transition-colors duration-500">Descargar el Protocolo</span>
            </div>
          </div>

          {/* Right Timeline Content */}
          <div className="flex flex-col gap-32">
            {PROCESS_STEPS.map((step, idx) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="group relative pl-24"
              >
                {/* Vertical Line Connector */}
                {idx !== PROCESS_STEPS.length - 1 && (
                  <div className="absolute top-16 left-8 w-px h-[calc(100%+8rem)] bg-white/5" />
                )}
                
                {/* Step Number Circle */}
                <div className="absolute top-0 left-0 w-16 h-16 rounded-full border border-white/10 flex items-center justify-center bg-base group-hover:border-gold/40 transition-all duration-700 group-hover:scale-110 z-10">
                  <span className="text-white/40 font-serif text-2xl font-light italic group-hover:text-gold transition-colors duration-700">{step.id}</span>
                </div>

                <div className="flex flex-col">
                  <span className="text-gold font-mono text-[10px] tracking-[0.3em] uppercase mb-6">{step.label}</span>
                  <h3 className="text-4xl font-serif font-light text-white mb-8 group-hover:text-gold transition-colors duration-500">{step.title}</h3>
                  <p className="text-white/70 text-lg leading-relaxed font-light group-hover:text-white/90 transition-colors duration-500 max-w-md">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
