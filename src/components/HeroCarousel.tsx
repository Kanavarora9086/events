"use client";

"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1583939003509-3286dc53401c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    title: 'Exquisite Event Setups',
    subtitle: 'Creating unforgettable atmospheres for your special day'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1541845157-a6d2d100c931?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    title: 'Authentic Paan & Premium Catering',
    subtitle: 'Culinary excellence & traditional live setups that delight every guest'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2098&q=80',
    title: 'Elegant Counter Setups',
    subtitle: 'Sophisticated aesthetics for welcoming your guests'
  }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-wrapper">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
        >
          <div className="carousel-image-container">
            <img
              src={slide.image}
              alt={slide.title}
              className="carousel-image"
            />
          </div>
        </div>
      ))}
      
      <div className="hero-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1>{slides[currentSlide].title}</h1>
            <p>{slides[currentSlide].subtitle}</p>
            <motion.a 
              href="#book"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book an Appointment
            </motion.a>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="carousel-controls">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
