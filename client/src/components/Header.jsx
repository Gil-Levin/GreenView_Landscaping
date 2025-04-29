// src/components/Header.jsx
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./Header.css";  // Import the CSS file

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav>
        <div className="header-logo">
          <Link to="/">
            <img src="/logo.png" alt="GreenView Logo" />
          </Link>
        </div>
        
        <button className="mobile-nav-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
        
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/aboutUs">About Us</NavLink></li>
          <li><NavLink to="/services">Services</NavLink></li>
          <li><NavLink to="/gallery">Gallery</NavLink></li>
          <li><NavLink to="/contact" className="cta-button">Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;