// export default Header;
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

  // Scroll to top + close menu
  const handleNavClick = () => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
          <div className="header-phone">
            <div className="call-label">Call us now!</div>
            <a href="tel:14038997585">(403)-899-7585</a>
          </div>
          <Link
            to="/"
            className="header-logo"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img src="/logo.png" alt="GreenView Logo" />
          </Link>
        </div>

        <button className="mobile-nav-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>

        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li><NavLink to="/" end onClick={handleNavClick}>Home</NavLink></li>
          <li><NavLink to="/services" onClick={handleNavClick}>Services</NavLink></li>
          <li><NavLink to="/gallery" onClick={handleNavClick}>Gallery</NavLink></li>
          <li><NavLink to="/blog" onClick={handleNavClick}>Blog</NavLink></li>
          <li><NavLink to="/aboutUs" onClick={handleNavClick}>About Us</NavLink></li>
          <li><NavLink to="/contact" className="cta-button" onClick={handleNavClick}>Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
