import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';
import { ArrowUpRight, Plus, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { EXPERIENCES } from '../data/constants';
import { smoothNavigate } from '../utils/navigation';

export const Experiences = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  const x = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 100, damping: 30 });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springMouseX = useSpring(mouseX, { stiffness: 500, damping: 28 });
  const springMouseY = useSpring(mouseY, { stiffness: 500, damping: 28 });

  const updateScrollButtons = useCallback(() => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (mobile) {
        x.set(0); // Reset x when switching to mobile
      }
    };
    
    const calculateWidth = () => {
      if (carouselRef.current && !isMobile) {
        const scrollWidth = carouselRef.current.scrollWidth;
        const offsetWidth = carouselRef.current.offsetWidth;
        setWidth(scrollWidth - offsetWidth);
      }
    };

    checkMobile();
    calculateWidth();
    
    const handleResize = () => {
      checkMobile();
      calculateWidth();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!carouselRef.current || isMobile) return;
    const { left, width: containerWidth } = carouselRef.current.getBoundingClientRect();
    const xPos = e.clientX - left;
    const percentage = Math.max(0, Math.min(1, xPos / containerWidth));
    const targetX = -percentage * width;
    x.set(targetX);

    // Update custom cursor position
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      if (isMobile) {
        const container = carouselRef.current;
        const card = container.querySelector('.experience-card');
        if (card) {
          const cardWidth = card.clientWidth;
          const gap = 24; // gap-6
          const scrollAmount = cardWidth + gap;
          container.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth'
          });
        }
      } else {
        const currentX = x.get();
        const step = window.innerWidth * 0.4;
        const targetX = direction === 'left' 
          ? Math.min(0, currentX + step) 
          : Math.max(-width, currentX - step);
        x.set(targetX);
      }
    }
  };

  return (
    <section id="destinos" className="py-32 sm:py-48 relative overflow-hidden bg-base scroll-mt-24">
      {/* Background Atmosphere */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] atmosphere-blur opacity-20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 mb-16 sm:mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div className="max-w-3xl">
            <span className="text-gold font-mono text-xs tracking-widest uppercase mb-4 sm:mb-6 block font-medium">
              Destinos | Colección Signature
            </span>
            <h2 className="text-5xl sm:text-7xl md:text-8xl font-serif font-light leading-[0.9] tracking-tighter text-white">
              Destinos que <span className="italic text-white/40">definen</span> el lujo.
            </h2>
          </div>

          {/* Navigation Buttons */}
          <div className="flex space-x-4">
              <button 
                onClick={() => scroll('left')}
                disabled={isMobile && !canScrollLeft}
                aria-label="Anterior experiencia"
                className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full border flex items-center justify-center transition-all duration-500 ${
                  isMobile && !canScrollLeft 
                    ? 'border-white/5 text-white/10 cursor-not-allowed' 
                    : 'border-white/30 text-white hover:bg-white hover:text-base'
                }`}
              >
                <ChevronLeft size={20} className="sm:size-6" />
              </button>
              <button 
                onClick={() => scroll('right')}
                disabled={isMobile && !canScrollRight}
                aria-label="Siguiente experiencia"
                className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full border flex items-center justify-center transition-all duration-500 ${
                  isMobile && !canScrollRight 
                    ? 'border-white/5 text-white/10 cursor-not-allowed' 
                    : 'border-white/30 text-white hover:bg-white hover:text-base'
                }`}
              >
                <ChevronRight size={20} className="sm:size-6" />
              </button>
          </div>
        </motion.div>
      </div>

      {/* Carousel Container */}
      <div 
        ref={carouselRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => !isMobile && setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onScroll={isMobile ? updateScrollButtons : undefined}
        className={`relative w-full select-none ${isMobile ? 'overflow-x-auto snap-x snap-mandatory no-scrollbar flex' : 'overflow-visible cursor-none'}`}
        style={isMobile ? { paddingLeft: '7.5vw', paddingRight: '7.5vw' } : {}}
      >
        {/* Custom Cursor / Pointer Guide */}
        {!isMobile && isHovering && (
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[100] flex items-center justify-center select-none"
            style={{
              x: springMouseX,
              y: springMouseY,
              translateX: '-50%',
              translateY: '-50%',
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
          >
            <div className="w-14 h-14 rounded-full bg-base/80 border border-white/30 backdrop-blur-md flex items-center justify-center text-white shadow-2xl">
              <ArrowUpRight size={20} strokeWidth={1.75} className="text-gold" />
            </div>
          </motion.div>
        )}
        <motion.div 
          style={!isMobile ? { x: springX } : {}}
          className={`flex gap-6 sm:gap-12 py-12 select-none ${isMobile ? '' : 'px-0'}`}
        >
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={idx}
              whileHover={!isMobile ? { y: -20, scale: 1.02 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => {
                smoothNavigate('#contacto', navigate, location.pathname);
              }}
              className={`experience-card group relative aspect-[3/4.2] overflow-hidden rounded-[2.5rem] sm:rounded-[3rem] border border-white/10 shadow-2xl bg-accent/20 flex-shrink-0 select-none cursor-pointer outline-none focus:outline-none focus:ring-0 active:outline-none [-webkit-tap-highlight-color:transparent] ${
                isMobile 
                  ? 'w-[85vw] sm:w-[380px] md:w-[420px] snap-center' 
                  : 'min-w-[450px] md:min-w-[500px]'
              }`}
            >
              {/* Image */}
              <img 
                src={exp.image} 
                alt={exp.title} 
                draggable={false}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out pointer-events-none select-none"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-b from-base/40 via-transparent to-base/90 opacity-80 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none select-none" />
              
              {/* Top Content: Title & Subtitle */}
              <div className="absolute top-8 left-8 sm:top-12 sm:left-12 right-8 sm:right-12 pointer-events-none select-none">
                <h3 className="text-2xl sm:text-4xl font-serif font-light text-white mb-2 sm:mb-3 tracking-tight">
                  {exp.title}
                </h3>
                <p className="text-white/70 text-xs sm:text-[13px] tracking-wider font-light">
                  {exp.subtitle}
                </p>
              </div>

              {/* Bottom Content: Rating & Button */}
              <div className="absolute bottom-8 left-8 right-8 sm:bottom-12 sm:left-12 sm:right-12 flex items-end justify-between z-20">
                <div className="select-none">
                  <div className="flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-3 pointer-events-none">
                    <span className="text-white font-medium text-sm sm:text-base">{exp.rating}/5</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={12} 
                          className={`${i < Math.floor(exp.rating || 0) ? 'fill-gold text-gold' : 'fill-white/10 text-white/10'}`} 
                        />
                      ))}
                    </div>
                  </div>
                  
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      smoothNavigate('#contacto', navigate, location.pathname);
                    }}
                    aria-label={`Consultar sobre ${exp.title}`}
                    className="mt-4 sm:mt-6 text-xs text-white/80 tracking-wider font-medium hover:text-gold transition-colors duration-300 flex items-center group/btn cursor-pointer outline-none"
                  >
                    <span>Explorar Itinerario</span>
                    <ArrowUpRight size={14} className="ml-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </button>
                </div>

                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    smoothNavigate('#contacto', navigate, location.pathname);
                  }}
                  aria-label={`Reservar ${exp.title}`}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white text-base flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-all duration-500 hover:bg-gold hover:text-white active:scale-95 cursor-pointer outline-none"
                >
                  <Plus size={20} className="sm:size-6" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
