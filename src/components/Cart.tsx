import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Cart = ({ isOpen, onClose }: CartProps) => {
  const { items, updateQuantity, removeFromCart, total, clearCart } = useCart();

  const handleCheckout = () => {
    if (items.length === 0) return;

    const orderDetails = items
      .map((item) => `${item.quantity}x ${item.name} - R$ ${item.price * item.quantity}`)
      .join('\n');

    const message = `Olá! Gostaria de fazer um pedido:\n\n${orderDetails}\n\nTotal: R$ ${total.toFixed(2)}`;
    const whatsappUrl = `https://wa.me/5584996786494?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    clearCart();
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Cart Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-96 bg-background shadow-2xl z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <h2 className="text-2xl font-quicksand font-bold text-chocolate">Seu Carrinho</h2>
            <Button onClick={onClose} variant="ghost" size="icon" className="rounded-full">
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <p className="text-center text-muted-foreground mt-8">Seu carrinho está vazio</p>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 bg-muted rounded-2xl p-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 rounded-xl object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-chocolate">{item.name}</h3>
                      <p className="text-accent font-bold">R$ {item.price}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 rounded-full"
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center font-semibold">{item.quantity}</span>
                        <Button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 rounded-full"
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                        <Button
                          onClick={() => removeFromCart(item.id)}
                          variant="ghost"
                          size="icon"
                          className="ml-auto h-8 w-8 rounded-full text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-border p-6 space-y-4">
              <div className="flex justify-between text-lg font-semibold">
                <span>Total:</span>
                <span className="text-accent">R$ {total.toFixed(2)}</span>
              </div>
              <Button
                onClick={handleCheckout}
                className="w-full bg-accent hover:bg-pink-deep text-accent-foreground font-semibold text-lg py-6 rounded-full"
              >
                Finalizar via WhatsApp
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
