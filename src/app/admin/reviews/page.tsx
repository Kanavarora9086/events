'use client';

import { useState, useEffect } from 'react';
import { Check, X, Trash2, Star, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Review {
  id: string;
  name: string;
  comment: string;
  rating: number;
  category: string;
  is_approved: boolean;
  created_at: string;
}

export default function AdminReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const res = await fetch('/api/admin/reviews');
      if (res.ok) {
        const data = await res.json();
        setReviews(data);
      }
    } catch (error) {
      console.error('Fetch error:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleApproval = async (id: string, currentStatus: boolean) => {
    try {
      const res = await fetch('/api/admin/reviews', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, is_approved: !currentStatus }),
      });

      if (res.ok) {
        setReviews(reviews.map(r => r.id === id ? { ...r, is_approved: !currentStatus } : r));
        setMessage('Status updated successfully');
        setTimeout(() => setMessage(''), 3000);
      }
    } catch (error) {
      console.error('Update error:', error);
    }
  };

  const deleteReview = async (id: string) => {
    if (!confirm('Are you sure you want to delete this review?')) return;

    try {
      const res = await fetch(`/api/admin/reviews?id=${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        setReviews(reviews.filter(r => r.id !== id));
        setMessage('Review deleted');
        setTimeout(() => setMessage(''), 3000);
      }
    } catch (error) {
      console.error('Delete error:', error);
    }
  };

  return (
    <div className="admin-page" style={{ padding: '2rem', minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
          <div>
            <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#111827' }}>Review Moderation</h1>
            <p style={{ color: '#6b7280' }}>Manage client feedback and visibility</p>
          </div>
          <AnimatePresence>
            {message && (
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                style={{ backgroundColor: '#10b981', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
              >
                {message}
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        {loading ? (
          <div style={{ textAlign: 'center', padding: '5rem' }}>Loading reviews...</div>
        ) : reviews.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '5rem', backgroundColor: 'white', borderRadius: '12px', border: '1px solid #e5e7eb' }}>
            <p style={{ color: '#6b7280' }}>No reviews found in the database.</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            {reviews.map((review) => (
              <motion.div 
                key={review.id}
                layout
                style={{ 
                  backgroundColor: 'white', 
                  padding: '1.5rem', 
                  borderRadius: '12px', 
                  border: '1px solid #e5e7eb',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  boxShadow: review.is_approved ? 'none' : '0 0 0 2px #3b82f620'
                }}
              >
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                    <h3 style={{ fontWeight: '600', fontSize: '1.1rem' }}>{review.name}</h3>
                    <span style={{ 
                      fontSize: '0.75rem', 
                      padding: '0.25rem 0.5rem', 
                      borderRadius: '4px', 
                      backgroundColor: review.is_approved ? '#d1fae5' : '#fef3c7',
                      color: review.is_approved ? '#065f46' : '#92400e',
                      fontWeight: '500'
                    }}>
                      {review.is_approved ? 'Approved' : 'Pending'}
                    </span>
                    <span style={{ color: '#9ca3af', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <Clock size={12} />
                      {new Date(review.created_at).toLocaleDateString()}
                    </span>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '0.1rem', marginBottom: '0.75rem' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={14} 
                        fill={i < review.rating ? "#fbbf24" : "none"} 
                        color={i < review.rating ? "#fbbf24" : "#e5e7eb"} 
                      />
                    ))}
                    <span style={{ marginLeft: '0.5rem', fontSize: '0.8rem', color: '#6b7280' }}>{review.category}</span>
                  </div>

                  <p style={{ color: '#4b5563', lineHeight: '1.5', fontSize: '0.95rem' }}>"{review.comment}"</p>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', marginLeft: '2rem' }}>
                  <button 
                    onClick={() => toggleApproval(review.id, review.is_approved)}
                    title={review.is_approved ? "Unapprove" : "Approve"}
                    style={{ 
                      padding: '0.75rem', 
                      borderRadius: '8px', 
                      border: '1px solid #e5e7eb',
                      backgroundColor: review.is_approved ? '#fff' : '#3b82f6',
                      color: review.is_approved ? '#ef4444' : '#fff',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.2s'
                    }}
                  >
                    {review.is_approved ? <X size={20} /> : <Check size={20} />}
                  </button>
                  <button 
                    onClick={() => deleteReview(review.id)}
                    title="Delete"
                    style={{ 
                      padding: '0.75rem', 
                      borderRadius: '8px', 
                      border: '1px solid #e5e7eb',
                      backgroundColor: '#fff',
                      color: '#ef4444',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.2s'
                    }}
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
