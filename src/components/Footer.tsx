import React from 'react';
import { motion } from 'motion/react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone, ArrowUp, Globe, ShieldCheck, Compass } from 'lucide-react';

import { SOCIAL_LINKS } from '../data/constants';
import { smoothNavigate } from '../utils/navigation';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const footerLinks = {
    explorar: [
      { name: 'Inicio', href: '/' },
      { name: 'Destinos', href: '/#destinos' },
      { name: 'A Medida', href: '/bespoke' },
      { name: 'Tendencias', href: '/#tendencias' },
      { name: 'Filosofía', href: '/#esencia' },
      { name: 'Testimonios', href: '/#testimonios' },
    ],
    servicios: [
      { name: 'Consultoría Privada', href: '/#contacto' },
      { name: 'Flota Privada', href: '/bespoke?service=0#servicios-bespoke' },
      { name: 'Conserjería 24/7', href: '/bespoke?service=1#servicios-bespoke' },
      { name: 'Acceso Exclusivo', href: '/bespoke?service=2#servicios-bespoke' },
      { name: 'Seguridad y Privacidad', href: '/bespoke?service=3#servicios-bespoke' },
    ],
    legal: [
      { name: 'Términos', href: '/terminos' },
      { name: 'Privacidad', href: '/privacidad' },
      { name: 'Cookies', href: '/cookies' },
      { name: 'Libro de Reclamaciones', href: '/libro-de-reclamaciones' },
    ]
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFooterNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    smoothNavigate(href, navigate, location.pathname);
  };

  return (
    <footer className="bg-base pt-32 pb-12 relative overflow-hidden border-t border-white/5">
      {/* Background Atmosphere - Framer Style */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-gold/5 rounded-full opacity-30 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-24 mb-32">
          {/* Brand & Mission */}
          <div className="lg:col-span-5">
            <Link 
              to="/" 
              onClick={(e) => handleFooterNavigation(e, '/')}
              className="inline-flex items-center space-x-5 mb-10 group cursor-pointer"
            >
              <img 
                src="https://res.cloudinary.com/dk1tkgjpj/image/upload/v1774236478/Klipp_logo_lpy37r.svg" 
                alt="KLIPP Logo" 
                className="h-10 sm:h-12 w-auto brightness-0 invert group-hover:opacity-80 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <span className="text-3xl sm:text-4xl font-sans font-medium tracking-[0.2em] text-white group-hover:text-gold transition-all duration-700">
                Klipp
              </span>
            </Link>
            <p className="text-white/70 text-xl leading-relaxed mb-12 font-serif italic max-w-sm">
              "Elevando el arte de viajar a una dimensión de exclusividad y conexión profunda."
            </p>
            
            <div className="flex flex-col space-y-5">
              <a 
                href="mailto:concierge@klipp.pe" 
                className="flex items-center space-x-4 text-white/40 hover:text-gold transition-colors duration-500 cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-gold/30 transition-colors">
                  <Mail size={16} />
                </div>
                <span className="text-xs tracking-wider font-medium">concierge@klipp.pe</span>
              </a>
              <a 
                href="tel:+5112345678" 
                className="flex items-center space-x-4 text-white/40 hover:text-gold transition-colors duration-500 cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-gold/30 transition-colors">
                  <Phone size={16} />
                </div>
                <span className="text-xs tracking-wider font-medium">+51 1 234 5678</span>
              </a>
            </div>
          </div>

          {/* Navigation Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-12">
            <div>
              <h4 className="text-white font-mono text-xs tracking-widest mb-8 opacity-60">Explorar</h4>
              <ul className="space-y-6">
                {footerLinks.explorar.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href}
                      onClick={(e) => handleFooterNavigation(e, link.href)}
                      className="text-white/50 hover:text-white transition-all duration-500 text-sm tracking-wide font-light flex items-center group"
                    >
                      <span className="w-0 group-hover:w-4 h-[1px] bg-gold mr-0 group-hover:mr-3 transition-all duration-500" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-mono text-xs tracking-widest mb-8 opacity-60">Servicios</h4>
              <ul className="space-y-6">
                {footerLinks.servicios.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href}
                      onClick={(e) => handleFooterNavigation(e, link.href)}
                      className="text-white/50 hover:text-white transition-all duration-500 text-sm tracking-wide font-light flex items-center group"
                    >
                      <span className="w-0 group-hover:w-4 h-[1px] bg-gold mr-0 group-hover:mr-3 transition-all duration-500" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-white font-mono text-xs tracking-widest mb-8 opacity-60">Social</h4>
              <div className="flex flex-col space-y-6">
                {SOCIAL_LINKS.map((social, idx) => {
                  const label = social.href.includes('instagram') ? 'Instagram' : social.href.includes('facebook') ? 'Facebook' : 'Twitter';
                  return (
                    <a 
                      key={idx} 
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex items-center space-x-4 text-white/50 hover:text-white transition-all duration-500 group"
                    >
                      <social.icon size={16} className="group-hover:text-gold transition-colors" />
                      <span className="text-sm tracking-wide font-light">
                        {label}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Clean & Minimal */}
        <div className="pt-12 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <p className="text-white/40 text-xs tracking-wider font-normal text-center md:text-left">
              © 2026 Klipp by <span className="text-gold/90 hover:text-gold transition-colors duration-500 cursor-default font-medium">Inspirio Studio</span>. Todos los Derechos Reservados.
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-5 sm:gap-7">
              {footerLinks.legal.map(link => (
                <Link 
                  key={link.name} 
                  to={link.href}
                  onClick={(e) => handleFooterNavigation(e, link.href)}
                  className="text-white/40 hover:text-gold text-xs tracking-wider font-light transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-8">
            {/* Back to Top Floating-like button */}
            <button 
              onClick={scrollToTop}
              className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-gold hover:bg-gold/5 transition-all duration-500 group"
              aria-label="Volver arriba"
            >
              <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform duration-500" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
