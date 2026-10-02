/**
 * Unified Smooth Navigation Utility (Framer-style)
 * Handles in-page smooth scrolling, cross-page hash navigation, query strings,
 * and direct route transitions seamlessly across desktop, tablet, and mobile views.
 */

export const smoothScrollToElement = (elementId: string): boolean => {
  const el = document.getElementById(elementId);
  if (!el) return false;

  const headerOffset = 90;
  const elementPosition = el.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: Math.max(0, offsetPosition),
    behavior: 'smooth'
  });
  return true;
};

export const smoothNavigate = (
  targetHref: string,
  navigate: (to: string) => void,
  currentPathname: string,
  onComplete?: () => void
) => {
  if (onComplete) {
    onComplete();
  }

  // If href is a pure hash (e.g., "#contacto", "#destinos")
  if (targetHref.startsWith('#')) {
    const hashPart = targetHref.replace('#', '');
    if (hashPart === 'inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    // Check if element exists on current page
    const found = smoothScrollToElement(hashPart);
    if (found) {
      window.history.pushState(null, '', `#${hashPart}`);
      return;
    }
    // If not found on current page, navigate to Home with hash
    navigate(`/${targetHref}`);
    return;
  }

  // Handle hash navigation (e.g., "/#destinos", "/#contacto", "/bespoke?service=1#servicios-bespoke")
  if (targetHref.includes('#')) {
    const [pathWithQuery, hashPart] = targetHref.split('#');
    const pathOnly = (pathWithQuery.split('?')[0] || '').trim();
    const targetPath = pathOnly === '' ? '/' : pathOnly;
    
    const isCurrentPage = 
      targetPath === currentPathname || 
      (targetPath === '/' && currentPathname === '/');

    // Special check for #contacto: if user is on /bespoke and clicks /#contacto,
    // /bespoke also has #contacto, so scroll directly!
    if (!isCurrentPage && hashPart === 'contacto') {
      const found = smoothScrollToElement('contacto');
      if (found) {
        window.history.pushState(null, '', '#contacto');
        return;
      }
    }

    if (isCurrentPage) {
      // If there are query parameters (e.g. ?service=1), update them via React Router
      if (pathWithQuery.includes('?')) {
        navigate(targetHref);
        return;
      }

      if (hashPart === 'inicio') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        window.history.pushState(null, '', targetPath);
      } else {
        const found = smoothScrollToElement(hashPart);
        if (found) {
          window.history.pushState(null, '', `#${hashPart}`);
        }
      }
      return;
    }

    // Different page: navigate to target page with query and hash
    navigate(targetHref);
    return;
  }

  // Handle direct page navigation (e.g., "/", "/bespoke", "/terminos")
  const pathOnly = (targetHref.split('?')[0] || '').trim();
  const isCurrentPage = 
    (pathOnly === '/' && currentPathname === '/') || 
    (pathOnly === currentPathname);

  if (isCurrentPage) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (window.location.hash) {
      window.history.pushState(null, '', targetHref);
    }
  } else {
    navigate(targetHref);
  }
};
