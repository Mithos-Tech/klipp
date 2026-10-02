import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Search, User, ArrowRight, Instagram, Facebook, Twitter } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { NAV_LINKS } from '../data/constants';
import { smoothNavigate } from '../utils/navigation';

export const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY || document.documentElement.scrollTop || 0;
      
      // The header fades out upon scrolling down and ONLY reappears smoothly when returning to the Hero
      if (currentScrollY <= 80 || isMenuOpen) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      
      setScrollY(currentScrollY);
      setLastScrollY(currentScrollY);
    };

    // Run once on mount to establish initial state
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    smoothNavigate(href, navigate, location.pathname, () => setIsMenuOpen(false));
  };

  const scrollToBooking = () => {
    smoothNavigate('#contacto', navigate, location.pathname, () => setIsMenuOpen(false));
  };

  return (
    <>
      <motion.nav 
        initial={{ y: 0, opacity: 1, scale: 1, filter: 'blur(0px)' }}
        animate={{ 
          y: isVisible ? 0 : -12,
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0.985,
          filter: isVisible ? 'blur(0px)' : 'blur(6px)',
        }}
        transition={{ 
          duration: isVisible ? 0.38 : 0.22,
          ease: [0.16, 1, 0.3, 1] 
        }}
        className={`fixed top-0 left-0 w-full z-[100] pointer-events-none transition-[padding] duration-300 ${
          scrollY > 50 ? 'py-5' : 'py-7 sm:py-10'
        }`}
      >
        <div className={`max-w-7xl mx-auto px-6 flex justify-between items-center ${isVisible ? 'pointer-events-auto' : 'pointer-events-none'}`}>
          {/* Logo & Brand */}
          <Link to="/" onClick={(e) => handleLinkClick(e, '/')} className="relative z-[70]">
            <div className="flex items-center space-x-2.5 sm:space-x-3 group cursor-pointer">
              <img 
                src="https://res.cloudinary.com/dk1tkgjpj/image/upload/v1774236478/Klipp_logo_lpy37r.svg" 
                alt="KLIPP Logo" 
                className="h-8 sm:h-9 w-auto brightness-0 invert group-hover:opacity-90 transition-all duration-300"
                referrerPolicy="no-referrer"
              />
              <span className="text-xl sm:text-2xl font-sans font-medium tracking-[0.04em] text-white transition-colors duration-300">
                Klipp
              </span>
            </div>
          </Link>

          {/* Desktop Links - Floating without bar, perfectly balanced size */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 xl:space-x-10">
            {NAV_LINKS.map((link) => (
              <div key={link.name}>
                <Link 
                  to={link.href} 
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="relative text-white hover:text-white/80 transition-colors duration-300 text-sm lg:text-[15px] tracking-normal font-medium group"
                >
                  {link.name}
                  <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full" />
                </Link>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2 sm:space-x-8">
            <button 
              onClick={scrollToBooking}
              aria-label="Reservar ahora"
              style={{ 
                color: '#ffffff',
                backgroundImage: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.14) 0%, rgba(236, 192, 119, 0.16) 45%, rgba(104, 60, 19, 0.30) 100%)',
                border: '0.1px solid rgba(255, 255, 255, 0.24)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.20), 0 4px 20px rgba(0, 0, 0, 0.25)'
              }}
              className="hidden md:inline-flex items-center justify-center relative overflow-hidden px-6 lg:px-8 py-2 lg:py-2.5 rounded-full text-sm font-medium tracking-wide text-white transition-all duration-300 active:scale-95 group cursor-pointer hover:brightness-110"
            >
              <span className="relative z-10 text-white font-medium" style={{ color: '#ffffff' }}>Reservar</span>
            </button>

            <button 
              className="md:hidden w-10 h-10 flex items-center justify-center text-white/90 hover:text-white transition-all duration-700 bg-black/30 backdrop-blur-md rounded-xl border border-white/20 hover:border-gold/40 hover:bg-gold/5 shadow-lg cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu - Sophisticated Floating Card (Framer Style) */}
      <AnimatePresence>
        {isMenuOpen && (
          <div className="fixed inset-0 z-[110] md:hidden flex items-start justify-center px-5 pt-20 sm:pt-24">
            {/* Subtle Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="absolute inset-0 bg-base/50 backdrop-blur-md"
            />
            
            {/* Floating Card */}
            <motion.div 
              initial={{ opacity: 0, y: -16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.96 }}
              transition={{ type: 'spring', damping: 26, stiffness: 320 }}
              className="relative w-full max-w-[340px] bg-[#051622]/95 backdrop-blur-2xl border border-white/10 rounded-[28px] shadow-[0_24px_80px_rgba(0,0,0,0.7)] overflow-hidden"
            >
              {/* Grainy Texture Overlay */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
              
              <div className="p-6 sm:p-7 flex flex-col items-center">
                {/* Header inside card */}
                <div className="w-full flex justify-between items-center mb-6">
                  <Link 
                    to="/" 
                    onClick={(e) => handleLinkClick(e, '/')}
                    className="flex items-center space-x-3 cursor-pointer group"
                  >
                    <img 
                      src="https://res.cloudinary.com/dk1tkgjpj/image/upload/v1774236478/Klipp_logo_lpy37r.svg" 
                      alt="KLIPP Logo" 
                      className="h-5 sm:h-6 w-auto brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity"
                      referrerPolicy="no-referrer"
                    />
                    <span className="text-base sm:text-lg font-sans font-medium tracking-[0.2em] text-white/70 group-hover:text-white transition-colors">
                      Klipp
                    </span>
                  </Link>
                  <button 
                    onClick={() => setIsMenuOpen(false)}
                    className="w-8 h-8 flex items-center justify-center text-white/50 hover:text-white transition-colors duration-300 rounded-full hover:bg-white/5 cursor-pointer"
                    aria-label="Cerrar menú"
                  >
                    <X size={17} />
                  </button>
                </div>

                {/* Navigation Links - Stacked & Centered with refined spacing and hover */}
                <div className="flex flex-col items-center space-y-3 sm:space-y-3.5 w-full">
                  {NAV_LINKS.map((link, idx) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.04 + 0.08, duration: 0.5 }}
                      className="w-full text-center"
                    >
                      <Link 
                        to={link.href} 
                        onClick={(e) => handleLinkClick(e, link.href)}
                        className="group relative inline-flex items-center justify-center py-1.5 px-4 cursor-pointer"
                      >
                        <span className="text-lg sm:text-xl font-serif font-light text-white/70 group-hover:text-white group-hover:tracking-wider transition-all duration-300">
                          {link.name}
                        </span>
                        <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent group-hover:w-4/5 transition-all duration-300 opacity-80" />
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Action Button */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.5 }}
                  className="mt-7 sm:mt-8 w-full"
                >
                  <button 
                    onClick={scrollToBooking}
                    aria-label="Reservar ahora"
                    style={{ 
                      color: '#ffffff',
                      backgroundImage: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.14) 0%, rgba(236, 192, 119, 0.16) 45%, rgba(104, 60, 19, 0.30) 100%)',
                      border: '0.1px solid rgba(255, 255, 255, 0.24)',
                      backdropFilter: 'blur(16px)',
                      WebkitBackdropFilter: 'blur(16px)',
                      boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.20), 0 4px 20px rgba(0, 0, 0, 0.25)'
                    }}
                    className="w-full py-3.5 rounded-full font-medium tracking-wide text-sm text-white transition-all duration-300 active:scale-[0.98] cursor-pointer hover:brightness-110"
                  >
                    <span className="text-white font-medium" style={{ color: '#ffffff' }}>Reservar</span>
                  </button>
                </motion.div>

                {/* Social Micro-links */}
                <div className="mt-5 sm:mt-6 flex space-x-6 items-center">
                  {[
                    { icon: Instagram, href: 'https://instagram.com/klipp_travel', label: 'Instagram' },
                    { icon: Facebook, href: 'https://facebook.com/klipp_travel', label: 'Facebook' },
                    { icon: Twitter, href: 'https://twitter.com/klipp_travel', label: 'Twitter' }
                  ].map((social, idx) => (
                    <motion.a 
                      key={idx} 
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + idx * 0.08, duration: 0.4 }}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="text-white/40 hover:text-gold cursor-pointer transition-colors duration-300"
                    >
                      <social.icon size={16} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
