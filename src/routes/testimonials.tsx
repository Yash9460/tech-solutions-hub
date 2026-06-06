import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, Quote, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { testimonials } from "@/components/site/testimonials-data";

export const Route = createFileRoute("/testimonials")({
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <Layout>
      <section className="relative pt-20 pb-12">
        <div className="absolute inset-0 grid-pattern opacity-30 [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-xs font-medium">
              <Star className="h-3.5 w-3.5 text-primary" />
              4.9 / 5 average rating
            </div>
            <h1 className="mt-5 text-5xl sm:text-6xl font-bold font-display">
              Loved by founders <br />
              <span className="text-gradient">and product teams.</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              We measure success by what our clients ship — and how loudly they recommend us afterwards.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative pb-20">
        <div className="mx-auto max-w-7xl px-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 80}>
              <article className="relative rounded-2xl glass-card p-7 h-full hover:-translate-y-1 hover:border-primary/40 transition-smooth">
                <Quote className="absolute top-5 right-5 h-8 w-8 text-primary/20" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground/90 leading-relaxed">"{t.text}"</p>
                <div className="mt-6 pt-6 border-t border-border/60 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-primary grid place-items-center font-semibold text-primary-foreground text-sm shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-semibold leading-tight">{t.name}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{t.role}, {t.company}</div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative pb-24">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl glass-card p-10 sm:p-14 text-center">
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-gradient-primary opacity-30 blur-3xl" />
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl font-bold font-display">
                  Want to be our next <span className="text-gradient">success story?</span>
                </h2>
                <Button asChild variant="hero" size="xl" className="mt-7">
                  <Link to="/contact">Start a project <ArrowRight className="h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
