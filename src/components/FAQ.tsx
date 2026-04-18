"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "How far in advance should we book your services?",
    answer: "For full-service wedding planning, we recommend booking 8-12 months in advance. For smaller corporate events or parties, 2-3 months is usually sufficient, though earlier is always better to secure your preferred date."
  },
  {
    question: "Do you handle custom themes or only specific styles?",
    answer: "We absolutely love custom themes! Our design team works closely with you to bring your unique vision to life, whether it's a traditional royal setup or a modern minimalist aesthetic."
  },
  {
    question: "Is there a minimum budget required to work with you?",
    answer: "We offer various packages tailored to different needs. While we specialize in premium experiences, we can customize certain services like our Authentic Paan Setup or specific Decor elements if you already have other vendors."
  },
  {
    question: "Do you offer destination event planning?",
    answer: "Yes, we handle destination events. Our team manages all logistics, from venue scouting and travel arrangements for vendors to executing the perfect event at your dream location."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="section bg-light" id="faq">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Frequently Asked Questions
        </motion.h2>
        
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => toggleAccordion(index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <ChevronDown 
                  className={`faq-icon ${activeIndex === index ? 'rotate' : ''}`} 
                  size={24} 
                />
              </div>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div 
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
