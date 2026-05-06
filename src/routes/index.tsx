import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, Sparkles, Code2, Globe, Smartphone, Brain, Workflow,
  CheckCircle2, XCircle, ShoppingBag, Shirt, Truck, Factory, UtensilsCrossed,
  Stethoscope, Users, Store, Compass, Palette, Hammer, Plug, GraduationCap, LifeBuoy,
  MapPin, Shield, Wallet, Rocket, Layers, HeartHandshake, BarChart3, Database,
} from "lucide-react";
import { Counter } from "@/components/site/Counter";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Omega CST — Custom Software, Automation & AI in the UAE" },
      { name: "description", content: "UAE-based technology consultancy delivering custom software, automation and AI for SMEs and enterprises in Abu Dhabi and Dubai." },
      { property: "og:title", content: "Omega CST — UAE Technology Consulting" },
      { property: "og:description", content: "Custom software, automation & AI solutions built for the UAE market." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ProblemSolution />
      <Services />
      <Products />
      <Industries />
      <Process />
      <WhyUs />
      <CaseStudies />
      <CTASection />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden noise min-h-[88vh] flex items-center">
      <div className="absolute inset-0 bg-mesh animate-drift" />
      <div className="absolute inset-0 grid-pattern opacity-40" />
      {/* skyline silhouette */}
      <svg className="absolute bottom-0 inset-x-0 w-full h-40 opacity-30" viewBox="0 0 1440 200" preserveAspectRatio="none">
        <path fill="url(#g)" d="M0 200V120l40-10v-30l30 10V80l25 5V60l30 10V40l40 15V90l30-10V60l25 10V40l40 10V80l30-15V40l40 10V100l25-10V60l40 10V100l30-20V60l30 10V90l40-10V60l25 10V100l30-10V40l40 10V90l30-10V60l40 10V100l25-15V60l30 10V90l40-10V60l30 15V100l25-10V60l40 10V100l30-15V60l40 10V120l30-10V70l25 10V120l40-10V200z"/>
        <defs><linearGradient id="g" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#0066FF"/><stop offset="1" stopColor="#04071A"/></linearGradient></defs>
      </svg>

      <div className="container-x relative z-10 grid lg:grid-cols-2 gap-12 items-center py-20">
        <div className="space-y-7">
          <span className="chip animate-fade-up"><Sparkles className="size-3.5 text-secondary" /> UAE-BASED · 12+ YEARS</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.05] tracking-tight">
            <span className="block animate-fade-up" style={{ animationDelay: "0ms" }}>Custom Software,</span>
            <span className="block animate-fade-up" style={{ animationDelay: "120ms" }}>Automation &amp;</span>
            <span className="block text-gradient animate-fade-up" style={{ animationDelay: "240ms" }}>AI Solutions</span>
            <span className="block animate-fade-up text-muted-foreground text-2xl md:text-3xl font-medium mt-3" style={{ animationDelay: "360ms" }}>
              for growing businesses in the UAE
            </span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl animate-fade-up" style={{ animationDelay: "480ms" }}>
            We help SMEs and enterprises modernise operations, automate workflows and scale with intelligent technology — engineered locally in Abu Dhabi.
          </p>
          <div className="flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: "600ms" }}>
            <Link to="/contact" className="btn-primary">Book Free Consultation <ArrowRight className="size-4" /></Link>
            <Link to="/services" className="btn-outline">Explore Services</Link>
          </div>
          <div className="flex flex-wrap gap-2 pt-2 animate-fade-up" style={{ animationDelay: "720ms" }}>
            <span className="chip">12+ YEARS EXPERIENCE</span>
            <span className="chip">UAE-BASED TEAM</span>
            <span className="chip">50+ PROJECTS</span>
          </div>
        </div>

        <HeroMockup />
      </div>
    </section>
  );
}

function HeroMockup() {
  return (
    <div className="relative h-[480px] lg:h-[560px]">
      {/* Glow disc */}
      <div className="absolute inset-0 -z-0 m-auto size-[420px] rounded-full bg-brand opacity-20 blur-3xl" />
      {/* Main dashboard */}
      <div className="absolute top-6 left-2 right-2 lg:left-6 glass rounded-2xl p-5 glow-border animate-float" style={{ animationDelay: "200ms" }}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-1.5"><span className="size-2.5 rounded-full bg-destructive/70"/><span className="size-2.5 rounded-full bg-yellow-400/70"/><span className="size-2.5 rounded-full bg-green-400/70"/></div>
          <span className="font-mono text-[10px] text-muted-foreground">omega.dashboard</span>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[{label:"Revenue",v:"AED 482K",c:"+18%"},{label:"Orders",v:"1,284",c:"+9%"},{label:"Uptime",v:"99.98%",c:"SLA"}].map((m)=> (
            <div key={m.label} className="rounded-xl bg-surface/80 border border-border p-3">
              <div className="text-[10px] font-mono text-muted-foreground uppercase">{m.label}</div>
              <div className="text-lg font-display font-bold mt-1">{m.v}</div>
              <div className="text-[10px] text-secondary mt-0.5">{m.c}</div>
            </div>
          ))}
        </div>
        <div className="mt-4 h-28 rounded-xl bg-surface/60 border border-border relative overflow-hidden">
          <svg viewBox="0 0 300 100" className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="cg" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0" stopColor="#00D4FF" stopOpacity=".5"/>
                <stop offset="1" stopColor="#0066FF" stopOpacity="0"/>
              </linearGradient>
            </defs>
            <path d="M0 80 L30 60 L60 70 L90 40 L120 55 L150 30 L180 45 L210 20 L240 35 L270 15 L300 25 L300 100 L0 100 Z" fill="url(#cg)"/>
            <path d="M0 80 L30 60 L60 70 L90 40 L120 55 L150 30 L180 45 L210 20 L240 35 L270 15 L300 25" stroke="#00D4FF" strokeWidth="2" fill="none"/>
          </svg>
        </div>
      </div>
      {/* Floating card 1 */}
      <div className="absolute bottom-10 left-0 lg:-left-6 glass rounded-2xl p-4 w-56 animate-float" style={{ animationDelay: "0ms" }}>
        <div className="flex items-center gap-2 mb-2"><Workflow className="size-4 text-secondary"/><span className="text-xs font-mono uppercase text-muted-foreground">Automation</span></div>
        <div className="text-sm font-semibold">Invoice approval flow</div>
        <div className="mt-2 h-1.5 rounded-full bg-surface overflow-hidden"><div className="h-full bg-brand w-3/4"/></div>
        <div className="text-[10px] text-muted-foreground mt-1.5">3 of 4 steps complete</div>
      </div>
      {/* Floating card 2 */}
      <div className="absolute bottom-32 right-0 lg:-right-4 glass rounded-2xl p-4 w-52 animate-float" style={{ animationDelay: "400ms" }}>
        <div className="flex items-center gap-2 mb-2"><Brain className="size-4 text-secondary"/><span className="text-xs font-mono uppercase text-muted-foreground">AI Insight</span></div>
        <div className="text-sm font-semibold">Demand spike detected</div>
        <div className="text-[11px] text-muted-foreground mt-1">Recommend +12% inventory in Dubai branch.</div>
      </div>
    </div>
  );
}

function TrustBar() {
  const stats = [
    { v: 12, s: "+", l: "Years Experience" },
    { v: 50, s: "+", l: "Projects Delivered" },
    { v: 8, s: "", l: "Industries Served" },
    { v: 100, s: "%", l: "UAE-Based Team" },
  ];
  return (
    <section className="relative py-16 border-y border-border bg-surface/40">
      <div className="container-x grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.l} className="text-center">
            <div className="text-4xl lg:text-5xl font-display font-bold text-gradient">
              <Counter end={s.v} suffix={s.s} />
            </div>
            <div className="mt-2 text-sm text-muted-foreground font-mono uppercase tracking-wider">{s.l}</div>
          </div>
        ))}
      </div>
      <div className="container-x mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-60">
        {["ARAMEX","ETIHAD","DUBAI HOLDING","ADNOC","EMAAR","MAJID AL FUTTAIM"].map((n)=>(
          <span key={n} className="font-display font-bold tracking-widest text-muted-foreground hover:text-white transition">{n}</span>
        ))}
      </div>
    </section>
  );
}

function SectionHead({ chip, title, highlight, sub }: { chip: string; title: string; highlight?: string; sub?: string }) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-14">
      <span className="chip">{chip}</span>
      <h2 className="mt-4 text-3xl md:text-5xl font-display font-bold tracking-tight">
        {title} {highlight && <span className="text-gradient">{highlight}</span>}
      </h2>
      {sub && <p className="mt-4 text-muted-foreground text-lg">{sub}</p>}
    </div>
  );
}

function ProblemSolution() {
  const probs = ["Manual, paper-based operations","Scattered, disconnected data","Outdated legacy systems","Low operational visibility","Slow, unreliable reporting"];
  const sols = ["Intelligent Automation","Custom Software Development","Technology Consulting","AI & Data Solutions","System Integration"];
  return (
    <section className="py-24">
      <div className="container-x">
        <SectionHead chip="THE PROBLEM · THE FIX" title="Where businesses get stuck —" highlight="and how we move them forward" />
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-destructive/30 p-8 bg-destructive/5">
            <div className="text-sm font-mono uppercase text-destructive/80 mb-4">Common pain points</div>
            <ul className="space-y-3">
              {probs.map((p)=>(
                <li key={p} className="flex items-start gap-3 text-foreground/90">
                  <XCircle className="size-5 text-destructive mt-0.5 shrink-0"/> <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-border glass p-8 glow-border">
            <div className="text-sm font-mono uppercase text-secondary mb-4">What Omega delivers</div>
            <ul className="space-y-3">
              {sols.map((p)=>(
                <li key={p} className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-secondary mt-0.5 shrink-0"/> <span className="font-medium">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

const services = [
  { i: Compass, t: "Technology Consulting", d: "Roadmaps, audits and architecture for digital transformation." },
  { i: Code2, t: "Custom Software Development", d: "Tailored platforms built for your processes — not generic SaaS." },
  { i: Globe, t: "Website Development", d: "Performance-first marketing and corporate sites that convert." },
  { i: Smartphone, t: "Mobile App Development", d: "Native and cross-platform apps for iOS and Android." },
  { i: Brain, t: "AI & Data Solutions", d: "Predictive analytics, ML pipelines and intelligent assistants." },
  { i: Workflow, t: "System Automation", d: "Eliminate manual work with reliable end-to-end workflows." },
];

function Services() {
  return (
    <section className="py-24 relative">
      <div className="container-x">
        <SectionHead chip="CORE SERVICES" title="Everything you need to" highlight="ship, scale and operate" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s,i)=>(
            <div key={s.t} className="card-hover group rounded-2xl border border-border bg-surface/50 p-6 relative overflow-hidden" style={{ animationDelay: `${i*60}ms` }}>
              <div className="absolute -top-12 -right-12 size-40 rounded-full bg-brand opacity-10 blur-3xl group-hover:opacity-25 transition" />
              <div className="size-12 rounded-xl grid place-items-center bg-brand text-white mb-4 group-hover:scale-110 transition">
                <s.i className="size-6"/>
              </div>
              <h3 className="font-display font-semibold text-xl">{s.t}</h3>
              <p className="text-muted-foreground mt-2 text-sm">{s.d}</p>
              <Link to="/services" className="inline-flex items-center gap-1 text-secondary text-sm font-mono uppercase mt-5">Learn more <ArrowRight className="size-3.5"/></Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const products = [
  { t: "Laundry Management System", b: ["Order tracking & barcode tagging","Driver routing & pickup app","Branch + franchise reporting"] },
  { t: "Production Management", b: ["Live shop-floor dashboards","BOM & material planning","Quality + downtime tracking"] },
  { t: "CRM Platform", b: ["360° customer profiles","Pipeline & sales automation","Email & WhatsApp campaigns"] },
  { t: "POS System", b: ["Multi-branch & multi-currency","Offline-first transactions","Loyalty & promotions engine"] },
  { t: "Accounting Solution", b: ["VAT-ready for the UAE","Bank reconciliation","Real-time P&L dashboards"] },
];

function Products() {
  return (
    <section className="py-24 bg-surface/40 border-y border-border">
      <div className="container-x">
        <SectionHead chip="PRODUCTS" title="Ready-to-deploy platforms," highlight="customised for you" sub="Battle-tested products that ship in weeks, not quarters — fully tailored to your operations." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((p)=>(
            <div key={p.t} className="card-hover rounded-2xl border border-border bg-card p-6">
              <div className="h-32 rounded-xl bg-mesh border border-border relative overflow-hidden mb-5">
                <div className="absolute inset-3 grid grid-cols-3 gap-1.5">
                  {Array.from({length:9}).map((_,i)=> <div key={i} className="rounded bg-white/10 backdrop-blur-sm"/>) }
                </div>
              </div>
              <h3 className="font-display font-semibold text-lg">{p.t}</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                {p.b.map((x)=> <li key={x} className="flex gap-2"><CheckCircle2 className="size-4 text-secondary mt-0.5 shrink-0"/>{x}</li>)}
              </ul>
              <Link to="/contact" className="btn-outline mt-5 w-full text-sm py-2.5">Request Demo</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const industries = [
  { i: Store, l: "Retail" }, { i: Shirt, l: "Laundry" }, { i: Truck, l: "Logistics" },
  { i: Factory, l: "Manufacturing" }, { i: UtensilsCrossed, l: "Hospitality" },
  { i: Stethoscope, l: "Healthcare" }, { i: Users, l: "SMEs" }, { i: ShoppingBag, l: "Trading" },
];

function Industries() {
  return (
    <section className="py-24">
      <div className="container-x">
        <SectionHead chip="INDUSTRIES" title="Built for sectors that" highlight="power the UAE" />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {industries.map((it)=>(
            <div key={it.l} className="card-hover rounded-2xl border border-border bg-surface/50 p-6 text-center">
              <div className="size-12 mx-auto rounded-xl grid place-items-center bg-brand/10 border border-border text-secondary"><it.i className="size-6"/></div>
              <div className="mt-3 font-medium">{it.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  { i: Compass, t: "Discover", d: "Understand goals & constraints." },
  { i: Palette, t: "Design", d: "UX, architecture & blueprints." },
  { i: Hammer, t: "Develop", d: "Iterative builds, weekly demos." },
  { i: Plug, t: "Integrate", d: "Connect data & legacy systems." },
  { i: GraduationCap, t: "Train", d: "Onboard your team properly." },
  { i: LifeBuoy, t: "Support", d: "Ongoing care, SLAs and growth." },
];

function Process() {
  return (
    <section className="py-24 bg-surface/40 border-y border-border">
      <div className="container-x">
        <SectionHead chip="PROCESS" title="A clear, repeatable" highlight="path to delivery" />
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
          {steps.map((s,i)=>(
            <div key={s.t} className="card-hover relative rounded-2xl border border-border bg-card p-5">
              <div className="absolute -top-3 left-5 chip bg-background">STEP 0{i+1}</div>
              <s.i className="size-6 text-secondary mt-3"/>
              <div className="font-display font-semibold mt-3">{s.t}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const why = [
  { i: MapPin, t: "UAE-Based & UAE-Focused", d: "Local team, local accountability, local market understanding." },
  { i: Wallet, t: "Affordable, Transparent Pricing", d: "Clear estimates and milestones — no surprise invoices." },
  { i: Layers, t: "100% Custom-Built", d: "Solutions matched to your processes, not the other way around." },
  { i: HeartHandshake, t: "Consulting-First", d: "We start with strategy, then we build." },
  { i: Rocket, t: "Multi-Platform Expertise", d: "Web, mobile, cloud, AI — under one roof." },
  { i: Shield, t: "Ongoing Support", d: "Training, monitoring and continuous improvement." },
];

function WhyUs() {
  return (
    <section className="py-24">
      <div className="container-x">
        <SectionHead chip="WHY OMEGA CST" title="What makes us a" highlight="different kind of partner" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {why.map((w)=>(
            <div key={w.t} className="card-hover rounded-2xl border border-border bg-surface/60 p-6">
              <w.i className="size-7 text-secondary"/>
              <div className="font-display font-semibold mt-4 text-lg">{w.t}</div>
              <div className="text-sm text-muted-foreground mt-2">{w.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const cases = [
  { ind: "Laundry", p: "Manual ticketing across 6 branches caused order loss.", s: "Custom POS + barcode tagging with driver app.", r: "40% time saved", i: BarChart3 },
  { ind: "Manufacturing", p: "No visibility on shop-floor downtime.", s: "Real-time production dashboards & alerts.", r: "27% output increase", i: Factory },
  { ind: "Retail", p: "Disconnected stock data across e-commerce & stores.", s: "Unified inventory + ERP integration.", r: "12 hr → 2 min sync", i: Database },
];

function CaseStudies() {
  return (
    <section className="py-24 bg-surface/40 border-y border-border">
      <div className="container-x">
        <SectionHead chip="CASE STUDIES" title="Outcomes our clients" highlight="actually measure" />
        <div className="grid md:grid-cols-3 gap-5">
          {cases.map((c)=>(
            <article key={c.ind} className="card-hover rounded-2xl border border-border bg-card p-6 flex flex-col">
              <div className="flex items-center justify-between"><span className="chip">{c.ind}</span><c.i className="size-5 text-secondary"/></div>
              <div className="mt-4 text-sm"><span className="font-mono uppercase text-muted-foreground text-xs">Problem</span><p className="mt-1">{c.p}</p></div>
              <div className="mt-3 text-sm"><span className="font-mono uppercase text-muted-foreground text-xs">Solution</span><p className="mt-1">{c.s}</p></div>
              <div className="mt-5 rounded-xl border border-border bg-brand/5 p-4 text-center">
                <div className="text-2xl font-display font-bold text-gradient">{c.r}</div>
              </div>
              <Link to="/contact" className="mt-5 inline-flex items-center gap-1 text-secondary text-sm font-mono uppercase">Read case study <ArrowRight className="size-3.5"/></Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
