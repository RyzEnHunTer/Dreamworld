import React from "react";
import Image from "next/image";

export default function Founder() {
  return (
    <section className="w-full bg-[var(--color-template-cream)] py-32 px-4 md:px-8 rounded-t-[3rem] -mt-10 relative z-30">
      <div className="max-w-[1000px] mx-auto flex flex-col items-center text-center">
        
        {/* Centered Image */}
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden mb-12 shadow-2xl relative">
          <Image 
            src="/santoshi_devi.jpg" 
            alt="Santoshi Devi - Founder" 
            width={400}
            height={400}
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Introduction Text */}
        <p className="text-[var(--color-template-red)] text-xs font-bold tracking-[0.2em] uppercase mb-8">
          Meet Santoshi Devi
        </p>
        
        <h2 className="font-serif text-3xl md:text-5xl font-light text-[var(--color-template-red)] leading-tight mb-12">
          "I started this journey alone, and with dedication and love, expanded this business into a sanctuary exclusively for women."
        </h2>

        {/* Statistics Grid */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-16 pt-16 border-t border-[var(--color-template-red)]/20">
          <div className="flex flex-col items-center">
             <span className="font-serif text-5xl md:text-6xl text-[var(--color-template-red)] mb-4">8+</span>
             <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-template-red)]">Years Experience</span>
          </div>
          <div className="flex flex-col items-center">
             <span className="font-serif text-5xl md:text-6xl text-[var(--color-template-red)] mb-4">2k+</span>
             <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-template-red)]">Happy Brides</span>
          </div>
          <div className="flex flex-col items-center">
             <span className="font-serif text-5xl md:text-6xl text-[var(--color-template-red)] mb-4">5+</span>
             <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-template-red)]">Expert Staff</span>
          </div>
          <div className="flex flex-col items-center">
             <span className="font-serif text-5xl md:text-6xl text-[var(--color-template-red)] mb-4">100%</span>
             <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-template-red)]">Women Only</span>
          </div>
        </div>

      </div>
    </section>
  );
}
