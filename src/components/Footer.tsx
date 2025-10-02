import { Instagram, MessageCircle, Mail, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="contact" className="relative bg-primary py-12 wave-divider">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center md:text-left">
          <div>
            <h3 className="text-2xl font-quicksand font-bold text-chocolate mb-4">Sweet Sophia</h3>
            <p className="text-chocolate-light">Brownies artesanais feitos com amor</p>
          </div>

          <div>
            <h4 className="font-semibold text-chocolate mb-4">Contato</h4>
            <div className="space-y-2 text-chocolate-light">
              <a
                href="mailto:contact@sweetsophia.com"
                className="flex items-center gap-2 hover:text-accent transition-colors justify-center md:justify-start"
              >
                <Mail className="h-4 w-4" />
                contact@sweetsophia.com
              </a>
              <a
                href="tel:+5584996786494"
                className="flex items-center gap-2 hover:text-accent transition-colors justify-center md:justify-start"
              >
                <Phone className="h-4 w-4" />
                +55 84 99678-6494
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-chocolate mb-4">Siga-nos</h4>
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://www.instagram.com/sweetbysophiab/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent hover:bg-pink-deep text-accent-foreground p-3 rounded-full transition-all hover:scale-110"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/5584996786494"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent hover:bg-pink-deep text-accent-foreground p-3 rounded-full transition-all hover:scale-110"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 pt-8 border-t border-chocolate/20 text-chocolate-light">
          <p>&copy; 2025 Sweet Sophia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
