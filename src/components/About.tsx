import aboutKitchen from '@/assets/about-kitchen.jpg';

export const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-primary">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="order-2 md:order-1">
            <img
              src={aboutKitchen}
              alt="Cozinha Sweet Sophia"
              className="w-full rounded-3xl shadow-2xl hover-lift"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-quicksand font-bold text-chocolate mb-6">
              Sobre Nós
            </h2>
            <p className="text-lg text-chocolate-light leading-relaxed">
              A Sweet Sophia nasceu do amor pela confeitaria e do sonho de levar sorrisos a cada 
              mordida de brownie. Cada pedaço é feito com ingredientes de alta qualidade e um toque 
              de carinho.
            </p>
            <p className="text-lg text-chocolate-light leading-relaxed mt-4">
              Nossa paixão por criar o brownie perfeito guia tudo o que fazemos. Desde a seleção 
              dos melhores chocolates até o aperfeiçoamento das nossas técnicas de confeitaria, 
              garantimos que cada brownie seja uma experiência deliciosa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
