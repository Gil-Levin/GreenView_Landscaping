import React, { useState } from 'react';
import axios from 'axios';
import './contact.css';
import GoogleMaps from '../../components/GoogleMaps';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setShowError(true);
      setShowSuccess(false);
      return;
    }
    const req= {name: formData.name, email: formData.email, phone: formData.phone, service: formData.service, message: formData.message};
    // send data to server
  axios.post('http://localhost:3000/api/contact/send', req)
  .then(() => {
    // show success massage
    setShowSuccess(true);
    setShowError(false);

    // reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  })
  .catch(() => {
    // show error massage
    setShowError(true);
    setShowSuccess(false);
  });
};
    
  
  return (
    <div className="contact-container">
      <div className="container main-content">
        <div className="contact-section">
          <div className="contact-info">
            <h2>Contact Information</h2>
            <p>We're here to help with your landscape project. Fill out the form and we'll be in touch soon.</p>
            
            <div className="info-item">
              <strong>Address:</strong>
              <p>Calgary, Canada</p>
            </div>
            
            <div className="info-item">
              <strong>Phone:</strong>
              <p>+1 (403) 899-7585</p>
            </div>
            
            <div className="info-item">
              <strong>Email:</strong>
              <p>greenviewcalgary@gmail.com</p>
            </div>
            
            <div className="info-item">
              <strong>Hours:</strong>
              <p>Monday - Friday: 7am - 7pm<br />Saturday: Closed<br />Sunday: 7am - 5pm</p>
            </div>
            <div className="info-item map-section">
              <strong>Our location:</strong>
              <GoogleMaps />
            </div>
          </div>

          
          <div className="contact-form">
            {showSuccess && (
              <div className="success-message">
                Your message has been sent successfully! We'll get back to you soon.
              </div>
            )}
            
            {showError && (
              <div className="error-message">
                There was an error sending your message. Please try again.
              </div>
            )}
            
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="required">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  placeholder="Your name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="required">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  placeholder="Your email address"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="service">Service Interested In</label>
                <select 
                  id="service" 
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="">Select a service</option>
                  <option value="garden-design">Garden Design</option>
                  <option value="landscape-planning">Landscape Planning</option>
                  <option value="maintenance">Landscape Maintenance</option>
                  <option value="hardscaping">Hardscaping</option>
                  <option value="irrigation">Irrigation Systems</option>
                  <option value="consultation">Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="required">Your Project Details</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  required 
                  placeholder="Describe your landscape project and any specific requirements..."
                ></textarea>
              </div>
              
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;