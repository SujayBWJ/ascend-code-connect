
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Events from '@/components/home/Events';
import Projects from '@/components/home/Projects';
import Testimonials from '@/components/home/Testimonials';
import Join from '@/components/home/Join';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Events />
        <Projects />
        <Testimonials />
        <Join />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
