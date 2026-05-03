import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { Link } from "react-router-dom";
import { products, collections } from "@/data/products";
import heroImg from "@/assets/hero-bedroom.jpg";
import lifestyle1 from "@/assets/lifestyle-1.jpg";
import lifestyle2 from "@/assets/lifestyle-2.jpg";
import lifestyle3 from "@/assets/lifestyle-3.jpg";
import { Award, Leaf, Sparkles, Truck, Star, ArrowRight } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";
import { useEffect } from "react";

const testimonials = [
  { name: "Adaeze O.", location: "Lagos", text: "Absolutely transformed our master bedroom. The fabric is divine and the colours are even richer in person.", rating: 5 },
  { name: "Mr. & Mrs. Bello", location: "Abuja", text: "Bought as a wedding gift and they were stunned. Premium quality from the moment you unwrap it.", rating: 5 },
  { name: "Hotel Bellevue", location: "Port Harcourt", text: "We outfitted 24 suites with Constre. Guest reviews on bedding have skyrocketed since.", rating: 5 },
];

const lifestyleImages = [
  { src: lifestyle1, label: "Heritage" },
  { src: lifestyle2, label: "Classic" },
  { src: lifestyle3, label: "Opulence" },
];

export default function Index() {
  const featured = products.filter(p => p.featured).slice(0, 3);
  const bestsellers = products.filter(p => p.bestseller);

  useEffect(() => {
    document.title = "Constre Bedspreads — Luxury Bedspreads & Fabrics in Nigeria";
    const meta = document.querySelector('meta[name="description"]') || (() => {
      const m = document.createElement("meta"); m.setAttribute("name", "description"); document.head.appendChild(m); return m;
    })();
    meta.setAttribute("content", "Premium bedspreads, fabrics and home textiles. Transform your bedroom into comfort & elegance with Constre Bedspreads. Order via WhatsApp.");
  }, []);

  return (
    <Layout>
      {/* HERO */}
      <section className="relative min-h-[88vh] -mt-20 flex items-center overflow-hidden">
        <img src={heroImg} alt="Luxury bedroom with royal blue silk bedspread" width={1920} height={1080}
          className="absolute inset-0 w-full h-full object-cover animate-fade-in-slow" />
        <div className="absolute inset-0 gradient-hero" />
        <div className="relative container-luxury py-32 max-w-3xl">
          <p className="text-accent text-xs uppercase tracking-[0.4em] mb-6 animate-fade-in">Constre Bedspreads — Est. Lagos</p>
          <h1 className="font-serif text-5xl md:text-7xl text-white leading-[1.05] text-balance animate-fade-in" style={{ animationDelay: "120ms" }}>
            Transform Your Bedroom Into <em className="text-accent not-italic">Comfort & Elegance</em>
          </h1>
          <p className="mt-6 text-white/80 text-lg max-w-xl leading-relaxed animate-fade-in" style={{ animationDelay: "240ms" }}>
            Heirloom-quality bedspreads, hand-finished fabrics, and timeless palettes — crafted for the homes that feel like sanctuaries.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "360ms" }}>
            <Link to="/shop" className="group bg-accent text-accent-foreground px-8 py-4 text-xs uppercase tracking-[0.25em] hover:bg-white transition-colors flex items-center gap-2">
              Shop Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/shop" className="border border-white/40 text-white px-8 py-4 text-xs uppercase tracking-[0.25em] hover:bg-white hover:text-primary transition-colors">
              View Collections
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="border-y border-border bg-secondary">
        <div className="container-luxury py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: Truck, label: "Nationwide Delivery" },
            { icon: Award, label: "Premium Fabrics" },
            { icon: Sparkles, label: "Hand-Finished" },
            { icon: Leaf, label: "Made With Care" },
          ].map((b, i) => (
            <div key={i} className="flex items-center justify-center gap-3">
              <b.icon className="w-5 h-5 text-accent" />
              <span className="text-xs uppercase tracking-[0.2em] text-primary/80">{b.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED COLLECTIONS */}
      <section className="container-luxury py-24">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <p className="text-accent text-xs uppercase tracking-[0.3em] mb-3">Featured Collections</p>
            <h2 className="font-serif text-4xl md:text-5xl text-primary max-w-xl">Crafted in Quiet Luxury</h2>
          </div>
          <Link to="/shop" className="text-sm text-primary hover:text-accent transition-colors uppercase tracking-[0.2em]">All Collections →</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {lifestyleImages.map((c, i) => (
            <Link to="/shop" key={c.label} className="group relative aspect-[4/5] overflow-hidden bg-muted animate-slide-up" style={{ animationDelay: `${i * 100}ms` }}>
              <img src={c.src} alt={c.label} loading="lazy" width={1280} height={896}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <p className="text-accent text-[10px] uppercase tracking-[0.3em]">Collection</p>
                <h3 className="font-serif text-3xl text-white mt-1">{c.label}</h3>
                <span className="inline-block mt-3 text-xs text-white/80 uppercase tracking-[0.2em] border-b border-accent pb-0.5">Explore →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* BEST SELLERS */}
      <section className="bg-secondary/40 py-24">
        <div className="container-luxury">
          <div className="text-center mb-14">
            <p className="text-accent text-xs uppercase tracking-[0.3em] mb-3">Best Sellers</p>
            <h2 className="font-serif text-4xl md:text-5xl text-primary">Loved by Thousands of Homes</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
            {bestsellers.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
          </div>
          <div className="text-center mt-14">
            <Link to="/shop" className="inline-block bg-primary text-primary-foreground px-10 py-4 text-xs uppercase tracking-[0.25em] hover:bg-primary-glow transition-colors">
              Shop All Bedspreads
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="container-luxury py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative aspect-[4/5] overflow-hidden">
          <img src={lifestyle2} alt="Soft ivory bedspread in morning light" loading="lazy" width={1280} height={896}
            className="w-full h-full object-cover" />
          <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-8 shadow-gold hidden md:block">
            <p className="font-serif text-4xl">12+</p>
            <p className="text-[10px] uppercase tracking-[0.25em] mt-1">Years of Craft</p>
          </div>
        </div>
        <div>
          <p className="text-accent text-xs uppercase tracking-[0.3em] mb-3">Why Constre</p>
          <h2 className="font-serif text-4xl md:text-5xl text-primary text-balance">A Standard Beyond the Ordinary</h2>
          <p className="text-muted-foreground mt-5 leading-relaxed">
            From the loom to your bedroom, every Constre piece is held to a quiet but uncompromising standard. We curate fabrics from trusted mills, finish every edge by hand, and inspect each spread before it leaves us.
          </p>
          <ul className="mt-8 space-y-5">
            {[
              ["Premium Fabrics", "Egyptian cotton, mulberry satin, Italian velvet — only the finest."],
              ["Hand-Finished Detailing", "Edges, embroidery and trims completed by skilled artisans."],
              ["Trusted by Hotels", "Chosen by boutique hotels and interior decorators across Nigeria."],
              ["Easy WhatsApp Ordering", "Personal service from selection to delivery, on your own time."],
            ].map(([t, d]) => (
              <li key={t} className="flex gap-4">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-accent shrink-0" />
                <div>
                  <h4 className="font-serif text-xl text-primary">{t}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-primary text-primary-foreground py-24">
        <div className="container-luxury">
          <div className="text-center mb-14">
            <p className="text-accent text-xs uppercase tracking-[0.3em] mb-3">Kind Words</p>
            <h2 className="font-serif text-4xl md:text-5xl">From Homes That Choose Constre</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <figure key={i} className="border border-primary-foreground/15 p-8 hover:border-accent/60 transition-colors animate-slide-up" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="flex gap-1 text-accent mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => <Star key={j} className="w-4 h-4 fill-accent" />)}
                </div>
                <blockquote className="font-serif text-xl leading-snug">"{t.text}"</blockquote>
                <figcaption className="mt-6 text-sm text-primary-foreground/70">
                  <span className="text-accent">{t.name}</span> — {t.location}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-luxury py-24 text-center">
        <p className="text-accent text-xs uppercase tracking-[0.3em] mb-3">Order in Minutes</p>
        <h2 className="font-serif text-4xl md:text-5xl text-primary text-balance max-w-3xl mx-auto">
          Speak to a stylist. Receive your bedspread, beautifully wrapped.
        </h2>
        <a href={whatsappLink()} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-3 mt-10 bg-whatsapp text-white px-10 py-4 text-xs uppercase tracking-[0.25em] hover:opacity-90 transition-opacity">
          Chat on WhatsApp Now
        </a>
      </section>
    </Layout>
  );
}
