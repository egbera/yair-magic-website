import React, { useState } from 'react';
import { Send, Sparkles } from 'lucide-react';
import './BookingSection.css';

const BookingSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventType: 'birthday',
    date: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/yairsirton8@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New Booking Request from ${formData.name}`,
        })
      });
      
      if (response.ok) {
        alert(`Thank you ${formData.name}! Your magical booking request has been sent to Yair.`);
        setFormData({ name: '', email: '', eventType: 'birthday', date: '', message: '' });
      } else {
        alert("Oops! Something went wrong. Please try again.");
      }
    } catch (err) {
      alert("Oops! There was a network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="booking" className="booking-section container">
      <div className="glass-panel booking-container">
        
        <div className="booking-info">
          <div className="section-header">
            <Sparkles className="glow-text-gold" size={20}/>
            <h3 className="section-subtitle">Experience The Magic</h3>
          </div>
          <h2 className="section-title">Book Yair For Your Event</h2>
          <p className="booking-text">
            Add a touch of wonder to your next gathering. Whether it's a private birthday celebration or a special event, Yair guarantees an unforgettable experience.
          </p>
          <ul className="booking-features">
            <li>✨ Interactive Close-up Magic</li>
            <li>✨ Mind-Reading & Illusions</li>
            <li>✨ Family-Friendly Entertainment</li>
            <li>✨ Custom Performances</li>
          </ul>
        </div>

        <div className="booking-form-wrapper">
          <form className="booking-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com" />
              </div>
              <div className="form-group">
                <label htmlFor="date">Event Date</label>
                <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="eventType">Event Type</label>
              <div className="custom-select-wrapper">
                <select id="eventType" name="eventType" value={formData.eventType} onChange={handleChange}>
                  <option value="birthday">Birthday Party</option>
                  <option value="school">School Event</option>
                  <option value="private">Private Gathering</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Event Details</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="Tell me more about your magical event..." required></textarea>
            </div>

            <button type="submit" className="btn-primary submit-btn" disabled={isSubmitting}>
              <span>{isSubmitting ? 'Sending...' : 'Send Request'}</span>
              <Send size={18} />
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default BookingSection;
