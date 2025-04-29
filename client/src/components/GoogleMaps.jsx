// GoogleMap.jsx
import React from 'react';

const GoogleMaps = () => {
  return (
    <div className="map-container">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40084.442571862885!2d-114.02187604845757!3d51.10333706999564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537165a110a2f905%3A0x194f1556d9321cce!2zR3JlZW52aWV3LCDXp9ec15LXqNeZLCDXkNec15HXqNeY15QgVDJLIDNWNSwg16fXoNeT15Q!5e0!3m2!1siw!2sil!4v1745923630098!5m2!1siw!2sil" 
        width="100%" 
        height="250" 
        style={{ border: 0 }} 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="location"
      />
    </div>
  );
};

export default GoogleMaps;