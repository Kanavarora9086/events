const galleryItems = [
  {
    url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    title: 'Grand Weddings',
    size: 'large'
  },
  {
    url: 'https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    title: 'Catering & Buffets',
    size: 'normal'
  },
  {
    url: 'https://images.unsplash.com/photo-1510076857177-7470076d4098?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    title: 'Traditional Events',
    size: 'normal'
  },
  {
    url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    title: 'Stage & Decor',
    size: 'normal'
  },
  {
    url: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    title: 'Premium Counter Setups',
    size: 'normal'
  },
  {
    url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
    title: 'Candid Moments',
    size: 'normal'
  }
];

export default function Gallery() {
  return (
    <section className="section" id="gallery">
      <div className="container">
        <h2 className="section-title">Moments Captured</h2>
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div key={index} className={`gallery-item ${item.size === 'large' ? 'large' : ''}`}>
              <img src={item.url} alt={item.title} />
              <div className="gallery-overlay">
                <span>{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
