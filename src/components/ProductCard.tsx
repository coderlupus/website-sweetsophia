import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useCart, Product } from '@/contexts/CartContext';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} adicionado ao carrinho!`);
  };

  return (
    <Card className="overflow-hidden hover-lift rounded-3xl border-none shadow-[var(--shadow-soft)]">
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-quicksand font-semibold text-chocolate mb-2">
          {product.name}
        </h3>
        <p className="text-2xl font-bold text-accent mb-4">R$ {product.price}</p>
        <Button
          onClick={handleAddToCart}
          className="w-full bg-secondary hover:bg-chocolate-light text-secondary-foreground font-semibold rounded-full"
        >
          Adicionar ao Carrinho
        </Button>
      </div>
    </Card>
  );
};
