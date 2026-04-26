import {
  Code2,
  Smartphone,
  Cloud,
  Brain,
  ShieldCheck,
  Palette,
  Database,
  LineChart,
  Globe,
  Wrench,
} from "lucide-react";

export const services = [
  {
    icon: Code2,
    title: "Web Development",
    desc: "Lightning-fast websites and web apps — from custom React builds to WordPress, Shopify and Wix storefronts.",
    tags: ["React", "Next.js", "TypeScript", "WordPress", "Shopify", "Wix"],
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
    icon: Wrench,
    title: "Web & App Maintenance",
    desc: "Keep your web and mobile apps fast, secure and bug-free with proactive monitoring, updates and on-call engineering support.",
    tags: ["Monitoring", "Updates", "SLA"],
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

