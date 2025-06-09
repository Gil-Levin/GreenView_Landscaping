import { Link, useLocation } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer>
      <div className="container">
        <div className="footer-content footer-layout">
          <div className="footer-logo">Green View</div>
          <ul className="footer-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/aboutUs">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </div>
        <div className="copyright">
          <p>&copy; 2025 Green View Landscape Architecture. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
