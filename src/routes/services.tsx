import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import {
  Compass, Code2, Globe, Smartphone, Brain, Workflow, Cloud, Database,
  Plus, Minus, ArrowRight, CheckCircle2, Search, FileText, Palette, Hammer, ShieldCheck, Rocket, LifeBuoy,
  Store, Shirt, Truck, Factory, UtensilsCrossed, Stethoscope, Users, ShoppingBag,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — IT Consulting & Custom Software in Abu Dhabi & Dubai" },
      { name: "description", content: "Consulting, custom software, web, mobile, AI, automation and cloud services delivered by Omega CST in the UAE." },
      { property: "og:title", content: "Omega CST Services" },
      { property: "og:description", content: "From strategy to support — the full-stack technology services Omega CST delivers in the UAE." },
    ],
  }),
  component: ServicesPage,
});

const cats = [
  { id: "consulting", l: "Consulting", i: Compass },
  { id: "software", l: "Software", i: Code2 },
  { id: "webmobile", l: "Web & Mobile", i: Smartphone },
  { id: "ai", l: "AI / Data", i: Brain },
  { id: "auto", l: "Automation", i: Workflow },
  { id: "cloud", l: "Cloud", i: Cloud },
];

const featured = [
  { i: Compass, t: "Technology Consulting", d: "Roadmaps, audits and architecture decisions that de-risk transformation.", b: ["Discovery workshops","Architecture blueprints","Vendor selection"] },
  { i: Code2, t: "Custom Software Development", d: "End-to-end product engineering for web, desktop and back-office.", b: ["TypeScript / .NET / Python","Microservices & APIs","Test automation"] },
  { i: Globe, t: "Website Development", d: "Marketing, corporate and e-commerce sites that load fast and rank well.", b: ["Performance-first build","CMS & headless","SEO foundations"] },
  { i: Smartphone, t: "Mobile App Development", d: "Native iOS, Android and cross-platform with React Native / Flutter.", b: ["Offline-first","Push & deep linking","App Store delivery"] },
  { i: Brain, t: "AI & Data Solutions", d: "Predictive models, AI assistants and data pipelines.", b: ["LLM integrations","Forecasting","BI dashboards"] },
  { i: Workflow, t: "Process Automation", d: "Eliminate repetitive operations across departments.", b: ["RPA & workflow engines","ERP/CRM integrations","Approval flows"] },
  { i: Cloud, t: "Cloud Engineering", d: "Secure, scalable cloud on AWS, Azure and on-prem hybrids.", b: ["IaC with Terraform","CI/CD pipelines","Cost optimisation"] },
  { i: Database, t: "Data & Integration", d: "Connect ERPs, POS, CRMs and legacy systems into one fabric.", b: ["ETL & streaming","Data warehouse","Master data"] },
];

function ServicesPage() {
  const [active, setActive] = useState("consulting");

  return (
    <>
      <PageHero eyebrow="SERVICES" title="IT consulting & custom software" highlight="for Abu Dhabi & Dubai" subtitle="A complete engineering partner — from discovery and design through development, deployment and long-term support." />

      <section className="py-12 sticky top-16 lg:top-20 z-30 bg-background/70 backdrop-blur-md border-b border-border">
        <div className="container-x flex flex-wrap gap-2 justify-center">
          {cats.map((c)=>(
            <button key={c.id} onClick={()=>setActive(c.id)} className={`px-4 py-2 rounded-full border text-sm flex items-center gap-2 transition ${active===c.id ? "bg-brand text-white border-transparent shadow-glow" : "border-border text-muted-foreground hover:text-white"}`}>
              <c.i className="size-4"/> {c.l}
            </button>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="chip">FEATURED SERVICES</span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold mt-3">Capabilities that <span className="text-gradient">scale with you</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featured.map((s)=>(
              <div key={s.t} className="card-hover rounded-2xl border border-border bg-surface/60 p-6 flex flex-col">
                <div className="size-11 rounded-xl bg-brand grid place-items-center text-white mb-4"><s.i className="size-5"/></div>
                <h3 className="font-display font-semibold text-lg">{s.t}</h3>
                <p className="text-sm text-muted-foreground mt-2">{s.d}</p>
                <ul className="mt-4 space-y-1.5 text-sm">
                  {s.b.map((b)=> <li key={b} className="flex gap-2"><CheckCircle2 className="size-4 text-secondary mt-0.5 shrink-0"/>{b}</li>)}
                </ul>
                <Link to="/contact" className="mt-5 inline-flex items-center gap-1 text-secondary text-sm font-mono uppercase">Discuss project <ArrowRight className="size-3.5"/></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface/40 border-y border-border">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="chip">PROBLEMS WE SOLVE</span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold mt-3">If any of these <span className="text-gradient">sound familiar</span></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-3 max-w-3xl mx-auto">
            {[
              "Manual paper-based operations across branches",
              "Reports that take days to compile",
              "Disconnected ERP, POS and accounting systems",
              "Legacy software no one wants to maintain",
              "Customer data scattered across spreadsheets",
              "No real-time visibility into operations",
            ].map((p)=>(
              <div key={p} className="rounded-xl border border-border bg-card px-5 py-4 flex items-start gap-3">
                <div className="size-2 mt-2 rounded-full bg-secondary"/> <span className="text-sm">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="chip">DEVELOPMENT PROCESS</span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold mt-3">A 7-step delivery <span className="text-gradient">playbook</span></h2>
          </div>
          <div className="grid md:grid-cols-4 lg:grid-cols-7 gap-3">
            {[
              { i: Search, t: "Discovery" },
              { i: FileText, t: "Proposal" },
              { i: Palette, t: "UI / UX" },
              { i: Hammer, t: "Development" },
              { i: ShieldCheck, t: "QA" },
              { i: Rocket, t: "Deploy" },
              { i: LifeBuoy, t: "Support" },
            ].map((s,i)=>(
              <div key={s.t} className="card-hover rounded-2xl border border-border bg-surface/60 p-4 text-center">
                <div className="font-mono text-[11px] text-muted-foreground">0{i+1}</div>
                <s.i className="size-6 text-secondary mx-auto mt-2"/>
                <div className="font-display font-semibold mt-2 text-sm">{s.t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface/40 border-y border-border">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="chip">TECH STACK</span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold mt-3">Modern, proven <span className="text-gradient">technologies</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { c: "Frontend", items: ["React","Next.js","TypeScript","Tailwind"] },
              { c: "Backend", items: [".NET",".NET Core","Node.js","Python","Go"] },
              { c: "Mobile", items: ["React Native","Flutter","Swift","Kotlin"] },
              { c: "Cloud", items: ["AWS","Azure","GCP","Docker","Kubernetes"] },
              { c: "Database", items: ["PostgreSQL","SQL Server","MongoDB","Redis"] },
              { c: "AI / Data", items: ["OpenAI","LangChain","TensorFlow","Power BI"] },
            ].map((g)=>(
              <div key={g.c} className="rounded-2xl border border-border bg-card p-6">
                <div className="font-mono text-xs uppercase text-secondary">{g.c}</div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {g.items.map((it)=> <span key={it} className="px-3 py-1.5 rounded-md bg-surface/80 border border-border text-sm">{it}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="chip">INDUSTRIES</span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold mt-3">Sectors we <span className="text-gradient">serve</span></h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { i: Store, l: "Retail" }, { i: Shirt, l: "Laundry" }, { i: Truck, l: "Logistics" },
              { i: Factory, l: "Manufacturing" }, { i: UtensilsCrossed, l: "Hospitality" },
              { i: Stethoscope, l: "Healthcare" }, { i: Users, l: "SMEs" }, { i: ShoppingBag, l: "Trading" },
            ].map((it)=>(
              <div key={it.l} className="card-hover rounded-2xl border border-border bg-surface/50 p-6 text-center">
                <it.i className="size-7 mx-auto text-secondary"/>
                <div className="mt-3 font-medium">{it.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ />
      <CTASection />
    </>
  );
}

const faqs = [
  { q: "How is project pricing structured?", a: "We work in fixed-price milestones for well-scoped projects, and dedicated team / time-and-materials engagements for ongoing builds. Every estimate is itemised with no hidden fees." },
  { q: "What is a typical delivery timeline?", a: "Most MVPs ship in 6 to 12 weeks. Larger enterprise platforms typically run 3 to 6 months with weekly demos so you always see progress." },
  { q: "Can you customise existing systems we already use?", a: "Yes. We frequently extend, integrate and modernise existing ERPs, POS systems, CRMs and legacy databases without ripping them out." },
  { q: "Do you handle integrations with UAE-specific systems?", a: "Absolutely — VAT compliance, payment gateways, government APIs and local banks are all part of our standard delivery." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-20 bg-surface/40 border-y border-border">
      <div className="container-x max-w-3xl">
        <div className="text-center mb-10">
          <span className="chip">FAQ</span>
          <h2 className="text-3xl lg:text-4xl font-display font-bold mt-3">Common <span className="text-gradient">questions</span></h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f,i)=>(
            <div key={f.q} className="rounded-xl border border-border bg-card overflow-hidden">
              <button onClick={()=>setOpen(open===i ? null : i)} className="w-full flex items-center justify-between p-5 text-left">
                <span className="font-display font-semibold">{f.q}</span>
                {open===i ? <Minus className="size-5 text-secondary"/> : <Plus className="size-5 text-secondary"/>}
              </button>
              {open===i && <div className="px-5 pb-5 text-muted-foreground text-sm">{f.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
