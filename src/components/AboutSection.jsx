import React from 'react';
import magicianImage from '../assets/yair_magical_portrait.png';
import { Sparkles, Star, Wand2 } from 'lucide-react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section id="about" className="about-section container">
      <div className="about-grid">
        
        <div className="about-img-wrapper">
          <div className="glass-panel image-glass-container floating">
            <img 
              src={magicianImage} 
              alt="Yair the 12-year-old Magician" 
              className="about-image"
            />
            <div className="image-overlay"></div>
          </div>
          {/* Decorative elements */}
          <div className="floating-icon icon-1"><Star className="glow-text-gold" /></div>
          <div className="floating-icon icon-2"><Wand2 color="#9d4edd" /></div>
        </div>

        <div className="about-content">
          <div className="section-header">
            <Sparkles className="glow-text-gold" size={20}/>
            <h3 className="section-subtitle">Meet The Prodigy</h3>
          </div>
          <h2 className="section-title">Yair The Great</h2>
          
          <p className="about-text">
            At just 12 years old, Yair has been mastering the art of illusion since he could shuffle a deck of cards. What started as a simple hobby has transformed into a captivating spectacle that leaves audiences breathless.
          </p>
          <p className="about-text">
            His performances blend classic sleight of hand with modern, mind-bending illusions. Whether it's a private birthday party or a grand stage, Yair brings a fresh, vibrant energy to the world of magic.
          </p>

          <div className="stats-container">
            <div className="stat-item glass-panel">
              <span className="stat-number glow-text-gold">5+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item glass-panel">
              <span className="stat-number glow-text-gold">100+</span>
              <span className="stat-label">Shows Performed</span>
            </div>
            <div className="stat-item glass-panel">
              <span className="stat-number glow-text-gold">∞</span>
              <span className="stat-label">Smiles Created</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
