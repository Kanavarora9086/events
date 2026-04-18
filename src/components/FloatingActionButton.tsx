'use client';

import React from 'react';
import { MessageSquare, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FloatingActionButton() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919596172305';
  const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER || '+919596172305';

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="fab-container">
      <motion.button 
        className="fab"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleWhatsApp}
        title="Chat on WhatsApp"
      >
        <MessageSquare size={28} />
      </motion.button>
      
      <motion.button 
        className="fab"
        style={{ backgroundColor: 'var(--secondary-color)' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleCall}
        title="Call Us"
      >
        <Phone size={28} />
      </motion.button>
    </div>
  );
}
