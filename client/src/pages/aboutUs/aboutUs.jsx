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
              <h2 className="story-title">Our Story: Passion That Grew Into Purpose</h2>
                <p>At Greenview Landscaping, everything began with a shovel, a rake, and a deep love for nature. What started as one person helping neighbors transform their yards has blossomed into a thriving company known across Calgary for exceptional outdoor design.</p>
                <p>From the beginning, our mission was clear — to create beautiful, calming outdoor spaces that feel like home. But as we grew, we discovered something even more powerful: landscaping is not just about grass and gardens. It’s about people. It’s about listening, understanding their vision, and bringing it to life with care, creativity, and craftsmanship.</p>
                <p>Every tree we plant, every stone we lay, and every flower we choose tells part of our client’s story. That’s why we take our work personally. Greenview isn’t just a landscaping service — it’s a promise to turn outdoor spaces into meaningful places.</p>
                <p>With a passionate team, modern tools, and a commitment to quality, we deliver more than just landscaping. We create environments people love to come home to.</p>
                <h3>Let’s grow something amazing together.</h3>
              </div>
            </div>
          </div>
          <div className="cta-section">
            <h2>Whether it’s a cozy backyard or a bold front design — we’re ready to bring your vision to life.</h2>
            <p>Get Your Free Estimate Today</p>
            <a href="/contact" className="cta-button">Contact Us Now</a>
          </div>
        </div>
      </div>   
    </div>
  );
};

export default AboutUs;