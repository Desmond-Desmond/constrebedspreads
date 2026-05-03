import { useEffect } from "react";
import Layout from "@/components/Layout";
import lifestyle1 from "@/assets/lifestyle-1.jpg";
import lifestyle2 from "@/assets/lifestyle-2.jpg";
import lifestyle3 from "@/assets/lifestyle-3.jpg";

export default function About() {
  useEffect(() => { document.title = "About — Constre Bedspreads"; }, []);
  return (
    <Layout>
      <section className="container-luxury py-20 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <p className="text-accent text-xs uppercase tracking-[0.3em] mb-3">Our Story</p>
          <h1 className="font-serif text-5xl md:text-6xl text-primary text-balance">Where Comfort Meets Quiet Luxury</h1>
          <p className="text-muted-foreground mt-6 leading-relaxed">
            Constre Bedspreads began with a simple belief: that the bedroom should be the most beautiful room in the home. From a small studio in Lagos, we set out to source the world's finest fabrics and reinterpret them for the African home — bold yet timeless, opulent yet livable.
          </p>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Over a decade later, every Constre spread is still cut, finished and inspected by hands that care. We are family-run, design-led, and proudly Nigerian.
          </p>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden">
          <img src={lifestyle1} alt="Crafted bedroom interior" loading="lazy" width={1280} height={896} className="w-full h-full object-cover" />
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-24">
        <div className="container-luxury text-center max-w-3xl">
          <p className="text-accent text-xs uppercase tracking-[0.3em] mb-3">Our Mission</p>
          <h2 className="font-serif text-4xl md:text-5xl text-balance">To dress every Nigerian home in the comfort it deserves.</h2>
          <p className="mt-6 text-primary-foreground/80 leading-relaxed">
            We exist to make luxury bedding accessible — without compromise. Beautiful design, premium fabric, fair pricing and the personal attention of a small atelier.
          </p>
        </div>
      </section>

      <section className="container-luxury py-24 grid md:grid-cols-3 gap-6">
        {[
          { img: lifestyle2, title: "Quality Assurance", desc: "Every piece passes a 12-point inspection before it leaves us — fabric, weight, stitching, trims and finish." },
          { img: lifestyle3, title: "Considered Design", desc: "Our colours and prints are developed in-house and tested across real homes and natural light." },
          { img: lifestyle1, title: "Lasting Craft", desc: "We choose long-staple fibres and reinforced stitching so that your bedspread softens beautifully with age." },
        ].map((b, i) => (
          <article key={i} className="group">
            <div className="aspect-[4/5] overflow-hidden bg-muted mb-5">
              <img src={b.img} alt={b.title} loading="lazy" width={1280} height={896}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            </div>
            <h3 className="font-serif text-2xl text-primary">{b.title}</h3>
            <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{b.desc}</p>
          </article>
        ))}
      </section>
    </Layout>
  );
}
