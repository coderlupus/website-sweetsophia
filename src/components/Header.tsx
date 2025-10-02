import { useState, useEffect } from 'react';
import { ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';

// 1. Importar a imagem do logo que você adicionou na pasta 'assets'
import logoImage from '@/assets/logoheader.png';

interface HeaderProps {
  onCartClick: () => void;
}

export const Header = ({ onCartClick }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { itemCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* --- ALTERAÇÃO AQUI --- */}
        {/* 2. Substituir o texto H1 pela imagem do logo */}
        <a href="/" className="cursor-pointer">
          <img 
            src={logoImage} 
            alt="Logo Sweet Sophia" 
            className="h-[80px] w-auto" // Você pode ajustar o 'h-12' para o tamanho que preferir (ex: h-10, h-14)
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('home')}
            className="text-foreground hover:text-accent transition-colors font-medium"
          >
            Início
          </button>
          <button
            onClick={() => scrollToSection('products')}
            className="text-foreground hover:text-accent transition-colors font-medium"
          >
            Produtos
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-foreground hover:text-accent transition-colors font-medium"
          >
            Sobre
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-foreground hover:text-accent transition-colors font-medium"
          >
            Contato
          </button>
        </div>

        <Button
          onClick={onCartClick}
          variant="outline"
          size="icon"
          className="relative rounded-full border-2 border-accent hover:bg-accent hover:text-accent-foreground"
        >
          <ShoppingBag className="h-5 w-5" />
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
              {itemCount}
            </span>
          )}
        </Button>
      </nav>
    </header>
  );
};