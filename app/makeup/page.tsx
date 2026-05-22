'use client';

export default function MakeupPage() {
  return (
    <main className="page-shell">
      <section className="section-heading">
        <div>
          <h2>Makeup</h2>
          <p>Explore longwear lipsticks, luminous blushes, and flawless finishing products.</p>
        </div>
      </section>
      <section className="product-grid">
        <div className="product-card">
          <h3>Velvet Lipstick</h3>
          <p>Rich color with a velvety matte finish.</p>
        </div>
        <div className="product-card">
          <h3>Glow Powder</h3>
          <p>Soft-focus radiance to brighten every look.</p>
        </div>
      </section>
    </main>
  );
}
