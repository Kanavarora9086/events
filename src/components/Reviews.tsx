'use client';

import React, { useState, useEffect } from 'react';
import { Quote, Star, Sparkle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Review {
  name: string;
  comment: string;
  rating: number;
  category: string;
  role?: string;
  created_at?: string;
}

const fallbackReviews: Review[] = [
  {
    name: 'Aanchal Sharma',
    role: 'Bride',
    comment: 'Chacha Events made my wedding a dream! The catering was exceptional, and the decor was beyond what I could have imagined. Truly premium service.',
    rating: 5,
    category: 'Wedding'
  },
  {
    name: 'Rajesh Khanna',
    role: 'Corporate Manager',
    comment: 'Professionalism at its best. The annual corporate gala was handled with such grace and efficiency. The premium counter setup was a hit!',
    rating: 5,
    category: 'Corporate'
  },
  {
    name: 'Priya Verma',
    role: 'Mother of the Groom',
    comment: 'The fire paan and the live counter setup were the talk of the evening. Exceptional attention to detail and traditional values.',
    rating: 5,
    category: 'Sangeet'
  }
];

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const res = await fetch('/api/reviews');
        if (res.ok) {
          const data = await res.json();
          // If we have approved reviews in DB, use them; otherwise use fallbacks
          setReviews(data.length > 0 ? data : fallbackReviews);
        } else {
          setReviews(fallbackReviews);
        }
      } catch (error) {
        console.error("Fetch reviews error:", error);
        setReviews(fallbackReviews);
      } finally {
        setLoading(false);
      }
    }
    fetchReviews();
  }, []);

  return (
    <section className="section" id="reviews" style={{ backgroundColor: '#ffffff', overflow: 'hidden' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{ color: 'var(--primary-color)', display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '1rem' }}
          >
            <Sparkle size={24} fill="var(--primary-color)" />
            <Sparkle size={24} fill="var(--primary-color)" />
            <Sparkle size={24} fill="var(--primary-color)" />
          </motion.div>
          <h2 className="section-title">Enchanted Experiences</h2>
          <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem', opacity: 0.7 }}>
            Read the stories of celebration and luxury from those who chose Chacha Events for their most precious moments.
          </p>
        </div>
        
        {loading ? (
          <div style={{ textAlign: 'center', padding: '5rem' }}>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              style={{ display: 'inline-block', color: 'var(--primary-color)' }}
            >
              <Sparkle size={48} />
            </motion.div>
          </div>
        ) : (
          <div className="reviews-grid">
            <AnimatePresence>
              {reviews.map((review, index) => (
                <motion.div 
                  key={index} 
                  className="review-card glass"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  style={{ 
                    border: '1px solid rgba(212, 175, 55, 0.1)',
                    background: 'white',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <div className="review-quote-icon">
                    <Quote size={40} fill="var(--primary-light)" color="var(--primary-light)" opacity={0.3} />
                  </div>
                  
                  <div className="review-rating" style={{ marginBottom: '1.5rem' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={18} 
                        fill={i < review.rating ? "var(--primary-color)" : "transparent"} 
                        color={i < review.rating ? "var(--primary-color)" : "#e2e8f0"} 
                        strokeWidth={i < review.rating ? 0 : 2}
                      />
                    ))}
                  </div>
                  
                  <p className="review-comment" style={{ 
                    fontFamily: "'Playfair Display', serif", 
                    fontSize: '1.3rem', 
                    fontWeight: 500,
                    lineHeight: '1.6',
                    color: 'var(--secondary-color)',
                    fontStyle: 'normal'
                  }}>
                    "{review.comment}"
                  </p>
                  
                  <div className="review-footer" style={{ borderTop: 'none', paddingTop: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{ 
                        width: '45px', 
                        height: '45px', 
                        background: 'var(--secondary-color)', 
                        borderRadius: '50%', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        color: 'var(--primary-color)',
                        fontWeight: 'bold',
                        fontSize: '1.2rem',
                        fontFamily: "'Playfair Display', serif"
                      }}>
                        {review.name[0]}
                      </div>
                      <div className="review-info">
                        <h4 className="review-name" style={{ marginBottom: '0' }}>{review.name}</h4>
                        <span className="review-role" style={{ fontSize: '0.75rem' }}>
                          {review.role || review.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
}
