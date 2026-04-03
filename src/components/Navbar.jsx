import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled glass-panel' : ''}`}>
      <div className="container nav-content">
        <a href="#home" className="logo">
          <Sparkles className="logo-icon" size={24} />
          <span className="logo-text">Yair<span className="glow-text-gold">Magic</span></span>
        </a>

        <div className="desktop-links">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">The Magician</a>
          <a href="#booking" className="btn-primary nav-btn">Book Now</a>
        </div>

        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-menu glass-panel">
          <a href="#home" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
          <a href="#about" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>The Magician</a>
          <a href="#booking" className="btn-primary mobile-btn" onClick={() => setIsMobileMenuOpen(false)}>Book Now</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
