import { Link } from "@tanstack/react-router";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import boolbitLogo from "@/assets/boolbit-logo.png";

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 mt-24">
      <div className="mx-auto max-w-7xl px-6 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg overflow-hidden ring-1 ring-border/60 bg-[#0b1430]">
              <img
                src={boolbitLogo}
                alt="Boolbit logo"
                className="h-full w-full object-cover scale-[1.6]"
                loading="lazy"
                decoding="async"
              />
            </span>
            <span className="font-display text-lg font-bold">
              Bool<span className="text-gradient">bit</span>
            </span>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm">
            We design, engineer and scale modern digital products — from sleek websites and mobile
            apps to AI-powered platforms that move your business forward.
          </p>
          <div className="mt-5 flex items-center gap-3">
            {[Twitter, Linkedin, Github, Mail].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="h-9 w-9 grid place-items-center rounded-md glass-card hover:text-primary transition-smooth"
                aria-label="social"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground mb-3">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-primary transition-smooth">About</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-smooth">Services</Link></li>
            <li><Link to="/testimonials" className="hover:text-primary transition-smooth">Testimonials</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-smooth">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground mb-3">Get in touch</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>hello@boolbit.dev</li>
            <li>+91 90000 00000</li>
            <li>Bengaluru, India</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Boolbit. Crafted with precision.</p>
          <p>Engineered for the next decade of the web.</p>
        </div>
      </div>
    </footer>
  );
}
