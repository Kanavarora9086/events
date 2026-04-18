"use client";

<<<<<<< HEAD
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const filterCategories = ['All', 'Wedding', 'Corporate', 'Decor'];
=======
import { motion } from 'framer-motion';
>>>>>>> c346d3ac954641113eb1b92dc543398da433ba43

const galleryItems = [
  {
    url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    title: 'Grand Weddings',
<<<<<<< HEAD
    size: 'large',
    category: 'Wedding'
=======
    size: 'large'
>>>>>>> c346d3ac954641113eb1b92dc543398da433ba43
  },
  {
    url: 'https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    title: 'Catering & Buffets',
<<<<<<< HEAD
    size: 'normal',
    category: 'Corporate'
=======
    size: 'normal'
>>>>>>> c346d3ac954641113eb1b92dc543398da433ba43
  },
  {
    url: 'https://images.unsplash.com/photo-1510076857177-7470076d4098?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    title: 'Traditional Events',
<<<<<<< HEAD
    size: 'normal',
    category: 'Wedding'
=======
    size: 'normal'
>>>>>>> c346d3ac954641113eb1b92dc543398da433ba43
  },
  {
    url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    title: 'Stage & Decor',
<<<<<<< HEAD
    size: 'normal',
    category: 'Decor'
=======
    size: 'normal'
>>>>>>> c346d3ac954641113eb1b92dc543398da433ba43
  },
  {
    url: '/led-counter.png',
    title: 'Premium Counter Setups',
<<<<<<< HEAD
    size: 'normal',
    category: 'Corporate'
=======
    size: 'normal'
>>>>>>> c346d3ac954641113eb1b92dc543398da433ba43
  },
  {
    url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
    title: 'Candid Moments',
<<<<<<< HEAD
    size: 'normal',
    category: 'Wedding'
=======
    size: 'normal'
>>>>>>> c346d3ac954641113eb1b92dc543398da433ba43
  }
];

export default function Gallery() {
<<<<<<< HEAD
  const [filter, setFilter] = useState('All');

  const filteredItems = filter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

=======
>>>>>>> c346d3ac954641113eb1b92dc543398da433ba43
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
<<<<<<< HEAD

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
=======
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
>>>>>>> c346d3ac954641113eb1b92dc543398da433ba43
      </div>
    </section>
  );
}
