import React, { useState } from 'react'
import { Snowflake, Scissors, Footprints, LeafIcon, Fence, Trees, SquareStack, DoorClosed, Droplet, TreeDeciduous, Clover, Hammer, RatioIcon, Ratio, FlameKindling } from 'lucide-react';
import { Link } from 'react-router-dom';
import './allServices.css'

const services = [
    { 
        name: 'Snow Removal', 
        icon: Snowflake, 
        image: '../../../photos/snow.jpg',
        description: 'Professional snow removal services including driveway clearing, walkway maintenance, and commercial property snow management. We use specialized equipment to ensure safe and efficient snow removal during winter months.'
    },
    { 
        name: 'Lawn and Garden Maintenance', 
        icon: Scissors, 
        image: '../../../photos/lawnandgarden.jpg',
        description: 'Comprehensive lawn care services including mowing, edging, trimming, fertilization, weed control, and seasonal maintenance. We keep your outdoor spaces healthy and beautiful year-round.'
    },
    { 
        name: 'Sod Installation', 
        icon: Clover, 
        image: '../../../photos/sodinstallation.jpg',
        description: 'Professional sod installation for instant green lawns. We prepare the soil, install fresh sod, and provide aftercare instructions to ensure your new lawn establishes properly.'
    },
    { 
        name: 'Decks', 
        icon: Hammer, 
        image: '../../../photos/deck.jpg',
        description: 'Custom deck design and construction using premium materials. From simple platforms to elaborate multi-level decks with railings, stairs, and built-in features to enhance your outdoor living space.'
    },
    { 
        name: 'Fences', 
        icon: Fence, 
        image: '../../../photos/fence.jpg',
        description: 'Quality fence installation including privacy fences, decorative fences, and security fencing. We work with various materials like wood, vinyl, aluminum, and wrought iron to match your property style.'
    },
    { 
        name: 'Gates', 
        icon: DoorClosed, 
        image: '../../../photos/gate.jpg',
        description: 'Custom gate design and installation for driveways, gardens, and property entrances. We offer automated gates, security gates, and decorative gates to enhance both functionality and curb appeal.'
    },
    { 
        name: 'Landscaping Design & Construction', 
        icon: TreeDeciduous, 
        image: '../../../photos/desiegn.jpg',
        description: 'Complete landscape design and construction services. We create beautiful outdoor environments including hardscaping, softscaping, water features, and outdoor living areas tailored to your vision and budget.'
    },
    { 
        name: 'Irrigation Systems', 
        icon: Droplet, 
        image: '../../../photos/irrigration.jpg',
        description: 'Smart irrigation system design and installation for efficient water management. We install automated sprinkler systems, drip irrigation, and smart controllers to keep your landscape healthy while conserving water.'
    },
    { 
        name: 'Trees & Plants', 
        icon: Trees, 
        image: '../../../photos/trees&plants.jpg',
        description: 'Tree planting, maintenance, and care services. We offer tree selection, planting, pruning, disease treatment, and removal services to maintain the health and beauty of your landscape trees and plants.'
    },
    { 
        name: 'Walkways', 
        icon: Footprints, 
        image: '../../../photos/walkways.jpg',
        description: 'Beautiful walkway construction using various materials like stone, brick, concrete, and pavers. We create functional and attractive pathways that enhance your property\'s accessibility and visual appeal.'
    },
    { 
        name: 'Patios', 
        icon: Ratio, 
        image: '../../../photos/patio.jpg',
        description: 'Custom patio design and construction for outdoor entertainment and relaxation. We build patios using stone, concrete, brick, or pavers with options for fire pits, outdoor kitchens, and seating areas.'
    },
    { 
        name: 'Fire Pit', 
        icon: FlameKindling, 
        image: '../../../photos/firePit.jpg',
        description: 'Custom fire pit design and construction to create a cozy outdoor gathering space. We build fire pits using stone, brick, or metal with proper safety features and ventilation for year-round enjoyment.'
    },
    { 
        name: 'Mulch', 
        icon: LeafIcon, 
        image: '../../../photos/mulch.jpg',
        description: 'Professional mulch installation and maintenance services. We offer various mulch types including organic, colored, and decorative options to improve soil health, retain moisture, and enhance your landscape appearance. We can also glue mulch in place for long-lasting results.'
    },
    { 
        name: 'Rocks', 
        icon: SquareStack, 
        image: '../../../photos/rock.jpg',
        description: 'Landscape rock installation and design services. We use various rock types and sizes for decorative borders, rock gardens, drainage solutions, and low-maintenance landscaping that adds texture and visual interest. We can glue rocks in place for permanent installations.'
    },
];

function AllServices() {
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceClick = (serviceName) => {
    if (selectedService === serviceName) {
      setSelectedService(null);
    } else {
      setSelectedService(serviceName);
    }
  };

  return (
    <div>
      {/* All Services */}
      <section className="services-section">
          <div className="services-wrapper">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
          {services.map((service, index) => (
              <div 
                key={index} 
                className={`service-card ${selectedService === service.name ? 'active' : ''}`}
                style={{ backgroundImage: `url(${service.image})` }}
                onClick={() => handleServiceClick(service.name)}
              >
                <div className="service-overlay">
                  <div className="service-content">
                    {service.icon && <service.icon className="service-icon-overlay" />}
                    <div className="service-name-overlay">{service.name}</div>
                  </div>
                </div>
                <div className={`service-description ${selectedService === service.name ? 'show' : ''}`}>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
            {/* Gallery Button */}
            <Link 
              to="/gallery" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="service-card gallery-card" 
              style={{ backgroundImage: `url('../../../photos/logo.jpg')` }}
            >
              <div className="service-overlay">
                <div className="service-content">
                  <div className="service-name-overlay">View Our Work</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AllServices