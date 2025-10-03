// src/components/Products.tsx

import { ProductCard } from './ProductCard';
import { Product } from '@/contexts/CartContext';
import traditionalBrownie from '@/assets/traditional-brownie.jpg';
import specialBrownie from '@/assets/special-brownie.jpg';

// Estrutura para agrupar produtos por categoria
const productsData: { 
  title: string; 
  subtitle: string; 
  list: Product[];
  // Removida a propriedade 'cta' da interface para simplificar
}[] = [
  {
    title: 'Brownie Tradicional (Base)',
    subtitle: 'Nosso clássico, sem recheio. Perfeito para acompanhar um café ou adicionar o seu toque especial.',
    list: [
      {
        id: '1-base',
        name: 'Brownie Tradicional',
        price: 7.00,
        image: traditionalBrownie,
      },
    ],
  },
  {
    title: 'Brownie com Recheio',
    subtitle: 'O Brownie com a textura perfeita, recheado com os seus sabores favoritos. R$ 12,00 cada.',
    list: [
      { id: '1-ninho', name: 'Ninho', price: 12.00, image: traditionalBrownie },
      { id: '1-ninho-nutella', name: 'Ninho com Nutella', price: 12.00, image: traditionalBrownie },
      { id: '1-brigadeiro', name: 'Brigadeiro', price: 12.00, image: traditionalBrownie },
      { id: '1-dois-amores', name: 'Dois Amores', price: 12.00, image: traditionalBrownie },
    ],
    // Removida a propriedade 'cta' que estava aqui
  },
  {
    title: 'Marmitinhas',
    subtitle: 'Marmitinhas prontas com a combinação perfeita para presentear ou para o seu lanche. R$ 15,00 cada.',
    list: [
      { id: '2-dois-amores', name: 'Marmitinha - Dois Amores', price: 15.00, image: specialBrownie },
      { id: '2-brigadeiro', name: 'Marmitinha - Brigadeiro', price: 15.00, image: specialBrownie },
      { id: '2-ninho', name: 'Marmitinha - Ninho', price: 15.00, image: specialBrownie },
      { id: '2-ninho-nutella', name: 'Marmitinha - Ninho com Nutella', price: 15.00, image: specialBrownie },
    ],
  },
];

export const Products = () => {
  return (
    <section id="products" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-quicksand font-bold text-center text-chocolate mb-4">
          Nossas Delícias
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Cada doce é cuidadosamente feito à mão com ingredientes premium para uma experiência inesquecível.
        </p>

        <div className="space-y-20">
          {productsData.map((group, index) => (
            <div key={index}>
              {/* Título do Grupo */}
              <h3 className="text-3xl md:text-4xl font-quicksand font-bold text-center text-accent mb-2">
                {group.title}
              </h3>
              <p className="text-center text-chocolate-light mb-8 max-w-xl mx-auto">
                {group.subtitle}
              </p>

              {/* Lista de Produtos do Grupo */}
              <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
                {group.list.map((product) => (
                  <div 
                    // Classe de controle do tamanho (5 cards no xl)
                    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-[20%] max-w-[250px]" 
                    key={product.id}
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>

              {/* OBSERVAÇÃO: A lógica de renderização do CTA foi removida aqui, 
                  garantindo que ele não será exibido. */}

            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};