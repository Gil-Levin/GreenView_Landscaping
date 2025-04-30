import React, { useState, useEffect } from 'react';
import { FolderOpen } from 'lucide-react';
/*import fs from 'fs';
import path from 'path';*/
import axios from 'axios';
import './gallery.css';

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // get images from server
    axios.get('https://greenviewcalgary.ca/api/images')
    .then(response => {
      setImages(response.data);
    })
    .catch(error => {
      console.error('Error loading images:', error);
    })
    .finally(() => {
      setLoading(false);
    });
  }, []);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-container">
      <div className="gallery-content">
        <h1 className="gallery-title">Landscape Gallery</h1>
        <p className="gallery-subtitle">Explore our beautiful collection of natural landscapes</p>
        
        {loading ? (
          <div className="gallery-loading">
            <div className="loading-indicator">
              <FolderOpen className="loading-icon" />
              <p>Loading gallery...</p>
            </div>
          </div>
        ) : images.length === 0 ? (
          <div className="gallery-empty">
            <FolderOpen className="empty-icon" />
            <p>No images found in the gallery.</p>
          </div>
        ) : (
          <div className="gallery-grid">
            {images.map((image,index) => (
              <div 
                key={index} 
                className="gallery-item"
                onClick={() => openLightbox(image)}
              >
                <div className="image-container">
                  <img
                    src={image}
                    alt={`image ${index}`}
                    className="gallery-image"
                  />
                  <div className="image-overlay">
                  
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="lightbox"
          onClick={closeLightbox}
        >
          <div 
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt={'image'}
              className="lightbox-image"
            />
            <div className="lightbox-caption">
              <h3></h3>
            </div>
          </div>
          <button 
            className="lightbox-close"
            onClick={closeLightbox}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="close-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}