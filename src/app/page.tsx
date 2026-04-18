import HeroCarousel from '@/components/HeroCarousel';
import Offerings from '@/components/Offerings';
import ProcessTimeline from '@/components/ProcessTimeline';
import CostEstimator from '@/components/CostEstimator';
import Gallery from '@/components/Gallery';
import EnquiryForm from '@/components/EnquiryForm';
import Reviews from '@/components/Reviews';
import FAQ from '@/components/FAQ';
import FloatingActionButton from '@/components/FloatingActionButton';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main>
      <Navbar />

      <HeroCarousel />
      <Offerings />
      <ProcessTimeline />
      <CostEstimator />
      <Gallery />
      <Reviews />
      <FAQ />
      <EnquiryForm />
      
      <FloatingActionButton />
      
      <footer className="footer">
        <div className="container">
          <h2>CHACHA EVENTS PLANNER</h2>
          <p style={{ maxWidth: '600px', margin: '1rem auto' }}>
            Elevating your moments into lifelong memories through impeccable 
            catering, sophisticated counter setups, and comprehensive event design.
          </p>
          <p style={{ marginTop: '2rem', fontSize: '0.9rem', opacity: 0.7 }}>
            &copy; 2026 Chacha Events Planner. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
