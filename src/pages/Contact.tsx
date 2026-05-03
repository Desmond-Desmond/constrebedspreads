import { useEffect, useState } from "react";
import { z } from "zod";
import Layout from "@/components/Layout";
import { whatsappLink } from "@/lib/whatsapp";
import { Facebook, Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(5, "Message too short").max(1000),
});

export default function Contact() {
  useEffect(() => { document.title = "Contact — Constre Bedspreads"; }, []);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) { toast.error(r.error.issues[0].message); return; }
    toast.success("Thank you — we'll be in touch shortly.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <Layout>
      <section className="container-luxury py-16 text-center">
        <p className="text-accent text-xs uppercase tracking-[0.3em] mb-3">Get In Touch</p>
        <h1 className="font-serif text-5xl md:text-6xl text-primary">We'd Love to Hear From You</h1>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">From bespoke orders to interior collaborations — our team is here for you.</p>
      </section>

      <section className="container-luxury pb-20 grid lg:grid-cols-2 gap-14">
        <div className="space-y-10">
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-between bg-whatsapp text-white px-7 py-6 hover:opacity-95 transition-opacity">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] opacity-80">Fastest Reply</p>
              <p className="font-serif text-2xl mt-1">Message us on WhatsApp</p>
            </div>
            <MessageCircle className="w-8 h-8" />
          </a>

          <ul className="space-y-5">
            <li className="flex gap-4 items-start">
              <div className="p-3 border border-border"><Phone className="w-4 h-4 text-accent" /></div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Call</p>
                <p className="text-primary font-serif text-xl">+234 803 851 5509</p>
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <div className="p-3 border border-border"><Mail className="w-4 h-4 text-accent" /></div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Email</p>
                <p className="text-primary font-serif text-xl">hello@constre.com</p>
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <div className="p-3 border border-border"><MapPin className="w-4 h-4 text-accent" /></div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Visit</p>
                <p className="text-primary font-serif text-xl">Lagos, Nigeria</p>
              </div>
            </li>
          </ul>

          <div className="flex gap-3">
            <a href="#" aria-label="Instagram" className="p-3 border border-border hover:border-accent hover:text-accent transition-colors"><Instagram className="w-4 h-4" /></a>
            <a href="#" aria-label="Facebook" className="p-3 border border-border hover:border-accent hover:text-accent transition-colors"><Facebook className="w-4 h-4" /></a>
          </div>

          <div className="aspect-[16/10] border border-border overflow-hidden">
            <iframe
              title="Constre Bedspreads location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=3.30%2C6.43%2C3.45%2C6.55&amp;layer=mapnik"
              className="w-full h-full" loading="lazy"
            />
          </div>
        </div>

        <form onSubmit={submit} className="bg-secondary/50 p-8 md:p-10 space-y-5 h-fit">
          <h2 className="font-serif text-3xl text-primary">Send a message</h2>
          <div>
            <label className="text-[10px] uppercase tracking-[0.25em] text-primary/80">Name</label>
            <input value={form.name} onChange={e => setForm({...form, name: e.target.value})} maxLength={100}
              className="w-full mt-2 bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary" />
          </div>
          <div>
            <label className="text-[10px] uppercase tracking-[0.25em] text-primary/80">Email</label>
            <input type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} maxLength={255}
              className="w-full mt-2 bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary" />
          </div>
          <div>
            <label className="text-[10px] uppercase tracking-[0.25em] text-primary/80">Message</label>
            <textarea value={form.message} onChange={e => setForm({...form, message: e.target.value})} rows={5} maxLength={1000}
              className="w-full mt-2 bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary resize-none" />
          </div>
          <button type="submit" className="w-full bg-primary text-primary-foreground py-4 text-xs uppercase tracking-[0.25em] hover:bg-primary-glow transition-colors">
            Send Message
          </button>
        </form>
      </section>
    </Layout>
  );
}
