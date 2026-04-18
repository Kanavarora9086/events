"use client";

import { motion } from 'framer-motion';
import { Coffee, PencilRuler, PartyPopper, HeartHandshake } from 'lucide-react';

const steps = [
  {
    icon: <Coffee size={24} />,
    title: 'Initial Consultation',
    description: 'We meet over coffee to discuss your vision, budget, and specific requirements for the big day.'
  },
  {
    icon: <PencilRuler size={24} />,
    title: 'Design & Planning',
    description: 'Our team creates custom mood boards, 3D layouts, and a comprehensive timeline for your approval.'
  },
  {
    icon: <HeartHandshake size={24} />,
    title: 'Vendor Curation',
    description: 'We lock in top-tier caterers, decorators, and entertainers specialized for your theme.'
  },
  {
    icon: <PartyPopper size={24} />,
    title: 'Flawless Execution',
    description: 'On the day, we handle everything from setup to teardown so you can just enjoy the party.'
  }
];

export default function ProcessTimeline() {
  return (
    <section className="section" style={{ background: 'var(--bg-color)' }}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Planning Process
        </motion.h2>
        
        <div className="timeline-container">
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="timeline-icon">
                {step.icon}
              </div>
              <div className="timeline-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
