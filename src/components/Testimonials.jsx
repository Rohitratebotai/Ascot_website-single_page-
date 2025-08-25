import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./Testimonials.css";

const Testimonials = () => {
  const testimonial = {
    text: "Ascot Hotel exceeded all our expectations. The rooms were beautifully designed, incredibly clean, and offered stunning views of the city. Every detail — from the concierge service to the ambient lighting — felt thoughtfully curated. We can't wait to come back!",
    author: "Rahul Menon",
    designation: "Business Traveler",
  };

  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Guest Reviews</span>
          <h2 className="section-title">What Our Guests Say</h2>
        </div>

        <div className="testimonials-slider">
          <div className="testimonial-card active">
            <div className="testimonial-rating">
              {[...Array(5)].map((_, i) => (
                <FontAwesomeIcon key={i} icon={faStar} />
              ))}
            </div>

            <p className="testimonial-text">"{testimonial.text}"</p>

            <div className="testimonial-author">
              <h4>{testimonial.author}</h4>
              <span>{testimonial.designation}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
