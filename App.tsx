import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Methodology from './components/Methodology';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import FAQ from './components/FAQ';

function App() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-[#FFD700] selection:text-black">
      <Navbar />
      <Hero />
      <SocialProof />
      <Methodology />
      <Portfolio />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}

export default App;