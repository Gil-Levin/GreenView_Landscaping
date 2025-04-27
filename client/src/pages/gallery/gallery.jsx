import React, { useState, useEffect } from 'react';
import { FolderOpen } from 'lucide-react';
import fs from 'fs';
import path from 'path';
import './gallery.css';

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real application, you would likely use an API endpoint to fetch images
    const loadImages = async () => {
      try {
        // In a production app, you would handle this server-side
        // and expose an API endpoint to get the images
        const photosDir = path.resolve('../../../photos');
        const files = fs.readdirSync(photosDir)
          .filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file))
          .map(file => ({
            src: `/${file}`,
            alt: file.replace(/\.(jpg|jpeg|png|gif)$/i, '').replace(/-/g, ' '),
            id: file
          }));
        
        setImages(files);
      } catch (error) {
        console.error("Error loading images:", error);
      } finally {
        setLoading(false);
      }
    };

    loadImages();
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
            {images.map((image) => (
              <div 
                key={image.id} 
                className="gallery-item"
                onClick={() => openLightbox(image)}
              >
                <div className="image-container">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="gallery-image"
                  />
                  <div className="image-overlay">
                    <p className="image-caption">{image.alt}</p>
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
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="lightbox-image"
            />
            <div className="lightbox-caption">
              <h3>{selectedImage.alt}</h3>
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