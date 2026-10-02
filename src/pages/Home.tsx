import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Hero } from '../components/Hero';
import { SearchBar } from '../components/SearchBar';
import { Experiences } from '../components/Experiences';
import { Philosophy } from '../components/Philosophy';
import { Destinations } from '../components/Destinations';
import { Testimonials } from '../components/Testimonials';
import { FinalCTA } from '../components/FinalCTA';
import { BookingForm } from '../components/BookingForm';

const Home = () => {
  return (
    <div className="w-full">
      <Helmet>
        <title>KLIPP | Viajes de Lujo y Experiencias Exclusivas en Perú</title>
        <meta name="description" content="KLIPP redefine el viaje de lujo en Perú. Curamos expediciones exclusivas a Machu Picchu, el Amazonas y más allá con logística impecable y acceso privilegiado." />
        <meta property="og:title" content="KLIPP | Viajes de Lujo y Experiencias Exclusivas en Perú" />
        <meta property="og:description" content="Descubre el Perú más auténtico con KLIPP. Expediciones de lujo diseñadas a medida." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://res.cloudinary.com/dk1tkgjpj/image/upload/v1790909098/hero_01_hekfc0.webp" />
      </Helmet>
      <Hero />
      <SearchBar />
      <Experiences />
      <Destinations />
      <Philosophy />
      <Testimonials />
      <FinalCTA />
      <BookingForm />
    </div>
  );
};

export default Home;
