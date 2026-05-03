import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const { count } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [loc.pathname]);

  return (
    <header className={cn(
      "fixed top-0 inset-x-0 z-40 transition-all duration-500",
      scrolled ? "bg-background/85 backdrop-blur-xl shadow-soft" : "bg-transparent"
    )}>
      <div className="container-luxury flex items-center justify-between h-20">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="font-serif text-2xl tracking-wider text-primary">CONSTRE</span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-accent">Bedspreads</span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map(l => (
            <NavLink key={l.to} to={l.to} end={l.to === "/"}
              className={({ isActive }) => cn(
                "text-sm tracking-wide uppercase transition-colors relative py-2",
                isActive ? "text-primary" : "text-foreground/70 hover:text-primary"
              )}>
              {({ isActive }) => (
                <>
                  {l.label}
                  <span className={cn("absolute -bottom-0.5 left-0 h-px bg-accent transition-all duration-300",
                    isActive ? "w-full" : "w-0 group-hover:w-full")} />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/cart" className="relative p-2 hover:text-primary transition-colors" aria-label="Cart">
            <ShoppingBag className="w-5 h-5" />
            {count > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-accent text-accent-foreground text-[10px] font-semibold w-5 h-5 rounded-full flex items-center justify-center">
                {count}
              </span>
            )}
          </Link>
          <button className="md:hidden p-2" onClick={() => setOpen(o => !o)} aria-label="Menu">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border animate-fade-in">
          <div className="container-luxury py-6 flex flex-col gap-4">
            {links.map(l => (
              <NavLink key={l.to} to={l.to} end={l.to === "/"}
                className={({ isActive }) => cn("text-base py-2", isActive ? "text-primary font-medium" : "text-foreground/80")}>
                {l.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
