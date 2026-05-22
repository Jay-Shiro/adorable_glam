'use client';

export default function SkincarePage() {
  return (
    <main className="page-shell">
      <section className="section-heading">
        <div>
          <h2>Skincare</h2>
          <p>Discover cleansers, serums, and rituals designed to restore radiance and balance.</p>
        </div>
      </section>
      <section className="product-grid">
        <div className="product-card">
          <h3>Hydrating Serum</h3>
          <p>Lightweight hydration for smooth, glowing skin.</p>
        </div>
        <div className="product-card">
          <h3>Renewal Mask</h3>
          <p>Detoxifying treatment to brighten and refine.</p>
        </div>
      </section>
    </main>
  );
}
