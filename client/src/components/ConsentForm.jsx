import React, { useState, useEffect } from 'react';
import './ConsentForm.css';

const ConsentForm = ({ isOpen, onClose }) => {
  const [consentSettings, setConsentSettings] = useState({
    necessary: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false,
    preferences: false,
    socialMedia: false
  });

  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowForm(true);
    }
  }, [isOpen]);

  useEffect(() => {
    // Load saved preferences
    const savedConsent = localStorage.getItem('detailedConsent');
    if (savedConsent) {
      try {
        const parsed = JSON.parse(savedConsent);
        setConsentSettings(prev => ({ ...prev, ...parsed }));

      } catch (e) {

      }
    } else {

    }
  }, []);

  const handleToggle = (type) => {
    if (type === 'necessary') return; // Cannot disable necessary cookies
    

    
    setConsentSettings(prev => {
      const newSettings = {
        ...prev,
        [type]: !prev[type]
      };

      return newSettings;
    });
  };

  const handleSaveAll = () => {
    const allEnabled = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
      socialMedia: true
    };
    setConsentSettings(allEnabled);
  };

  const handleRejectAll = () => {
    const allDisabled = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
      socialMedia: false
    };
    setConsentSettings(allDisabled);
  };

  const handleSave = () => {

    localStorage.setItem('detailedConsent', JSON.stringify(consentSettings));
    localStorage.setItem('cookieChoice', 'detailed');
    localStorage.setItem('cookieChoiceDate', new Date().toISOString());
    

    
    onClose();
  };

  const handleClose = () => {
    setShowForm(false);
    setTimeout(() => onClose(), 300); // Wait for animation
  };

  if (!showForm) return null;

  return (
    <div className="consent-overlay">
      <div className="consent-modal">
        <div className="consent-header">
          <h2>Cookie & Privacy Preferences</h2>
          <button className="close-btn" onClick={handleClose}>×</button>
        </div>

        <div className="consent-content">
          <div className="consent-intro">
            <p>
              We respect your privacy and want to give you control over how your data is used. 
              Below you can manage your preferences for different types of cookies and data processing.
            </p>
          </div>



          <div className="consent-categories">
            {/* Necessary Cookies */}
            <div className="consent-category">
              <div className="category-header">
                <div className="category-info">
                  <h3>Necessary Cookies</h3>
                  <p>Essential for the website to function properly</p>
                </div>
                <div className="toggle-container">
                  <input
                    type="checkbox"
                    checked={consentSettings.necessary}
                    disabled
                    className="toggle-input"
                  />
                  <label className="toggle-label">
                    <span className="toggle-slider"></span>
                  </label>
                </div>
              </div>
              <div className="category-details">
                <p>These cookies are essential for basic site functionality and security. They cannot be disabled.</p>
                <ul>
                  <li>Session management</li>
                  <li>Security features</li>
                  <li>Basic site navigation</li>
                </ul>
              </div>
            </div>

            {/* Analytics Cookies */}
            <div className="consent-category">
              <div className="category-header">
                <div className="category-info">
                  <h3>Analytics Cookies</h3>
                  <p>Help us understand how visitors use our website</p>
                </div>
                <div className="toggle-container">
                  <input
                    type="checkbox"
                    checked={consentSettings.analytics}
                    onChange={() => handleToggle('analytics')}
                    className="toggle-input"
                    id="analytics-toggle"
                  />
                  <label className="toggle-label" htmlFor="analytics-toggle">
                    <span className="toggle-slider"></span>
                  </label>

                </div>
              </div>
              <div className="category-details">
                <p>These cookies help us analyze site traffic and improve user experience.</p>
                <ul>
                  <li>Page visit statistics</li>
                  <li>User behavior analysis</li>
                  <li>Site performance metrics</li>
                </ul>
              </div>
            </div>

            {/* Marketing Cookies */}
            <div className="consent-category">
              <div className="category-header">
                <div className="category-info">
                  <h3>Marketing Cookies</h3>
                  <p>Used to deliver personalized advertisements</p>
                </div>
                <div className="toggle-container">
                  <input
                    type="checkbox"
                    checked={consentSettings.marketing}
                    onChange={() => handleToggle('marketing')}
                    className="toggle-input"
                    id="marketing-toggle"
                  />
                  <label className="toggle-label" htmlFor="marketing-toggle">
                    <span className="toggle-slider"></span>
                  </label>

                </div>
              </div>
              <div className="category-details">
                <p>These cookies help us show you relevant content and advertisements.</p>
                <ul>
                  <li>Targeted advertising</li>
                  <li>Campaign effectiveness</li>
                  <li>User interest tracking</li>
                </ul>
              </div>
            </div>

            {/* Preferences Cookies */}
            <div className="consent-category">
              <div className="category-header">
                <div className="category-info">
                  <h3>Preference Cookies</h3>
                  <p>Remember your settings and preferences</p>
                </div>
                <div className="toggle-container">
                  <input
                    type="checkbox"
                    checked={consentSettings.preferences}
                    onChange={() => handleToggle('preferences')}
                    className="toggle-input"
                    id="preferences-toggle"
                  />
                  <label className="toggle-label" htmlFor="preferences-toggle">
                    <span className="toggle-slider"></span>
                  </label>

                </div>
              </div>
              <div className="category-details">
                <p>These cookies remember your choices and provide a personalized experience.</p>
                <ul>
                  <li>Language preferences</li>
                  <li>Display settings</li>
                  <li>User preferences</li>
                </ul>
              </div>
            </div>

            {/* Social Media Cookies */}
            <div className="consent-category">
              <div className="category-header">
                <div className="category-info">
                  <h3>Social Media Cookies</h3>
                  <p>Enable social media integration features</p>
                </div>
                <div className="toggle-container">
                  <input
                    type="checkbox"
                    checked={consentSettings.socialMedia}
                    onChange={() => handleToggle('socialMedia')}
                    className="toggle-input"
                    id="social-media-toggle"
                  />
                  <label className="toggle-label" htmlFor="social-media-toggle">
                    <span className="toggle-slider"></span>
                  </label>

                </div>
              </div>
              <div className="category-details">
                <p>These cookies enable social media sharing and integration features.</p>
                <ul>
                  <li>Social sharing buttons</li>
                  <li>Social media widgets</li>
                  <li>Social login features</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="consent-actions">
            <div className="bulk-actions">
              <button className="bulk-btn bulk-accept" onClick={handleSaveAll}>
                Accept All
              </button>
              <button className="bulk-btn bulk-reject" onClick={handleRejectAll}>
                Reject All
              </button>
            </div>
            <div className="save-actions">
              <button className="save-btn" onClick={handleSave}>
                Save Preferences
              </button>
              <button className="cancel-btn" onClick={handleClose}>
                Cancel
              </button>
            </div>
          </div>

          <div className="consent-footer">
            <p>
              You can change these settings at any time by visiting our 
              <a href="/privacy" className="privacy-link"> Privacy Policy</a> page.
            </p>
            <p className="last-updated">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsentForm; 