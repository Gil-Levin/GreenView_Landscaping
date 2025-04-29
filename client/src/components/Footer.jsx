import './Footer.css';

const Footer = () =>{
    return(
    <footer>
    <div className="container">
      <div className="footer-content">
        <div className="footer-info">
          <div className="footer-logo">Green View</div>
          <div className="footer-contact">
            <p>Calgary, Canada</p>
            <p>+1 (403) 899-7585</p>
            <p>greenviewcalgary@gmail.com</p>
          </div>
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