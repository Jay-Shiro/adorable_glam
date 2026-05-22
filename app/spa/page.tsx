'use client';

export default function SpaPage() {
  return (
    <main className="page-shell">
      <section className="section-heading">
        <div>
          <h2>Spa & Salon</h2>
          <p>Elevate your at-home rituals with luxurious oils, treatments, and salon-inspired care.</p>
        </div>
      </section>
      <section className="bottom-panel">
        <div className="panel-card">
          <span>✦</span>
          <div>
            <strong>Spa-ready essentials</strong>
            <p>From calming oils to restoration masks, feel refreshed and renewed.</p>
          </div>
        </div>
        <div className="panel-card">
          <span>✿</span>
          <div>
            <strong>Professional results</strong>
            <p>Salon-quality formulas for salon-worthy self care.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
