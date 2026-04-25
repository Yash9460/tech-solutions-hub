import {
  Code2,
  Smartphone,
  Cloud,
  Brain,
  ShieldCheck,
  Palette,
  Database,
  LineChart,
} from "lucide-react";

export const services = [
  {
    icon: Code2,
    title: "Web Development",
    desc: "Lightning-fast websites and web apps built with React, Next.js and modern edge infrastructure.",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    desc: "Native-feeling iOS and Android apps with React Native — one codebase, two stores, zero compromise.",
    tags: ["iOS", "Android", "React Native"],
  },
  {
    icon: Brain,
    title: "AI & Automation",
    desc: "Custom AI agents, chatbots and workflow automations that save your team hours every single week.",
    tags: ["LLMs", "RAG", "Agents"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    desc: "Scalable cloud architecture, CI/CD pipelines and observability on AWS, GCP and Cloudflare.",
    tags: ["AWS", "Docker", "CI/CD"],
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    desc: "Beautiful, conversion-focused interfaces designed in Figma and shipped pixel-perfect to production.",
    tags: ["Figma", "Design Systems"],
  },
  {
    icon: Database,
    title: "SaaS Platforms",
    desc: "End-to-end SaaS products with auth, billing, analytics and multi-tenant architecture out of the box.",
    tags: ["Stripe", "Postgres", "Auth"],
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    desc: "Security audits, penetration testing and compliance hardening to keep your platform bulletproof.",
    tags: ["Pentesting", "SOC2"],
  },
  {
    icon: LineChart,
    title: "Data & Analytics",
    desc: "Real-time dashboards, data pipelines and BI tooling that turn raw events into product decisions.",
    tags: ["BigQuery", "Dashboards"],
  },
] as const;
