"use client";

import { useState, useEffect } from 'react';
import { motion, animate } from 'framer-motion';
import { Calculator, CheckCircle2, TrendingUp, Info } from 'lucide-react';

const eventTypes = [
  { id: 'wedding', name: 'Wedding / Reception', basePrice: 50000 },
  { id: 'birthday', name: 'Birthday Party', basePrice: 15000 },
  { id: 'corporate', name: 'Corporate Event', basePrice: 25000 },
];

const addonsList = [
  { id: 'catering', name: 'Gourmet Catering', price: 1200, unit: 'per guest' },
  { id: 'paan', name: 'Authentic Paan Setup', price: 8000, unit: 'flat' },
  { id: 'decor', name: 'Premium Decor', price: 75000, unit: 'flat' },
  { id: 'photo', name: 'Photography & Video', price: 15000, unit: 'flat' },
];

function CountUp({ value }: { value: number }) {
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    const controls = animate(displayValue, value, {
      duration: 1,
      onUpdate: (latest) => setDisplayValue(Math.floor(latest)),
    });
    return () => controls.stop();
  }, [value]);

  return <span>₹{displayValue.toLocaleString('en-IN')}</span>;
}

export default function CostEstimator() {
  const [selectedType, setSelectedType] = useState(eventTypes[0]);
  const [guests, setGuests] = useState(100);
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['catering', 'decor']);

  const toggleAddon = (id: string) => {
    setSelectedAddons(prev => 
      prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
    );
  };

  const calculateTotal = () => {
    let total = selectedType.basePrice;
    
    selectedAddons.forEach(addonId => {
      const addon = addonsList.find(a => a.id === addonId);
      if (addon) {
        if (addon.unit === 'per guest') {
          total += addon.price * guests;
        } else {
          total += addon.price;
        }
      }
    });
    
    return total;
  };

  const currentTotal = calculateTotal();

  return (
    <section className="section" id="estimator" style={{ background: 'linear-gradient(to bottom, #ffffff, var(--bg-cream))' }}>
      <div className="container">
        <motion.div 
          className="estimator-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ width: '100%' }}
        >
          <div className="estimator-header" style={{ marginBottom: '5rem', textAlign: 'center' }}>
            <motion.div
              initial={{ scale: 0, rotate: -20 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              style={{ 
                width: '90px', 
                height: '90px', 
                background: 'var(--midnight-gradient)', 
                borderRadius: '24px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '0 auto 2rem',
                color: 'var(--primary-color)',
                boxShadow: '0 20px 40px rgba(15, 23, 42, 0.2)',
                border: '1px solid rgba(212, 175, 55, 0.3)'
              }}
            >
              <Calculator size={45} />
            </motion.div>
            <h2 className="section-title" style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Plan Your Investment</h2>
            <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.25rem', color: 'var(--text-muted)' }}>
              Explore the possibilities and get an immediate tailored estimate for your masterpiece event.
            </p>
          </div>
          
          <div className="estimator-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
            <div className="estimator-controls">
              
              <div className="control-group" style={{ marginBottom: '3rem' }}>
                <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>
                  <TrendingUp size={20} color="var(--primary-color)" /> Event Type
                </label>
                <div className="type-buttons" style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                  {eventTypes.map(type => (
                    <button 
                      key={type.id}
                      className={`filter-btn ${selectedType.id === type.id ? 'active' : ''}`}
                      onClick={() => setSelectedType(type)}
                      style={{ flex: 1, padding: '1rem' }}
                    >
                      {type.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="control-group" style={{ marginBottom: '3.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <label className="form-label" style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--secondary-color)' }}>Guest List Size</label>
                  <motion.span 
                    key={guests}
                    initial={{ scale: 1.2, color: 'var(--primary-color)' }}
                    animate={{ scale: 1, color: '#ffffff' }}
                    style={{ 
                      background: 'var(--secondary-color)', 
                      color: '#ffffff', 
                      padding: '0.4rem 1.2rem', 
                      borderRadius: '12px',
                      fontWeight: 'bold',
                      fontSize: '1.3rem',
                      boxShadow: 'var(--shadow-md)',
                      border: '1px solid var(--primary-color)'
                    }}
                  >{guests}</motion.span>
                </div>
                <input 
                  type="range" 
                  min="20" 
                  max="500" 
                  step="10"
                  value={guests} 
                  onChange={(e) => setGuests(parseInt(e.target.value))}
                  className="range-slider"
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                  <span>Intimate (20)</span>
                  <span>Grand (500+)</span>
                </div>
              </div>

              <div className="control-group">
                <label className="form-label" style={{ fontSize: '1.2rem', marginBottom: '1.8rem', display: 'block', fontWeight: 600, color: 'var(--secondary-color)' }}>Tailored Ambience</label>
                <div className="addons-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '1rem' }}>
                  {addonsList.map(addon => (
                    <motion.div 
                      key={addon.id} 
                      whileHover={{ scale: 1.03, translateY: -2 }}
                      whileTap={{ scale: 0.97 }}
                      className={`addon-card glass ${selectedAddons.includes(addon.id) ? 'active shadow-gold' : ''}`}
                      onClick={() => toggleAddon(addon.id)}
                      style={{ 
                        padding: '1.5rem', 
                        cursor: 'pointer', 
                        borderRadius: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        border: selectedAddons.includes(addon.id) ? '2px solid var(--primary-color)' : '1px solid rgba(15, 23, 42, 0.08)',
                        background: selectedAddons.includes(addon.id) ? 'white' : 'rgba(255, 255, 255, 0.5)',
                        boxShadow: selectedAddons.includes(addon.id) ? 'var(--shadow-gold)' : 'var(--shadow-sm)'
                      }}
                    >
                      <div style={{ 
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        border: '2px solid',
                        borderColor: selectedAddons.includes(addon.id) ? 'var(--primary-color)' : '#cbd5e0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: selectedAddons.includes(addon.id) ? 'var(--primary-color)' : 'transparent',
                        background: selectedAddons.includes(addon.id) ? 'transparent' : 'transparent',
                        transition: 'all 0.3s ease'
                      }}>
                        <CheckCircle2 size={16} strokeWidth={3} />
                      </div>
                      <div className="addon-info">
                        <h4 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.2rem', color: 'var(--secondary-color)' }}>{addon.name}</h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--primary-hover)', fontWeight: 500 }}>₹{addon.price.toLocaleString('en-IN')}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>

            <div className="estimator-summary glass-dark" style={{ 
              padding: '4rem', 
              borderRadius: '32px', 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
              background: 'var(--midnight-gradient)',
              border: '1px solid rgba(212, 175, 55, 0.2)',
              boxShadow: 'var(--shadow-lg)'
            }}>
              <div style={{ position: 'absolute', top: '-10%', right: '-10%', opacity: 0.05, transform: 'rotate(-15deg)' }}>
                <Calculator size={300} color="var(--primary-color)" />
              </div>
              
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h3 style={{ color: 'var(--primary-light)', fontSize: '1.4rem', marginBottom: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px' }}>Investment Estimate</h3>
                <div className="estimated-price" style={{ 
                  fontSize: '4.5rem', 
                  fontWeight: 800, 
                  letterSpacing: '-3px',
                  color: 'white',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '0.5rem'
                }}>
                  <CountUp value={currentTotal} />
                </div>
                
                <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '16px', marginBottom: '2.5rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}>
                    <Info size={20} style={{ marginTop: '3px', color: 'var(--primary-color)' }} />
                    <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', lineHeight: '1.5' }}>
                      This represents a premium value projection based on peak season standards. Final curation may refine this investment.
                    </p>
                  </div>
                </div>

                <motion.a 
                  href="#book" 
                  whileHover={{ scale: 1.05, translateY: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-primary" 
                  style={{ width: '100%', padding: '1.5rem', fontSize: '1.2rem', fontWeight: 700, borderRadius: '16px', boxShadow: 'var(--shadow-gold)' }}
                >
                  Secure This Estimate
                </motion.a>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
