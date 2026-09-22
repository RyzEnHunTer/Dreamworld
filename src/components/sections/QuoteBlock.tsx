import React from 'react';
import Image from 'next/image';

export default function QuoteBlock() {
  return (
    <section className="w-full px-4 md:px-8 max-w-[1400px] mx-auto py-16">
      
      <div className="relative w-full bg-[var(--color-template-red)] rounded-3xl p-8 py-16 md:p-32 flex flex-col items-center justify-center text-center overflow-visible">
        
        {/* Floating Icon / Decoration */}
        <div className="mb-12">
           <svg className="w-12 h-12 text-[var(--color-template-cream)]/80 mx-auto" viewBox="0 0 24 24" fill="currentColor">
              {/* Simple stylized flower icon */}
              <path d="M12 2C8 2 4 6 4 10c0 4.4 7 11.2 7.6 11.8a.6.6 0 00.8 0C13 21.2 20 14.4 20 10c0-4-4-8-8-8zm0 17.6C10 17 6 12 6 10c0-3.3 2.7-6 6-6s6 2.7 6 6c0 2-4 7-6 9.6z" />
           </svg>
        </div>

        {/* The Quote */}
        <h2 className="text-[var(--color-template-cream)] font-serif text-3xl sm:text-4xl md:text-6xl lg:text-[70px] font-light leading-tight md:leading-[1.1] max-w-5xl z-10 w-full px-2">
          "Our passion isn't beauty, it's making people truly fall in love with themselves."
        </h2>

        {/* Author */}
        <div className="mt-12 text-[var(--color-template-cream)] text-xs font-medium tracking-widest uppercase z-10">
          Santoshi Devi <span className="mx-4 opacity-50">•</span> Dream World Founder
        </div>

        {/* Left Floating Image (Equipment) */}
        <div className="absolute -bottom-10 md:-bottom-24 -left-2 md:left-12 w-24 md:w-64 aspect-[4/5] rounded-lg overflow-hidden shadow-2xl -rotate-6 z-20 hidden sm:block">
          <Image 
            src="/parlour_equipment.jpg"
            alt="Premium Parlour Equipment"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Floating Image (Lipstick/Product) */}
        <div className="absolute -top-10 md:-top-24 -right-2 md:right-12 w-20 md:w-56 aspect-[3/4] rounded-lg overflow-hidden shadow-2xl rotate-6 z-20 hidden sm:block">
          <Image 
            src="https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=600&auto=format&fit=crop"
            alt="Lipstick Product"
            fill
            className="object-cover"
          />
        </div>

      </div>

    </section>
  );
}
