import HeroCarousel from '@/components/HeroCarousel';
import Offerings from '@/components/Offerings';
import Gallery from '@/components/Gallery';
import EnquiryForm from '@/components/EnquiryForm';

export default function Home() {
  return (
    <main>
      <nav className="navbar scrolled">
        <div className="container nav-container">
          <div className="logo">CHACHA EVENTS</div>
          <div className="nav-links">
            <a href="#offerings" className="nav-link">Offerings</a>
            <a href="#gallery" className="nav-link">Gallery</a>
            <a href="#book" className="nav-link">Book</a>
          </div>
        </div>
      </nav>

      <HeroCarousel />
      <Offerings />
      <Gallery />
      <EnquiryForm />
      
      <footer className="footer">
        <div className="container">
          <h2>CHACHA EVENTS PLANNER</h2>
          <p style={{ maxWidth: '600px', margin: '1rem auto' }}>
            Elevating your moments into lifelong memories through impeccable 
            catering, sophisticated counter setups, and comprehensive event design.
          </p>
          <p style={{ marginTop: '2rem', fontSize: '0.9rem', opacity: 0.7 }}>
            &copy; {new Date().getFullYear()} Chacha Events Planner. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
