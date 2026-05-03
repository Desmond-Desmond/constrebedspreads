import { Link } from "react-router-dom";
import { useState } from "react";
import { Product, formatNaira } from "@/data/products";
import { productMessage, whatsappLink } from "@/lib/whatsapp";
import { useCart } from "@/context/CartContext";
import { MessageCircle, ShoppingBag } from "lucide-react";
import { toast } from "sonner";

const SIZES = ["Single", "Queen", "King", "Super King"];

export default function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const [size, setSize] = useState("Queen");
  const { add } = useCart();

  return (
    <article
      className="group relative bg-card flex flex-col animate-fade-in"
      style={{ animationDelay: `${Math.min(index, 8) * 60}ms` }}
    >
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden bg-muted aspect-[4/5]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={1024}
          height={1024}
          className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
        />
        {product.bestseller && (
          <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-[10px] uppercase tracking-[0.2em] px-2.5 py-1">
            Best Seller
          </span>
        )}
      </Link>

      <div className="pt-5 flex flex-col gap-3">
        <div>
          <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{product.collection}</p>
          <Link to={`/product/${product.id}`} className="block mt-1">
            <h3 className="font-serif text-xl text-primary hover:text-accent transition-colors">{product.name}</h3>
          </Link>
          <p className="text-sm text-muted-foreground mt-1 line-clamp-1">{product.description}</p>
        </div>

        <div className="flex items-center justify-between">
          <span className="font-serif text-lg text-primary">{formatNaira(product.price)}</span>
          <select
            value={size}
            onChange={(e) => setSize(e.target.value)}
            aria-label="Select size"
            className="text-xs border border-border bg-transparent px-2 py-1.5 focus:outline-none focus:border-primary"
          >
            {SIZES.map(s => <option key={s}>{s}</option>)}
          </select>
        </div>

        <div className="flex gap-2 pt-1">
          <button
            onClick={() => { add({ id: product.id, name: product.name, price: product.price, image: product.image, size }); toast.success("Added to bag"); }}
            className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em] py-3 hover:bg-primary-glow transition-colors"
          >
            <ShoppingBag className="w-3.5 h-3.5" /> Add
          </button>
          <a
            href={whatsappLink(productMessage(product.name, size))}
            target="_blank" rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-whatsapp text-white text-xs uppercase tracking-[0.2em] py-3 hover:opacity-90 transition-opacity"
          >
            <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
