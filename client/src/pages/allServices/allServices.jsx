import React from 'react'
import { Snowflake, Scissors, Footprints, LeafIcon, Fence, Trees, SquareStack, DoorClosed, Droplet, TreeDeciduous, Clover, Hammer, RatioIcon, Ratio, FlameKindling } from 'lucide-react';
import './allServices.css'
const services = [
    { name: 'Snow Removal', icon: Snowflake , image: '../../../photos/snow.jpg'},
    { name: 'Lawn and Garden Maintenance', icon: Scissors , image: '../../../photos/lawnandgarden.jpg'},
    { name: 'Sod Installation', icon: Clover , image: '../../../photos/sodinstallation.jpg'},
    { name: 'Decks', icon: Hammer , image: '../../../photos/deck.jpg'},
    { name: 'Fences', icon: Fence , image: '../../../photos/fence.jpg'},
    { name: 'Gates', icon: DoorClosed , image: '../../../photos/gate.jpg'},
    { name: 'Landscaping Design & Construction', icon: TreeDeciduous , image: '../../../photos/deck.jpg'},
    { name: 'Irrigation systems', icon: Droplet , image: '../../../photos/irrigration.jpg'},
    { name: 'Trees & Plants', icon: Trees , image: '../../../photos/trees&plants.jpg'},
    { name: 'Walkways', icon: Footprints , image: '../../../photos/walkways.jpg'},
    { name: 'Patios', icon: Ratio , image: '../../../photos/patio.jpg'},
    { name: 'Fire pit', icon: FlameKindling , image: '../../../photos/firePit.jpg'},
    { name: 'mulch', icon: LeafIcon , image: '../../../photos/mulch.jpg'},
    { name: 'Rocks', icon: SquareStack , image: '../../../photos/rock.jpg'},
    
];

function AllServices() {
  return (
    <div>
      {/* All Services */}
      <section className="services-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
          {services.map((service, index) => (
              <div 
                key={index} 
                className="service-card"
                style={{ backgroundImage: `url(${service.image})` }}
              >
                <div className="service-overlay">
                  <div className="service-content">
                    {service.icon && <service.icon className="service-icon-overlay" />}
                    <div className="service-name-overlay">{service.name}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AllServices