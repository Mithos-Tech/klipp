import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Cookie, CheckCircle2, Settings } from 'lucide-react';

const Cookies = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-base min-h-screen text-white pt-40 pb-32"
    >
      <Helmet>
        <title>Política de Cookies | KLIPP Luxury Travel</title>
        <meta 
          name="description" 
          content="Información clara sobre el uso de cookies y tecnologías similares en la plataforma web de KLIPP." 
        />
        <meta property="og:title" content="Política de Cookies | KLIPP" />
      </Helmet>

      <div className="max-w-4xl mx-auto px-6">
        <Link 
          to="/" 
          onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' })}
          className="inline-flex items-center space-x-3 text-white/50 hover:text-gold transition-colors text-xs font-mono tracking-wider mb-12 group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          <span>Volver al Inicio</span>
        </Link>

        <div className="border-b border-white/10 pb-12 mb-16">
          <div className="flex items-center space-x-3 mb-6">
            <span className="text-gold font-mono text-xs tracking-wider">Transparencia Digital</span>
            <div className="w-8 h-px bg-gold/50" />
            <span className="text-white/40 font-mono text-xs tracking-wider">Actualizado 2026</span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-light text-white mb-6 leading-tight tracking-tight">
            Política de Cookies
          </h1>
          <p className="text-white/60 text-base sm:text-lg font-light leading-relaxed max-w-2xl">
            Explicamos con total claridad qué son las cookies, cuáles empleamos en este sitio web y cómo puede gestionarlas o deshabilitarlas desde su navegador.
          </p>
        </div>

        <div className="space-y-16 text-white/80 font-light leading-relaxed">
          <section className="space-y-4">
            <div className="flex items-center space-x-4">
              <span className="text-gold font-serif text-2xl font-light italic">01.</span>
              <h2 className="text-2xl sm:text-3xl font-serif text-white tracking-wide">
                ¿Qué es una Cookie?
              </h2>
            </div>
            <p>
              Una cookie es un pequeño archivo de texto que un sitio web almacena en su ordenador o dispositivo móvil cuando usted lo visita. Permite que el sitio recuerde sus acciones y preferencias (como idioma, navegación fluida y estados de formulario) durante un periodo determinado para ofrecerle una experiencia refinada y sin interrupciones.
            </p>
          </section>

          <section className="space-y-6">
            <div className="flex items-center space-x-4">
              <span className="text-gold font-serif text-2xl font-light italic">02.</span>
              <h2 className="text-2xl sm:text-3xl font-serif text-white tracking-wide">
                Tipos de Cookies que Empleamos
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold mb-4">
                    <CheckCircle2 size={20} />
                  </div>
                  <h3 className="text-white font-medium text-lg mb-2">Cookies Técnicas (Estrictamente Necesarias)</h3>
                  <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-4">
                    Esenciales para el funcionamiento seguro de la plataforma, la navegación entre páginas y el correcto renderizado de elementos visuales interactivos. No almacenan información que permita identificarlo directamente.
                  </p>
                </div>
                <span className="text-gold font-mono text-[9px] uppercase tracking-widest">Siempre Activas</span>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/70 mb-4">
                    <Settings size={20} />
                  </div>
                  <h3 className="text-white font-medium text-lg mb-2">Cookies de Rendimiento y Analítica</h3>
                  <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-4">
                    Nos permiten evaluar de forma anónima y agregada los tiempos de carga, volumen de visitas y secciones de mayor interés para optimizar continuamente la velocidad y el diseño del sitio web.
                  </p>
                </div>
                <span className="text-white/40 font-mono text-[9px] uppercase tracking-widest">Datos Agregados y Anónimos</span>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex items-center space-x-4">
              <span className="text-gold font-serif text-2xl font-light italic">03.</span>
              <h2 className="text-2xl sm:text-3xl font-serif text-white tracking-wide">
                Control y Desactivación de Cookies
              </h2>
            </div>
            <p>
              Usted puede en cualquier momento bloquear, restringir o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador web que utilice:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4 text-white/70 text-sm">
              <li><strong className="text-white">Google Chrome:</strong> Configuración &gt; Privacidad y seguridad &gt; Cookies y otros datos de sitios.</li>
              <li><strong className="text-white">Apple Safari:</strong> Preferencias &gt; Privacidad &gt; Bloquear todas las cookies.</li>
              <li><strong className="text-white">Mozilla Firefox:</strong> Opciones &gt; Privacidad y Seguridad &gt; Cookies y datos del sitio.</li>
              <li><strong className="text-white">Microsoft Edge:</strong> Configuración &gt; Permisos del sitio &gt; Cookies y datos del sitio.</li>
            </ul>
            <p className="text-xs text-white/50 pt-2">
              Nota: La deshabilitación de cookies técnicas esenciales podría afectar el funcionamiento óptimo de ciertas animaciones o módulos interactivos del portal.
            </p>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default Cookies;
