import React from 'react';
import { Snowflake, Scissors, Clover } from 'lucide-react';
import { Link } from 'react-router-dom';
import WallOfLove from '../../components/WallOfLove';
import './home.css';


const featuredServices = [
  {
    title: 'Sod Installation',
    icon: Clover,
    description: 'Transform your yard with fresh, high-quality sod installation services.',
    image: '/photos/sodinstallation.jpg'
  },
  {
    title: 'Lawn and Garden Maintenance',
    icon: Scissors,
    description: 'Regular maintenance to keep your lawn and garden looking beautiful all year round.',
    image: '/photos/lawnandgarden.jpg'

  },
  {
    title: 'Snow Removal',
    icon: Snowflake,
    description: 'Professional snow removal services to keep your property safe and accessible during winter.',
    image: '/photos/snow.jpg'
  }
];

function HomePage() {
  return (
    <div className="home-page">
      {/* Hero section with background image */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Transform Your Outdoor Space</h1>
          <p className="hero-subtitle">Professional landscaping services in Calgary</p>
          <div className="hero-buttons">
            <Link to="/contact" className="hero-button primary">
              Get Free Estimate
            </Link>
            <a href="tel:14038997585" className="hero-button secondary">
              Call Us Now
            </a>
          </div>
        </div>
      </section>

      {/* Welcome section */}
      <section className="welcome-section">
        <div className="container">
          <div className="logo-container">
            <img src="/logo.png" alt="GreenView Landscaping" className="logo" style={{ width: '200px', height: 'auto' }} />
          </div>
          <h1 className="welcome-title">Welcome to Green View</h1>
          <p className="welcome-tagline">Elevating Outdoor Living Across Calgary
                                          Green view is proud to serve communities throughout the city with exceptional lawn care services. Our mission is simple: to create healthy, green, and well-maintained lawns that reflect the pride of Calgary homeowners. With attention to detail, customer-first service, and proven expertise, we help you fall in love with your lawn — season after season.       
                                          We also take care in what we use:
                                          All of our products are made in Canada, ensuring quality you can trust and supporting local sustainability with every lawn we touch.</p>
          {/*<p className="welcome-text">Transform your outdoor space</p>*/}
        </div>
      </section>

      {/* Featured services section */}
      <section className="featured-services-section">
        <div className="container">
          <h2 className="section-title">Our Featured Services</h2>
          <div className="services-grid">
            {featuredServices.map((service, index) => (
              <div key={index} className="service-card" style={{ backgroundImage: `url(${service.image})` }}>
              <div className="service-overlay">
                <div className="service-icon">
                  <service.icon />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
              </div>
            ))}
          </div>
          <div className="more-services-container">
            <Link to="/services" className="more-services-button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              More Services
            </Link>
          </div>
        </div>
      </section>

      {/* Wall of Love - Customer Reviews */}
      <WallOfLove />
    </div>
  );
}

export default HomePage;