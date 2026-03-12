"use client";

import { motion } from 'framer-motion';

const galleryItems = [
  {
    url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    title: 'Grand Weddings',
    size: 'large'
  },
  {
    url: 'https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    title: 'Catering & Buffets',
    size: 'normal'
  },
  {
    url: 'https://images.unsplash.com/photo-1510076857177-7470076d4098?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    title: 'Traditional Events',
    size: 'normal'
  },
  {
    url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    title: 'Stage & Decor',
    size: 'normal'
  },
  {
    url: '/led-counter.png',
    title: 'Premium Counter Setups',
    size: 'normal'
  },
  {
    url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
    title: 'Candid Moments',
    size: 'normal'
  }
];

export default function Gallery() {
  return (
    <section className="section" id="gallery">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          Moments Captured
        </motion.h2>
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <motion.div 
              key={index} 
              className={`gallery-item ${item.size === 'large' ? 'large' : ''}`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img src={item.url} alt={item.title} />
              <div className="gallery-overlay">
                <span>{item.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
