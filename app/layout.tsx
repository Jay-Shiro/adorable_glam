import type { Metadata } from 'next';
import './globals.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Adorable Glam',
  description: 'Elegant beauty ecommerce for skincare, makeup, spa & salon, and curated brands.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <div className="app-content">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
