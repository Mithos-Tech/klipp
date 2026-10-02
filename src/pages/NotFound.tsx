import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Compass } from 'lucide-react';

const NotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-base min-h-screen text-white flex items-center justify-center px-6 py-32 relative overflow-hidden"
    >
      <Helmet>
        <title>Página No Encontrada (404) | KLIPP Luxury Travel</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-xl mx-auto text-center relative z-10 space-y-8">
        <div className="w-16 h-16 rounded-full border border-gold/30 bg-gold/10 flex items-center justify-center mx-auto text-gold mb-6">
          <Compass size={32} className="animate-spin" style={{ animationDuration: '20s' }} />
        </div>

        <span className="text-gold font-mono text-xs tracking-wider block font-medium">
          Error 404 — Coordenada Inexistente
        </span>

        <h1 className="text-6xl sm:text-8xl font-serif font-light text-white leading-none tracking-tight">
          Destino Fuera del Mapa
        </h1>

        <p className="text-white/60 text-base sm:text-lg font-light leading-relaxed">
          La ruta que intenta explorar no se encuentra disponible o ha sido trasladada a otro itinerario privado.
        </p>

        <div className="pt-6">
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' })}
            className="inline-flex items-center space-x-3 bg-white text-base px-8 py-4 rounded-full font-medium tracking-wider text-xs hover:bg-gold hover:text-white transition-all duration-500 shadow-xl"
          >
            <ArrowLeft size={14} />
            <span>Retornar a la Portada</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default NotFound;
