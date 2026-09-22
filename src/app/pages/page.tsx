import React from "react";
import Link from "next/link";

export const metadata = {
  title: "All Pages | Dream World Salon",
  description: "Sitemap and directory of all pages on the Dream World Salon website.",
};

const pages = [
  { name: "Home", href: "/", desc: "The main landing page of our beauty salon." },
  { name: "About Us", href: "/about", desc: "Learn more about our story, founder, and vision." },
  { name: "Services", href: "/services", desc: "Explore our comprehensive list of beauty services." },
  { name: "Pricing", href: "/pricing", desc: "View our transparent pricing for all services." },
  { name: "Gallery", href: "/gallery", desc: "See our latest transformations and bridal makeovers." },
  { name: "Contact & Location", href: "/contact", desc: "Find our salon location and get in touch to book." },
];

export default function AllPages() {
  return (
    <main className="w-full bg-[var(--color-template-cream)] min-h-screen pt-40 pb-24">
      <div className="max-w-[1000px] mx-auto px-4 md:px-8">
        
        <div className="mb-16">
          <h1 className="text-[var(--color-template-red)] font-serif text-5xl md:text-7xl font-light mb-6">
            Site Directory
          </h1>
          <p className="text-[var(--color-template-red)]/70 text-sm font-medium uppercase tracking-widest max-w-xl">
            Quickly navigate to any section of our website using the links below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pages.map((page) => (
            <Link 
              key={page.name} 
              href={page.href}
              className="group block p-8 rounded-2xl border border-[var(--color-template-red)]/20 hover:bg-[var(--color-template-red)] hover:border-transparent transition-all duration-300"
            >
              <h2 className="text-[var(--color-template-red)] group-hover:text-white font-serif text-3xl mb-3 transition-colors">
                {page.name}
              </h2>
              <p className="text-[var(--color-template-red)]/70 group-hover:text-white/80 text-xs font-bold tracking-widest uppercase transition-colors">
                {page.desc}
              </p>
              <div className="mt-6 flex items-center gap-2 text-[var(--color-template-red)] group-hover:text-white transition-colors text-xs font-bold tracking-[0.2em] uppercase">
                Visit Page 
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}
