"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const filterCategories = ['All', 'Wedding', 'Corporate', 'Decor'];

const galleryItems = [
  {
    url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    title: 'Grand Weddings',
    size: 'large',
    category: 'Wedding'
  },
  {
    url: 'https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    title: 'Catering & Buffets',
    size: 'normal',
    category: 'Corporate'
  },
  {
    url: 'https://images.unsplash.com/photo-1510076857177-7470076d4098?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    title: 'Traditional Events',
    size: 'normal',
    category: 'Wedding'
  },
  {
    url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    title: 'Stage & Decor',
    size: 'normal',
    category: 'Decor'
  },
  {
    url: '/led-counter.png',
    title: 'Premium Counter Setups',
    size: 'normal',
    category: 'Corporate'
  },
  {
    url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
    title: 'Candid Moments',
    size: 'normal',
    category: 'Wedding'
  }
];

export default function Gallery() {
  const [filter, setFilter] = useState('All');

  const filteredItems = filter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

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

        <div className="gallery-filters">
          {filterCategories.map(cat => (
            <button 
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="gallery-grid">
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div 
                layout
                key={item.title} 
                className={`gallery-item ${item.size === 'large' ? 'large' : ''}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
              >
                <img src={item.url} alt={item.title} />
                <div className="gallery-overlay">
                  <span>{item.title}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
