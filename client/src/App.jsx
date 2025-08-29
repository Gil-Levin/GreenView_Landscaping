// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  // Importing Router, Routes, and Route
import './App.css';
import Header from './components/Header';  // Importing the Header component
import Home from './pages/homepage/home';  // Importing the Home component
import AboutUs from './pages/aboutUs/aboutUs';  // Importing the About us component
import AllServices from './pages/allServices/allServices';  // Importing the AllServices component
import Gallery from './pages/gallery/gallery';  // Importing the Gallery component
import Contact from './pages/contact/contact';  // Importing the contact component
import Footer from "./components/Footer";
import Blog from "./pages/blog/blog"
import Privacy from './pages/privacy/privacy';
import WhatsAppButton from './components/WhatsAppButton';
import CookieNotice from './components/CookieNotice';
import ConsentForm from './components/ConsentForm';
import { useState, useEffect } from 'react';

function App() {
  const [showConsentForm, setShowConsentForm] = useState(false);

  useEffect(() => {
    window.showCookieSettings = () => {
      setShowConsentForm(true);
    };
  }, []);

  return (
    <Router>
      <Header />  {/* Adding the Header component here */}
      <main>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<AllServices />} />
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/privacy" element={<Privacy />} />
      </Routes>
      </main>
      <Footer />  {/* Adding the Footer component here */}
      <WhatsAppButton />
      <CookieNotice />
      <ConsentForm 
        isOpen={showConsentForm} 
        onClose={() => setShowConsentForm(false)} 
      />
    </Router>
  );
}

export default App;
