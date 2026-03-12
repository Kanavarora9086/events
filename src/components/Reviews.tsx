'use client';

import React, { useState, useEffect } from 'react';
import { Quote, Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface Review {
  name: string;
  comment: string;
  rating: number;
  category: string;
  role?: string;
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
    <section className="section" id="reviews" style={{ backgroundColor: '#fcfaf0' }}>
      <div className="container">
        <h2 className="section-title">What Our Clients Say</h2>
        
        {loading ? (
          <div style={{ textAlign: 'center', padding: '3rem' }}>
            <p style={{ opacity: 0.6 }}>Loading testimonials...</p>
          </div>
        ) : (
          <div className="reviews-grid">
            {reviews.map((review, index) => (
              <motion.div 
                key={index} 
                className="review-card glass"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="review-quote-icon">
                  <Quote size={24} fill="var(--primary-color)" color="var(--primary-color)" opacity={0.3} />
                </div>
                
                <div className="review-rating">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="var(--primary-color)" color="var(--primary-color)" />
                  ))}
                </div>
                
                <p className="review-comment text-italic">"{review.comment}"</p>
                
                <div className="review-footer">
                  <div className="review-info">
                    <h4 className="review-name">{review.name}</h4>
                    <span className="review-role">
                      {review.role ? `${review.role} • ` : ''}{review.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
