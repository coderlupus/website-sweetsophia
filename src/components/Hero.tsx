import { Button } from '@/components/ui/button';
import heroBrownie from '@/assets/hero-brownie.jpg';

export const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-primary via-primary to-pink-soft overflow-hidden">
      <div className="container mx-auto px-6 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-quicksand font-bold text-chocolate mb-6">
            Delícia em cada mordida!
          </h2>
          <p className="text-lg md:text-xl text-chocolate-light mb-8 max-w-lg">
            Descubra o sabor irresistível dos brownies artesanais feitos com amor na Sweet Sophia.
          </p>
          <Button
            onClick={scrollToProducts}
            size="lg"
            className="bg-accent hover:bg-pink-deep text-accent-foreground font-semibold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            Peça Agora
          </Button>
        </div>

        <div className="animate-scale-in">
          <img
            src={heroBrownie}
            alt="Brownie de chocolate delicioso"
            className="w-full h-auto rounded-3xl shadow-2xl hover-lift"
          />
        </div>
      </div>
    </section>
  );
};
