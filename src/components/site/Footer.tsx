import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-border bg-surface/60">
      <div className="absolute inset-x-0 -top-px h-px bg-brand opacity-60" />
      <div className="container-x py-16 grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-2 space-y-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="size-10 rounded-lg bg-brand grid place-items-center font-display font-bold text-white">Ω</div>
            <div>
              <div className="font-display font-bold text-xl">Omega CST</div>
              <div className="text-[11px] font-mono text-muted-foreground">UAE TECHNOLOGY CONSULTING</div>
            </div>
          </Link>
          <p className="text-sm text-muted-foreground max-w-sm">
            We help SMEs and enterprises across the UAE modernise operations through custom software,
            intelligent automation and AI-driven solutions.
          </p>
          <div className="flex gap-3 pt-2">
            {[Linkedin, Facebook, Instagram].map((Icon, i) => (
              <a key={i} href="#" aria-label="social" className="size-9 grid place-items-center rounded-md border border-border hover:bg-white/5 transition">
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <FooterCol title="Services" links={["Technology Consulting","Custom Software","Web Development","Mobile Apps","AI & Data","Automation"]} />
        <FooterCol title="Products" links={["Laundry Management","Production Management","CRM Platform","POS System","Accounting"]} />
        <div className="space-y-3">
          <div className="font-display font-semibold">Contact</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-2"><MapPin className="size-4 mt-0.5 text-secondary" /> Abu Dhabi, United Arab Emirates</li>
            <li className="flex gap-2"><Phone className="size-4 mt-0.5 text-secondary" /> +971 50 000 0000</li>
            <li className="flex gap-2"><Mail className="size-4 mt-0.5 text-secondary" /> hello@omegacst.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-x py-5 flex flex-col sm:flex-row gap-2 items-center justify-between text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Omega CST. All rights reserved.</p>
          <p className="font-mono">Built in the UAE · Engineered for scale</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div className="space-y-3">
      <div className="font-display font-semibold">{title}</div>
      <ul className="space-y-2 text-sm">
        {links.map((l) => (
          <li key={l}><a href="#" className="text-muted-foreground hover:text-white transition">{l}</a></li>
        ))}
      </ul>
    </div>
  );
}
