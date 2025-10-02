import { ProductCard } from './ProductCard';
import { Product } from '@/contexts/CartContext';
import traditionalBrownie from '@/assets/traditional-brownie.jpg';
import specialBrownie from '@/assets/special-brownie.jpg';

const products: Product[] = [
  {
    id: '1',
    name: 'Brownie Tradicional',
    price: 7,
    image: traditionalBrownie,
  },
  {
    id: '2',
    name: 'Brownie Sabor Especial',
    price: 15,
    image: specialBrownie,
  },
];

export const Products = () => {
  return (
    <section id="products" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-quicksand font-bold text-center text-chocolate mb-4">
          Nossos Brownies Especiais
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Cada brownie é cuidadosamente feito à mão com ingredientes premium para uma experiência inesquecível.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
