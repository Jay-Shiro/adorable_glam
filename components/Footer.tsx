'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-left">
        <Link href="/" className="footer-logo" aria-label="Go to homepage">
          <img src="/logo.svg" alt="Adorable Glam logo" />
          <div className="footer-copy">
            <strong>Adorable Glam</strong>
            <p>Curated beauty essentials and elevated self-care for every day.</p>
          </div>
        </Link>
      </div>
      <div className="footer-links">
        <Link href="/skincare">Skincare</Link>
        <Link href="/makeup">Makeup</Link>
        <Link href="/spa">Spa & Salon</Link>
        <Link href="/brands">Brands</Link>
      </div>
    </footer>
  );
}
