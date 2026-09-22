"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  if (pathname?.startsWith('/studio')) return null;

  const navLinks = [
    { name: 'ABOUT', href: '/about' },
    { name: 'SERVICES', href: '/services' },
    { name: 'PRICING', href: '/pricing' },
    { name: 'GALLERY', href: '/gallery' },
    { name: 'ALL PAGES +', href: '/pages' },
  ];

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 bg-[var(--color-template-cream)]/90 backdrop-blur-md">
      <div className="max-w-[1400px] mx-auto px-6 h-24 flex items-center justify-between">
        
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2 group z-50">
          <span className="font-serif text-3xl font-medium tracking-tight text-[var(--color-template-red)] transition-transform group-hover:scale-105">
            Dream World
          </span>
          <svg className="w-5 h-5 text-[var(--color-template-red)]" viewBox="0 0 24 24" fill="currentColor">
            {/* Simple lotus/flower icon for the logo */}
            <path d="M12 2C8 2 4 6 4 10c0 4.4 7 11.2 7.6 11.8a.6.6 0 00.8 0C13 21.2 20 14.4 20 10c0-4-4-8-8-8zm0 17.6C10 17 6 12 6 10c0-3.3 2.7-6 6-6s6 2.7 6 6c0 2-4 7-6 9.6z" />
          </svg>
        </Link>

        {/* Center: Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name} 
                href={link.href}
                className={`text-[10px] font-bold tracking-[0.2em] uppercase transition-colors duration-200 hover:opacity-70 ${isActive ? 'text-[var(--color-template-red)]' : 'text-[var(--color-template-red)]'}`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Right: CTA Button */}
        <div className="hidden md:flex items-center">
          <Link href="/contact">
            <button className="bg-[var(--color-template-red)] text-white text-[10px] font-bold tracking-[0.2em] uppercase px-6 py-3 rounded-full hover:bg-black transition-colors shadow-sm">
              Consult & Shine
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center z-50">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[var(--color-template-red)] hover:opacity-70"
          >
            {mobileMenuOpen ? (
               <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
               </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-[var(--color-template-cream)] z-40 flex flex-col items-center justify-center gap-8 pt-24">
           {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold tracking-[0.2em] uppercase text-[var(--color-template-red)]"
              >
                {link.name}
              </Link>
            ))}
             <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              <button className="bg-[var(--color-template-red)] text-white text-xs font-bold tracking-[0.2em] uppercase px-8 py-4 rounded-full mt-4">
                Consult & Shine
              </button>
            </Link>
        </div>
      )}
    </nav>
  );
}
