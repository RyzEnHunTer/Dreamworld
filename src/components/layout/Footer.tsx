"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith('/studio')) return null;

  return (
    <footer className="w-full bg-[var(--color-template-red)] rounded-t-[3rem] mt-12 px-8 py-24 flex flex-col items-center">
      
      {/* Top CTA */}
      <div className="w-full max-w-5xl mx-auto text-center mb-24">
        <h2 className="text-[var(--color-template-cream)] font-serif text-3xl sm:text-4xl md:text-7xl lg:text-[90px] font-light leading-[1.1] tracking-tight mb-8 w-full px-2">
          Your Beauty Journey Starts Here With Unmatched Expertise And Care!
        </h2>
        <p className="text-[var(--color-template-cream)]/80 text-sm md:text-base font-medium max-w-2xl mx-auto mb-12">
          Discover Dream World difference today and let us help you shine brighter than ever. Visit us to embrace beauty, confidence, and elegance!
        </p>
        
        {/* Contact Buttons */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <Link href="tel:+919123198273">
            <button className="bg-[var(--color-template-cream)] text-[var(--color-template-red)] text-xs font-bold tracking-[0.2em] uppercase px-8 py-4 rounded-full hover:bg-white transition-colors shadow-sm">
              +91 91231 98273
            </button>
          </Link>
          <Link href="/contact">
            <button className="bg-transparent border border-[var(--color-template-cream)] text-[var(--color-template-cream)] text-xs font-bold tracking-[0.2em] uppercase px-8 py-4 rounded-full hover:bg-[var(--color-template-cream)] hover:text-[var(--color-template-red)] transition-colors">
              Schedule A Call
            </button>
          </Link>
        </div>
      </div>

      {/* Grid Links */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 border-t border-[var(--color-template-cream)]/20 pt-16 mb-16">
        
        {/* Column 1 */}
        <div className="flex flex-col gap-6 text-center md:text-left">
          <h4 className="text-[var(--color-template-cream)] text-xs font-bold tracking-[0.2em] uppercase mb-4">
            Where Beauty Awaits
          </h4>
          <p className="text-[var(--color-template-cream)]/70 text-sm font-medium leading-relaxed">
            Dream World Salon<br/>
            Main Road, Near Landmark<br/>
            Simdega, JH 831523
          </p>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-6 text-center md:text-left">
          <h4 className="text-[var(--color-template-cream)] text-xs font-bold tracking-[0.2em] uppercase mb-4">
            Everything You Need
          </h4>
          <Link href="/about" className="text-[var(--color-template-cream)]/70 text-sm font-medium hover:text-[var(--color-template-cream)] transition-colors">
            Who We Truly Are
          </Link>
          <Link href="/services" className="text-[var(--color-template-cream)]/70 text-sm font-medium hover:text-[var(--color-template-cream)] transition-colors">
            Beauty Packages
          </Link>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-6 text-center md:text-left">
          <h4 className="text-[var(--color-template-cream)] text-xs font-bold tracking-[0.2em] uppercase mb-4">
            Get Beauty Updates
          </h4>
          <Link href="/contact" className="text-[var(--color-template-cream)]/70 text-sm font-medium hover:text-[var(--color-template-cream)] transition-colors">
            Reach Your Glow
          </Link>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center border-t border-[var(--color-template-cream)]/20 pt-8">
        <span className="text-[var(--color-template-cream)]/50 text-[10px] font-bold tracking-[0.2em] uppercase">
          © Dream World 2026. All Rights Reserved
        </span>
      </div>

    </footer>
  );
}
