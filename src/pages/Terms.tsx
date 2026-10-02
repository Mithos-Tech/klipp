import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, FileText, Calendar, AlertCircle } from 'lucide-react';

const Terms = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-base min-h-screen text-white pt-40 pb-32"
    >
      <Helmet>
        <title>Términos y Condiciones | KLIPP Luxury Travel</title>
        <meta 
          name="description" 
          content="Términos y condiciones legales de contratación de expediciones exclusivas y servicios de conserjería de KLIPP en Perú." 
        />
        <meta property="og:title" content="Términos y Condiciones | KLIPP" />
        <meta property="og:description" content="Condiciones de contratación, cancelaciones y servicios privados de KLIPP." />
      </Helmet>

      <div className="max-w-4xl mx-auto px-6">
        {/* Breadcrumb / Back Link */}
        <Link 
          to="/" 
          onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' })}
          className="inline-flex items-center space-x-3 text-white/50 hover:text-gold transition-colors text-xs font-mono tracking-wider mb-12 group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          <span>Volver al Inicio</span>
        </Link>

        {/* Header */}
        <div className="border-b border-white/10 pb-12 mb-16">
          <div className="flex items-center space-x-3 mb-6">
            <span className="text-gold font-mono text-xs tracking-wider">Documento Legal</span>
            <div className="w-8 h-px bg-gold/50" />
            <span className="text-white/40 font-mono text-xs tracking-wider">Versión 2.4 — 2026</span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-light text-white mb-6 leading-tight tracking-tight">
            Términos y Condiciones de Servicio
          </h1>
          <p className="text-white/60 text-base sm:text-lg font-light leading-relaxed max-w-2xl">
            El presente acuerdo establece las condiciones legales y operativas que rigen la contratación de itinerarios de alta gama, servicios de aviación privada y conserjería personalizada con KLIPP.
          </p>
        </div>

        {/* Clauses Content */}
        <div className="space-y-16 text-white/80 font-light leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-4">
            <div className="flex items-center space-x-4">
              <span className="text-gold font-serif text-2xl font-light italic">01.</span>
              <h2 className="text-2xl sm:text-3xl font-serif text-white tracking-wide">
                Naturaleza de los Servicios y Filosofía Bespoke
              </h2>
            </div>
            <p>
              KLIPP opera como una firma de curaduría de viajes de lujo, asesoría privada y gestión de experiencias de autor en la República del Perú y destinos internacionales conexos. Todos los programas son personalizados según las especificaciones del cliente (“Huésped” o “Viajero”), coordinando con proveedores de excelencia previamente auditados (hotelería boutique, operadores náuticos, aviación civil privada y guías certificados).
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <div className="flex items-center space-x-4">
              <span className="text-gold font-serif text-2xl font-light italic">02.</span>
              <h2 className="text-2xl sm:text-3xl font-serif text-white tracking-wide">
                Cotizaciones, Reservas y Calendario de Pagos
              </h2>
            </div>
            <p>
              Toda solicitud de viaje confeccionada a medida requiere una confirmación formal y el desembolso de un depósito inicial del <strong className="text-white font-medium">30% del valor total de la expedición</strong> para el bloqueo de activos de alta demanda (slots en trenes de lujo, reservas en el Camino Inca, vuelos chárter y alojamiento de categoría superior).
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4 text-white/70">
              <li>El saldo remanente (70%) deberá ser cancelado con un mínimo de 45 días calendario de antelación a la fecha de inicio del itinerario.</li>
              <li>Reservas solicitadas con menos de 45 días de anticipación requerirán el pago del 100% al momento de la confirmación.</li>
              <li>Los medios de pago admitidos incluyen transferencias bancarias internacionales (SWIFT/IBAN), pasarelas de pago cifradas y transacciones corporativas verificadas.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <div className="flex items-center space-x-4">
              <span className="text-gold font-serif text-2xl font-light italic">03.</span>
              <h2 className="text-2xl sm:text-3xl font-serif text-white tracking-wide">
                Políticas de Cancelación, Modificaciones y Reembolsos
              </h2>
            </div>
            <p>
              Dada la exclusividad y rigidez de los activos reservados (permisos gubernamentales intransferibles como boletos a Machu Picchu y vuelos chárter privados), las cancelaciones voluntarias están sujetas al siguiente baremo:
            </p>
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 space-y-3 font-sans text-sm">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-white/70">Más de 60 días antes del inicio:</span>
                <span className="text-gold font-medium">Reembolso del 80% (gastos administrativos deducibles)</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-white/70">Entre 59 y 31 días antes del inicio:</span>
                <span className="text-gold font-medium">Reembolso del 50%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">30 días o menos antes de la llegada / No-show:</span>
                <span className="text-white/40">No reembolsable (100% de retención)</span>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <div className="flex items-center space-x-4">
              <span className="text-gold font-serif text-2xl font-light italic">04.</span>
              <h2 className="text-2xl sm:text-3xl font-serif text-white tracking-wide">
                Fuerza Mayor y Eventos Incontrolables
              </h2>
            </div>
            <p>
              KLIPP no será responsable por demoras, desvíos de ruta, cancelaciones de vuelos comerciales o imposibilidad de ejecución causadas por caso fortuito o fuerza mayor, tales como condiciones meteorológicas adversas en la Cordillera de los Andes o Cuenca Amazónica, cierres preventivos de aeropuertos, desastres naturales, o disposiciones gubernamentales soberanas. En tales eventos, nuestro equipo de conserjería 24/7 gestionará de inmediato las mejores alternativas viables para salvaguardar la integridad y disfrute del Huésped.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <div className="flex items-center space-x-4">
              <span className="text-gold font-serif text-2xl font-light italic">05.</span>
              <h2 className="text-2xl sm:text-3xl font-serif text-white tracking-wide">
                Seguros de Viaje y Requisitos Médicos
              </h2>
            </div>
            <p>
              Es requisito imprescindible que cada pasajero cuente con una póliza de seguro médico y de viaje internacional vigente que cubra evacuación aeromédica de emergencia, repatriación, pérdida de equipaje y coberturas para actividades a gran altitud (por encima de los 3,500 m.s.n.m. para itinerarios en Cusco, Puno o Arequipa).
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <div className="flex items-center space-x-4">
              <span className="text-gold font-serif text-2xl font-light italic">06.</span>
              <h2 className="text-2xl sm:text-3xl font-serif text-white tracking-wide">
                Legislación Aplicable y Jurisdicción
              </h2>
            </div>
            <p>
              Los presentes términos se interpretan y rigen de conformidad con las leyes de la República del Perú. Para cualquier controversia no resuelta por mutuo acuerdo entre las partes, las mismas se someten expresamente a la jurisdicción de los jueces y tribunales del Distrito Judicial de Lima, Perú.
            </p>
          </section>
        </div>

        {/* Contact info box */}
        <div className="mt-20 p-8 rounded-3xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-white font-serif text-xl mb-1">¿Consultas sobre este acuerdo?</h4>
            <p className="text-white/50 text-sm font-light">Nuestro equipo legal y de concierge está disponible las 24 horas.</p>
          </div>
          <a 
            href="mailto:legal@klipp.pe" 
            className="px-8 py-3.5 rounded-full border border-gold/40 text-gold text-xs font-mono uppercase tracking-[0.3em] hover:bg-gold hover:text-base transition-all"
          >
            legal@klipp.pe
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Terms;
