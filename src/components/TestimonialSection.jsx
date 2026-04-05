import React from 'react';
import mentorImg from '../assets/mentor_comment.jpg';
import { Quote } from 'lucide-react';
import './TestimonialSection.css';

const TestimonialSection = () => {
  return (
    <section id="testimonial" className="testimonial-section container">
      <div className="testimonial-grid">
        
        <div className="testimonial-content">
          <div className="section-header">
            <Quote className="glow-text-gold" size={24}/>
            <h3 className="section-subtitle">Words from the Mentor</h3>
          </div>
          <h2 className="section-title">A Master's Endorsement</h2>
          
          <blockquote className="mentor-quote">
            <p>
              "Magic is about being creative, being prepared to take on a challenge and being kind! <span className="highlight">@magic_yair you are all of these things and more!</span> Thank you for making this gift for me. I will put it up at the magic school. You're a very talented and dedicated young magician. <strong>One of the best in OZ.</strong>"
            </p>
          </blockquote>

          <div className="mentor-credit">
            <span className="mentor-name glow-text-gold">— The Magic School of Confidence</span>
          </div>
        </div>

        <div className="testimonial-image-wrapper">
          <div className="glass-panel image-glass-container float-slow">
            <img 
              src={mentorImg} 
              alt="Mentor comment from The Magic School of Confidence" 
              className="testimonial-image"
            />
            <div className="image-overlay"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialSection;
