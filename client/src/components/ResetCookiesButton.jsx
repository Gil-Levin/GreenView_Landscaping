import React, { useState } from 'react';
import './ResetCookiesButton.css';

const ResetCookiesButton = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleResetCookies = () => {
    // Clear all cookie-related localStorage items
    localStorage.removeItem('cookieChoice');
    localStorage.removeItem('cookieChoiceDate');
    localStorage.removeItem('detailedConsent');
    
    // Show confirmation message
    setShowConfirmation(true);
    
    // Hide confirmation after 3 seconds
    setTimeout(() => {
      setShowConfirmation(false);
    }, 3000);
    
    // Reload the page to trigger the cookie notice again
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <>
      <button 
        className="reset-cookies-btn"
        onClick={handleResetCookies}
        title="Reset Cookie Preferences"
        aria-label="Reset Cookie Preferences"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor"/>
        </svg>
        <span>Reset Cookies</span>
      </button>
      
      {showConfirmation && (
        <div className="reset-confirmation">
          <div className="confirmation-content">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="#4CAF50"/>
            </svg>
            <span>Cookie preferences reset successfully!</span>
          </div>
        </div>
      )}
    </>
  );
};

export default ResetCookiesButton; 