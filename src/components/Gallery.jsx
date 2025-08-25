import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Gallery.css";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      src: "/images/3Z4A5771%20.jpeg",
      alt: "Hotel Exterior",
      title: "Hotel Exterior",
    },
    {
      src: "/images/3Z4A5779%20.jpeg",
      alt: "Hotel Interior",
      title: "Hotel Interior",
    },
    {
      src: "/images/3Z4A5788.jpeg",
      alt: "Hotel Room",
      title: "Hotel Room",
    },
    {
      src: "/images/3Z4A5800.jpeg",
      alt: "Hotel Facilities",
      title: "Hotel Facilities",
    },
    {
      src: "/images/3Z4A5814.jpeg",
      alt: "Hotel Suite",
      title: "Hotel Suite",
    },
  ];

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Visual Journey</span>
          <h2 className="section-title">Hotel Gallery</h2>
          <p className="section-description">
            Take a visual tour of our beautiful hotel and premium amenities.
          </p>
        </div>

        <div className="gallery-grid">
          {images.map((image, index) => (
            <div
              key={index}
              className="gallery-item"
              onClick={() => openLightbox(image)}
            >
              <img src={image.src} alt={image.alt} />
              <div className="gallery-overlay">
                <FontAwesomeIcon icon={faSearchPlus} />
                <span>{image.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content">
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <button className="lightbox-close" onClick={closeLightbox}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <div className="lightbox-title">{selectedImage.title}</div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
