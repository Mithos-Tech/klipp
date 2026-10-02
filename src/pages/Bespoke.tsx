import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { BespokeHero } from '../components/bespoke/BespokeHero';
import { BespokeProcess } from '../components/bespoke/BespokeProcess';
import { BespokeGrid } from '../components/bespoke/BespokeGrid';
import { FinalCTA } from '../components/FinalCTA';
import { BookingForm } from '../components/BookingForm';
import { motion } from 'motion/react';

const BespokeStatement = () => (
  <section className="py-48 bg-base relative overflow-hidden">
    <div className="max-w-5xl mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="text-gold font-mono text-[10px] tracking-[0.5em] uppercase mb-12 block">
          NUESTRA FILOSOFÍA
        </span>
        <h2 className="text-4xl md:text-6xl font-serif font-light text-white leading-tight tracking-tight italic">
          "El verdadero lujo no es lo que se compra, <br />
          sino lo que se <span className="text-gold not-italic">siente</span> cuando el mundo <br />
          se detiene para servirte."
        </h2>
        <div className="mt-16 flex items-center justify-center gap-8">
          <div className="w-12 h-px bg-white/10" />
          <span className="text-white/20 font-mono text-[9px] tracking-[0.3em] uppercase">KLIPP — MANIFIESTO 01</span>
          <div className="w-12 h-px bg-white/10" />
        </div>
      </motion.div>
    </div>
  </section>
);

const BespokePage = () => {
  return (
    <div className="bg-base text-white selection:bg-gold selection:text-base w-full">
      <Helmet>
        <title>KLIPP Bespoke | Experiencias de Lujo a Medida en Perú</title>
        <meta name="description" content="Diseñamos el Perú inalcanzable. Servicios de jet privado, conserjería 24/7 y acceso exclusivo para los viajeros más exigentes del mundo." />
        <meta property="og:title" content="KLIPP Bespoke | El Perú Inalcanzable Hecho Realidad" />
        <meta property="og:description" content="Servicios exclusivos de lujo: Flota privada, conserjería de autor y experiencias curadas." />
        <meta property="og:image" content="https://res.cloudinary.com/dk1tkgjpj/image/upload/v1774200612/suspiros_subutf.webp" />
      </Helmet>
      <BespokeHero />
      <BespokeStatement />
      <BespokeProcess />
      <BespokeGrid />
      <FinalCTA />
      <BookingForm />
    </div>
  );
};

export default BespokePage;
