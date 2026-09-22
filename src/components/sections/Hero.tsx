import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const pills = [
  { name: "SERVICES", href: "/services" },
  { name: "CONTACT US", href: "/contact" },
  { name: "PRICING", href: "/pricing" },
  { name: "ABOUT", href: "/about" },
  { name: "GALLERY", href: "/gallery" },
];

export default function Hero() {
  return (
    <section className="relative w-full pt-28 pb-10 px-4 md:px-8 max-w-[1600px] mx-auto min-h-screen flex flex-col">
      
      {/* 
        The massive rounded hero image container wrapper (to allow absolute elements to break out) 
      */}
      <div className="relative w-full flex-grow min-h-[70vh] flex flex-col">
        <div className="relative w-full flex-grow rounded-t-[2.5rem] rounded-b-[2.5rem] overflow-hidden bg-[var(--color-template-red)] shadow-lg flex flex-col items-center justify-center">
          
          {/* Placeholder for the main image (Woman in red hat) */}
          <div className="absolute inset-0 z-0 bg-black/20">
            <Image 
               src="/hero-bride.png"
               alt="Zerra Beauty"
               fill
               className="object-cover object-center opacity-80 animate-slow-zoom"
               priority
            />
            {/* A gradient overlay to make white text pop */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
          </div>

          {/* The Giant Scrolling/Static Typography Overlay */}
          <div className="absolute top-12 left-0 w-full overflow-hidden whitespace-nowrap z-10 flex">
             <div className="animate-marquee text-white text-[12vw] md:text-[140px] font-serif font-light tracking-tight leading-none">
               Glow <span className="mx-4 md:mx-12 opacity-80">•</span> Dream World <span className="mx-4 md:mx-12 opacity-80">•</span> Glow <span className="mx-4 md:mx-12 opacity-80">•</span> Dream World <span className="mx-4 md:mx-12 opacity-80">•</span> Glow <span className="mx-4 md:mx-12 opacity-80">•</span> Dream World <span className="mx-4 md:mx-12 opacity-80">•</span>
             </div>
          </div>

          {/* Bottom UI Elements within the Hero Container */}
          <div className="absolute bottom-8 md:bottom-12 w-full px-6 md:px-16 flex flex-col md:flex-row justify-between items-start md:items-end z-20">
            
            {/* Bottom Left: Welcome Text */}
            <div className="text-white max-w-sm mb-8 md:mb-0">
              <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase mb-3">
                WELCOME TO DREAM WORLD:
              </h3>
              <p className="text-sm font-light leading-relaxed opacity-90">
                We are more than just a salon, we are a haven for those who seek to embrace their individuality and radiate confidence.
              </p>
            </div>

            {/* Bottom Right: Pill Buttons Grid */}
            <div className="flex flex-wrap gap-2 md:gap-4 justify-start md:justify-end mt-4 md:mt-0">
              {pills.map((pill) => (
                <Link 
                  href={pill.href} 
                  key={pill.name} 
                  className="px-4 py-2 border border-white/40 rounded-full text-[9px] md:text-[10px] font-bold tracking-widest text-white uppercase transition-all duration-300 backdrop-blur-sm hover:bg-[var(--color-template-red)] hover:border-[var(--color-template-red)] hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20"
                >
                  {pill.name}
                </Link>
              ))}
            </div>

          </div>
        </div>

        {/* The Unique Bottom Center Arrow Cutout/Button - now outside the overflow-hidden container */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-[var(--color-template-cream)] rounded-full flex items-center justify-center z-30 shadow-md">
          <svg className="w-4 h-4 text-[var(--color-template-red)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
