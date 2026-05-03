import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { products, collections } from "@/data/products";
import { cn } from "@/lib/utils";

export default function Shop() {
  const [filter, setFilter] = useState<string>("All");
  useEffect(() => { document.title = "Shop Bedspreads — Constre"; }, []);
  const filtered = filter === "All" ? products : products.filter(p => p.collection === filter);

  return (
    <Layout>
      <section className="container-luxury pt-12 pb-8 text-center">
        <p className="text-accent text-xs uppercase tracking-[0.3em] mb-3">Shop the Collection</p>
        <h1 className="font-serif text-5xl md:text-6xl text-primary">Bedspreads & Fabrics</h1>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">Curated luxury for every bedroom — from heritage damasks to soft modern weaves.</p>
      </section>

      <section className="container-luxury">
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 border-y border-border py-5 mb-12">
          {["All", ...collections].map(c => (
            <button key={c} onClick={() => setFilter(c)}
              className={cn("text-xs uppercase tracking-[0.2em] px-4 py-2 transition-colors",
                filter === c ? "bg-primary text-primary-foreground" : "text-foreground/70 hover:text-primary")}>
              {c}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
          {filtered.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
        </div>
      </section>
    </Layout>
  );
}
