import React from 'react';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import AboutSection from './components/AboutSection';
import GallerySection from './components/GallerySection';
import TestimonialSection from './components/TestimonialSection';
import BookingSection from './components/BookingSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero3D />
      <AboutSection />
      <GallerySection />
      <TestimonialSection />
      <BookingSection />
      <Footer />
    </div>
  );
}

export default App;
