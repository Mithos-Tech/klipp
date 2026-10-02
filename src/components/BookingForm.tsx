import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Send, Calendar, Users, MapPin, MessageSquare, CheckCircle2, ArrowRight } from 'lucide-react';

export const BookingForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    destination: '',
    guests: '2',
    date: '',
    message: '',
    acceptedPrivacy: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceCode, setReferenceCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.acceptedPrivacy) return;

    // Sanitize values
    const sanitized = {
      name: formState.name.trim().slice(0, 80),
      email: formState.email.trim().slice(0, 80),
      destination: formState.destination.trim().slice(0, 50),
      guests: formState.guests,
      date: formState.date,
      message: formState.message.trim().slice(0, 600)
    };

    const ref = `KLIPP-REQ-${Math.floor(10000 + Math.random() * 90000)}`;
    setReferenceCode(ref);
    setIsSubmitted(true);
    // Reset form after 8 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({
        name: '',
        email: '',
        destination: '',
        guests: '2',
        date: '',
        message: '',
        acceptedPrivacy: false
      });
    }, 8000);
  };

  return (
    <section id="contacto" className="relative min-h-screen flex items-center justify-center py-32 overflow-hidden bg-base scroll-mt-24">
      {/* Background Image with Parallax-like feel */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://res.cloudinary.com/dk1tkgjpj/image/upload/v1774200612/Laguna_Llanganucos_cdvu0e.webp" 
          alt="Laguna Llanganuco" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Sophisticated Gradient Overlay */}
        <div className="absolute inset-0 bg-base/20" />
        
        {/* Seamless Transitions (Top and Bottom) */}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6"
          >
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-px bg-gold/50" />
              <span className="text-gold font-mono text-xs tracking-widest uppercase font-medium">
                Consultoría Privada
              </span>
            </div>
            
            <h2 className="text-6xl sm:text-8xl font-serif font-light leading-[0.85] tracking-tighter text-white mb-12">
              Destinos <br />
              <span className="italic text-white/60">Exclusivos</span> <br />
              A Su Medida.
            </h2>
            
            <div className="max-w-md">
              <p className="text-white/90 text-lg leading-relaxed mb-12 font-light">
                Donde sus deseos de viaje se convierten en realidad. Embárquese en una experiencia donde cada detalle está cuidadosamente planificado para superar sus expectativas.
              </p>
              
              <div className="flex flex-wrap gap-8">
                <div className="flex flex-col">
                  <span className="text-white font-serif text-3xl mb-1">24/7</span>
                  <span className="text-white/60 text-xs tracking-wider font-medium">Asistencia</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-serif text-3xl mb-1">100%</span>
                  <span className="text-white/60 text-xs tracking-wider font-medium">Personalizado</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-serif text-3xl mb-1">Global</span>
                  <span className="text-white/60 text-xs tracking-wider font-medium">Presencia</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Sophisticated Glass Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6"
          >
            <div className="relative group">
              {/* Outer Glow */}
              <div className="absolute -inset-1 bg-white/10 rounded-[40px] opacity-20 group-hover:opacity-40 transition duration-1000" />
              
              <div className="relative bg-gradient-to-br from-white/[0.12] to-white/[0.03] backdrop-blur-2xl border border-white/20 p-8 sm:p-14 rounded-[40px] shadow-[0_40px_100px_rgba(0,0,0,0.5)] min-h-[600px] flex flex-col justify-center overflow-hidden">
                {/* Subtle texture for crystallized effect */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
                
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="mb-10">
                        <h3 className="text-2xl font-serif text-white mb-2">Solicitud de Reserva</h3>
                        <p className="text-white/60 text-xs uppercase tracking-widest font-bold">Comience su experiencia</p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="space-y-6">
                          <div className="relative group/input">
                            <input 
                              type="text" 
                              required
                              maxLength={80}
                              className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-gold transition-all duration-500"
                              placeholder="Nombre Completo"
                              value={formState.name}
                              onChange={(e) => setFormState({...formState, name: e.target.value})}
                            />
                            <div className="absolute bottom-0 left-0 w-0 h-px bg-gold transition-all duration-700 group-focus-within/input:w-full" />
                          </div>

                          <div className="relative group/input">
                            <input 
                              type="email" 
                              required
                              maxLength={80}
                              className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-gold transition-all duration-500"
                              placeholder="Correo Electrónico"
                              value={formState.email}
                              onChange={(e) => setFormState({...formState, email: e.target.value})}
                            />
                            <div className="absolute bottom-0 left-0 w-0 h-px bg-gold transition-all duration-700 group-focus-within/input:w-full" />
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div className="relative group/input">
                              <select 
                                className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-gold transition-all duration-500 appearance-none cursor-pointer"
                                value={formState.destination}
                                onChange={(e) => setFormState({...formState, destination: e.target.value})}
                              >
                                <option value="" className="bg-base">Destino</option>
                                <option value="cusco" className="bg-base">Cusco</option>
                                <option value="lima" className="bg-base">Lima</option>
                                <option value="paracas" className="bg-base">Paracas</option>
                              </select>
                              <MapPin size={14} className="absolute right-0 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" />
                              <div className="absolute bottom-0 left-0 w-0 h-px bg-gold transition-all duration-700 group-focus-within/input:w-full" />
                            </div>

                            <div className="relative group/input">
                              <input 
                                type="text" 
                                min={new Date().toISOString().split('T')[0]}
                                onFocus={(e) => e.target.type = 'date'}
                                onBlur={(e) => e.target.type = 'text'}
                                className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-gold transition-all duration-500"
                                placeholder="Fecha de Viaje"
                                value={formState.date}
                                onChange={(e) => setFormState({...formState, date: e.target.value})}
                              />
                              <Calendar size={14} className="absolute right-0 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" />
                              <div className="absolute bottom-0 left-0 w-0 h-px bg-gold transition-all duration-700 group-focus-within/input:w-full" />
                            </div>
                          </div>

                          <div className="relative group/input">
                            <textarea 
                              rows={3}
                              maxLength={600}
                              className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-gold transition-all duration-500 resize-none"
                              placeholder="Preferencias Especiales"
                              value={formState.message}
                              onChange={(e) => setFormState({...formState, message: e.target.value})}
                            />
                            <div className="absolute bottom-0 left-0 w-0 h-px bg-gold transition-all duration-700 group-focus-within/input:w-full" />
                          </div>

                          {/* Legal consent checkbox */}
                          <div className="pt-2">
                            <label className="flex items-start space-x-3 cursor-pointer group/consent">
                              <input 
                                type="checkbox"
                                required
                                checked={formState.acceptedPrivacy}
                                onChange={(e) => setFormState({ ...formState, acceptedPrivacy: e.target.checked })}
                                className="mt-1 accent-gold w-4 h-4 cursor-pointer"
                              />
                              <span className="text-[11px] text-white/60 font-light leading-relaxed group-hover/consent:text-white/80 transition-colors">
                                Acepto la <Link to="/privacidad" target="_blank" className="text-gold underline underline-offset-2">Política de Privacidad</Link> y los <Link to="/terminos" target="_blank" className="text-gold underline underline-offset-2">Términos de Servicio</Link> para el tratamiento confidencial de mi solicitud.
                              </span>
                            </label>
                          </div>
                        </div>

                        <button 
                          type="submit"
                          className="w-full bg-white text-base py-5 rounded-full font-medium tracking-wider text-xs hover:bg-gold hover:text-white transition-all duration-700 flex items-center justify-center group/btn overflow-hidden relative shadow-xl"
                        >
                          <span className="relative z-10">Enviar Solicitud</span>
                          <div className="absolute inset-0 bg-gold translate-y-full group-hover/btn:translate-y-0 transition-transform duration-700 ease-[0.22, 1, 0.36, 1]" />
                        </button>
                      </form>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.1 }}
                      className="text-center py-20"
                    >
                      <motion.div 
                        initial={{ scale: 0, rotate: -45 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: 'spring', damping: 12, stiffness: 200 }}
                        className="w-24 h-24 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-10 border border-gold/40 relative"
                      >
                        <div className="absolute inset-0 bg-gold/10 rounded-full animate-ping" />
                        <CheckCircle2 className="text-gold" size={40} />
                      </motion.div>
                      <h3 className="text-3xl sm:text-4xl font-serif text-white mb-4">Solicitud Recibida</h3>
                      <div className="inline-block bg-white/5 border border-gold/30 rounded-xl px-4 py-2 font-mono text-gold text-xs tracking-widest mb-6">
                        {referenceCode}
                      </div>
                      <p className="text-white/70 leading-relaxed max-w-xs mx-auto text-sm sm:text-base font-light">
                        Un concierge de KLIPP se pondrá en contacto con usted en las próximas 24 horas para diseñar su experiencia.
                      </p>
                      <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsSubmitted(false)}
                        className="mt-16 text-gold font-mono text-[10px] tracking-[0.5em] uppercase hover:text-white transition-colors border-b border-gold/20 pb-2"
                      >
                        Volver al formulario
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                <div className="mt-10 pt-10 border-t border-white/5 flex items-center justify-between">
                  <p className="text-[9px] text-white/40 uppercase tracking-widest">Privacidad Garantizada</p>
                  <div className="flex space-x-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold/40 animate-pulse" />
                    <div className="w-1.5 h-1.5 rounded-full bg-gold/40 animate-pulse delay-75" />
                    <div className="w-1.5 h-1.5 rounded-full bg-gold/40 animate-pulse delay-150" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
