import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Calendar, MapPin, ArrowRight, ChevronDown, Compass, Check, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { smoothNavigate } from '../utils/navigation';

const CURATED_DESTINATIONS = [
  { name: 'Cusco & Valle Sagrado', region: 'Andes del Sur', highlight: 'Santuario Machupicchu & Haciendas' },
  { name: 'Ica, Nazca & Paracas', region: 'Costa & Desierto', highlight: 'Sobrevuelos privados & Oasis' },
  { name: 'Máncora & Punta Sal', region: 'Costa Norte', highlight: 'Villas privadas frente al mar' },
  { name: 'Puno & Lago Titicaca', region: 'Altiplano', highlight: 'Islas exclusivas & Navegación' },
  { name: 'Amazonas & Tambopata', region: 'Selva Virgen', highlight: 'Lodges de autor en la reserva' },
  { name: 'Arequipa & Cañón del Colca', region: 'Cañones & Volcanes', highlight: 'Avistamiento de cóndores' },
];

const EXPERIENCES = [
  { id: 'aventura', label: 'Aventura & Expedición', desc: 'Geografías salvajes con logística privada' },
  { id: 'relax', label: 'Bienestar & Santuarios', desc: 'Retiros termales y serenidad absoluta' },
  { id: 'cultura', label: 'Inmersión & Arqueología', desc: 'Acceso privado con arqueólogos' },
  { id: 'gastronomia', label: 'Alta Gastronomía', desc: 'Cenas privadas de chefs galardonados' },
  { id: 'flota', label: 'Aviación & Flota Privada', desc: 'Vuelos chárter y helicópteros' },
];

const SEASONS = [
  { id: 'any', label: 'Cualquier Temporada', desc: 'Flexibilidad de fecha' },
  { id: 'seca', label: 'Temporada Seca Andina (May - Oct)', desc: 'Cielos despejados para Cusco' },
  { id: 'verano', label: 'Verano Costero (Dic - Abr)', desc: 'Playas del Norte y Paracas' },
  { id: 'andina', label: 'Festividades & Solsticios (Jun - Jul)', desc: 'Inti Raymi y ritos sagrados' },
];

export const SearchBar = () => {
  const [activeDropdown, setActiveDropdown] = useState<'dest' | 'exp' | 'season' | null>(null);
  const [destinationQuery, setDestinationQuery] = useState('');
  const [selectedExp, setSelectedExp] = useState<string | null>(null);
  const [selectedSeason, setSelectedSeason] = useState<string | null>(null);
  const [feedbackItem, setFeedbackItem] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const autoCloseTimerRef = useRef<NodeJS.Timeout | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Inactivity auto-close on mobile (6 seconds if user forgets to close)
  useEffect(() => {
    if (autoCloseTimerRef.current) clearTimeout(autoCloseTimerRef.current);
    if (activeDropdown) {
      autoCloseTimerRef.current = setTimeout(() => {
        setActiveDropdown(null);
      }, 7000);
    }
    return () => {
      if (autoCloseTimerRef.current) clearTimeout(autoCloseTimerRef.current);
    };
  }, [activeDropdown]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const handleSearch = () => {
    setActiveDropdown(null);
    smoothNavigate('/#destinos', navigate, location.pathname);
  };

  const clearAllFilters = () => {
    setDestinationQuery('');
    setSelectedExp(null);
    setSelectedSeason(null);
    setActiveDropdown(null);
  };

  // Tactile selection handler with automatic smooth collapse
  const selectAndCollapse = (type: 'dest' | 'exp' | 'season', value: string) => {
    setFeedbackItem(value);
    
    if (type === 'dest') {
      setDestinationQuery(value);
    } else if (type === 'exp') {
      setSelectedExp(value);
    } else if (type === 'season') {
      setSelectedSeason(value);
    }

    // Auto-collapse after finger lift (280ms for instant tactile feedback)
    setTimeout(() => {
      setActiveDropdown(null);
      setFeedbackItem(null);
    }, 280);
  };

  const hasActiveFilters = Boolean(destinationQuery || selectedExp || selectedSeason);

  const currentExpLabel = selectedExp 
    ? EXPERIENCES.find(e => e.id === selectedExp)?.label 
    : null;

  const currentSeasonLabel = selectedSeason 
    ? SEASONS.find(s => s.id === selectedSeason)?.label 
    : null;

  return (
    <section className="relative z-[60] py-8 sm:py-20 px-4 sm:px-6 bg-base">
      <div className="max-w-6xl mx-auto relative" ref={containerRef}>
        
        {/* Subtle Ambient Halo Glow */}
        <div className="absolute -inset-4 bg-gradient-to-r from-gold/5 via-gold/10 to-transparent blur-3xl opacity-40 pointer-events-none rounded-[3rem]" />

        {/* Editorial Subheader Kicker */}
        <div className="flex items-center justify-between px-3 sm:px-8 mb-3 sm:mb-5">
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <span className="text-gold/80 font-mono text-[9px] sm:text-[10px] tracking-[0.3em] uppercase font-medium">
              Curaduría de Expedición & Logística
            </span>
          </div>
          {hasActiveFilters && (
            <button
              onClick={clearAllFilters}
              className="text-[10px] font-mono tracking-widest uppercase text-white/40 hover:text-gold transition-colors flex items-center gap-1.5 cursor-pointer outline-none"
            >
              <span>Restablecer</span>
              <X size={11} />
            </button>
          )}
        </div>

        {/* Main Floating Glass Capsule */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-[#060b11]/90 backdrop-blur-2xl border border-white/10 hover:border-white/20 transition-all duration-700 rounded-3xl lg:rounded-full p-2 sm:p-3.5 shadow-[0_25px_80px_-20px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.08)]"
        >
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center">

            {/* ============================================================ */}
            {/* SEGMENTO 1: DESTINO */}
            {/* ============================================================ */}
            <div className="relative flex-1 group">
              {/* Trigger Bar */}
              <div 
                onClick={() => setActiveDropdown(activeDropdown === 'dest' ? null : 'dest')}
                className={`p-3 sm:p-4 rounded-2xl lg:rounded-full transition-all duration-300 flex items-center gap-3.5 sm:gap-4 cursor-pointer select-none ${
                  activeDropdown === 'dest' ? 'bg-white/[0.08]' : 'hover:bg-white/[0.03]'
                }`}
              >
                <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-2xl flex items-center justify-center transition-all duration-500 border shrink-0 ${
                  activeDropdown === 'dest' || destinationQuery
                    ? 'bg-gold/15 border-gold/40 text-gold'
                    : 'bg-white/[0.03] border-white/10 text-white/50 group-hover:text-gold group-hover:border-gold/30'
                }`}>
                  <MapPin size={17} />
                </div>
                <div className="flex flex-col flex-1 min-w-0">
                  <span className="text-[10px] font-mono tracking-[0.25em] text-white/45 uppercase font-medium mb-0.5 group-hover:text-gold/90 transition-colors">
                    Destino
                  </span>
                  <div className="flex items-center justify-between">
                    <span className={`text-sm font-light truncate ${destinationQuery ? 'text-white font-medium' : 'text-white/35'}`}>
                      {destinationQuery || '¿A dónde desea viajar?'}
                    </span>
                    <ChevronDown 
                      size={14} 
                      className={`text-white/30 transition-transform duration-300 shrink-0 ml-2 ${activeDropdown === 'dest' ? 'rotate-180 text-gold' : ''}`} 
                    />
                  </div>
                </div>
              </div>

              {/* DESKTOP POPOVER: Floats below on large screens */}
              <AnimatePresence>
                {activeDropdown === 'dest' && (
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="hidden lg:block absolute top-full left-0 w-full sm:w-[420px] mt-3 bg-[#070e17]/95 backdrop-blur-2xl border border-white/15 rounded-3xl overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.8)] z-[80] p-3"
                  >
                    <div className="px-3 py-2 flex items-center justify-between border-b border-white/5 mb-2">
                      <span className="text-[9px] font-mono tracking-[0.25em] text-gold uppercase">
                        Sugerencias Exclusivas
                      </span>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveDropdown(null);
                        }}
                        className="text-white/40 hover:text-white p-1 transition-colors cursor-pointer"
                      >
                        <X size={14} />
                      </button>
                    </div>
                    <div className="max-h-[300px] overflow-y-auto space-y-1 pr-1 custom-scrollbar">
                      {CURATED_DESTINATIONS.map((item, idx) => (
                        <div
                          key={idx}
                          onClick={() => {
                            setDestinationQuery(item.name);
                            setActiveDropdown(null);
                          }}
                          className={`p-3 rounded-2xl cursor-pointer transition-all duration-200 flex items-center justify-between group ${
                            destinationQuery === item.name ? 'bg-gold/10 border border-gold/20' : 'hover:bg-white/[0.04]'
                          }`}
                        >
                          <div className="flex flex-col min-w-0 pr-3">
                            <span className="text-xs sm:text-[13px] font-medium text-white group-hover:text-gold transition-colors truncate">
                              {item.name}
                            </span>
                            <span className="text-[11px] text-white/40 font-light truncate">
                              {item.highlight}
                            </span>
                          </div>
                          <span className="text-[9px] font-mono text-white/30 uppercase tracking-wider shrink-0">
                            {item.region}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* RESPONSIVE INLINE ACCORDION (No covers other options!) */}
              <AnimatePresence>
                {activeDropdown === 'dest' && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="block lg:hidden overflow-hidden px-1 pt-2 pb-3"
                  >
                    <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-2.5 space-y-1.5 shadow-inner">
                      <div className="flex items-center justify-between px-2 py-1">
                        <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-gold">
                          Toque para seleccionar y avanzar
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveDropdown(null);
                          }}
                          className="text-[9px] font-mono uppercase text-white/40 hover:text-white flex items-center gap-1 cursor-pointer"
                        >
                          <span>Cerrar</span>
                          <X size={10} />
                        </button>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1">
                        {CURATED_DESTINATIONS.map((item, idx) => {
                          const isSelected = destinationQuery === item.name || feedbackItem === item.name;
                          return (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => selectAndCollapse('dest', item.name)}
                              className={`w-full text-left p-2.5 rounded-xl transition-all duration-200 flex items-center justify-between cursor-pointer border ${
                                isSelected
                                  ? 'bg-gold/20 border-gold text-gold shadow-[0_0_15px_rgba(212,175,55,0.3)] scale-[0.99]'
                                  : 'bg-white/[0.02] border-white/5 text-white/80 active:bg-white/10'
                              }`}
                            >
                              <div className="flex flex-col min-w-0 pr-2">
                                <span className="text-xs font-medium truncate">
                                  {item.name}
                                </span>
                                <span className="text-[10px] text-white/40 truncate">
                                  {item.highlight}
                                </span>
                              </div>
                              {isSelected ? (
                                <Check size={14} className="text-gold shrink-0 animate-bounce" />
                              ) : (
                                <span className="text-[8px] font-mono uppercase text-white/30 shrink-0">
                                  {item.region}
                                </span>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Hairline Divider (Desktop) */}
            <div className="hidden lg:block w-px h-10 bg-white/10 mx-1 shrink-0" />
            {/* Hairline Divider (Mobile) */}
            <div className="block lg:hidden h-px w-full bg-white/5 my-1" />

            {/* ============================================================ */}
            {/* SEGMENTO 2: ESTILO DE VIAJE */}
            {/* ============================================================ */}
            <div className="relative flex-1 group">
              {/* Trigger Bar */}
              <div 
                onClick={() => setActiveDropdown(activeDropdown === 'exp' ? null : 'exp')}
                className={`p-3 sm:p-4 rounded-2xl lg:rounded-full transition-all duration-300 flex items-center gap-3.5 sm:gap-4 cursor-pointer select-none ${
                  activeDropdown === 'exp' ? 'bg-white/[0.08]' : 'hover:bg-white/[0.03]'
                }`}
              >
                <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-2xl flex items-center justify-center transition-all duration-500 border shrink-0 ${
                  activeDropdown === 'exp' || selectedExp
                    ? 'bg-gold/15 border-gold/40 text-gold'
                    : 'bg-white/[0.03] border-white/10 text-white/50 group-hover:text-gold group-hover:border-gold/30'
                }`}>
                  <Compass size={17} />
                </div>
                <div className="flex flex-col flex-1 min-w-0">
                  <span className="text-[10px] font-mono tracking-[0.25em] text-white/45 uppercase font-medium mb-0.5 group-hover:text-gold/90 transition-colors">
                    Estilo de Viaje
                  </span>
                  <div className="flex items-center justify-between">
                    <span className={`text-sm font-light truncate ${selectedExp ? 'text-white font-medium' : 'text-white/35'}`}>
                      {currentExpLabel || 'Aventura, Relax, Cultura...'}
                    </span>
                    <ChevronDown 
                      size={14} 
                      className={`text-white/30 transition-transform duration-300 shrink-0 ml-2 ${activeDropdown === 'exp' ? 'rotate-180 text-gold' : ''}`} 
                    />
                  </div>
                </div>
              </div>

              {/* DESKTOP POPOVER: Floats below on large screens */}
              <AnimatePresence>
                {activeDropdown === 'exp' && (
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="hidden lg:block absolute top-full left-0 w-full sm:w-[380px] mt-3 bg-[#070e17]/95 backdrop-blur-2xl border border-white/15 rounded-3xl overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.8)] z-[80] p-3"
                  >
                    <div className="px-3 py-2 flex items-center justify-between border-b border-white/5 mb-2">
                      <span className="text-[9px] font-mono tracking-[0.25em] text-gold uppercase">
                        Colecciones de Experiencia
                      </span>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveDropdown(null);
                        }}
                        className="text-white/40 hover:text-white p-1 transition-colors cursor-pointer"
                      >
                        <X size={14} />
                      </button>
                    </div>
                    <div className="space-y-1">
                      {EXPERIENCES.map((exp) => (
                        <div
                          key={exp.id}
                          onClick={() => {
                            setSelectedExp(selectedExp === exp.id ? null : exp.id);
                            setActiveDropdown(null);
                          }}
                          className={`p-3 rounded-2xl cursor-pointer transition-all duration-200 flex items-center justify-between group ${
                            selectedExp === exp.id ? 'bg-gold/15 border border-gold/30' : 'hover:bg-white/[0.04]'
                          }`}
                        >
                          <div className="flex flex-col pr-2">
                            <span className={`text-xs sm:text-[13px] font-medium transition-colors ${selectedExp === exp.id ? 'text-gold' : 'text-white group-hover:text-gold'}`}>
                              {exp.label}
                            </span>
                            <span className="text-[11px] text-white/40 font-light">
                              {exp.desc}
                            </span>
                          </div>
                          {selectedExp === exp.id && (
                            <Check size={14} className="text-gold shrink-0" />
                          )}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* RESPONSIVE INLINE ACCORDION (No covers other options!) */}
              <AnimatePresence>
                {activeDropdown === 'exp' && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="block lg:hidden overflow-hidden px-1 pt-2 pb-3"
                  >
                    <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-2.5 space-y-1.5 shadow-inner">
                      <div className="flex items-center justify-between px-2 py-1">
                        <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-gold">
                          Toque para seleccionar y avanzar
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveDropdown(null);
                          }}
                          className="text-[9px] font-mono uppercase text-white/40 hover:text-white flex items-center gap-1 cursor-pointer"
                        >
                          <span>Cerrar</span>
                          <X size={10} />
                        </button>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1">
                        {EXPERIENCES.map((exp) => {
                          const isSelected = selectedExp === exp.id || feedbackItem === exp.id;
                          return (
                            <button
                              key={exp.id}
                              type="button"
                              onClick={() => selectAndCollapse('exp', exp.id)}
                              className={`w-full text-left p-2.5 rounded-xl transition-all duration-200 flex items-center justify-between cursor-pointer border ${
                                isSelected
                                  ? 'bg-gold/20 border-gold text-gold shadow-[0_0_15px_rgba(212,175,55,0.3)] scale-[0.99]'
                                  : 'bg-white/[0.02] border-white/5 text-white/80 active:bg-white/10'
                              }`}
                            >
                              <div className="flex flex-col min-w-0 pr-2">
                                <span className="text-xs font-medium truncate">
                                  {exp.label}
                                </span>
                                <span className="text-[10px] text-white/40 truncate">
                                  {exp.desc}
                                </span>
                              </div>
                              {isSelected && (
                                <Check size={14} className="text-gold shrink-0 animate-bounce" />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Hairline Divider (Desktop) */}
            <div className="hidden lg:block w-px h-10 bg-white/10 mx-1 shrink-0" />
            {/* Hairline Divider (Mobile) */}
            <div className="block lg:hidden h-px w-full bg-white/5 my-1" />

            {/* ============================================================ */}
            {/* SEGMENTO 3: TEMPORADA */}
            {/* ============================================================ */}
            <div className="relative flex-1 group">
              {/* Trigger Bar */}
              <div 
                onClick={() => setActiveDropdown(activeDropdown === 'season' ? null : 'season')}
                className={`p-3 sm:p-4 rounded-2xl lg:rounded-full transition-all duration-300 flex items-center gap-3.5 sm:gap-4 cursor-pointer select-none ${
                  activeDropdown === 'season' ? 'bg-white/[0.08]' : 'hover:bg-white/[0.03]'
                }`}
              >
                <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-2xl flex items-center justify-center transition-all duration-500 border shrink-0 ${
                  activeDropdown === 'season' || selectedSeason
                    ? 'bg-gold/15 border-gold/40 text-gold'
                    : 'bg-white/[0.03] border-white/10 text-white/50 group-hover:text-gold group-hover:border-gold/30'
                }`}>
                  <Calendar size={17} />
                </div>
                <div className="flex flex-col flex-1 min-w-0">
                  <span className="text-[10px] font-mono tracking-[0.25em] text-white/45 uppercase font-medium mb-0.5 group-hover:text-gold/90 transition-colors">
                    Temporada
                  </span>
                  <div className="flex items-center justify-between">
                    <span className={`text-sm font-light truncate ${selectedSeason ? 'text-white font-medium' : 'text-white/35'}`}>
                      {currentSeasonLabel || 'Seleccionar periodo'}
                    </span>
                    <ChevronDown 
                      size={14} 
                      className={`text-white/30 transition-transform duration-300 shrink-0 ml-2 ${activeDropdown === 'season' ? 'rotate-180 text-gold' : ''}`} 
                    />
                  </div>
                </div>
              </div>

              {/* DESKTOP POPOVER: Floats below on large screens */}
              <AnimatePresence>
                {activeDropdown === 'season' && (
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="hidden lg:block absolute top-full left-0 lg:right-0 lg:left-auto w-full sm:w-[380px] mt-3 bg-[#070e17]/95 backdrop-blur-2xl border border-white/15 rounded-3xl overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.8)] z-[80] p-3"
                  >
                    <div className="px-3 py-2 flex items-center justify-between border-b border-white/5 mb-2">
                      <span className="text-[9px] font-mono tracking-[0.25em] text-gold uppercase">
                        Temporadas & Clima Óptimo
                      </span>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveDropdown(null);
                        }}
                        className="text-white/40 hover:text-white p-1 transition-colors cursor-pointer"
                      >
                        <X size={14} />
                      </button>
                    </div>
                    <div className="space-y-1">
                      {SEASONS.map((season) => (
                        <div
                          key={season.id}
                          onClick={() => {
                            setSelectedSeason(selectedSeason === season.id ? null : season.id);
                            setActiveDropdown(null);
                          }}
                          className={`p-3 rounded-2xl cursor-pointer transition-all duration-200 flex items-center justify-between group ${
                            selectedSeason === season.id ? 'bg-gold/15 border border-gold/30' : 'hover:bg-white/[0.04]'
                          }`}
                        >
                          <div className="flex flex-col pr-2">
                            <span className={`text-xs sm:text-[13px] font-medium transition-colors ${selectedSeason === season.id ? 'text-gold' : 'text-white group-hover:text-gold'}`}>
                              {season.label}
                            </span>
                            <span className="text-[11px] text-white/40 font-light">
                              {season.desc}
                            </span>
                          </div>
                          {selectedSeason === season.id && (
                            <Check size={14} className="text-gold shrink-0" />
                          )}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* RESPONSIVE INLINE ACCORDION (No covers other options!) */}
              <AnimatePresence>
                {activeDropdown === 'season' && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="block lg:hidden overflow-hidden px-1 pt-2 pb-3"
                  >
                    <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-2.5 space-y-1.5 shadow-inner">
                      <div className="flex items-center justify-between px-2 py-1">
                        <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-gold">
                          Toque para seleccionar y avanzar
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveDropdown(null);
                          }}
                          className="text-[9px] font-mono uppercase text-white/40 hover:text-white flex items-center gap-1 cursor-pointer"
                        >
                          <span>Cerrar</span>
                          <X size={10} />
                        </button>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1">
                        {SEASONS.map((season) => {
                          const isSelected = selectedSeason === season.id || feedbackItem === season.id;
                          return (
                            <button
                              key={season.id}
                              type="button"
                              onClick={() => selectAndCollapse('season', season.id)}
                              className={`w-full text-left p-2.5 rounded-xl transition-all duration-200 flex items-center justify-between cursor-pointer border ${
                                isSelected
                                  ? 'bg-gold/20 border-gold text-gold shadow-[0_0_15px_rgba(212,175,55,0.3)] scale-[0.99]'
                                  : 'bg-white/[0.02] border-white/5 text-white/80 active:bg-white/10'
                              }`}
                            >
                              <div className="flex flex-col min-w-0 pr-2">
                                <span className="text-xs font-medium truncate">
                                  {season.label}
                                </span>
                                <span className="text-[10px] text-white/40 truncate">
                                  {season.desc}
                                </span>
                              </div>
                              {isSelected && (
                                <Check size={14} className="text-gold shrink-0 animate-bounce" />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Action Search CTA Button */}
            <div className="p-1 sm:p-1.5 shrink-0 mt-2 lg:mt-0">
              <button 
                onClick={handleSearch}
                aria-label="Explorar colección de destinos"
                className="w-full lg:w-auto group relative overflow-hidden bg-white text-base px-8 sm:px-9 py-4 sm:py-4.5 rounded-2xl lg:rounded-full font-medium tracking-wider text-xs transition-all duration-500 hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] active:scale-[0.98] flex items-center justify-center space-x-3 cursor-pointer outline-none"
              >
                <Search size={15} className="relative z-10 text-base group-hover:text-white transition-colors duration-500" />
                <span className="relative z-10 text-base group-hover:text-white transition-colors duration-500 font-medium">
                  Explorar
                </span>
                <ArrowRight size={14} className="relative z-10 text-base group-hover:text-white group-hover:translate-x-1 transition-all duration-500" />
                <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.22, 1, 0.36, 1]" />
              </button>
            </div>

          </div>
        </motion.div>

        {/* Micro-indicators under the search bar */}
        <div className="mt-4 px-4 flex flex-wrap items-center justify-between gap-3 text-[11px] text-white/40 font-light">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-gold/60" />
              Acceso aéreo prioritario
            </span>
            <span className="hidden sm:flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-gold/60" />
              Conserjería 24/7 en destino
            </span>
          </div>
          <span className="text-[10px] font-mono tracking-widest text-white/30 uppercase">
            Curaduría 100% personalizada
          </span>
        </div>

      </div>
    </section>
  );
};
