import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  const scrollToRooms = () => {
    document.getElementById("rooms").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Discover Excellence</span>
          <h2 className="section-title">A Perfect Place to Remember</h2>
          <p className="section-description">
            Ascot Hotel promises a fresh experience in comfort, care, and
            memorable moments. Located in the heart of Kozhikode, we offer
            unparalleled luxury and hospitality.
          </p>
        </div>

        <div className="about-content">
          <div className="about-grid">
            <motion.div
              className="about-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3>Your Home Away From Home</h3>
              <p>
                Experience one of the best hospitality at our luxurious family
                and business hotel, equipped with large party halls,
                multi-cuisine restaurant, and many other premium facilities.
              </p>

              <div className="about-stats">
                <div className="stat-item">
                  <h4>123</h4>
                  <p>Luxury Rooms</p>
                </div>
                <div className="stat-item">
                  <h4>24/7</h4>
                  <p>Premium Service</p>
                </div>
                <div className="stat-item">
                  <h4>5★</h4>
                  <p>Guest Rating</p>
                </div>
              </div>

              <button className="btn-outline" onClick={scrollToRooms}>
                Explore Rooms
              </button>
            </motion.div>

            <motion.div
              className="about-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img src="/images/3Z4A5800.jpeg" alt="About Ascot Hotel" />
              <div className="image-badge">
                <FontAwesomeIcon icon={faAward} />
                <span>Premium Quality</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
