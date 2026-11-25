export default function Aside() {
  return (
    <aside className="sidebar" aria-label="Marketplace information">
      <section className="promo-card promo-card--accent">
        <span className="promo-icon" aria-hidden="true">⌕</span>
        <h2>Find Your Dream Car</h2>
        <p>Browse trusted listings and discover the car that fits your next journey.</p>
      </section>

      <section className="promo-card" id="about">
        <p className="aside-label">Buy with confidence</p>
        <h2>Why Choose Us?</h2>
        <ul className="benefit-list">
          <li><span aria-hidden="true">✓</span> Quality listings</li>
          <li><span aria-hidden="true">✓</span> Clear vehicle details</li>
          <li><span aria-hidden="true">✓</span> Easy car discovery</li>
        </ul>
      </section>

      <section className="promo-card" id="dealers">
        <p className="aside-label">Editor’s selection</p>
        <h2>Featured Vehicles</h2>
        <p>Look for the red Featured badge to find highlighted marketplace listings.</p>
      </section>
    </aside>
  );
}
