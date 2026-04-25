import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Layout } from "@/components/site/Layout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact NovaStack — Start Your Project in 24 Hours" },
      {
        name: "description",
        content:
          "Tell us about your project. We respond to every enquiry within 24 hours with ideas, timelines and a transparent quote.",
      },
      { property: "og:title", content: "Contact NovaStack" },
      {
        property: "og:description",
        content: "Get in touch with our tech team. We respond within 24 hours.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Contact NovaStack" },
      {
        name: "twitter:description",
        content: "Get in touch with our tech team. We respond within 24 hours.",
      },
    ],
  }),
  component: ContactPage,
});

const channels = [
  { icon: Mail, label: "Email", value: "hello@novastack.dev" },
  { icon: Phone, label: "Phone", value: "+91 90000 00000" },
  { icon: MapPin, label: "Office", value: "Bengaluru, India" },
];

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <Layout>
      <section className="relative pt-20 pb-12">
        <div className="absolute inset-0 grid-pattern opacity-30 [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-xs font-medium">
            Contact us
          </div>
          <h1 className="mt-5 text-5xl sm:text-6xl font-bold font-display">
            Let's build something <br />
            <span className="text-gradient">remarkable.</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Share a few details about your project. We'll be back within 24 hours.
          </p>
        </div>
      </section>

      <section className="relative pb-24">
        <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 rounded-3xl glass-card p-8 sm:p-10">
            {sent ? (
              <div className="text-center py-16">
                <div className="mx-auto h-16 w-16 rounded-full bg-gradient-primary grid place-items-center glow">
                  <CheckCircle2 className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="mt-6 text-2xl font-bold font-display">Message sent!</h3>
                <p className="mt-2 text-muted-foreground">
                  Thanks for reaching out. We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form
                className="space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Your name</label>
                    <Input required placeholder="Jane Doe" className="h-11 bg-secondary/40" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input
                      required
                      type="email"
                      placeholder="jane@company.com"
                      className="h-11 bg-secondary/40"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Company</label>
                  <Input placeholder="Acme Inc." className="h-11 bg-secondary/40" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Tell us about your project</label>
                  <Textarea
                    required
                    rows={6}
                    placeholder="What are you building, and what success looks like..."
                    className="bg-secondary/40 resize-none"
                  />
                </div>
                <Button type="submit" variant="hero" size="lg" className="w-full sm:w-auto">
                  Send message <Send className="h-4 w-4" />
                </Button>
              </form>
            )}
          </div>

          <div className="space-y-4">
            {channels.map((c) => (
              <div key={c.label} className="rounded-2xl glass-card p-5 flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-gradient-primary grid place-items-center shrink-0">
                  <c.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">{c.label}</div>
                  <div className="font-medium mt-0.5">{c.value}</div>
                </div>
              </div>
            ))}
            <div className="rounded-2xl glass-card p-6">
              <h3 className="font-semibold">Office hours</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Monday – Friday
                <br />
                9:00 AM – 7:00 PM IST
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
