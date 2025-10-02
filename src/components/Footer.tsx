import { Instagram, MessageCircle, Mail, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    // Alterei o fundo para 'bg-secondary' (verde) para o texto branco ter contraste
    <footer id="contact" className="relative bg-secondary py-12 text-secondary-foreground">
      <div className="container mx-auto px-6 relative z-10">
       <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-24 max-w-4xl mx-auto text-center md:text-left">



          {/* Coluna 2: Contato */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Contato</h4>
            {/* CORREÇÃO: Adicionando opacidade menor para mais contraste */}
            <div className="space-y-2 opacity-70">
              <a
                href="mailto:contact@sweetsophia.com"
                className="flex items-center gap-2 hover:text-accent transition-colors justify-center md:justify-start"
              >
                <Mail className="h-4 w-4" />
                contact@sweetsophia.com
              </a>
              <a
                href="https://wa.me/5584996786494"
                className="flex items-center gap-2 hover:text-accent transition-colors justify-center md:justify-start"
              >
                <Phone className="h-4 w-4" />
                +55 84 99678-6494
              </a>
            </div>
          </div>

           {/* Coluna 3: Redes Sociais */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Siga-nos</h4>
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://www.instagram.com/sweetbysophiab/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent hover:bg-accent/90 text-accent-foreground p-3 rounded-full transition-all hover:scale-110"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Seção de Copyright */}
        <div className="text-center mt-12 pt-8 border-t border-white/20 opacity-70">
          <p>&copy; 2025 Sweet Sophia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};