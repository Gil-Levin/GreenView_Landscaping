import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './privacy.css';
import ConsentForm from '../../components/ConsentForm';

const Privacy = () => {
  const [showConsentForm, setShowConsentForm] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleShowConsentForm = () => {
    setShowConsentForm(true);
  };

  return (
    <>
      <div className="privacy-page">
        <div className="privacy-container">
          <div className="privacy-header">
            <h1>Privacy Policy</h1>
            <p className="last-updated">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="privacy-content">
            <section className="privacy-section">
              <h2>1. Introduction</h2>
              <p>
                Green View Landscape Architecture ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
                visit our website and use our services.
              </p>
              <p>
                By using our website, you consent to the data practices described in this policy. If you do not 
                agree with our policies and practices, please do not use our website.
              </p>
            </section>

            <section className="privacy-section">
              <h2>2. Information We Collect</h2>
              
              <h3>2.1 Personal Information</h3>
              <p>We may collect personal information that you voluntarily provide to us, including:</p>
              <ul>
                <li>Name and contact information (email address, phone number, address)</li>
                <li>Service inquiries and project details</li>
                <li>Communication preferences</li>
                <li>Payment information (when applicable)</li>
              </ul>

              <h3>2.2 Automatically Collected Information</h3>
              <p>When you visit our website, we automatically collect certain information, including:</p>
              <ul>
                <li>IP address and location data</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website</li>
                <li>Device information</li>
              </ul>
            </section>

            <section className="privacy-section">
              <h2>3. How We Use Your Information</h2>
              <p>We use the information we collect for various purposes, including:</p>
              <ul>
                <li>Providing and maintaining our services</li>
                <li>Responding to your inquiries and requests</li>
                <li>Sending you service-related communications</li>
                <li>Improving our website and services</li>
                <li>Analyzing website usage and trends</li>
                <li>Preventing fraud and ensuring security</li>
                <li>Complying with legal obligations</li>
              </ul>
            </section>

            <section className="privacy-section">
              <h2>4. Cookies and Tracking Technologies</h2>
              
              <h3>4.1 What Are Cookies</h3>
              <p>
                Cookies are small text files that are stored on your device when you visit our website. 
                They help us provide you with a better experience and understand how you use our site.
              </p>

              <h3>4.2 Types of Cookies We Use</h3>
              
              <div className="cookie-category">
                <h4>Necessary Cookies</h4>
                <p>These cookies are essential for the website to function properly and cannot be disabled. They include:</p>
                <ul>
                  <li>Session management cookies</li>
                  <li>Security and authentication cookies</li>
                  <li>Basic site functionality cookies</li>
                </ul>
              </div>

              <div className="cookie-category">
                <h4>Analytics Cookies</h4>
                <p>These cookies help us understand how visitors use our website:</p>
                <ul>
                  <li>Page visit statistics</li>
                  <li>User behavior analysis</li>
                  <li>Site performance metrics</li>
                  <li>Traffic source information</li>
                </ul>
              </div>

              <div className="cookie-category">
                <h4>Marketing Cookies</h4>
                <p>These cookies help us deliver relevant content and advertisements:</p>
                <ul>
                  <li>Targeted advertising</li>
                  <li>Campaign effectiveness tracking</li>
                  <li>User interest analysis</li>
                  <li>Retargeting campaigns</li>
                </ul>
              </div>

              <div className="cookie-category">
                <h4>Preference Cookies</h4>
                <p>These cookies remember your choices and provide a personalized experience:</p>
                <ul>
                  <li>Language preferences</li>
                  <li>Display settings</li>
                  <li>User preferences</li>
                  <li>Form data retention</li>
                </ul>
              </div>

              <div className="cookie-category">
                <h4>Social Media Cookies</h4>
                <p>These cookies enable social media integration features:</p>
                <ul>
                  <li>Social sharing buttons</li>
                  <li>Social media widgets</li>
                  <li>Social login features</li>
                  <li>Social media tracking</li>
                </ul>
              </div>

              <div className="cookie-settings">
                <h3>4.3 Managing Your Cookie Preferences</h3>
                <p>
                  You can control and manage your cookie preferences at any time. Click the button below 
                  to access our cookie settings and customize your preferences:
                </p>
                <button className="cookie-settings-btn" onClick={handleShowConsentForm}>
                  Manage Cookie Preferences
                </button>
              </div>
            </section>

            <section className="privacy-section">
              <h2>5. Information Sharing and Disclosure</h2>
              <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:</p>
              <ul>
                <li>With your explicit consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and property</li>
                <li>In connection with a business transfer or merger</li>
                <li>With trusted service providers who assist us in operating our website</li>
              </ul>
            </section>

            <section className="privacy-section">
              <h2>6. Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. However, no method of transmission 
                over the internet or electronic storage is 100% secure.
              </p>
            </section>

            <section className="privacy-section">
              <h2>7. Your Rights and Choices</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to processing of your information</li>
                <li>Withdraw consent at any time</li>
                <li>Request data portability</li>
                <li>Lodge a complaint with supervisory authorities</li>
              </ul>
            </section>

            <section className="privacy-section">
              <h2>8. Third-Party Services</h2>
              <p>
                Our website may contain links to third-party websites and services. We are not responsible 
                for the privacy practices of these third parties. We encourage you to review their privacy 
                policies before providing any personal information.
              </p>
            </section>

            <section className="privacy-section">
              <h2>9. Children's Privacy</h2>
              <p>
                Our website is not intended for children under the age of 13. We do not knowingly collect 
                personal information from children under 13. If you are a parent or guardian and believe 
                your child has provided us with personal information, please contact us.
              </p>
            </section>

            <section className="privacy-section">
              <h2>10. International Data Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than your own. 
                We ensure that such transfers comply with applicable data protection laws and implement 
                appropriate safeguards to protect your information.
              </p>
            </section>

            <section className="privacy-section">
              <h2>11. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes 
                by posting the new Privacy Policy on this page and updating the "Last updated" date. 
                Your continued use of our website after any changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section className="privacy-section">
              <h2>12. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
              <div className="contact-info">
                <p><strong>Green View Landscape Architecture</strong></p>
                <p>Email: <a href="mailto:Greenviewcalgary@gmail.com">Greenviewcalgary@gmail.com</a></p>
                <p>Phone: <a href="tel:14038997585">(403) 899-7585</a></p>
                <p>Address: Calgary, Alberta, Canada</p>
              </div>
            </section>

            <div className="privacy-footer">
              <Link to="/" className="back-home-btn">← Back to Home</Link>
            </div>
          </div>
        </div>
      </div>

      <ConsentForm 
        isOpen={showConsentForm} 
        onClose={() => setShowConsentForm(false)} 
      />
    </>
  );
};

export default Privacy; 