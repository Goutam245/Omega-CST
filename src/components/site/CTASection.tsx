import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative py-24">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl border border-border glass p-10 lg:p-16 text-center">
          <div className="absolute inset-0 bg-mesh opacity-70 animate-drift" />
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <span className="chip mx-auto">LET'S BUILD</span>
            <h2 className="text-4xl lg:text-5xl font-display font-bold leading-tight">
              Ready to modernise your <span className="text-gradient">business operations?</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Talk to our UAE-based team today. No commitment required — just a clear plan to move forward.
            </p>
            <div className="flex flex-wrap gap-3 justify-center pt-2">
              <Link to="/contact" className="btn-primary">Book Free Consultation <ArrowRight className="size-4" /></Link>
              <a href="https://wa.me/971500000000" className="btn-outline">WhatsApp Us Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
