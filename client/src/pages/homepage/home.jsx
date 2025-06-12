import React from 'react';
import { Snowflake, Scissors, Clover } from 'lucide-react';
import { Link } from 'react-router-dom';
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
      {/* Hero section with background and logo */}
      <section className="hero-section">
        <div className="logo-container">
          <img src="/logo.png" alt="GreenView Landscaping" className="logo"style={{ width: '200px', height: 'auto' }} />
        </div>
      </section>

      {/* Welcome section */}
      <section className="welcome-section">
        <div className="container">
          <h1 className="welcome-title">Welcome to Green View</h1>
          <p className="welcome-tagline">Elevating Outdoor Living Across Calgary
                                          Greenview Calgary is proud to serve communities throughout the city with exceptional lawn care services. Our mission is simple: to create healthy, green, and well-maintained lawns that reflect the pride of Calgary homeowners. With attention to detail, customer-first service, and proven expertise, we help you fall in love with your lawn — season after season.       
                                          We also take care in what we use:
                                          All of our products are made in Canada, ensuring quality you can trust and supporting local sustainability with every lawn we touch.</p>
          {/*<p className="welcome-text">Transform your outdoor space</p>*/}
        </div>

      {/* Google review section
      </section>
      <section className="google-review-section">
        <div className="container">
          <h2 className="review-title">What our customers say</h2>
          <p className="review-description">We’d love your feedback!</p>
          <a
            className="google-review-button"
            href="https://www.google.com/maps/place/Green+view+Calgary/@51.1033553,-114.0672166,15z/data=!4m8!3m7!1s0x49fd1d95e9aaacd7:0x1d7172f3c1d5cdf0!8m2!3d51.0276233!4d-114.087835!9m1!1b1!16s%2Fg%2F11w9ffzjyz?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            Leave us a Google Review
          </a>
        </div>*/}
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
    </div>
  );
}

export default HomePage;