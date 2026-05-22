'use client';

import Link from 'next/link';
import { useState } from 'react';
import AuthModal from './AuthModal';

export default function NavBar() {
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const [menuOpen, setMenuOpen] = useState(false);

  const openAuth = (mode: 'signin' | 'signup') => {
    setAuthMode(mode);
    setAuthOpen(true);
    setMenuOpen(false);
  };

  const handleSwitchMode = () => {
    setAuthMode((current) => (current === 'signin' ? 'signup' : 'signin'));
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="site-header__overlay" />
      <nav className="nav-shell" aria-label="Primary navigation">
        <Link href="/" className="branding logo-large" aria-label="Go to homepage">
          <img src="/logo.svg" alt="Adorable Glam logo" />
          <div className="brand-copy">
            <strong>ADORABLE GLAM</strong>
            <span>your beauty hub</span>
          </div>
        </Link>

        <button
          type="button"
          className="mobile-menu-button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          ☰
        </button>

        <div className="nav-links">
          <Link href="/skincare">Skincare</Link>
          <Link href="/makeup">Makeup</Link>
          <Link href="/spa">Spa & Salon</Link>
          <Link href="/brands">Brands</Link>
          <button type="button" className="button-secondary" onClick={() => openAuth('signin')}>
            Sign in
          </button>
          <button type="button" className="button-primary" onClick={() => openAuth('signup')}>
            Create account
          </button>
        </div>
      </nav>

      {menuOpen && (
        <>
          <div className="mobile-menu-backdrop" onClick={() => setMenuOpen(false)} />
          <aside className="mobile-nav-panel" role="dialog" aria-modal="true" aria-label="Mobile navigation">
            <button type="button" className="mobile-menu-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">
              ✕
            </button>
            <nav className="mobile-nav-links">
              <Link href="/skincare" onClick={() => setMenuOpen(false)}>
                Skincare
              </Link>
              <Link href="/makeup" onClick={() => setMenuOpen(false)}>
                Makeup
              </Link>
              <Link href="/spa" onClick={() => setMenuOpen(false)}>
                Spa & Salon
              </Link>
              <Link href="/brands" onClick={() => setMenuOpen(false)}>
                Brands
              </Link>
            </nav>
            <div className="mobile-auth-actions">
              <button type="button" className="button-secondary" onClick={() => openAuth('signin')}>
                Sign in
              </button>
              <button type="button" className="button-primary" onClick={() => openAuth('signup')}>
                Create account
              </button>
            </div>
          </aside>
        </>
      )}

      <AuthModal open={authOpen} mode={authMode} onClose={() => setAuthOpen(false)} onSwitch={handleSwitchMode} />
    </header>
  );
}
