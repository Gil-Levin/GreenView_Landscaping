import React from "react";
import './WhatsAppButton.css';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/14038997585?text=Hi!%20I'm%20interested%20in%20your%20landscaping%20services.%20Can%20you%20tell%20me%20more%3F"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <img
        src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
        alt="Chat on WhatsApp"
      />
    </a>
  );
}
