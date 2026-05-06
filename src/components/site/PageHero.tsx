export function PageHero({
  eyebrow,
  title,
  subtitle,
  highlight,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  highlight?: string;
}) {
  return (
    <section className="relative overflow-hidden noise">
      <div className="absolute inset-0 bg-mesh opacity-90 animate-drift" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="container-x relative z-10 py-24 lg:py-32 text-center">
        <span className="chip mx-auto animate-fade-up">{eyebrow}</span>
        <h1 className="mt-5 text-4xl md:text-6xl font-display font-bold tracking-tight max-w-4xl mx-auto animate-fade-up">
          {title} {highlight && <span className="text-gradient">{highlight}</span>}
        </h1>
        <p className="mt-5 max-w-2xl mx-auto text-muted-foreground text-lg animate-fade-up">{subtitle}</p>
      </div>
    </section>
  );
}
