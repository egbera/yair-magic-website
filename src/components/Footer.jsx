import React from 'react';
import { Sparkles, Mail, Phone, Globe } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container footer-content">
        
        <div className="footer-brand">
          <div className="logo footer-logo">
            <Sparkles className="logo-icon glow-text-gold" size={24} />
            <span className="logo-text">Yair<span className="glow-text-gold">Magic</span></span>
          </div>
          <p className="footer-tagline">
            Bringing wonder and amazement to your world.
          </p>
        </div>

        <div className="footer-links">
          <a href="#home" className="footer-link">Home</a>
          <a href="#about" className="footer-link">The Magician</a>
          <a href="#booking" className="footer-link">Book Now</a>
        </div>

        <div className="footer-social">
          <a href="#" className="social-icon"><Mail size={20} /></a>
          <a href="#" className="social-icon"><Phone size={20} /></a>
          <a href="#" className="social-icon"><Globe size={20} /></a>
        </div>

      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Yair Magic. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
