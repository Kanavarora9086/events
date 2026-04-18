'use client';

import React, { useState, useEffect } from 'react';
import ReviewModal from './ReviewModal';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <div className="logo">CHACHA EVENTS</div>
          <div className="nav-links">
            <a href="#offerings" className="nav-link">Offerings</a>
            <a href="#gallery" className="nav-link">Gallery</a>
            <button 
              onClick={() => setIsReviewModalOpen(true)} 
              className="nav-link"
              style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit' }}
            >
              Reviews
            </button>
            <a href="#book" className="nav-link">Book</a>
          </div>
        </div>
      </nav>

      <ReviewModal 
        isOpen={isReviewModalOpen} 
        onClose={() => setIsReviewModalOpen(false)} 
      />
    </>
  );
}
