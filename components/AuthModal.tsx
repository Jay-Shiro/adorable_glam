'use client';

import { useEffect, useState } from 'react';
// @ts-ignore: project may not have @types/react-dom installed in this workspace
import { createPortal } from 'react-dom';

type Props = {
  open: boolean;
  mode: 'signin' | 'signup';
  onClose: () => void;
  onSwitch: () => void;
};

export default function AuthModal({ open, mode, onClose, onSwitch }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted || !open) return null;

  const modal = (
    <div className="modal-container" role="dialog" aria-modal="true" aria-labelledby="auth-title">
      <div className="modal-backdrop" onClick={onClose} />
      <div className="modal" onClick={(event) => event.stopPropagation()}>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close form"
          style={{ position: 'absolute', top: '1rem', right: '1rem', border: 'none', background: 'transparent', cursor: 'pointer', color: '#6b7280' }}
        >
          ✕
        </button>
        <h3 id="auth-title">{mode === 'signin' ? 'Welcome back' : 'Create your account'}</h3>
        <p style={{ color: '#6b7280', marginTop: '0.65rem' }}>
          {mode === 'signin'
            ? 'Sign in to manage orders, wishlist items, and access personalized beauty picks.'
            : 'Create an elegant account to save favorites, checkout faster, and receive exclusive updates.'}
        </p>
        <form>
          {mode === 'signup' && (
            <label>
              Full name
              <input type="text" placeholder="Your full name" />
            </label>
          )}
          <label>
            Email address
            <input type="email" placeholder="you@email.com" />
          </label>
          <label>
            Password
            <input type="password" placeholder="Enter password" />
          </label>
          <button type="button">{mode === 'signin' ? 'Sign in' : 'Create account'}</button>
        </form>
        <div className="switch-mode">
          {mode === 'signin' ? (
            <p>
              New here?{' '}
              <button type="button" onClick={onSwitch}>
                Create account
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{' '}
              <button type="button" onClick={onSwitch}>
                Sign in
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );

  return typeof document !== 'undefined' ? createPortal(modal, document.body) : null;
}
