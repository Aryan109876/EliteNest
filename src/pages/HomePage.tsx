import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedProperties from '../components/home/FeaturedProperties';
import AboutSection from '../components/home/AboutSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import BlogSection from '../components/home/BlogSection';
import CtaSection from '../components/home/CtaSection';
import { Helmet } from 'react-helmet';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>EliteNest Properties | Luxury Real Estate</title>
        <meta name="description" content="EliteNest Properties - Find your dream luxury home with our expert real estate agents. Browse exclusive listings in prime locations." />
        <meta property="og:title" content="EliteNest Properties | Luxury Real Estate" />
        <meta property="og:description" content="Discover exceptional luxury properties with EliteNest. Exclusive listings in the most desirable locations." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://elitenest.com/" />
      </Helmet>
      
      <Hero />
      <FeaturedProperties />
      <AboutSection />
      <TestimonialsSection />
      <BlogSection />
      <CtaSection />
    </>
  );
};

export default HomePage;