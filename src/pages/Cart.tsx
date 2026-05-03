import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { useCart } from "@/context/CartContext";
import { formatNaira } from "@/data/products";
import { whatsappLink } from "@/lib/whatsapp";
import { MessageCircle, Trash2 } from "lucide-react";
import { useEffect } from "react";

export default function Cart() {
  const { items, remove, total, clear } = useCart();
  useEffect(() => { document.title = "Your Bag — Constre Bedspreads"; }, []);

  const orderMsg = items.length
    ? `Hello Constre Bedspreads, I'd like to order:\n${items.map(i => `• ${i.name} (${i.size}) x${i.qty} — ${formatNaira(i.price * i.qty)}`).join("\n")}\n\nTotal: ${formatNaira(total)}`
    : "Hello Constre Bedspreads, I would like to order a bedspread.";

  return (
    <Layout>
      <section className="container-luxury py-16 min-h-[60vh]">
        <h1 className="font-serif text-4xl md:text-5xl text-primary mb-10">Your Bag</h1>

        {items.length === 0 ? (
          <div className="text-center py-20 border border-border">
            <p className="text-muted-foreground">Your bag is empty.</p>
            <Link to="/shop" className="inline-block mt-6 bg-primary text-primary-foreground px-8 py-3 text-xs uppercase tracking-[0.25em] hover:bg-primary-glow">Continue Shopping</Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-4">
              {items.map(i => (
                <div key={`${i.id}-${i.size}`} className="flex gap-5 border border-border p-4">
                  <img src={i.image} alt={i.name} className="w-24 h-24 object-cover" />
                  <div className="flex-1">
                    <h3 className="font-serif text-xl text-primary">{i.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1 uppercase tracking-[0.2em]">{i.size} • Qty {i.qty}</p>
                    <p className="text-sm text-primary mt-2">{formatNaira(i.price * i.qty)}</p>
                  </div>
                  <button onClick={() => remove(i.id, i.size)} aria-label="Remove" className="text-muted-foreground hover:text-destructive">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
            <aside className="bg-secondary/50 p-8 h-fit space-y-5">
              <h2 className="font-serif text-2xl text-primary">Order Summary</h2>
              <div className="flex justify-between text-sm"><span>Subtotal</span><span>{formatNaira(total)}</span></div>
              <div className="flex justify-between text-sm text-muted-foreground"><span>Delivery</span><span>Calculated on WhatsApp</span></div>
              <div className="border-t border-border pt-5 flex justify-between font-serif text-xl text-primary">
                <span>Total</span><span>{formatNaira(total)}</span>
              </div>
              <a href={whatsappLink(orderMsg)} target="_blank" rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-whatsapp text-white py-4 text-xs uppercase tracking-[0.25em] hover:opacity-90">
                <MessageCircle className="w-4 h-4" /> Checkout on WhatsApp
              </a>
              <button onClick={clear} className="w-full text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-destructive">Clear Bag</button>
            </aside>
          </div>
        )}
      </section>
    </Layout>
  );
}
