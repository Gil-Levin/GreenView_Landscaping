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


function App() {
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
      </Routes>
      </main>
      <Footer />  {/* Adding the Footer component here */}
    </Router>
  );
}

export default App;
