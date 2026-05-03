import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { products, formatNaira } from "@/data/products";
import { productMessage, whatsappLink } from "@/lib/whatsapp";
import { useCart } from "@/context/CartContext";
import { MessageCircle, ShoppingBag, Truck, Sparkles, Award } from "lucide-react";
import { toast } from "sonner";

const SIZES = ["Single", "Queen", "King", "Super King"];

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const [size, setSize] = useState("Queen");
  const { add } = useCart();

  useEffect(() => {
    if (product) document.title = `${product.name} — Constre Bedspreads`;
    window.scrollTo({ top: 0 });
  }, [product]);

  if (!product) return <Layout><div className="container-luxury py-32 text-center">Product not found. <Link to="/shop" className="text-accent">Back to shop</Link></div></Layout>;

  const related = products.filter(p => p.collection === product.collection && p.id !== product.id).slice(0, 3);

  return (
    <Layout>
      <section className="container-luxury py-12">
        <nav className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary">Home</Link> / <Link to="/shop" className="hover:text-primary">Shop</Link> / <span className="text-primary">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-14">
          <div className="grid grid-cols-4 gap-3">
            <div className="col-span-4 aspect-square bg-muted overflow-hidden">
              <img src={product.image} alt={product.name} width={1024} height={1024} className="w-full h-full object-cover" />
            </div>
            {[product.image, product.image, product.image, product.image].map((img, i) => (
              <div key={i} className="aspect-square bg-muted overflow-hidden cursor-pointer">
                <img src={img} alt="" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform" />
              </div>
            ))}
          </div>

          <div>
            <p className="text-accent text-xs uppercase tracking-[0.3em] mb-3">{product.collection} Collection</p>
            <h1 className="font-serif text-4xl md:text-5xl text-primary">{product.name}</h1>
            <p className="font-serif text-3xl text-primary mt-4">{formatNaira(product.price)}</p>
            <p className="text-muted-foreground mt-5 leading-relaxed">{product.description} A signature piece from our atelier — finished by hand and made to live with you for years.</p>

            <div className="mt-8">
              <label className="text-xs uppercase tracking-[0.25em] text-primary/80">Size</label>
              <div className="flex flex-wrap gap-2 mt-3">
                {SIZES.map(s => (
                  <button key={s} onClick={() => setSize(s)}
                    className={`px-5 py-2.5 text-xs uppercase tracking-[0.2em] border transition-colors ${size === s ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-primary"}`}>
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <button onClick={() => { add({ id: product.id, name: product.name, price: product.price, image: product.image, size }); toast.success("Added to bag"); }}
                className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground py-4 text-xs uppercase tracking-[0.25em] hover:bg-primary-glow transition-colors">
                <ShoppingBag className="w-4 h-4" /> Add to Bag
              </button>
              <a href={whatsappLink(productMessage(product.name, size))} target="_blank" rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-whatsapp text-white py-4 text-xs uppercase tracking-[0.25em] hover:opacity-90 transition-opacity">
                <MessageCircle className="w-4 h-4" /> Order via WhatsApp
              </a>
            </div>

            <dl className="mt-10 grid sm:grid-cols-2 gap-6 border-t border-border pt-8">
              <div>
                <dt className="text-[10px] uppercase tracking-[0.3em] text-accent flex items-center gap-2"><Sparkles className="w-3.5 h-3.5" /> Fabric</dt>
                <dd className="text-sm text-foreground mt-1.5">{product.fabric}</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.3em] text-accent flex items-center gap-2"><Award className="w-3.5 h-3.5" /> Care</dt>
                <dd className="text-sm text-foreground mt-1.5">Cool machine wash. Tumble dry low. Iron inside out.</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-[10px] uppercase tracking-[0.3em] text-accent flex items-center gap-2"><Truck className="w-3.5 h-3.5" /> Delivery</dt>
                <dd className="text-sm text-foreground mt-1.5">Lagos: 1–3 working days. Nationwide: 3–7 working days. Free above ₦50,000.</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="container-luxury py-20">
          <h2 className="font-serif text-3xl md:text-4xl text-primary mb-10">You May Also Love</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
            {related.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
          </div>
        </section>
      )}
    </Layout>
  );
}
