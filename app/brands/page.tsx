'use client';

export default function BrandsPage() {
  return (
    <main className="page-shell">
      <section className="section-heading">
        <div>
          <h2>Brands</h2>
          <p>Shop curated beauty labels selected for quality, performance, and elegant sensibility.</p>
        </div>
      </section>
      <section className="product-grid">
        <div className="product-card">
          <h3>Adore Beauty</h3>
          <p>Iconic favorites for skin, makeup, and self-care rituals.</p>
        </div>
        <div className="product-card">
          <h3>Studio Luxe</h3>
          <p>Refined formulas designed for everyday glamour.</p>
        </div>
      </section>
    </main>
  );
}
