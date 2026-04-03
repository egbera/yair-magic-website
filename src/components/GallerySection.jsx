import React from 'react';
import photo1 from '../assets/photo1.jpg';
import photo2 from '../assets/photo2.jpg';
import photo3 from '../assets/photo3.jpg';
import { Camera } from 'lucide-react';
import './GallerySection.css';

const GallerySection = () => {
  return (
    <section id="gallery" className="gallery-section container">
      <div className="section-header center-header">
        <Camera className="glow-text-gold" size={24}/>
        <h3 className="section-subtitle">Moments of Wonder</h3>
      </div>
      <h2 className="section-title text-center">Magic In Action</h2>
      
      <div className="gallery-container">
        
        {/* Featured Photo Layout - Crafty and overlapping */}
        <div className="scattered-gallery">
          
          <div className="gallery-item item-1 glass-panel">
            <div className="glass-inner">
              <img src={photo1} alt="Yair performing magic outdoors" className="photo-img" />
              <div className="photo-caption">Card Tricks in the Wild</div>
            </div>
          </div>
          
          <div className="gallery-item item-2 glass-panel">
            <div className="glass-inner">
              <img src={photo2} alt="Yair at a Cirque Experience" className="photo-img" />
              <div className="photo-caption">The Cirque Experience</div>
            </div>
          </div>
          
          <div className="gallery-item item-3 glass-panel">
            <div className="glass-inner">
              <img src={photo3} alt="Yair performing close up magic" className="photo-img" />
              <div className="photo-caption">Close-Up Illusions</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GallerySection;
