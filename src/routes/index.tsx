import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Zap, Rocket, Star, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { services } from "@/components/site/services-data";
import heroImage from "@/assets/hero-tech.jpg";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const stats = [
  { v: "120+", l: "Projects shipped" },
  { v: "45+", l: "Happy clients" },
  { v: "8 yrs", l: "Avg. team experience" },
  { v: "24/7", l: "Engineering support" },
];

const process = [
  { n: "01", t: "Discover", d: "We dig into your goals, users and metrics to define what success really looks like." },
  { n: "02", t: "Design", d: "Wireframes, prototypes and design systems crafted in Figma — no surprises later." },
  { n: "03", t: "Build", d: "Production-grade code, modern stack, weekly demos. You see progress every single sprint." },
  { n: "04", t: "Scale", d: "We optimise, monitor and iterate so your product grows with your business." },
];

const testimonials = [
  {
    name: "Aarav Mehta",
    role: "CEO, FinFlow",
    text: "Boolbit rebuilt our entire platform in 10 weeks. Page loads dropped from 4s to under 800ms and conversions jumped 38%.",
  },
  {
    name: "Priya Shah",
    role: "Founder, LumaWear",
    text: "Their design + engineering combo is rare. The new app feels premium and our App Store rating went from 3.9 to 4.7.",
  },
  {
    name: "Daniel Kim",
    role: "CTO, Northwind AI",
    text: "We hired them for an AI MVP. They shipped a polished product in 6 weeks — investors loved it. Best decision of the year.",
  },
];

function HomePage() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-glow" />
        <div className="absolute top-20 -right-40 h-[28rem] w-[28rem] rounded-full bg-accent/20 blur-3xl animate-glow" />

        <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-24 lg:pt-28 lg:pb-32 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-xs font-medium">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Trusted by 45+ brands worldwide
            </div>
            <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05]">
              Engineering the
              <br />
              <span className="text-gradient">future of your</span>
              <br />
              digital product.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              We're a senior team of designers and engineers building web, mobile, AI and cloud
              products that feel premium and perform at scale.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">
                  Start a Project <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="glass" size="xl">
                <Link to="/services">View Services</Link>
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((s) => (
                <div key={s.l}>
                  <div className="text-2xl font-bold text-gradient font-display">{s.v}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary opacity-30 blur-3xl rounded-full" />
            <img
              src={heroImage}
              alt="Holographic globe with floating UI panels representing modern tech stack"
              width={1280}
              height={1280}
              loading="eager"
              decoding="async"
              className="relative rounded-2xl glass-card animate-float"
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-xs font-medium">
              <Zap className="h-3.5 w-3.5 text-primary" />
              What we do
            </div>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold font-display">
              Tech services, <span className="text-gradient">end-to-end.</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              One partner for everything technical — from your first prototype to your millionth user.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 4).map((s, i) => (
              <Reveal key={s.title} delay={(i % 4) * 80}>
                <div className="group relative rounded-2xl glass-card p-6 hover:border-primary/40 hover:-translate-y-1 transition-smooth h-full">
                  <div className="absolute -inset-px rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-20 blur transition-smooth pointer-events-none" />
                  <div className="relative">
                    <div className="h-12 w-12 rounded-xl bg-gradient-primary grid place-items-center mb-5 group-hover:scale-110 transition-smooth">
                      <s.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="glass" size="lg">
              <Link to="/services">
                Explore all services <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-xs font-medium">
              <Star className="h-3.5 w-3.5 text-primary" />
              Why Boolbit
            </div>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold font-display">
              Senior talent. <br />
              <span className="text-gradient">Startup speed.</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              You don't get juniors learning on your dime. Every project is led by engineers and
              designers with 8+ years shipping real products at scale.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Fixed-scope sprints with weekly live demos",
                "Production-grade, type-safe, well-tested code",
                "Design-led — every screen reviewed pixel by pixel",
                "Transparent pricing, no surprise invoices",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative grid grid-cols-2 gap-4">
            {[
              { v: "98%", l: "Client retention" },
              { v: "< 2 wk", l: "Avg. time to first demo" },
              { v: "4.9 / 5", l: "Average client rating" },
              { v: "12 +", l: "Industries served" },
            ].map((s, i) => (
              <div
                key={s.l}
                className="rounded-2xl glass-card p-6 hover:border-primary/40 transition-smooth"
                style={{ transform: i % 2 ? "translateY(20px)" : "none" }}
              >
                <div className="text-3xl font-bold text-gradient font-display">{s.v}</div>
                <div className="text-sm text-muted-foreground mt-2">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-xs font-medium">
              <Rocket className="h-3.5 w-3.5 text-primary" />
              Our process
            </div>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold font-display">
              From idea to <span className="text-gradient">launch in weeks.</span>
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <Reveal key={p.n} delay={i * 100}>
                <div className="relative rounded-2xl glass-card p-6 h-full hover:-translate-y-1 transition-smooth">
                  <div className="text-5xl font-bold font-display text-gradient opacity-80">{p.n}</div>
                  <h3 className="mt-3 text-xl font-semibold">{p.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold font-display">
              Loved by <span className="text-gradient">founders & teams.</span>
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 100}>
                <div className="rounded-2xl glass-card p-7 h-full hover:-translate-y-1 transition-smooth">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star key={idx} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-foreground/90 leading-relaxed">"{t.text}"</p>
                  <div className="mt-6 pt-6 border-t border-border/60">
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="glass" size="lg">
              <Link to="/testimonials">
                Read all testimonials <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative overflow-hidden rounded-3xl glass-card p-10 sm:p-16 text-center">
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-gradient-primary opacity-30 blur-3xl" />
            <div className="relative">
              <h2 className="text-4xl sm:text-5xl font-bold font-display">
                Ready to build something <span className="text-gradient">extraordinary?</span>
              </h2>
              <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
                Tell us about your project. We'll come back within 24 hours with ideas, a timeline and a transparent quote.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Button asChild variant="hero" size="xl">
                  <Link to="/contact">Book a free call <ArrowRight className="h-4 w-4" /></Link>
                </Button>
                <Button asChild variant="glass" size="xl">
                  <Link to="/services">See what we do</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
