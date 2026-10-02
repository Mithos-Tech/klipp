# KLIPP | Viajes de Lujo y Experiencias Exclusivas en Perú (2026)

![KLIPP Banner](https://res.cloudinary.com/dk1tkgjpj/image/upload/v1773809895/heros_neqjqr.webp)

**KLIPP** es una plataforma web de turismo de ultra-lujo diseñada y concebida con los estándares estéticos y de interacción de **Framer**, orientada a expediciones de alta gama, aviación privada y conserjería exclusiva en los destinos más icónicos del Perú.

Diseñada y desarrollada por **Inspirio Studio** (2026).

---

## 💎 Características Principales

1. **Diseño e Interacción Cinematográfica (Estilo Framer)**:
   - Microinteracciones refinadas, animaciones fluidas con Framer Motion y tipografía editorial de alto contraste (*Cormorant Garamond* y *Plus Jakarta Sans*).
   - Paleta de colores sobria y nocturna (`#050505`) con acentos dorados (`#D4AF37`) y texturas sutiles de grano.

2. **Navegación Instantánea y Fluida**:
   - Transiciones ultra-rápidas entre rutas con reseteo instantáneo de scroll a la cabecera (`top: 0`), eliminando cualquier sensación de retraso o desplazamiento pesado.
   - Anclajes suaves en la misma página para explorar secciones (`#destinos`, `#tendencias`, `#esencia`, `#contacto`).

3. **Arquitectura Segura y Libre de Secretos (Zero-Secret Client)**:
   - **Sin claves API expuestas**: El frontend opera de forma 100% estática, segura y autónoma. No expone tokens, claves privadas ni variables sensibles en el bundle cliente.
   - **Formularios con sanitización y límites estrictos**: Validación de tipos, longitudes máximas y fechas mínimas para evitar inyecciones o abusos.
   - **Cabeceras de seguridad**: Configuración `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin` y protección contra tabnabbing (`rel="noopener noreferrer"` en enlaces externos).

4. **Cumplimiento Legal Completo (Perú & GDPR)**:
   - **Términos y Condiciones de Servicio**: Regulación contractual de servicios de lujo y cancelaciones.
   - **Política de Privacidad**: Conforme a la **Ley N° 29733** (Perú) y estándares internacionales **GDPR**, incluyendo derechos ARCO.
   - **Política de Cookies**: Transparencia técnica con banner minimalista flotante y panel de configuración de preferencias.
   - **Libro de Reclamaciones Virtual**: Conforme al Código de Protección y Defensa del Consumidor de **INDECOPI** (Ley N° 29571), con emisión de código de seguimiento único y opción de impresión/guardado en PDF.

5. **SEO Avanzado y Marcado Estructurado (Schema.org)**:
   - Marcado JSON-LD con tipos `@graph` para `TravelAgency` y `WebSite`.
   - Etiquetas OpenGraph y Twitter Cards completas con imágenes en alta resolución.
   - Archivos `robots.txt` y `sitemap.xml` integrados en `/public` para indexación óptima en buscadores.
   - Metadatos dinámicos mediante `react-helmet-async` por cada vista individual.

6. **Optimización Responsive Multidispositivo**:
   - **Mobile (Smartphones)**: Menú flotante estilo Framer, altura dinámica `100dvh` para evitar saltos con la barra de navegación de iOS/Android, galería táctil con scroll-snap.
   - **Tablets & iPads (768px - 1024px)**: Espaciados equilibrados en Navbar, tarjetas de experiencia adaptativas y diseño de cuadrícula sin desbordamientos.
   - **Desktop / Pantallas Grandes**: Animaciones en hover de gran detalle, microetiquetas laterales y estética de revista de lujo.

---

## 🛠️ Stack Tecnológico

- **React 18** (Arquitectura modular de componentes y hooks)
- **TypeScript** (Tipado estricto sin errores en compilación)
- **Vite** (Compilador optimizado para producción rápida)
- **Tailwind CSS v4** (Diseño atómico sin código CSS redundante)
- **Framer Motion** (Animaciones fluidas por hardware)
- **React Router Dom v7** (Enrutamiento cliente con soporte SPA)
- **React Helmet Async** (Gestión de etiquetas `<head>` y metadatos SEO)
- **Lucide React** (Iconografía vectorial moderna y liviana)

---

## 🚀 Despliegue en Vercel (Producción 2026)

El proyecto incluye el archivo `vercel.json` configurado específicamente para evitar errores 404 al recargar rutas directas (como `/bespoke` o `/terminos`) y aplicar cabeceras de seguridad HTTP:

1. **Subir cambios a GitHub**:
   ```bash
   git add .
   git commit -m "feat: actualización 2026, seo profesional y optimización de navegación"
   git push origin main
   ```

2. **Despliegue automático en Vercel**:
   - Conecta el repositorio en [Vercel](https://vercel.com).
   - Vercel reconocerá el framework **Vite** automáticamente.
   - **Comando de build**: `npm run build`
   - **Directorio de salida**: `dist`
   - **Variables de entorno**: No requiere variables obligatorias para producción, ya que no expone claves en el cliente.
   - Haz clic en **Deploy**.

---

## 💻 Desarrollo Local

```bash
# Instalar dependencias
npm install

# Iniciar servidor local
npm run dev

# Validar tipos y linter
npm run lint

# Construir bundle de producción
npm run build
```

---

## 🏛️ Créditos y Autoría

- **Marca**: KLIPP Luxury Travel
- **Diseño, Arquitectura y Desarrollo**: **Inspirio Studio** (2026)
- **Dirección Creativa**: Experiencias de viaje exclusivas con filosofía de diseño Framer.

---

© 2026 **KLIPP by Inspirio Studio**. Todos los derechos reservados.
