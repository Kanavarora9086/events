"use client";

import { useState } from 'react';
<<<<<<< HEAD
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, Send, Sparkles, User, MessageCircle } from 'lucide-react';
=======
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
>>>>>>> c346d3ac954641113eb1b92dc543398da433ba43

export default function ReviewForm() {
  const [formData, setFormData] = useState({
    name: '',
    rating: 5,
    comment: '',
    category: 'Wedding'
  });
  const [status, setStatus] = useState<'' | 'submitting' | 'success' | 'error'>('');
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', rating: 5, comment: '', category: 'Wedding' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Submit error:", error);
      setStatus('error');
    }
  };

  return (
<<<<<<< HEAD
    <div className="glass" style={{ 
      padding: '4rem', 
      borderRadius: 'var(--border-radius-lg)', 
      border: '1px solid rgba(212, 175, 55, 0.15)',
      background: 'rgba(255, 255, 255, 0.98)',
      boxShadow: 'var(--shadow-lg)'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h3 className="text-gold-gradient" style={{ 
          fontSize: '2.2rem',
          marginBottom: '0.5rem',
          fontFamily: "'Playfair Display', serif"
        }}>
          Share Your Story
        </h3>
        <p style={{ opacity: 0.6 }}>Your feedback is the heart of our service.</p>
      </div>
      
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div 
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            style={{ textAlign: 'center', padding: '2rem 1rem' }}
          >
            <motion.div 
              initial={{ rotate: -10, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              style={{ 
                width: '80px', 
                height: '80px', 
                background: 'var(--primary-color)', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '0 auto 2rem',
                color: '#ffffff',
                boxShadow: 'var(--shadow-gold)'
              }}
            >
              <Sparkles size={40} />
            </motion.div>
            <h4 style={{ color: 'var(--secondary-color)', fontSize: '1.8rem', marginBottom: '0.5rem' }}>Splendid!</h4>
            <p style={{ opacity: 0.8, fontSize: '1.1rem' }}>Your testimonial has been submitted for a brief review by our concierge.</p>
            <button 
              className="btn btn-secondary" 
              onClick={() => setStatus('')} 
              style={{ marginTop: '2.5rem', borderRadius: '50px', width: '100%' }}
            >
              Add Another Memory
            </button>
          </motion.div>
        ) : (
          <motion.form 
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            <div className="premium-form-group">
              <input 
                type="text" 
                className="premium-input" 
                placeholder=" "
                required 
                value={formData.name} 
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              <label className="premium-label"><User size={14} style={{ marginRight: '6px' }} /> Full Name</label>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem' }}>
              <div className="premium-form-group">
                <select 
                  className="premium-input" 
                  value={formData.category} 
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                  style={{ appearance: 'none' }}
                >
                  <option value="Wedding">Wedding</option>
                  <option value="Corporate">Corporate</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Sangeet">Sangeet</option>
                  <option value="Other">Other</option>
                </select>
                <label className="premium-label">Event Category</label>
              </div>

              <div style={{ paddingTop: '0.5rem' }}>
                <label style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary-color)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem', display: 'block' }}>Excellence Rating</label>
                <div style={{ display: 'flex', gap: '0.4rem' }}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <motion.div
                      key={star}
                      whileHover={{ scale: 1.3, rotate: 15 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setFormData({...formData, rating: star})}
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      style={{ cursor: 'pointer' }}
                    >
                      <Star 
                        size={32}
                        fill={(hoveredRating || formData.rating) >= star ? "var(--primary-color)" : "transparent"}
                        color={(hoveredRating || formData.rating) >= star ? "var(--primary-color)" : "#cbd5e0"}
                        strokeWidth={(hoveredRating || formData.rating) >= star ? 0 : 2}
                        style={{ filter: (hoveredRating || formData.rating) >= star ? 'drop-shadow(0 0 8px rgba(212, 175, 55, 0.5))' : 'none' }}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <div className="premium-form-group">
              <textarea 
                className="premium-input" 
                placeholder=" "
                required 
                rows={4}
                value={formData.comment} 
                onChange={(e) => setFormData({...formData, comment: e.target.value})}
                style={{ resize: 'none' }}
              />
              <label className="premium-label"><MessageCircle size={14} style={{ marginRight: '6px' }} /> Describe Your Experience</label>
            </div>

            {status === 'error' && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                style={{ color: 'var(--accent-color)', textAlign: 'center', fontSize: '0.95rem', background: '#fffafa', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(239, 68, 68, 0.1)' }}
              >
                Our concierge service is currently offline. Please try again soon.
              </motion.div>
            )}

            <div style={{ marginTop: '1.5rem' }}>
              <motion.button 
                whileHover={{ scale: 1.02, translateY: -2 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                className="btn btn-primary" 
                disabled={status === 'submitting'}
                style={{ width: '100%', padding: '1.4rem', fontSize: '1.2rem', borderRadius: '50px', boxShadow: 'var(--shadow-gold)' }}
              >
                {status === 'submitting' ? 'Submitting Testimonial...' : (
                  <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem' }}>
                    Publish Experience <Send size={20} />
                  </span>
                )}
              </motion.button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
=======
    <div style={{ padding: '0.5rem' }}>
      <h3 style={{ 
        textAlign: 'center', 
        marginBottom: '2rem', 
        color: 'var(--secondary-color)',
        fontSize: '1.75rem',
        letterSpacing: '-0.5px'
      }}>
        Share Your Experience
      </h3>
      
      {status === 'success' ? (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{ textAlign: 'center', padding: '3rem 1rem' }}
        >
          <div style={{ 
            width: '60px', 
            height: '60px', 
            background: '#e6fffa', 
            borderRadius: '50%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            margin: '0 auto 1.5rem',
            color: '#38b2ac'
          }}>
            <Quote size={30} />
          </div>
          <h4 style={{ color: 'var(--secondary-color)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>Review Submitted!</h4>
          <p style={{ opacity: 0.8 }}>Thank you! Your review has been received and is pending approval from our team.</p>
          <button 
            className="btn btn-secondary" 
            onClick={() => setStatus('')} 
            style={{ marginTop: '2rem', width: '100%' }}
          >
            Submit Another
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label" style={{ fontSize: '0.9rem', opacity: 0.7 }}>Full Name</label>
            <input 
              type="text" 
              className="form-input" 
              placeholder="Your name"
              required 
              value={formData.name} 
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              style={{ padding: '0.875rem 1rem' }}
            />
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <div className="form-group" style={{ flex: '1 1 200px', marginBottom: 0 }}>
              <label className="form-label" style={{ fontSize: '0.9rem', opacity: 0.7 }}>Event Type</label>
              <select 
                className="form-input" 
                value={formData.category} 
                onChange={(e) => setFormData({...formData, category: e.target.value})}
                style={{ cursor: 'pointer', padding: '0.875rem 1rem' }}
              >
                <option value="Wedding">Wedding</option>
                <option value="Corporate">Corporate</option>
                <option value="Birthday">Birthday</option>
                <option value="Sangeet">Sangeet</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group" style={{ flex: '1 1 150px', marginBottom: 0 }}>
              <label className="form-label" style={{ fontSize: '0.9rem', opacity: 0.7 }}>Rating</label>
              <div style={{ display: 'flex', gap: '0.25rem', marginTop: '0.5rem' }}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <motion.div
                    key={star}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setFormData({...formData, rating: star})}
                    onMouseEnter={() => setHoveredRating(star)}
                    onMouseLeave={() => setHoveredRating(0)}
                    style={{ cursor: 'pointer' }}
                  >
                    <Star 
                      size={24}
                      fill={(hoveredRating || formData.rating) >= star ? "var(--primary-color)" : "rgba(0,0,0,0.05)"}
                      color={(hoveredRating || formData.rating) >= star ? "var(--primary-color)" : "#e2e8f0"}
                      strokeWidth={2}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label" style={{ fontSize: '0.9rem', opacity: 0.7 }}>Your Story</label>
            <textarea 
              className="form-input" 
              placeholder="Tell us about the highlights of your event..."
              required 
              rows={5}
              value={formData.comment} 
              onChange={(e) => setFormData({...formData, comment: e.target.value})}
              style={{ padding: '0.875rem 1rem', resize: 'none' }}
            />
          </div>

          {status === 'error' && (
            <motion.p 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              style={{ color: '#e53e3e', textAlign: 'center', fontSize: '0.9rem', background: '#fff5f5', padding: '0.75rem', borderRadius: '8px' }}
            >
              Network error. Please try again.
            </motion.p>
          )}

          <div style={{ marginTop: '0.5rem' }}>
            <button 
              type="submit" 
              className="btn btn-primary" 
              disabled={status === 'submitting'}
              style={{ width: '100%', padding: '1rem' }}
            >
              {status === 'submitting' ? 'Submitting...' : 'Post Your Review'}
            </button>
          </div>
        </form>
      )}
>>>>>>> c346d3ac954641113eb1b92dc543398da433ba43
    </div>
  );
}
