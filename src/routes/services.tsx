import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/site/Layout";
import { services } from "@/components/site/services-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Web, Mobile, AI & Cloud Engineering | NovaStack" },
      {
        name: "description",
        content:
          "Web development, mobile apps, AI & automation, cloud, SaaS, UI/UX, cybersecurity and analytics — every tech service your business needs, under one roof.",
      },
      { property: "og:title", content: "Tech Services — NovaStack" },
      {
        property: "og:description",
        content: "Eight focused tech services built around modern stacks and senior engineering.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "NovaStack Services" },
      {
        name: "twitter:description",
        content: "Eight focused tech services built around modern stacks and senior engineering.",
      },
      { name: "keywords", content: "web development, react, mobile apps, AI agents, cloud devops, saas development, ui ux design, cybersecurity, data analytics" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "NovaStack Services",
          itemListElement: [
            "Web Development",
            "Mobile Apps",
            "AI & Automation",
            "Cloud & DevOps",
            "UI / UX Design",
            "SaaS Platforms",
            "Cybersecurity",
            "Data & Analytics",
          ].map((name, idx) => ({
            "@type": "ListItem",
            position: idx + 1,
            name,
          })),
        }),
      },
    ],
  }),
  component: ServicesPage,
});

const deliverables = [
  "Discovery & technical audit",
  "UX & UI design system",
  "Production-ready engineering",
  "QA, performance & security",
  "Deployment & DevOps",
  "Post-launch support & SLA",
];

function ServicesPage() {
  return (
    <Layout>
      <section className="relative pt-20 pb-16">
        <div className="absolute inset-0 grid-pattern opacity-30 [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-xs font-medium">
            Our services
          </div>
          <h1 className="mt-5 text-5xl sm:text-6xl font-bold font-display">
            Everything tech, <br />
            <span className="text-gradient">crafted with care.</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
            From a polished landing page to a full SaaS platform — pick what you need today, scale
            into the rest tomorrow.
          </p>
        </div>
      </section>

      <section className="relative pb-12">
        <div className="mx-auto max-w-7xl px-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative rounded-2xl glass-card p-7 hover:-translate-y-1 hover:border-primary/40 transition-smooth"
            >
              <div className="h-14 w-14 rounded-xl bg-gradient-primary grid place-items-center mb-5 group-hover:scale-110 transition-smooth">
                <s.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full bg-secondary/60 text-foreground/80 border border-border/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold font-display">
              What's <span className="text-gradient">always included.</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Every engagement, from a quick sprint to a multi-month build, ships with these
              fundamentals — no upsells.
            </p>
          </div>
          <ul className="grid sm:grid-cols-2 gap-3">
            {deliverables.map((d) => (
              <li
                key={d}
                className="flex items-center gap-3 rounded-xl glass-card px-4 py-3 text-sm"
              >
                <span className="h-7 w-7 rounded-md bg-gradient-primary grid place-items-center shrink-0">
                  <Check className="h-4 w-4 text-primary-foreground" />
                </span>
                {d}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative pb-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative overflow-hidden rounded-3xl glass-card p-10 sm:p-14 text-center">
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-gradient-primary opacity-30 blur-3xl" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold font-display">
                Not sure which service you need?
              </h2>
              <p className="mt-3 text-muted-foreground">
                Book a 30-minute call. We'll listen, advise honestly, and only recommend what your
                business actually needs.
              </p>
              <Button asChild variant="hero" size="xl" className="mt-7">
                <Link to="/contact">
                  Talk to an engineer <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
