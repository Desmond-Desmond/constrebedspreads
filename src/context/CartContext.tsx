import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from "react";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  size: string;
  qty: number;
};

type CartCtx = {
  items: CartItem[];
  add: (item: Omit<CartItem, "qty">, qty?: number) => void;
  remove: (id: string, size: string) => void;
  clear: () => void;
  count: number;
  total: number;
};

const Ctx = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    try { return JSON.parse(localStorage.getItem("constre-cart") || "[]"); } catch { return []; }
  });

  useEffect(() => { localStorage.setItem("constre-cart", JSON.stringify(items)); }, [items]);

  const add: CartCtx["add"] = (item, qty = 1) => {
    setItems(prev => {
      const i = prev.findIndex(p => p.id === item.id && p.size === item.size);
      if (i >= 0) { const copy = [...prev]; copy[i] = { ...copy[i], qty: copy[i].qty + qty }; return copy; }
      return [...prev, { ...item, qty }];
    });
  };
  const remove = (id: string, size: string) => setItems(prev => prev.filter(p => !(p.id === id && p.size === size)));
  const clear = () => setItems([]);

  const value = useMemo<CartCtx>(() => ({
    items, add, remove, clear,
    count: items.reduce((a, b) => a + b.qty, 0),
    total: items.reduce((a, b) => a + b.qty * b.price, 0),
  }), [items]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export const useCart = () => {
  const c = useContext(Ctx);
  if (!c) throw new Error("useCart outside provider");
  return c;
};
