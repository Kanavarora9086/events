"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

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
        console.error("Submission failed:", errorData);
        setErrorMessage(errorData.details || errorData.error || 'Something went wrong. Please check if the database table exists.');
        setStatus('error');
      }
    } catch (error) {
      console.error("Submit error:", error);
      setErrorMessage('Network error. Please try again later.');
      setStatus('error');
    }
  };

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
        </motion.div>
      </div>
    </section>
  );
}
