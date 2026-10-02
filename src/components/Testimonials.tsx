import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../data/constants';

const TestimonialCard = ({ testimonial }: { testimonial: typeof TESTIMONIALS[0] }) => (
  <div className="w-full max-w-[600px] mx-auto p-10 sm:p-16 rounded-[3rem] bg-white/[0.02] border border-white/10 relative overflow-hidden group">
    {/* Decorative Elements */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
    <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
    
    <div className="relative z-10 flex flex-col h-full">
      <div className="mb-12">
        <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mb-8">
          <Quote className="text-gold" size={32} />
        </div>
        <p className="text-white/90 text-2xl sm:text-3xl md:text-4xl font-serif font-light italic leading-[1.4] tracking-tight">
          "{testimonial.content}"
        </p>
      </div>

      <div className="mt-auto pt-12 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="flex items-center space-x-5">
          <div className="relative">
            <img 
              src={testimonial.photo} 
              alt={testimonial.name} 
              className="w-16 h-16 rounded-2xl object-cover border border-white/10 grayscale group-hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-gold rounded-lg flex items-center justify-center">
              <Star className="text-base" size={12} fill="currentColor" />
            </div>
          </div>
          <div>
            <h4 className="text-white font-medium text-xl tracking-tight">{testimonial.name}</h4>
            <p className="text-white/40 text-xs tracking-wider font-light mt-0.5">{testimonial.role}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2 text-gold/80 bg-gold/5 px-4 py-2 rounded-full self-start sm:self-center border border-gold/15">
          <MapPin size={13} />
          <span className="text-xs tracking-wider font-medium">{testimonial.location}</span>
        </div>
      </div>
    </div>
  </div>
);

// Helper component for star icon
const Star = ({ className, size, fill }: { className?: string; size?: number; fill?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill={fill || "none"} 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '40%' : '-40%',
      opacity: 0,
      scale: 0.96,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '40%' : '-40%',
      opacity: 0,
      scale: 0.96,
    })
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonios" className="py-32 sm:py-48 relative overflow-hidden bg-base scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 mb-20 relative z-10 text-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gold font-mono text-xs tracking-widest uppercase mb-4 sm:mb-6 block font-medium"
        >
          Crónicas de Nuestros Huéspedes
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-5xl sm:text-7xl md:text-8xl font-serif font-light text-white leading-[0.9] tracking-tighter"
        >
          Historias que <span className="italic text-white/40">inspiran</span>.
        </motion.h2>
      </div>

      {/* Carousel Container with Blurred Edges */}
      <div className="relative max-w-5xl mx-auto px-6">
        <div className="relative h-[600px] sm:h-[550px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
                scale: { duration: 0.4 }
              }}
              className="absolute w-full"
            >
              <TestimonialCard testimonial={TESTIMONIALS[currentIndex]} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Controls - Bottom Center */}
      <div className="mt-16 flex flex-col items-center gap-8 relative z-20">
        <div className="flex items-center gap-6">
          <button 
            onClick={() => paginate(-1)}
            className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-gold hover:bg-gold/5 transition-all duration-500 group"
          >
            <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
          </button>
          
          <div className="flex items-center gap-3">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  idx === currentIndex ? 'w-8 bg-gold' : 'w-2 bg-white/10 hover:bg-white/30'
                }`}
              />
            ))}
          </div>

          <button 
            onClick={() => paginate(1)}
            className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-gold hover:bg-gold/5 transition-all duration-500 group"
          >
            <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="text-white/20 font-mono text-[10px] tracking-[0.4em] uppercase">
          {currentIndex + 1} / {TESTIMONIALS.length}
        </div>
      </div>
    </section>
  );
};
