'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import ReviewForm from './ReviewForm';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReviewModal({ isOpen, onClose }: ReviewModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              backdropFilter: 'blur(5px)',
              zIndex: 2000,
            }}
          />

          {/* Modal Wrapper for Centering */}
          <div 
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 2001,
              padding: '1rem',
              pointerEvents: 'none'
            }}
          >
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              style={{
                width: '100%',
                maxWidth: '550px',
                backgroundColor: 'rgba(255, 255, 255, 0.98)',
                borderRadius: '24px',
                padding: '2.5rem 2rem 2rem',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                maxHeight: '90vh',
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                pointerEvents: 'auto'
              }}
            >
            <button
              onClick={onClose}
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--secondary-color)',
                zIndex: 10,
              }}
            >
              <X size={24} />
            </button>

            <ReviewForm />
          </motion.div>
        </div>
      </>
    )}
  </AnimatePresence>
  );
}
