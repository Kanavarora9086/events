const offerings = [
  {
    title: 'Exquisite Catering',
    description: 'Bespoke menus crafted by master chefs, using locally sourced, premium ingredients to delight your palate and elevate your event.',
    imgUrl: 'https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Authentic Paan Setup',
    description: 'A traditional and luxurious live Paan counter featuring a royal setup, fire paan, ice paan, and authentic exotic flavors for your guests.',
    imgUrl: '/paan-setup.png'
  },
  {
    title: 'Event Styling & Decor',
    description: 'Transformative decor, floral arrangements, and architectural lighting that turn ordinary spaces into breathtaking, luxurious experiences.',
    imgUrl: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Premium Counter Setup',
    description: 'Elegant beverage, mocktail, and hors d\'oeuvres stations, designed to seamlessly blend into your theme while providing impeccable service.',
    imgUrl: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Entertainment & Music',
    description: 'Curating the perfect vibe with live bands, traditional dhol, professional DJs, and mesmerizing performance artists.',
    imgUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Photography & Videography',
    description: 'Capturing your precious moments with cinematic precision. Pre-wedding shoots, drone coverage, and candid event photography.',
    imgUrl: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

export default function Offerings() {
  return (
    <section className="section bg-light" id="offerings">
      <div className="container">
        <h2 className="section-title">Our Distinctive Offerings</h2>
        <div className="offerings-grid">
          {offerings.map((item, index) => (
            <div key={index} className="offering-card">
              <div className="offering-img-wrapper">
                <img src={item.imgUrl} alt={item.title} className="offering-img" />
              </div>
              <div className="offering-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
