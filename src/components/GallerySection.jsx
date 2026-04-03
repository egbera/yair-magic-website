import React from 'react';
import photo1 from '../assets/photo1.jpg'; // Cirque
import photo2 from '../assets/photo2.jpg'; // Beach
import photo3 from '../assets/photo3.jpg'; // Grass
import photo4 from '../assets/yair_magical_portrait.png'; // Award
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
        <div className="polaroid-grid">
          
          <div className="gallery-item tilt-right glass-panel">
            <div className="glass-inner">
              <img src={photo4} alt="Yair with an award certificate" className="photo-img" />
              <div className="photo-caption">Award-Winning Magician</div>
            </div>
          </div>

          <div className="gallery-item tilt-left glass-panel">
            <div className="glass-inner">
              <img src={photo3} alt="Yair performing close up magic" className="photo-img" />
              <div className="photo-caption">Close-Up Illusions</div>
            </div>
          </div>
          
          <div className="gallery-item tilt-right glass-panel">
            <div className="glass-inner">
              <img src={photo1} alt="Yair at a Cirque Experience" className="photo-img" />
              <div className="photo-caption">The Cirque Experience</div>
            </div>
          </div>
          
          <div className="gallery-item tilt-left glass-panel">
            <div className="glass-inner">
              <img src={photo2} alt="Yair performing magic outdoors on rocks" className="photo-img" />
              <div className="photo-caption">Magic by the Coast</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GallerySection;
