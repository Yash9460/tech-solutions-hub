export type Testimonial = {
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Aarav Mehta",
    role: "CEO",
    company: "FinFlow",
    text: "NovaStack rebuilt our entire platform in 10 weeks. Page loads dropped from 4s to under 800ms and conversions jumped 38%.",
    rating: 5,
    initials: "AM",
  },
  {
    name: "Priya Shah",
    role: "Founder",
    company: "LumaWear",
    text: "Their design + engineering combo is rare. The new app feels premium and our App Store rating went from 3.9 to 4.7.",
    rating: 5,
    initials: "PS",
  },
  {
    name: "Daniel Kim",
    role: "CTO",
    company: "Northwind AI",
    text: "We hired them for an AI MVP. They shipped a polished product in 6 weeks — investors loved it. Best decision of the year.",
    rating: 5,
    initials: "DK",
  },
  {
    name: "Sara Lindgren",
    role: "Head of Product",
    company: "Vellora",
    text: "Weekly demos, zero surprises, and code our internal team actually wants to maintain. They set the bar for what an agency partnership should look like.",
    rating: 5,
    initials: "SL",
  },
  {
    name: "Rohit Verma",
    role: "Co-founder",
    company: "Stackline",
    text: "From Figma to production in three sprints. The attention to micro-interactions and empty states made our product feel two years more mature overnight.",
    rating: 5,
    initials: "RV",
  },
  {
    name: "Emily Chen",
    role: "VP Engineering",
    company: "Brightpath",
    text: "We benchmarked five agencies. NovaStack was the only one that asked about business outcomes before talking tech. Hired on the spot.",
    rating: 5,
    initials: "EC",
  },
  {
    name: "Marco Rossi",
    role: "Founder",
    company: "Trovato",
    text: "Their cloud team migrated us off legacy infra with zero downtime and cut our monthly bill by 42%. Incredible craft.",
    rating: 5,
    initials: "MR",
  },
  {
    name: "Ananya Iyer",
    role: "Product Lead",
    company: "Kindred Health",
    text: "Healthcare UX is hard. They got our compliance, our patients and our clinicians right — and made the app genuinely delightful to use.",
    rating: 5,
    initials: "AI",
  },
  {
    name: "James Whitaker",
    role: "CEO",
    company: "OrbitOps",
    text: "Senior team, fair pricing, and shipped early. I've worked with a dozen agencies — NovaStack is in a different league.",
    rating: 5,
    initials: "JW",
  },
];
