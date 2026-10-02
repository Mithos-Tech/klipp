import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Lock, ShieldCheck, Eye, Database, Mail } from 'lucide-react';

const Privacy = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-base min-h-screen text-white pt-40 pb-32"
    >
      <Helmet>
        <title>Política de Privacidad | KLIPP Luxury Travel</title>
        <meta 
          name="description" 
          content="Conoce cómo protegemos y gestionamos tus datos personales bajo la Ley N° 29733 y estándares internacionales de privacidad." 
        />
        <meta property="og:title" content="Política de Privacidad | KLIPP" />
        <meta property="og:description" content="Protección de datos personales, confidencialidad y derechos ARCO en KLIPP." />
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
            <span className="text-gold font-mono text-xs tracking-wider">Privacidad & Seguridad</span>
            <div className="w-8 h-px bg-gold/50" />
            <span className="text-white/40 font-mono text-xs tracking-wider">Ley N° 29733 (Perú) & GDPR</span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-light text-white mb-6 leading-tight tracking-tight">
            Política de Privacidad y Protección de Datos
          </h1>
          <p className="text-white/60 text-base sm:text-lg font-light leading-relaxed max-w-2xl">
            En KLIPP, la discreción y confidencialidad son pilares de nuestro estándar de servicio. Este documento detalla con transparencia cómo recopilamos, custodiamos y protegemos su información privada.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-16 text-white/80 font-light leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-4">
            <div className="flex items-center space-x-4">
              <span className="text-gold font-serif text-2xl font-light italic">01.</span>
              <h2 className="text-2xl sm:text-3xl font-serif text-white tracking-wide">
                Identidad del Responsable del Tratamiento
              </h2>
            </div>
            <p>
              El titular del banco de datos personales y responsable del tratamiento es <strong className="text-white font-medium">KLIPP by Inspirio Studio</strong>, con domicilio legal en Lima, República del Perú. Para cualquier comunicación relativa al tratamiento de sus datos o ejercicio de derechos de privacidad, ponemos a su disposición el canal directo: <a href="mailto:privacy@klipp.pe" className="text-gold underline underline-offset-4">privacy@klipp.pe</a>.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <div className="flex items-center space-x-4">
              <span className="text-gold font-serif text-2xl font-light italic">02.</span>
              <h2 className="text-2xl sm:text-3xl font-serif text-white tracking-wide">
                Datos que Recopilamos y Finalidad
              </h2>
            </div>
            <p>
              A través de nuestros formularios de contacto, conserjería y reservas personalizadas, recopilamos únicamente la información estrictamente indispensable para la orquestación de su viaje:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10">
                <h3 className="text-white font-medium text-sm mb-2 flex items-center gap-2">
                  <Database size={16} className="text-gold" /> Datos de Identificación y Contacto
                </h3>
                <p className="text-white/60 text-xs">
                  Nombre completo, correo electrónico, número telefónico y país de residencia.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10">
                <h3 className="text-white font-medium text-sm mb-2 flex items-center gap-2">
                  <Eye size={16} className="text-gold" /> Preferencias y Logística de Viaje
                </h3>
                <p className="text-white/60 text-xs">
                  Destino de interés, fechas tentativas, número de huéspedes y solicitudes especiales de viaje.
                </p>
              </div>
            </div>
            <p className="pt-2">
              <strong className="text-white font-medium">Finalidad:</strong> Los datos se emplean única y exclusivamente para:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4 text-white/70 text-sm">
              <li>Elaborar propuestas de itinerarios a medida y presupuestos formales.</li>
              <li>Gestionar reservaciones de alta prioridad ante operadores selectos.</li>
              <li>Proveer asistencia de conserjería personalizada durante su estancia en Perú.</li>
              <li>Cumplir con las obligaciones legales y regulatorias de turismo en Perú.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <div className="flex items-center space-x-4">
              <span className="text-gold font-serif text-2xl font-light italic">03.</span>
              <h2 className="text-2xl sm:text-3xl font-serif text-white tracking-wide">
                No Comercialización de Datos
              </h2>
            </div>
            <p>
              <strong className="text-white font-medium">KLIPP jamás vende, alquila ni cede comercialmente</strong> los datos personales de sus viajeros a terceras partes para fines publicitarios. Cualquier transferencia de información se limita estrictamente a los proveedores directos indispensables para la ejecución del viaje (aerolíneas privadas, autoridades de parques nacionales para permisos de acceso, y hoteles asociados bajo convenios de confidencialidad).
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <div className="flex items-center space-x-4">
              <span className="text-gold font-serif text-2xl font-light italic">04.</span>
              <h2 className="text-2xl sm:text-3xl font-serif text-white tracking-wide">
                Derechos ARCO (Acceso, Rectificación, Cancelación y Oposición)
              </h2>
            </div>
            <p>
              En cumplimiento con la <strong className="text-white font-medium">Ley N° 29733 de Protección de Datos Personales del Perú</strong> y su reglamento, así como con el Reglamento General de Protección de Datos de la Unión Europea (GDPR), usted tiene derecho en todo momento a:
            </p>
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 space-y-3 font-sans text-sm">
              <p><strong className="text-gold">Acceso:</strong> Conocer qué datos personales suyos mantenemos en custodia.</p>
              <p><strong className="text-gold">Rectificación:</strong> Actualizar o corregir información errónea o desactualizada.</p>
              <p><strong className="text-gold">Cancelación (Supresión):</strong> Solicitar la eliminación total de sus datos cuando hayan dejado de ser necesarios para la finalidad de viaje.</p>
              <p><strong className="text-gold">Oposición:</strong> Oponerse al tratamiento de sus datos para determinados fines accesorios.</p>
            </div>
            <p className="text-sm">
              Para ejercer cualquiera de estos derechos, basta con enviar un correo electrónico a <a href="mailto:privacy@klipp.pe" className="text-gold underline">privacy@klipp.pe</a> indicando su nombre completo y el derecho que desea ejercer. Responderemos a su solicitud en un plazo máximo de 10 días hábiles.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <div className="flex items-center space-x-4">
              <span className="text-gold font-serif text-2xl font-light italic">05.</span>
              <h2 className="text-2xl sm:text-3xl font-serif text-white tracking-wide">
                Medidas de Seguridad y Cifrado
              </h2>
            </div>
            <p>
              Implementamos protocolos de seguridad técnica y organizativa que incluyen transmisión cifrada bajo HTTPS (TLS 1.3), almacenamiento restringido con autenticación multifactor y estricta segmentación de accesos internos, garantizando la inviolabilidad de los expedientes de nuestros huéspedes de alto perfil.
            </p>
          </section>
        </div>

        {/* Security badge */}
        <div className="mt-20 p-8 rounded-3xl bg-gold/[0.04] border border-gold/20 flex items-center gap-6">
          <div className="w-14 h-14 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0">
            <ShieldCheck size={28} className="text-gold" />
          </div>
          <div>
            <h4 className="text-white font-serif text-xl mb-1">Privacidad de Alto Nivel Garantizada</h4>
            <p className="text-white/60 text-xs sm:text-sm font-light">
              Protocolos diseñados para diplomáticos, ejecutivos y personalidades que exigen los máximos estándares globales de discreción.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Privacy;
