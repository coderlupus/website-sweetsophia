import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Products } from '@/components/Products';
import { Cart } from '@/components/Cart';
import { About } from '@/components/About';
import { Footer } from '@/components/Footer';
import { CartProvider } from '@/contexts/CartContext';

const Index = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider>
      <div className="min-h-screen">
        <Header onCartClick={() => setIsCartOpen(true)} />
        <Hero />
        <Products />
        <About />
        <Footer />
        <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>
    </CartProvider>
  );
};

export default Index;
