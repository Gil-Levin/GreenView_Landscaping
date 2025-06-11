import React from 'react';
import './aboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-container">


      <div className="container">
        <div className="about-content">
        <div className="story-section">
          <div className="story-content">
            <div className="story-image">
            <img src="photos/aboutUs.jpg" alt="Greenview Landscaping beginnings" />
            </div>
            <div className="story-text">
              <h2>How It All Started</h2>
                <p>Greenview Landscaping was born out of a true love for nature and a simple vision - to turn every yard into a peaceful and beautiful retreat. It all started when I was working alone with just a shovel and a rake, helping neighbors and friends, driven by a passion for creating green spaces.</p>
                <p>Over time, I realized it was about much more than landscaping. It's about listening to people, understanding how they want to feel when they step into their yard. Every tree, every path, every flower - it's part of their life story. And so, step by step, Greenview grew from a small dream into a professional business gaining momentum across Calgary.</p>
                <p>We're here to make a real difference - not just in the garden, but in life. With personalized service, modern technology, and a team that truly loves what they do - we aim to turn every project into something to be proud of.</p>
              </div>
            </div>
          </div>
          <div className="cta-section">
            <h2>Ready to Transform Your Space?</h2>
            <p>Let's work together to create the landscape you've always dreamed of.</p>
            <a href="/contact" className="cta-button">Contact Us Today</a>
          </div>
        </div>
      </div>   
    </div>
  );
};

export default AboutUs;