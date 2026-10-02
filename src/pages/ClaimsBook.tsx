import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, CheckCircle2, Shield, Info, Send, Printer } from 'lucide-react';

const ClaimsBook = () => {
  const [claimType, setClaimType] = useState<'reclamo' | 'queja'>('reclamo');
  const [serviceType, setServiceType] = useState<'servicio' | 'producto'>('servicio');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [claimCode, setClaimCode] = useState('');

  const [formData, setFormData] = useState({
    fullName: '',
    documentType: 'DNI',
    documentNumber: '',
    email: '',
    phone: '',
    address: '',
    amountClaimed: '',
    description: '',
    consumerDetail: '',
    consumerOrder: '',
    acceptedTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generated = `KLIPP-LR-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;
    setClaimCode(generated);
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-base min-h-screen text-white pt-40 pb-32"
    >
      <Helmet>
        <title>Libro de Reclamaciones Virtual | KLIPP Luxury Travel</title>
        <meta 
          name="description" 
          content="Libro de Reclamaciones Virtual de KLIPP conforme al Código de Protección y Defensa del Consumidor (Ley N° 29571 - INDECOPI, Perú)." 
        />
        <meta property="og:title" content="Libro de Reclamaciones Virtual | KLIPP" />
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

        {/* Header */}
        <div className="border-b border-white/10 pb-12 mb-16">
          <div className="flex items-center space-x-3 mb-6">
            <span className="text-gold font-mono text-[10px] tracking-[0.5em] uppercase">CONFORMIDAD INDECOPI</span>
            <div className="w-8 h-px bg-gold/50" />
            <span className="text-white/40 font-mono text-[10px] tracking-[0.2em]">LEY N° 29571 (PERÚ)</span>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <BookOpen className="text-gold" size={32} />
            <h1 className="text-4xl sm:text-6xl font-serif font-light text-white tracking-tight">
              Libro de Reclamaciones Virtual
            </h1>
          </div>
          <p className="text-white/60 text-sm sm:text-base font-light leading-relaxed max-w-2xl">
            Conforme a lo establecido en el Código de Protección y Defensa del Consumidor de la República del Perú, KLIPP pone a disposición de sus clientes esta plataforma virtual para el registro de reclamos y quejas.
          </p>
        </div>

        {/* Legal definitions reminder */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 text-xs text-white/70 space-y-2">
            <p className="font-semibold text-gold uppercase tracking-wider text-[10px]">Reclamo:</p>
            <p>Disconformidad relacionada directamente a los bienes adquiridos o servicios turísticos contratados.</p>
          </div>
          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 text-xs text-white/70 space-y-2">
            <p className="font-semibold text-white/90 uppercase tracking-wider text-[10px]">Queja:</p>
            <p>Disconformidad que no tiene relación directa con el servicio, sino con el malestar en la atención al usuario.</p>
          </div>
        </div>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-12">
            {/* Section 1: Customer Data */}
            <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 sm:p-12 space-y-6">
              <h2 className="text-xl font-serif text-white tracking-wide border-b border-white/10 pb-4">
                1. Identificación del Consumidor Reclamante
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase font-mono tracking-widest text-white/50 mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={100}
                    placeholder="Nombres y Apellidos"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-base border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:border-gold outline-none"
                  />
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div className="col-span-1">
                    <label className="block text-[10px] uppercase font-mono tracking-widest text-white/50 mb-2">
                      Doc. *
                    </label>
                    <select
                      value={formData.documentType}
                      onChange={(e) => setFormData({ ...formData, documentType: e.target.value })}
                      className="w-full bg-base border border-white/15 rounded-xl px-2 py-3 text-white text-sm focus:border-gold outline-none"
                    >
                      <option value="DNI">DNI</option>
                      <option value="CE">C.E.</option>
                      <option value="Pasaporte">Pasaporte</option>
                    </select>
                  </div>
                  <div className="col-span-2">
                    <label className="block text-[10px] uppercase font-mono tracking-widest text-white/50 mb-2">
                      Número *
                    </label>
                    <input
                      type="text"
                      required
                      maxLength={20}
                      placeholder="Número de documento"
                      value={formData.documentNumber}
                      onChange={(e) => setFormData({ ...formData, documentNumber: e.target.value })}
                      className="w-full bg-base border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:border-gold outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-mono tracking-widest text-white/50 mb-2">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    required
                    maxLength={100}
                    placeholder="contacto@ejemplo.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-base border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:border-gold outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-mono tracking-widest text-white/50 mb-2">
                    Teléfono / Móvil *
                  </label>
                  <input
                    type="tel"
                    required
                    maxLength={30}
                    placeholder="+51 999 999 999"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-base border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:border-gold outline-none"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-[10px] uppercase font-mono tracking-widest text-white/50 mb-2">
                    Domicilio *
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={180}
                    placeholder="Dirección, Distrito, Ciudad, País"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full bg-base border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:border-gold outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Contracted Good/Service */}
            <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 sm:p-12 space-y-6">
              <h2 className="text-xl font-serif text-white tracking-wide border-b border-white/10 pb-4">
                2. Identificación del Bien Contratado
              </h2>

              <div className="flex gap-6 mb-4">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="serviceType"
                    checked={serviceType === 'servicio'}
                    onChange={() => setServiceType('servicio')}
                    className="accent-gold"
                  />
                  <span className="text-sm text-white">Servicio Turístico / Conserjería</span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="serviceType"
                    checked={serviceType === 'producto'}
                    onChange={() => setServiceType('producto')}
                    className="accent-gold"
                  />
                  <span className="text-sm text-white">Producto</span>
                </label>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase font-mono tracking-widest text-white/50 mb-2">
                    Monto Reclamado (Opcional)
                  </label>
                  <input
                    type="text"
                    maxLength={30}
                    placeholder="USD $ / PEN S/"
                    value={formData.amountClaimed}
                    onChange={(e) => setFormData({ ...formData, amountClaimed: e.target.value })}
                    className="w-full bg-base border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:border-gold outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-mono tracking-widest text-white/50 mb-2">
                    Descripción del Servicio Contratado *
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={150}
                    placeholder="Ej. Expedición Privada Machu Picchu, Flota Aérea, etc."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full bg-base border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:border-gold outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Section 3: Claim / Complaint Details */}
            <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 sm:p-12 space-y-6">
              <h2 className="text-xl font-serif text-white tracking-wide border-b border-white/10 pb-4">
                3. Detalle de la Reclamación
              </h2>

              <div className="flex gap-8 mb-4">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="claimType"
                    checked={claimType === 'reclamo'}
                    onChange={() => setClaimType('reclamo')}
                    className="accent-gold"
                  />
                  <span className="text-sm font-medium text-gold">Reclamo</span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="claimType"
                    checked={claimType === 'queja'}
                    onChange={() => setClaimType('queja')}
                    className="accent-gold"
                  />
                  <span className="text-sm font-medium text-white">Queja</span>
                </label>
              </div>

              <div>
                <label className="block text-[10px] uppercase font-mono tracking-widest text-white/50 mb-2">
                  Detalle de los Hechos *
                </label>
                <textarea
                  required
                  rows={4}
                  maxLength={1500}
                  placeholder="Describa con precisión los hechos ocurridos..."
                  value={formData.consumerDetail}
                  onChange={(e) => setFormData({ ...formData, consumerDetail: e.target.value })}
                  className="w-full bg-base border border-white/15 rounded-xl p-4 text-white text-sm focus:border-gold outline-none resize-none"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase font-mono tracking-widest text-white/50 mb-2">
                  Pedido Concreto del Consumidor *
                </label>
                <textarea
                  required
                  rows={3}
                  maxLength={1000}
                  placeholder="Indique con claridad cuál es su requerimiento específico..."
                  value={formData.consumerOrder}
                  onChange={(e) => setFormData({ ...formData, consumerOrder: e.target.value })}
                  className="w-full bg-base border border-white/15 rounded-xl p-4 text-white text-sm focus:border-gold outline-none resize-none"
                />
              </div>

              <div className="pt-2">
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={formData.acceptedTerms}
                    onChange={(e) => setFormData({ ...formData, acceptedTerms: e.target.checked })}
                    className="mt-1 accent-gold"
                  />
                  <span className="text-xs text-white/60">
                    Declaro ser el titular del servicio o reclamo y confirmo que los datos consignados son verdaderos conforme a ley. Autorizo a KLIPP a remitir la respuesta a mi correo electrónico.
                  </span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-white text-base py-5 rounded-full font-bold tracking-[0.4em] text-[11px] uppercase hover:bg-gold hover:text-white transition-all duration-700 flex items-center justify-center space-x-3 group"
            >
              <Send size={16} className="group-hover:translate-x-1 transition-transform" />
              <span>REGISTRAR HOJA DE RECLAMACIÓN</span>
            </button>
          </form>
        ) : (
          <div className="bg-white/[0.02] border border-gold/30 rounded-3xl p-10 sm:p-16 text-center space-y-6">
            <div className="w-20 h-20 rounded-full bg-gold/10 border border-gold/40 flex items-center justify-center mx-auto text-gold">
              <CheckCircle2 size={40} />
            </div>
            <span className="text-gold font-mono text-[10px] tracking-[0.4em] uppercase block">
              REGISTRO EXITOSO
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-white">Hoja de Reclamación Registrada</h2>
            <div className="p-4 rounded-xl bg-base border border-white/10 max-w-sm mx-auto font-mono text-gold text-lg tracking-wider">
              {claimCode}
            </div>
            <p className="text-white/70 max-w-md mx-auto text-sm leading-relaxed font-light">
              Hemos registrado su {claimType} en nuestro Libro de Reclamaciones Virtual. Se ha remitido una copia formal de esta constancia al correo electrónico proporcionado.
            </p>
            <div className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl max-w-lg mx-auto text-xs text-white/50 text-left space-y-1">
              <p>• Plazo de respuesta legal: Máximo de 15 días hábiles conforme a la normativa de INDECOPI.</p>
              <p>• Proveedor: KLIPP by Inspirio Studio — RUC / Registro de Turismo Lima, Perú.</p>
              <p>• Canal directo de seguimiento: <span className="text-gold">reclamos@klipp.pe</span></p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex items-center space-x-2 bg-white/10 hover:bg-gold hover:text-base border border-white/15 px-6 py-3 rounded-full text-xs font-medium tracking-wider transition-all"
              >
                <Printer size={14} />
                <span>Imprimir / Guardar Constancia</span>
              </button>
              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="text-gold font-mono text-xs tracking-wider hover:text-white transition-colors border-b border-gold/30 pb-1"
              >
                Registrar otra comunicación
              </button>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ClaimsBook;
