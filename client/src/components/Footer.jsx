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

          <div className="footer-logo-section">
            <div className="footer-logo">Green View</div>
            <div className="footer-phone">
              <a href="tel:14038997585">(403)-899-7585</a>
              <div className="footer-email">
                <a href="mailto:Greenviewcalgary@gmail.com">Greenviewcalgary@gmail.com</a>
              </div>
              <div className="footer-sentance">
                <p>Proudly serving the Calgary community with quality landscaping solutions.</p>
              </div>
            </div>
          </div>

          <ul className="footer-nav">
            <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
            <li><Link to="/aboutUs" onClick={scrollToTop}>About Us</Link></li>
            <li><Link to="/services" onClick={scrollToTop}>Services</Link></li>
            <li><Link to="/gallery" onClick={scrollToTop}>Gallery</Link></li>
            <li><Link to="/contact" onClick={scrollToTop}>Contact</Link></li>
            <li><Link to="/blog" onClick={scrollToTop}>Blog</Link></li>
            <li><Link to="/privacy" onClick={scrollToTop}>Privacy</Link></li>
            <li><button className="footer-cookie-link" onClick={() => window.showCookieSettings()}>Cookie Settings</button></li>
          </ul>

          <div className="footer-social">
            <a href="https://www.facebook.com/p/Green-View-landscaping-61576820930262/" target="_blank" rel="noopener noreferrer">
              <img src="/facebook.svg" alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/greenview_landscaping_?igsh=cGs5eWhjMjV5dmE0" target="_blank" rel="noopener noreferrer">
              <img src="/instagram.svg" alt="Instagram" />
            </a>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2025 Green View Landscape Architecture. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
