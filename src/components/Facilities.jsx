import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWifi,
  faConciergeBell,
  faClock,
  faDumbbell,
  faCar,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import "./Facilities.css";

const Facilities = () => {
  const facilities = [
    {
      icon: faWifi,
      title: "Secure Wi-Fi",
      description:
        "High-speed internet connectivity throughout the hotel premises.",
    },
    {
      icon: faConciergeBell,
      title: "Room Service",
      description:
        "24/7 room service with delicious meals delivered to your room.",
    },
    {
      icon: faClock,
      title: "24x7 Reception",
      description: "Round-the-clock front desk service for all your needs.",
    },
    {
      icon: faDumbbell,
      title: "Fitness Center",
      description: "State-of-the-art gym equipment for your workout routine.",
    },
    {
      icon: faCar,
      title: "Parking",
      description: "Secure parking facility for all guests and visitors.",
    },
    {
      icon: faUtensils,
      title: "Multi-Cuisine Restaurant",
      description: "Exquisite dining experience with diverse culinary options.",
    },
  ];

  return (
    <section id="facilities" className="facilities">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Premium Amenities</span>
          <h2 className="section-title">World-Class Facilities</h2>
          <p className="section-description">
            Enjoy our comprehensive range of facilities designed to make your
            stay comfortable and memorable.
          </p>
        </div>

        <div className="facilities-grid">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              className="facility-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="facility-icon">
                <FontAwesomeIcon icon={facility.icon} />
              </div>
              <h3>{facility.title}</h3>
              <p>{facility.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
