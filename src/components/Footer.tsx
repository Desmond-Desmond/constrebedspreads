import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-24">
      <div className="container-luxury py-16 grid gap-10 md:grid-cols-4">
        <div>
          <div className="font-serif text-2xl tracking-wider">CONSTRE</div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-accent mt-1">Bedspreads</div>
          <p className="mt-5 text-sm text-primary-foreground/70 leading-relaxed">
            Curated luxury bedspreads & fabrics, crafted to transform your bedroom into a sanctuary of comfort and elegance.
          </p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-accent mb-5">Shop</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li><Link to="/shop" className="hover:text-accent">All Bedspreads</Link></li>
            <li><Link to="/shop" className="hover:text-accent">Best Sellers</Link></li>
            <li><Link to="/shop" className="hover:text-accent">New Arrivals</Link></li>
            <li><Link to="/shop" className="hover:text-accent">Collections</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-accent mb-5">Contact</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +234 803 831 5509</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> hello@constre.com</li>
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Lagos, Nigeria</li>
            <li><a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Chat on WhatsApp →</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-accent mb-5">Newsletter</h4>
          <p className="text-sm text-primary-foreground/70 mb-4">Receive private offers and new collection previews.</p>
          <form onSubmit={(e) => e.preventDefault()} className="flex border border-primary-foreground/30">
            <input type="email" required placeholder="Your email" className="flex-1 bg-transparent px-3 py-2.5 text-sm placeholder:text-primary-foreground/50 outline-none" />
            <button className="bg-accent text-accent-foreground px-4 text-xs uppercase tracking-wider hover:bg-accent/90">Join</button>
          </form>
          <div className="flex gap-3 mt-5">
            <a href="#" aria-label="Instagram" className="p-2 border border-primary-foreground/20 hover:border-accent hover:text-accent transition-colors"><Instagram className="w-4 h-4" /></a>
            <a href="#" aria-label="Facebook" className="p-2 border border-primary-foreground/20 hover:border-accent hover:text-accent transition-colors"><Facebook className="w-4 h-4" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container-luxury py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Constre Bedspreads. All rights reserved.</p>
          <p>Crafted with care in Nigeria.</p>
        </div>
      </div>
    </footer>
  );
}
