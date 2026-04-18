import HeroCarousel from '@/components/HeroCarousel';
import Offerings from '@/components/Offerings';
<<<<<<< HEAD
import ProcessTimeline from '@/components/ProcessTimeline';
import CostEstimator from '@/components/CostEstimator';
import Gallery from '@/components/Gallery';
import EnquiryForm from '@/components/EnquiryForm';
import Reviews from '@/components/Reviews';
import FAQ from '@/components/FAQ';
=======
import Gallery from '@/components/Gallery';
import EnquiryForm from '@/components/EnquiryForm';
import Reviews from '@/components/Reviews';
>>>>>>> c346d3ac954641113eb1b92dc543398da433ba43
import FloatingActionButton from '@/components/FloatingActionButton';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main>
      <Navbar />

      <HeroCarousel />
      <Offerings />
<<<<<<< HEAD
      <ProcessTimeline />
      <CostEstimator />
      <Gallery />
      <Reviews />
      <FAQ />
=======
      <Gallery />
      <Reviews />
>>>>>>> c346d3ac954641113eb1b92dc543398da433ba43
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
<<<<<<< HEAD
            &copy; 2026 Chacha Events Planner. All rights reserved.
=======
            &copy; {new Date().getFullYear()} Chacha Events Planner. All rights reserved.
>>>>>>> c346d3ac954641113eb1b92dc543398da433ba43
          </p>
        </div>
      </footer>
    </main>
  );
}
