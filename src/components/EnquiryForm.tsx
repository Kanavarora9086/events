"use client";

import { useState } from 'react';
<<<<<<< HEAD
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, Phone, Calendar, Music, MessageSquare, Send, CheckCircle, Sparkles, ArrowRight, Star } from 'lucide-react';
=======
import { motion } from 'framer-motion';
>>>>>>> c346d3ac954641113eb1b92dc543398da433ba43

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    eventType: 'Wedding',
    message: ''
  });
  const [status, setStatus] = useState<'' | 'submitting' | 'success' | 'error'>('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');
    
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', date: '', eventType: 'Wedding', message: '' });
      } else {
        const errorData = await res.json().catch(() => ({}));
<<<<<<< HEAD
        setErrorMessage(errorData.details || errorData.error || 'Something went wrong.');
        setStatus('error');
      }
    } catch (error) {
=======
        console.error("Submission failed:", errorData);
        setErrorMessage(errorData.details || errorData.error || 'Something went wrong. Please check if the database table exists.');
        setStatus('error');
      }
    } catch (error) {
      console.error("Submit error:", error);
>>>>>>> c346d3ac954641113eb1b92dc543398da433ba43
      setErrorMessage('Network error. Please try again later.');
      setStatus('error');
    }
  };

<<<<<<< HEAD
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="section" id="book" style={{ padding: '10rem 0', background: 'var(--bg-cream)' }}>
      <div className="container">
        <motion.div 
          className="premium-form-split"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Left Side: Imagery & Experience */}
          <div className="form-image-side">
            <img 
              src="/luxury-enquiry.png" 
              alt="Luxury Event" 
              className="form-image-bg"
            />
            <div className="form-image-content">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '0.8rem', 
                  color: 'var(--primary-color)',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '3px',
                  fontSize: '0.8rem',
                  marginBottom: '1.5rem',
                  background: 'rgba(212, 175, 55, 0.15)',
                  padding: '0.5rem 1.2rem',
                  borderRadius: '50px',
                  backdropFilter: 'blur(5px)'
                }}
              >
                <Sparkles size={16} /> Signature Collections
              </motion.div>
              
              <motion.h2 
                style={{ 
                  fontSize: '3.5rem', 
                  marginBottom: '1.5rem', 
                  color: '#ffffff', 
                  lineHeight: '1.1',
                  fontFamily: 'Playfair Display, serif'
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Let Your <span style={{ color: 'var(--primary-color)' }}>Legacy</span> Begin
              </motion.h2>
              
              <motion.p 
                style={{ 
                  fontSize: '1.15rem', 
                  color: 'rgba(255, 255, 255, 0.8)', 
                  marginBottom: '3rem',
                  lineHeight: '1.8'
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Every grand celebration starts with a single vision. Share yours with our master curators and watch as we weave your dreams into a timeless reality.
              </motion.p>

              <div style={{ display: 'flex', gap: '2rem' }}>
                <div style={{ textAlign: 'center' }}>
                  <h4 style={{ color: 'var(--primary-color)', fontSize: '1.5rem', marginBottom: '0.2rem' }}>500+</h4>
                  <p style={{ color: '#ffffff', fontSize: '0.8rem', textTransform: 'uppercase', opacity: 0.7 }}>Events Hosted</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <h4 style={{ color: 'var(--primary-color)', fontSize: '1.5rem', marginBottom: '0.2rem' }}>24/7</h4>
                  <p style={{ color: '#ffffff', fontSize: '0.8rem', textTransform: 'uppercase', opacity: 0.7 }}>Support</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: The Form */}
          <div className="form-content-side">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  style={{ textAlign: 'center', padding: '3rem 0' }}
                >
                  <motion.div 
                    initial={{ rotate: -45, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    style={{ 
                      width: '100px', 
                      height: '100px', 
                      background: 'var(--primary-color)', 
                      borderRadius: '50%', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      margin: '0 auto 2.5rem',
                      color: '#ffffff',
                      boxShadow: '0 20px 40px rgba(212, 175, 55, 0.4)'
                    }}
                  >
                    <CheckCircle size={50} />
                  </motion.div>
                  <h3 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#ffffff' }}>Invitation Sent</h3>
                  <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)', marginBottom: '3rem' }}>
                    Our curators have received your vision. Expect a personalized response within the next 24 hours to begin your journey.
                  </p>
                  <button 
                    className="btn btn-primary" 
                    onClick={() => setStatus('')}
                    style={{ borderRadius: '50px', padding: '1rem 3rem' }}
                  >
                    Send Another Request
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  onSubmit={handleSubmit}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  <motion.h3 
                    variants={itemVariants}
                    style={{ color: '#ffffff', fontSize: '2rem', marginBottom: '2.5rem', borderLeft: '4px solid var(--primary-color)', paddingLeft: '1.5rem' }}
                  >
                    Enquire Now
                  </motion.h3>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                    <motion.div variants={itemVariants} className="premium-form-group">
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        className="premium-input glass-dark gold-border-focus" 
                        placeholder=" " 
                        required 
                        value={formData.name} 
                        onChange={handleChange} 
                        style={{ color: '#ffffff', background: 'rgba(255,255,255,0.05)' }}
                      />
                      <label htmlFor="name" className="premium-label" style={{ color: 'rgba(255,255,255,0.5)' }}>
                        <User size={16} /> Full Name
                      </label>
                    </motion.div>

                    <motion.div variants={itemVariants} className="premium-form-group">
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        className="premium-input glass-dark gold-border-focus" 
                        placeholder=" " 
                        required 
                        value={formData.email} 
                        onChange={handleChange} 
                        style={{ color: '#ffffff', background: 'rgba(255,255,255,0.05)' }}
                      />
                      <label htmlFor="email" className="premium-label" style={{ color: 'rgba(255,255,255,0.5)' }}>
                        <Mail size={16} /> Email Address
                      </label>
                    </motion.div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                    <motion.div variants={itemVariants} className="premium-form-group">
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        className="premium-input glass-dark gold-border-focus" 
                        placeholder=" " 
                        required 
                        value={formData.phone} 
                        onChange={handleChange} 
                        style={{ color: '#ffffff', background: 'rgba(255,255,255,0.05)' }}
                      />
                      <label htmlFor="phone" className="premium-label" style={{ color: 'rgba(255,255,255,0.5)' }}>
                        <Phone size={16} /> Phone Number
                      </label>
                    </motion.div>

                    <motion.div variants={itemVariants} className="premium-form-group">
                      <input 
                        type="date" 
                        id="date" 
                        name="date" 
                        className="premium-input glass-dark gold-border-focus" 
                        placeholder=" " 
                        required 
                        value={formData.date} 
                        onChange={handleChange} 
                        style={{ color: '#ffffff', background: 'rgba(255,255,255,0.05)' }}
                      />
                      <label htmlFor="date" className="premium-label" style={{ color: 'rgba(255,255,255,0.5)' }}>
                        <Calendar size={16} /> Event Date
                      </label>
                    </motion.div>
                  </div>

                  <motion.div variants={itemVariants} className="premium-form-group">
                    <select 
                      id="eventType" 
                      name="eventType" 
                      className="premium-input glass-dark gold-border-focus" 
                      required 
                      value={formData.eventType} 
                      onChange={handleChange}
                      style={{ 
                        appearance: 'none',
                        color: '#ffffff',
                        background: 'rgba(255,255,255,0.05) url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'24\' height=\'24\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%23d4af37\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Cpath d=\'m6 9 6 6 6-6\'/%3E%3C/svg%3E") no-repeat right 1.5rem center',
                        backgroundSize: '1.2rem',
                        paddingRight: '3rem'
                      }}
                    >
                      <option value="Wedding" style={{ background: 'var(--secondary-color)' }}>The Grand Wedding</option>
                      <option value="Corporate" style={{ background: 'var(--secondary-color)' }}>Corporate Excellence</option>
                      <option value="Birthday" style={{ background: 'var(--secondary-color)' }}>Milestone Birthday</option>
                      <option value="Anniversary" style={{ background: 'var(--secondary-color)' }}>Elegant Anniversary</option>
                      <option value="Other" style={{ background: 'var(--secondary-color)' }}>Custom Celebration</option>
                    </select>
                    <label htmlFor="eventType" className="premium-label" style={{ color: 'rgba(255,255,255,0.5)' }}>
                      <Music size={16} /> Selection of Event
                    </label>
                  </motion.div>

                  <motion.div variants={itemVariants} className="premium-form-group">
                    <textarea 
                      id="message" 
                      name="message" 
                      className="premium-input glass-dark gold-border-focus" 
                      placeholder=" " 
                      required 
                      value={formData.message} 
                      onChange={handleChange}
                      style={{ minHeight: '100px', color: '#ffffff', background: 'rgba(255,255,255,0.05)' }}
                    ></textarea>
                    <label htmlFor="message" className="premium-label" style={{ color: 'rgba(255,255,255,0.5)' }}>
                      <MessageSquare size={16} /> Describe your vision...
                    </label>
                  </motion.div>

                  {status === 'error' && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      style={{ color: '#feb2b2', textAlign: 'center', marginBottom: '1.5rem', background: 'rgba(255,0,0,0.1)', padding: '0.8rem', borderRadius: '8px', fontSize: '0.9rem' }}
                    >
                      {errorMessage}
                    </motion.div>
                  )}

                  <motion.div variants={itemVariants} style={{ marginTop: '1rem' }}>
                    <motion.button 
                      whileHover={{ scale: 1.02, translateY: -2 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit" 
                      className="btn btn-primary" 
                      disabled={status === 'submitting'}
                      style={{ 
                        width: '100%',
                        padding: '1.2rem', 
                        fontSize: '1.1rem', 
                        boxShadow: 'var(--shadow-gold)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '1rem'
                      }}
                    >
                      {status === 'submitting' ? (
                        <>Establishing Connection...</>
                      ) : (
                        <>
                          Submit Inquiry <ArrowRight size={20} />
                        </>
                      )}
                    </motion.button>
                  </motion.div>
                  
                  <motion.p 
                    variants={itemVariants}
                    style={{ 
                      textAlign: 'center', 
                      marginTop: '1.5rem', 
                      fontSize: '0.85rem', 
                      color: 'rgba(255,255,255,0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    <Star size={12} fill="var(--primary-color)" color="var(--primary-color)" /> Protected by white-glove security
                  </motion.p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
=======
  return (
    <section className="section" id="book" style={{ padding: '8rem 0', background: '#f8fafc' }}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Enquire & Book
        </motion.h2>
        <motion.div 
          className="form-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="success-message"
              style={{ textAlign: 'center', padding: '2rem 0', color: 'var(--primary-color)' }}
            >
              <h3>Thank You!</h3>
              <p>Your enquiry has been received perfectly.</p>
              <button className="btn btn-secondary" onClick={() => setStatus('')} style={{ marginTop: '1rem' }}>
                Send Another Enquiry
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                <div className="form-group" style={{ flex: '1 1 45%' }}>
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input type="text" id="name" name="name" className="form-input" required value={formData.name} onChange={handleChange} />
                </div>
                <div className="form-group" style={{ flex: '1 1 45%' }}>
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input type="email" id="email" name="email" className="form-input" required value={formData.email} onChange={handleChange} />
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                <div className="form-group" style={{ flex: '1 1 45%' }}>
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input type="tel" id="phone" name="phone" className="form-input" required value={formData.phone} onChange={handleChange} />
                </div>
                <div className="form-group" style={{ flex: '1 1 45%' }}>
                  <label htmlFor="date" className="form-label">Event Date</label>
                  <input type="date" id="date" name="date" className="form-input" required value={formData.date} onChange={handleChange} />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="eventType" className="form-label">Event Type</label>
                <select id="eventType" name="eventType" className="form-input" required value={formData.eventType} onChange={handleChange}>
                  <option value="Wedding">Wedding</option>
                  <option value="Corporate">Corporate Gala</option>
                  <option value="Birthday">Milestone Birthday</option>
                  <option value="Anniversary">Anniversary</option>
                  <option value="Other">Other Elegance</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Event Details & Requests</label>
                <textarea id="message" name="message" className="form-input" required value={formData.message} onChange={handleChange} placeholder="Tell us about your vision..."></textarea>
              </div>

              {status === 'error' && (
                <p style={{ color: 'red', textAlign: 'center', marginBottom: '1rem' }}>{errorMessage}</p>
              )}

              <div className="form-submit-wrapper">
                <button type="submit" className="btn btn-primary" disabled={status === 'submitting'}>
                  {status === 'submitting' ? 'Submitting...' : 'Book Appointment'}
                </button>
              </div>
            </form>
          )}
>>>>>>> c346d3ac954641113eb1b92dc543398da433ba43
        </motion.div>
      </div>
    </section>
  );
}
