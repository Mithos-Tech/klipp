import React, { useEffect, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useScroll, useSpring } from 'motion/react';
import { HelmetProvider } from 'react-helmet-async';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Eager imports for instant 0ms page transitions
import Home from './pages/Home';
import Bespoke from './pages/Bespoke';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Cookies from './pages/Cookies';
import ClaimsBook from './pages/ClaimsBook';
import NotFound from './pages/NotFound';

// Loading fallback
const PageLoader = () => (
  <div className="fixed inset-0 bg-base flex items-center justify-center z-[300]">
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center"
    >
      <img 
        src="https://res.cloudinary.com/dk1tkgjpj/image/upload/v1774236478/Klipp_logo_lpy37r.svg" 
        alt="KLIPP Logo" 
        className="h-12 w-auto brightness-0 invert mb-6 animate-pulse"
        referrerPolicy="no-referrer"
      />
      <div className="w-48 h-px bg-white/10 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gold"
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  </div>
);

function App() {
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const lastPathnameRef = React.useRef(location.pathname);

  // Handle scroll positioning and cross-page hash smooth scrolling
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const isDifferentPage = lastPathnameRef.current !== location.pathname;
    lastPathnameRef.current = location.pathname;

    // Reset to top (0, 0) instantly ONLY when navigating across different pages
    if (isDifferentPage) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }

    if (!location.hash) {
      return;
    }

    const targetId = location.hash.replace('#', '');
    let attempts = 0;
    const maxAttempts = 40; // 40 * 35ms = ~1.4s max polling window

    const intervalId = setInterval(() => {
      attempts++;
      const element = document.getElementById(targetId);
      if (element) {
        clearInterval(intervalId);

        const performScroll = (behavior: ScrollBehavior) => {
          const el = document.getElementById(targetId);
          if (!el) return;
          const headerOffset = 90;
          const elementPosition = el.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: Math.max(0, offsetPosition),
            behavior
          });
        };

        // Initial smooth scroll
        setTimeout(() => performScroll('smooth'), isDifferentPage ? 80 : 20);

        // Layout-shift protection: re-verify after dynamic images expand
        if (isDifferentPage) {
          setTimeout(() => performScroll('smooth'), 350);
          setTimeout(() => performScroll('smooth'), 750);
        }
      } else if (attempts >= maxAttempts) {
        clearInterval(intervalId);
      }
    }, 35);

    return () => clearInterval(intervalId);
  }, [location.pathname, location.hash, location.search]);

  return (
    <HelmetProvider>
      <div className="bg-base text-white font-sans selection:bg-gold selection:text-base relative">
        {/* Scroll Progress Bar */}
        <motion.div 
          className="fixed top-0 left-0 right-0 h-[2px] bg-gold z-[200] origin-left"
          style={{ scaleX }}
        />

        {/* Global Grainy Texture Overlay */}
        <div className="fixed inset-0 z-[150] opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

        <Suspense fallback={<PageLoader />}>
          <Navbar />
          <main className="min-h-screen flex flex-col justify-between">
            <div className="flex-grow">
              <AnimatePresence initial={false}>
                <motion.div 
                  key={location.pathname}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Routes location={location}>
                    <Route path="/" element={<Home />} />
                    <Route path="/bespoke" element={<Bespoke />} />
                    <Route path="/terminos" element={<Terms />} />
                    <Route path="/privacidad" element={<Privacy />} />
                    <Route path="/cookies" element={<Cookies />} />
                    <Route path="/libro-de-reclamaciones" element={<ClaimsBook />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </motion.div>
              </AnimatePresence>
            </div>
            <Footer />
          </main>
        </Suspense>
      </div>
    </HelmetProvider>
  );
}

export default App;
