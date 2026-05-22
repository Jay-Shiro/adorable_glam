'use client';

import { Heart, ShoppingBag } from 'lucide-react';

type Product = {
  id: number;
  name: string;
  category: string;
  price: string;
  description: string;
};

type Props = {
  product: Product;
  onAdd: (product: Product) => void;
  onToggleWish: (product: Product) => void;
  wished: boolean;
};

export default function ProductCard({ product, onAdd, onToggleWish, wished }: Props) {
  return (
    <article className="product-card">
      <div className="product-meta">
        <span>{product.category}</span>
        <button
          type="button"
          aria-label="Toggle wishlist"
          onClick={() => onToggleWish(product)}
          style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
        >
          <Heart size={20} color={wished ? '#e8178d' : '#6b7280'} fill={wished ? 'currentColor' : 'none'} />
        </button>
      </div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <div className="actions">
        <span className="price">{product.price}</span>
        <button type="button" onClick={() => onAdd(product)}>
          <ShoppingBag size={18} /> Add
        </button>
      </div>
    </article>
  );
}
