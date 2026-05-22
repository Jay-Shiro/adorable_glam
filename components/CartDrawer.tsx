'use client';

import { X, Trash2 } from 'lucide-react';

type Product = {
  id: number;
  name: string;
  category: string;
  price: string;
};

type Props = {
  open: boolean;
  items: Product[];
  onClose: () => void;
  onRemove: (id: number) => void;
  onCheckout: () => void;
};

export default function CartDrawer({ open, items, onClose, onRemove, onCheckout }: Props) {
  const total = items.reduce((acc, item) => {
    const numeric = Number(String(item.price).replace(/[^0-9.-]+/g, ''));
    return acc + (Number.isNaN(numeric) ? 0 : numeric);
  }, 0);

  if (!open) return null;
  return (
    <div className="drawer" aria-modal="true">
      <header>
        <div>
          <p>Cart summary</p>
          <h3>My Cart</h3>
        </div>
        <button type="button" onClick={onClose} aria-label="Close cart" style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}>
          <X size={24} />
        </button>
      </header>

      <div className="cart-items">
        {items.length === 0 ? (
          <div className="cart-item">
            <strong>Your cart is empty</strong>
            <small>Browse products and add your favorites.</small>
          </div>
        ) : (
          items.map((item) => (
            <div className="cart-item" key={item.id}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.75rem' }}>
                <strong>{item.name}</strong>
                <button type="button" onClick={() => onRemove(item.id)} aria-label="Remove item" style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}>
                  <Trash2 size={18} color="#6b7280" />
                </button>
              </div>
              <small>{item.category}</small>
              <span className="price">{item.price}</span>
            </div>
          ))
        )}
      </div>

      <div className="checkout">
        <div>
          <small>Total</small>
          <strong>{new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 }).format(total)}</strong>
        </div>
        <button type="button" onClick={onCheckout} disabled={items.length === 0}>
          Checkout
        </button>
      </div>
    </div>
  );
}
