import React from 'react';
import { Snowflake, Scissors, Clover } from 'lucide-react';
import './home.css';

const featuredServices = [
  {
    title: 'Snow Removal',
    icon: Snowflake,
    description: 'Professional snow removal services to keep your property safe and accessible during winter.'
  },
  {
    title: 'Lawn and Garden Maintenance',
    icon: Scissors,
    description: 'Regular maintenance to keep your lawn and garden looking beautiful all year round.'
  },
  {
    title: 'Sod Installation',
    icon: Clover,
    description: 'Transform your yard with fresh, high-quality sod installation services.'
  }
];

function HomePage() {
  return (
    <div className="home-page">
      {/* Hero section with background and logo */}
      <section className="hero-section">
        <div className="logo-container">
          <img src="/logo.jpg" alt="GreenView Landscaping" className="logo" />
        </div>
      </section>

      {/* Welcome section */}
      <section className="welcome-section">
        <div className="container">
          <h1 className="welcome-title">Welcome to Green View</h1>
          <p className="welcome-text">Transform your outdoor space</p>
        </div>
      </section>

      {/* Featured services section */}
      <section className="featured-services-section">
        <div className="container">
          <h2 className="section-title">Our Featured Services</h2>
          <div className="services-grid">
            {featuredServices.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">
                  <service.icon />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;