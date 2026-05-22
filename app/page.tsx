'use client';

import { useMemo, useState } from 'react';
import { Heart, Star, ShoppingBag, Sparkles } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import CartDrawer from '@/components/CartDrawer';

const products = [
  {
    id: 1,
    name: 'Radiant Glow Serum',
    category: 'Skincare',
    price: '₦42',
    description: 'Lightweight serum with vitamins B and C for a luminous finish.',
  },
  {
    id: 2,
    name: 'Velvet Matte Lipstick',
    category: 'Makeup',
    price: '₦28',
    description: 'Creamy longwear color with soft, flattering coverage.',
  },
  {
    id: 3,
    name: 'Botanical Spa Oil',
    category: 'Spa & Salon',
    price: '₦35',
    description: 'Hydrating oil blend to soothe and smooth skin before any treatment.',
  },
  {
    id: 4,
    name: 'Glow Ritual Mask',
    category: 'Skincare',
    price: '₦38',
    description: 'Detoxifying clay mask enriched with nutrient-rich botanicals.',
  },
  {
    id: 5,
    name: 'Soft Focus Blush',
    category: 'Makeup',
    price: '₦24',
    description: 'Silky powder that blends beautifully for a natural glow.',
  },
  {
    id: 6,
    name: 'Spa Retreat Candle',
    category: 'Spa & Salon',
    price: '₦22',
    description: 'Signature aroma to create a calm, luxurious at-home ritual.',
  },
];

const categories = ['Skincare', 'Makeup', 'Spa & Salon', 'Brands'];

export default function Home() {
  const [cartItems, setCartItems] = useState<typeof products>([]);
  const [wishlist, setWishlist] = useState<typeof products>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const wishlistCount = wishlist.length;

  const selectedProducts = useMemo(() => products, []);

  const handleAddToCart = (product: (typeof products)[number]) => {
    setCartItems((items) => [...items, product]);
    setCartOpen(true);
  };

  const handleToggleWishlist = (product: (typeof products)[number]) => {
    setWishlist((items) => {
      const exists = items.some((item) => item.id === product.id);
      if (exists) return items.filter((item) => item.id !== product.id);
      return [...items, product];
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const wishlistLabel = wishlistCount > 0 ? `My wishlist (${wishlistCount})` : 'My wishlist';

  return (
    <>
      <main>
        <section className="hero-grid hero-section">
          <div className="hero-copy">
            <p style={{ color: 'var(--accent)', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Beauty essentials
            </p>
            <h1>Curated luxury for every day, from skincare to salon-worthy rituals.</h1>
            <p>Experience an elegant, modern shopping flow with soothing design, fast checkout, and a refined beauty collection.</p>
            <div className="hero-actions">
              <button type="button" className="button-primary">Shop best sellers</button>
              <button type="button" className="button-outline">Explore categories</button>
            </div>
          </div>

          <div className="hero-visual">
            <div className="card-glow">
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', alignItems: 'center' }}>
                <div>
                  <p style={{ margin: '0', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.8rem' }}>New arrival</p>
                  <h3 style={{ margin: '0.75rem 0 0', fontSize: '1.4rem' }}>The Glow Ritual Collection</h3>
                </div>
                <span style={{ color: 'var(--primary)' }}><Sparkles size={28} /></span>
              </div>
              <div className="feature-grid">
                <div className="feature-card">
                  <span>1</span>
                  <div>
                    <strong>Hydrates deeply</strong>
                    <p>Soft textures that absorb quickly without residue.</p>
                  </div>
                </div>
                <div className="feature-card">
                  <span>2</span>
                  <div>
                    <strong>Gentle formulas</strong>
                    <p>Designed to support all skin types and luxurious routines.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="category-strip">
              {categories.map((item) => (
                <span key={item} className="category-pill">{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="skincare" className="section-heading">
          <div>
            <h2>Featured favorites</h2>
            <p>From nourishing serums to luminous makeup, every product is selected with care.</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#111' }}>
            <Star size={18} color="#ffbb00" />
            <span>Top rated beauty picks</span>
          </div>
        </section>

        <section className="product-grid">
          {selectedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAdd={handleAddToCart}
              onToggleWish={handleToggleWishlist}
              wished={wishlist.some((item) => item.id === product.id)}
            />
          ))}
        </section>


        <section className="partners-section">
          <div className="partners-heading">
            <h2>Our partners</h2>
          </div>
          <div className="partner-marquee" aria-label="Partner logos carousel">
            <div className="partner-track">
              {['/zikelLogo.svg', '/taraLogo.svg', '/yangabeautyLogo.svg', '/nubanLogo.svg', '/zaronLogo.svg'].map((logo) => (
                <div key={logo} className="partner-logo">
                  <img src={logo} alt={`${logo.replace('/', '').replace('Logo.svg', '')} logo`} />
                </div>
              ))}
              {['/zikelLogo.svg', '/taraLogo.svg', '/yangabeautyLogo.svg', '/nubanLogo.svg', '/zaronLogo.svg'].map((logo) => (
                <div key={`${logo}-duplicate`} className="partner-logo">
                  <img src={logo} alt={`${logo.replace('/', '').replace('Logo.svg', '')} logo`} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bottom-panel" id="brands">
          <div className="panel-card">
            <span>✦</span>
            <div>
              <strong>Luxury brands, thoughtful curation</strong>
              <p>Discover premium labels and clean beauty essentials crafted for effortless glow.</p>
            </div>
          </div>
          <div className="panel-card">
            <span>♥</span>
            <div>
              <strong>Wishlist ready</strong>
              <p>Keep the items you love close and revisit them anytime from your personalized list.</p>
            </div>
          </div>
        </section>

      </main>

      <CartDrawer
        open={cartOpen}
        items={cartItems}
        onClose={() => setCartOpen(false)}
        onRemove={handleRemoveFromCart}
        onCheckout={() => alert('Checkout complete. Thank you for your order!')}
      />
    </>
  );
}
