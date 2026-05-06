import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { z } from "zod";
import { MapPin, Phone, Mail, MessageCircle, Send, Globe, Code2, Workflow, Sparkles, Plus, Minus, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Omega CST — Discuss Your Project" },
      { name: "description", content: "Get in touch with Omega CST in Abu Dhabi. Book a free consultation for software, automation, AI and digital projects." },
      { property: "og:title", content: "Contact Omega CST" },
      { property: "og:description", content: "Talk to our UAE-based team about your next software, automation or AI project." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(80),
  company: z.string().trim().min(1, "Company is required").max(120),
  phone: z.string().trim().min(6, "Enter a valid phone").max(30),
  email: z.string().trim().email("Enter a valid email").max(150),
  service: z.string().min(1, "Select a service"),
  budget: z.string().min(1, "Select a budget"),
  details: z.string().trim().min(10, "Please share a few project details").max(1500),
});

function ContactPage() {
  return (
    <>
      <PageHero eyebrow="CONTACT" title="Let's discuss" highlight="your project" subtitle="Tell us where you are and where you want to go. Our UAE team will respond within one business day." />
      <section className="py-16">
        <div className="container-x grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2"><ContactForm /></div>
          <div className="space-y-5">
            <ContactDetails />
            <ConsultationOptions />
          </div>
        </div>
      </section>
      <MapEmbed />
      <FAQ />
    </>
  );
}

function ContactForm() {
  const [errors, setErrors] = useState<Record<string,string>>({});
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const result = schema.safeParse(data);
    if (!result.success) {
      const errs: Record<string,string> = {};
      result.error.issues.forEach((i)=>{ if (i.path[0]) errs[String(i.path[0])] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({}); setSubmitting(true);
    setTimeout(()=>{ setSubmitting(false); setSent(true); }, 700);
  };

  if (sent) {
    return (
      <div className="rounded-3xl border border-border glass p-10 text-center glow-border">
        <CheckCircle2 className="size-12 text-secondary mx-auto"/>
        <h3 className="font-display font-bold text-2xl mt-4">Inquiry received</h3>
        <p className="text-muted-foreground mt-2">Thanks — our team will reach out within one business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-border glass p-6 lg:p-10 space-y-5 glow-border">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field name="name" label="Full name" error={errors.name} />
        <Field name="company" label="Company" error={errors.company} />
        <Field name="phone" label="Phone" type="tel" error={errors.phone} />
        <Field name="email" label="Email" type="email" error={errors.email} />
        <Select name="service" label="Service interested in" error={errors.service} options={[
          "","Custom Software","Website Development","Mobile App","AI & Data","Automation","Consulting"
        ]} />
        <Select name="budget" label="Budget range" error={errors.budget} options={[
          "","Under AED 25,000","AED 25K – 75K","AED 75K – 200K","AED 200K+"
        ]} />
      </div>
      <Textarea name="details" label="Project details" error={errors.details} />
      <button disabled={submitting} className="btn-primary w-full sm:w-auto">{submitting ? "Sending..." : "Submit Inquiry"} <Send className="size-4"/></button>
    </form>
  );
}

function Field({ name, label, type="text", error }: { name:string; label:string; type?:string; error?:string }) {
  return (
    <label className="block">
      <span className="text-xs font-mono uppercase text-muted-foreground">{label}</span>
      <input name={name} type={type} className="mt-1.5 w-full rounded-lg bg-surface/70 border border-border px-3 py-2.5 text-sm focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20" />
      {error && <span className="text-xs text-destructive mt-1 block">{error}</span>}
    </label>
  );
}

function Textarea({ name, label, error }: { name:string; label:string; error?:string }) {
  return (
    <label className="block">
      <span className="text-xs font-mono uppercase text-muted-foreground">{label}</span>
      <textarea name={name} rows={5} className="mt-1.5 w-full rounded-lg bg-surface/70 border border-border px-3 py-2.5 text-sm focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20" />
      {error && <span className="text-xs text-destructive mt-1 block">{error}</span>}
    </label>
  );
}

function Select({ name, label, options, error }: { name:string; label:string; options:string[]; error?:string }) {
  return (
    <label className="block">
      <span className="text-xs font-mono uppercase text-muted-foreground">{label}</span>
      <select name={name} defaultValue="" className="mt-1.5 w-full rounded-lg bg-surface/70 border border-border px-3 py-2.5 text-sm focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20">
        {options.map((o,i)=> <option key={i} value={o} disabled={o===""}>{o===""? `Select ${label.toLowerCase()}` : o}</option>)}
      </select>
      {error && <span className="text-xs text-destructive mt-1 block">{error}</span>}
    </label>
  );
}

function ContactDetails() {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
      <h3 className="font-display font-semibold text-lg">Reach our team</h3>
      <Item icon={MapPin} label="Office" value="Abu Dhabi, United Arab Emirates" />
      <Item icon={Phone} label="Phone" value="+971 50 000 0000" href="tel:+971500000000" />
      <Item icon={Mail} label="Email" value="hello@omegacst.com" href="mailto:hello@omegacst.com" />
      <a href="https://wa.me/971500000000" target="_blank" rel="noopener noreferrer" className="mt-2 w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-white font-semibold" style={{ background: "linear-gradient(135deg,#25D366,#128C7E)" }}>
        <MessageCircle className="size-5"/> WhatsApp Us
      </a>
    </div>
  );
}

function Item({ icon: Icon, label, value, href }: any) {
  const Tag: any = href ? "a" : "div";
  return (
    <Tag href={href} className="flex items-start gap-3">
      <div className="size-9 rounded-lg bg-brand/10 border border-border grid place-items-center text-secondary"><Icon className="size-4"/></div>
      <div>
        <div className="text-[11px] font-mono uppercase text-muted-foreground">{label}</div>
        <div className="text-sm">{value}</div>
      </div>
    </Tag>
  );
}

function ConsultationOptions() {
  const opts = [
    { i: Globe, t: "Website Redesign" },
    { i: Code2, t: "Custom Software" },
    { i: Workflow, t: "Automation Audit" },
    { i: Sparkles, t: "Product Demo" },
  ];
  return (
    <div className="rounded-2xl border border-border bg-surface/60 p-6">
      <h3 className="font-display font-semibold text-lg">Free consultations</h3>
      <p className="text-sm text-muted-foreground mt-1">Choose a topic — we'll bring the right expert to the call.</p>
      <div className="grid grid-cols-2 gap-2 mt-4">
        {opts.map((o)=>(
          <button key={o.t} className="text-left rounded-xl border border-border bg-card p-3 hover:border-secondary transition">
            <o.i className="size-5 text-secondary"/>
            <div className="text-sm font-medium mt-2">{o.t}</div>
          </button>
        ))}
      </div>
    </div>
  );
}

function MapEmbed() {
  return (
    <section className="py-12">
      <div className="container-x">
        <div className="rounded-3xl overflow-hidden border border-border h-80">
          <iframe
            title="Omega CST location"
            src="https://www.google.com/maps?q=Abu+Dhabi+UAE&output=embed"
            className="w-full h-full grayscale-[60%] contrast-110"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

const faqs = [
  { q: "How quickly can we start?", a: "Most engagements begin within 1–2 weeks of the first conversation, after a short discovery call." },
  { q: "Do you sign NDAs?", a: "Yes — we routinely sign mutual NDAs before sharing any sensitive details." },
  { q: "Can you work with our existing team?", a: "Absolutely. We can lead delivery or augment your team's capacity, whichever fits best." },
  { q: "Where are your engineers based?", a: "Our core team is based in Abu Dhabi, UAE, with delivery support across the GCC." },
  { q: "Do you provide post-launch support?", a: "Yes — every build comes with optional support, monitoring and continuous improvement plans." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-20 bg-surface/40 border-y border-border">
      <div className="container-x max-w-3xl">
        <div className="text-center mb-10">
          <span className="chip">FAQ</span>
          <h2 className="text-3xl lg:text-4xl font-display font-bold mt-3">You asked, <span className="text-gradient">we answered</span></h2>
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
