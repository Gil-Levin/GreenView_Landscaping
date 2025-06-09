import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef();

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  // Close menu if click occurs outside nav
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        navRef.current &&
        !navRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header>
      <nav ref={navRef}>
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
          <li><NavLink to="/services">Services</NavLink></li>
          <li><NavLink to="/gallery">Gallery</NavLink></li>
          <li><NavLink to="/blog">Blog</NavLink></li>
          <li><NavLink to="/aboutUs">About Us</NavLink></li>
          <li><NavLink to="/contact" className="cta-button">Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
