import React, { useState, useEffect } from 'react';
import './CookieNotice.css';
import ConsentForm from './ConsentForm';

const CookieNotice = () => {
  const [showNotice, setShowNotice] = useState(false);
  const [showConsentForm, setShowConsentForm] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieChoice = localStorage.getItem('cookieChoice');
    if (!cookieChoice) {
      setShowNotice(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieChoice', 'accepted');
    localStorage.setItem('cookieChoiceDate', new Date().toISOString());
    setShowNotice(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieChoice', 'declined');
    localStorage.setItem('cookieChoiceDate', new Date().toISOString());
    setShowNotice(false);
  };

  const handleCustomize = () => {
    setShowConsentForm(true);
  };

  const handleCloseConsentForm = () => {
    setShowConsentForm(false);
    setShowNotice(false); // Close the notice when form is closed
  };

  if (!showNotice) {
    return null;
  }

  return (
    <>
      <div className="cookie-notice">
        <div className="cookie-content">
          <div className="cookie-text">
            <h3>We value your privacy</h3>
            <p>
              We use cookies to enhance your browsing experience, analyze site traffic, 
              and personalize content. By continuing to use our site, you consent to our 
              use of cookies. You can learn more about our cookie policy in our 
              <a href="/privacy" className="privacy-link"> Privacy Policy</a>.
            </p>
          </div>
          <div className="cookie-actions">
            <button 
              className="cookie-btn cookie-btn-decline" 
              onClick={handleDecline}
            >
              Decline
            </button>
            <button 
              className="cookie-btn cookie-btn-customize" 
              onClick={handleCustomize}
            >
              Customize
            </button>
            <button 
              className="cookie-btn cookie-btn-accept" 
              onClick={handleAccept}
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
      
      <ConsentForm 
        isOpen={showConsentForm} 
        onClose={handleCloseConsentForm} 
      />
    </>
  );
};

export default CookieNotice; 