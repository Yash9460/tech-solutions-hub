import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Target, Heart, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/site/Layout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — NovaStack" },
      {
        name: "description",
        content:
          "NovaStack is a senior tech team building web, mobile, AI and cloud products for ambitious brands worldwide.",
      },
      { property: "og:title", content: "About NovaStack" },
      {
        property: "og:description",
        content: "Meet the team building the next generation of digital products.",
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: Target,
    title: "Outcomes over output",
    desc: "We don't ship features for the sake of it. Every line of code maps to a metric that matters to your business.",
  },
  {
    icon: Heart,
    title: "Craft we're proud of",
    desc: "Speed matters, but so does pride. We sweat the small details — animations, empty states, error flows.",
  },
  {
    icon: Zap,
    title: "Senior, hands-on team",
    desc: "No layers, no juniors learning on your project. The people who design and code your product talk to you directly.",
  },
];

function AboutPage() {
  return (
    <Layout>
      <section className="relative pt-20 pb-16">
        <div className="absolute inset-0 grid-pattern opacity-30 [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-xs font-medium">
            About NovaStack
          </div>
          <h1 className="mt-5 text-5xl sm:text-6xl font-bold font-display">
            A small studio with <br />
            <span className="text-gradient">big ideas.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            We're a senior team of designers and engineers who left big tech to build a different
            kind of agency — one obsessed with craft, transparency and outcomes that compound.
          </p>
        </div>
      </section>

      <section className="relative py-16">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-3xl glass-card p-10 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gradient-primary opacity-30 blur-3xl" />
            <div className="relative">
              <div className="text-6xl font-bold font-display text-gradient">2019</div>
              <p className="mt-2 text-muted-foreground">The year we started.</p>
              <div className="mt-8 grid grid-cols-2 gap-6">
                {[
                  ["120+", "Products shipped"],
                  ["18", "Team members"],
                  ["4.9★", "Avg. client rating"],
                  ["12+", "Countries served"],
                ].map(([v, l]) => (
                  <div key={l}>
                    <div className="text-3xl font-bold font-display">{v}</div>
                    <div className="text-xs text-muted-foreground mt-1">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold font-display">
              Built by people who've <span className="text-gradient">actually shipped.</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Our founders led product and engineering at companies that scaled from zero to
              millions of users. We bring that operator mindset to every client engagement.
            </p>
            <p className="mt-4 text-muted-foreground">
              Today we partner with funded startups, scale-ups and established brands who want
              senior engineering without the overhead of hiring an in-house team.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-4xl sm:text-5xl font-bold font-display text-center">
            What we <span className="text-gradient">stand for.</span>
          </h2>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl glass-card p-7 hover:-translate-y-1 transition-smooth">
                <div className="h-12 w-12 rounded-xl bg-gradient-primary grid place-items-center mb-5">
                  <v.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative pb-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative overflow-hidden rounded-3xl glass-card p-10 sm:p-14 text-center">
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-gradient-primary opacity-30 blur-3xl" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold font-display">
                Let's build something together.
              </h2>
              <Button asChild variant="hero" size="xl" className="mt-7">
                <Link to="/contact">
                  Start a project <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
