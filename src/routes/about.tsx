import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { Eye, Target, MapPin, Wallet, Shield, Rocket, Code2, Cloud, Workflow, Brain, Compass, ArrowRight, User } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Omega CST — UAE's Trusted Technology Partner" },
      { name: "description", content: "Omega CST is a UAE-based technology consultancy delivering custom software, AI and automation to SMEs and enterprises." },
      { property: "og:title", content: "About Omega CST" },
      { property: "og:description", content: "Local team, global engineering standards. Meet the people building the UAE's next-generation digital systems." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero eyebrow="ABOUT OMEGA CST" title="UAE's trusted" highlight="technology partner" subtitle="A consulting-first software company helping SMEs and enterprises in Abu Dhabi and Dubai modernise the way they operate." />

      <section className="py-20">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <span className="chip">WHO WE ARE</span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold">Engineering clarity into <span className="text-gradient">complex operations</span></h2>
            <p className="text-muted-foreground">Omega CST partners with ambitious organisations across the Emirates to design, build and run software that fits the way they actually work. From the first whiteboard session to long-term support, our local team takes ownership end-to-end.</p>
            <p className="text-muted-foreground">We combine consulting depth with hands-on engineering — meaning every line of code is grounded in real business outcomes.</p>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 bg-mesh opacity-60 blur-2xl rounded-3xl" />
            <div className="relative grid grid-cols-2 gap-4">
              {[
                { k: "Founded", v: "2013" },
                { k: "HQ", v: "Abu Dhabi, UAE" },
                { k: "Engineers", v: "30+" },
                { k: "Sectors", v: "8" },
              ].map((m) => (
                <div key={m.k} className="glass rounded-2xl p-5">
                  <div className="font-mono text-[11px] uppercase text-muted-foreground">{m.k}</div>
                  <div className="text-2xl font-display font-bold mt-1">{m.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface/40 border-y border-border">
        <div className="container-x grid md:grid-cols-2 gap-6">
          {[
            { i: Eye, t: "Our Vision", d: "To be the technology backbone of the UAE's most ambitious businesses — combining local insight with world-class engineering." },
            { i: Target, t: "Our Mission", d: "Deliver intelligent, custom-built software that frees teams from manual work and unlocks measurable growth." },
          ].map((c) => (
            <div key={c.t} className="rounded-3xl border border-border glass p-8 glow-border">
              <c.i className="size-8 text-secondary" />
              <h3 className="font-display font-bold text-2xl mt-4">{c.t}</h3>
              <p className="text-muted-foreground mt-3">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="chip">OUR STORY</span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold mt-3">A decade of building <span className="text-gradient">in the UAE</span></h2>
          </div>
          <ol className="relative border-l border-border ml-3 space-y-8 max-w-3xl mx-auto">
            {[
              { y: "2013", t: "Founded in Abu Dhabi", d: "Started as a small consulting practice serving local SMEs." },
              { y: "2016", t: "First enterprise client", d: "Delivered a multi-branch ERP rollout across the GCC." },
              { y: "2019", t: "Product line launched", d: "Released our Laundry, POS and CRM platforms." },
              { y: "2022", t: "AI & Automation practice", d: "Stood up a dedicated team for ML, RPA and data engineering." },
              { y: "2025", t: "50+ delivered projects", d: "Trusted by clients across 8 industries in the UAE." },
            ].map((e)=>(
              <li key={e.y} className="pl-6">
                <span className="absolute -left-2 size-4 rounded-full bg-brand glow-border" />
                <div className="font-mono text-xs text-secondary">{e.y}</div>
                <h4 className="font-display font-semibold text-lg mt-1">{e.t}</h4>
                <p className="text-sm text-muted-foreground mt-1">{e.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-20 bg-surface/40 border-y border-border">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="chip">DIFFERENTIATORS</span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold mt-3">Why teams choose <span className="text-gradient">Omega</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { i: MapPin, t: "Local presence", d: "On-site teams in Abu Dhabi & Dubai." },
              { i: Wallet, t: "Transparent pricing", d: "Fixed milestones, no scope creep." },
              { i: Shield, t: "Enterprise-grade", d: "Security, SLAs and compliance built-in." },
              { i: Rocket, t: "Speed to ship", d: "Weekly demos, faster time-to-value." },
            ].map((w)=>(
              <div key={w.t} className="card-hover rounded-2xl border border-border bg-card p-6">
                <w.i className="size-7 text-secondary"/>
                <div className="font-display font-semibold mt-3">{w.t}</div>
                <div className="text-sm text-muted-foreground mt-2">{w.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="chip">CAPABILITIES</span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold mt-3">A full-stack <span className="text-gradient">technology partner</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { i: Compass, t: "Consulting" },
              { i: Code2, t: "Software" },
              { i: Cloud, t: "Cloud" },
              { i: Workflow, t: "Automation" },
              { i: Brain, t: "AI / Data" },
            ].map((c)=>(
              <div key={c.t} className="card-hover rounded-2xl border border-border bg-surface/60 p-5 text-center">
                <c.i className="size-7 text-secondary mx-auto"/>
                <div className="font-display font-semibold mt-3">{c.t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface/40 border-y border-border">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="chip">LEADERSHIP</span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold mt-3">Builders, not just <span className="text-gradient">advisors</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { n: "Managing Director", r: "Strategy & Client Success" },
              { n: "Head of Engineering", r: "Architecture & Delivery" },
              { n: "Head of AI", r: "Data Science & ML" },
              { n: "Head of Operations", r: "Support & Customer Care" },
            ].map((p)=>(
              <div key={p.n} className="card-hover rounded-2xl border border-border bg-card p-6 text-center">
                <div className="size-20 mx-auto rounded-full bg-brand/20 border border-border grid place-items-center"><User className="size-8 text-secondary"/></div>
                <div className="font-display font-semibold mt-4">{p.n}</div>
                <div className="text-xs font-mono uppercase text-muted-foreground mt-1">{p.r}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/contact" className="btn-primary">Work with Omega <ArrowRight className="size-4"/></Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
