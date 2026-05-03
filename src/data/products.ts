import p1 from "@/assets/product-1.jpg";
import p2 from "@/assets/product-2.jpg";
import p3 from "@/assets/product-3.jpg";
import p4 from "@/assets/product-4.jpg";
import p5 from "@/assets/product-5.jpg";
import p6 from "@/assets/product-6.jpg";
import p7 from "@/assets/product-7.jpg";
import p8 from "@/assets/product-8.jpg";
import p9 from "@/assets/product-9.jpg";
import p10 from "@/assets/product-10.jpg";

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  collection: string;
  fabric: string;
  bestseller?: boolean;
  featured?: boolean;
};

export const products: Product[] = [
  { id: "royal-navy", name: "Royal Navy Damask", description: "Silken damask weave in deep royal blue.", price: 45000, image: p1, collection: "Heritage", fabric: "Premium Polycotton Damask", bestseller: true, featured: true },
  { id: "ivory-quilt", name: "Ivory Cloud Quilt", description: "Soft quilted ivory for understated elegance.", price: 38000, image: p2, collection: "Classic", fabric: "Egyptian Cotton Quilt", bestseller: true, featured: true },
  { id: "azure-bloom", name: "Azure Bloom", description: "Hand-printed florals on a dusty blue base.", price: 42000, image: p3, collection: "Garden", fabric: "Cotton Sateen", featured: true },
  { id: "stone-velvet", name: "Stone Grey Velvet", description: "Plush velvet with embroidered border.", price: 52000, image: p4, collection: "Heritage", fabric: "Italian Velvet", bestseller: true },
  { id: "champagne-satin", name: "Champagne Satin", description: "Silken satin with a soft golden sheen.", price: 48000, image: p5, collection: "Opulence", fabric: "Mulberry Satin", featured: true },
  { id: "blush-lace", name: "Blush Lace Edge", description: "Romantic blush with delicate lace trim.", price: 40000, image: p6, collection: "Romance", fabric: "Cotton Percale" },
  { id: "emerald-jacquard", name: "Emerald Jacquard", description: "Rich emerald jacquard with botanical motifs.", price: 55000, image: p7, collection: "Opulence", fabric: "Jacquard Weave" },
  { id: "white-waffle", name: "White Waffle Weave", description: "Breathable waffle weave in pure white.", price: 35000, image: p8, collection: "Classic", fabric: "Turkish Cotton" },
  { id: "burgundy-paisley", name: "Burgundy Paisley", description: "Bold paisley in deep burgundy hues.", price: 47000, image: p9, collection: "Heritage", fabric: "Cotton Jacquard" },
  { id: "sky-stripe", name: "Sky Stripe Cotton", description: "Crisp pastel stripes for everyday luxury.", price: 32000, image: p10, collection: "Garden", fabric: "Pure Cotton" },
];

export const collections = ["Heritage", "Classic", "Garden", "Opulence", "Romance"];

export const formatNaira = (n: number) => `₦${n.toLocaleString()}`;
