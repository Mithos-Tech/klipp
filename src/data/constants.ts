import { 
  Instagram, 
  Facebook, 
  Twitter 
} from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Inicio', href: '/' },
  { name: 'Destinos', href: '/#destinos' },
  { name: 'A Medida', href: '/bespoke' },
  { name: 'Tendencias', href: '/#tendencias' },
];

export const SOCIAL_LINKS = [
  { icon: Instagram, href: 'https://instagram.com/klipp_travel' },
  { icon: Facebook, href: 'https://facebook.com/klipp_travel' },
  { icon: Twitter, href: 'https://twitter.com/klipp_travel' },
];

export const EXPERIENCES = [
  {
    title: 'Amazonas: Pulmón del Mundo',
    subtitle: 'Iquitos, Loreto',
    description: 'Navega por el río más caudaloso del mundo en un crucero de lujo privado.',
    image: 'https://res.cloudinary.com/dk1tkgjpj/image/upload/v1774067729/Rio_Amazonas_umi1qb.webp',
    rating: 4.9,
    tags: ['Selva', 'Exclusivo'],
  },
  {
    title: 'Arequipa: Ciudad Blanca',
    subtitle: 'Bajo el Volcán Misti',
    description: 'Arquitectura colonial en sillar y una gastronomía que es patrimonio vivo.',
    image: 'https://res.cloudinary.com/dk1tkgjpj/image/upload/v1774067729/Volcan_del_Misti_efrdna.webp',
    rating: 4.8,
    tags: ['Cultura', 'Historia'],
  },
  {
    title: 'Colca: El Vuelo del Cóndor',
    subtitle: 'Chivay, Arequipa',
    description: 'Contempla la majestuosidad del cóndor andino en uno de los cañones más profundos.',
    image: 'https://res.cloudinary.com/dk1tkgjpj/image/upload/v1774067729/Valle_del_colca_nzrzwy.webp',
    rating: 4.9,
    tags: ['Naturaleza', 'Vistas'],
  },
  {
    title: 'Titicaca: Aguas Sagradas',
    subtitle: 'Puno, Perú',
    description: 'Descubre las islas flotantes de los Uros y la mística del lago más alto del mundo.',
    image: 'https://res.cloudinary.com/dk1tkgjpj/image/upload/v1774067730/Lago_titicaca_cpoxx4.webp',
    rating: 4.7,
    tags: ['Tradición', 'Paz'],
  },
  {
    title: 'Paracas: Desierto y Mar',
    subtitle: 'Pisco, Ica',
    description: 'Donde las dunas doradas se encuentran con el azul profundo del Océano Pacífico.',
    image: 'https://res.cloudinary.com/dk1tkgjpj/image/upload/v1774067730/Paracas_ugnozg.webp',
    rating: 4.9,
    tags: ['Costa', 'Paisajes'],
  },
  {
    title: 'Chan Chan: Reino de Barro',
    subtitle: 'Trujillo, La Libertad',
    description: 'Explora la ciudad de barro más grande de la América prehispánica.',
    image: 'https://res.cloudinary.com/dk1tkgjpj/image/upload/v1774067730/Chan_chan_b7oxxf.webp',
    rating: 4.8,
    tags: ['Arqueología', 'Misterio'],
  },
];

export const PHILOSOPHY = {
  title: 'Nuestra Esencia',
  subtitle: 'POR QUÉ VIAJAMOS CON KLIPP',
  content: 'Creemos que el verdadero lujo no reside en la opulencia, sino en la autenticidad de los momentos. Curamos expediciones que no solo cruzan fronteras, sino que transforman la percepción del mundo a través de encuentros genuinos y logística impecable.',
  stats: [
    { label: 'Destinos Curados', value: '12' },
    { label: 'Guías Expertos', value: '24' },
    { label: 'Viajeros Felices', value: '500+' },
  ]
};

export const DESTINATIONS = [
  {
    name: 'Líneas de Nazca',
    image: 'https://res.cloudinary.com/dk1tkgjpj/image/upload/v1774067730/Lineas_de_nazca_vif89o.webp',
  },
  {
    name: 'Islas Ballestas',
    image: 'https://res.cloudinary.com/dk1tkgjpj/image/upload/v1774067729/Isla_Ballesta_cnp9s1.webp',
  },
  {
    name: 'Vinicunca',
    image: 'https://res.cloudinary.com/dk1tkgjpj/image/upload/v1774066106/Monta%C3%B1a_de_7_colores_kxem2p.webp',
  },
  {
    name: 'Huacachina',
    image: 'https://res.cloudinary.com/dk1tkgjpj/image/upload/v1774066106/Huacachina_u9wpch.webp',
  },
];

export const TESTIMONIALS = [
  {
    name: 'Elena Rodríguez',
    role: 'Viajera de Lujo',
    location: 'Cusco, Perú',
    content: 'KLIPP transformó mi visión del Perú. Cada detalle, desde el hotel en Cusco hasta la cena privada en Lima, fue impecable.',
    photo: 'https://res.cloudinary.com/dk1tkgjpj/image/upload/v1774197381/elena_ia0nyc.webp',
  },
  {
    name: 'James Wilson',
    role: 'Fotógrafo de Aventuras',
    location: 'Valle Sagrado',
    content: 'La logística para llegar a los rincones más remotos del Valle Sagrado fue perfecta. Una experiencia verdaderamente premium.',
    photo: 'https://res.cloudinary.com/dk1tkgjpj/image/upload/v1774197381/james_m8rnyc.webp',
  },
  {
    name: 'Sofia Chen',
    role: 'Entusiasta Cultural',
    location: 'Machu Picchu',
    content: 'No solo visitamos lugares, sentimos la historia. Los guías de KLIPP son narradores excepcionales de la cultura inca.',
    photo: 'https://res.cloudinary.com/dk1tkgjpj/image/upload/v1774197381/sofia_yl1mtj.webp',
  },
  {
    name: 'Marcus Thorne',
    role: 'Explorador Global',
    location: 'Arequipa',
    content: 'La atención al detalle es lo que separa a KLIPP del resto. No es solo un viaje, es una inmersión profunda en el alma de un país.',
    photo: 'https://res.cloudinary.com/dk1tkgjpj/image/upload/v1774197381/marcus_j8bkuj.webp',
  },
  {
    name: 'Isabella Rossi',
    role: 'Diseñadora de Interiores',
    location: 'Lima Gastronómica',
    content: 'Como diseñadora, aprecio la estética y el flujo. KLIPP entiende que el ritmo de un viaje es tan importante como el destino.',
    photo: 'https://res.cloudinary.com/dk1tkgjpj/image/upload/v1774197381/isabella_zeyoql.webp',
  },
  {
    name: 'Lucas Meyer',
    role: 'Arquitecto',
    location: 'Valle de los Volcanes',
    content: 'La integración de la arquitectura local con el servicio de lujo es lo que hace a KLIPP única. Una experiencia espacial y sensorial sin precedentes.',
    photo: 'https://res.cloudinary.com/dk1tkgjpj/image/upload/v1774197381/lucas_rz7smf.webp',
  }
];

export interface HeroDestination {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

export const HERO_DESTINATIONS: HeroDestination[] = [
  {
    id: 'miraflores',
    label: 'DESTINO DESTACADO',
    title: 'Miraflores',
    subtitle: 'Elegancia frente al mar',
    description: 'Explora el malecón más icónico de Sudamérica. Donde los acantilados se encuentran con el lujo moderno frente al inmenso Océano Pacífico.',
    image: 'https://res.cloudinary.com/dk1tkgjpj/image/upload/v1790950255/hero_01_et5f9h.webp'
  },
  {
    id: 'machu-picchu',
    label: 'MARAVILLA DEL MUNDO',
    title: 'Machu Picchu',
    subtitle: 'Santuario en las nubes',
    description: 'Una obra maestra de ingeniería y espiritualidad. Contempla la ciudadela perdida entre montañas sagradas y neblina mística.',
    image: 'https://res.cloudinary.com/dk1tkgjpj/image/upload/v1790909098/hero_02_jejueb.webp'
  },
  {
    id: 'huacachina',
    label: 'OASIS DEL DESIERTO',
    title: 'Huacachina',
    subtitle: 'Espejismo en Ica',
    description: 'Un refugio esmeralda rodeado de dunas infinitas. El lugar donde la leyenda de la sirena se encuentra con la adrenalina del desierto.',
    image: 'https://res.cloudinary.com/dk1tkgjpj/image/upload/v1790950256/hero_03_maty8u.webp'
  },
  {
    id: 'vinicunca',
    label: 'ESPECTÁCULO NATURAL',
    title: 'Vinicunca',
    subtitle: 'La Montaña de Colores',
    description: 'Un lienzo geológico a 5,200 metros de altura. Descubre la paleta de minerales que la tierra ha pintado a través de los milenios.',
    image: 'https://res.cloudinary.com/dk1tkgjpj/image/upload/v1790950255/hero_04_i7hzet.webp'
  }
];
