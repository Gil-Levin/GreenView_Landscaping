// GoogleMap.jsx
import React from 'react';

const GoogleMaps = () => {
  return (
    <div className="map-container">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d321200.49227131513!2d-114.087835!3d51.027623299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x49fd1d95e9aaacd7%3A0x1d7172f3c1d5cdf0!2sGreen%20view%20Calgary!5e0!3m2!1sen!2sca" 
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