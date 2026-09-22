import React from "react";
import Contact from "@/components/sections/Contact";
import Script from "next/script";

export const metadata = {
  title: "Contact & Location | Dream World Salon",
  description: "Visit our Simdega location and book an appointment.",
};

export default function ContactPage() {
  return (
    <main className="w-full bg-[var(--color-template-cream)] min-h-screen pt-40 pb-24">
      
      {/* Header Section */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 text-center flex flex-col items-center mb-24">
        <div className="inline-block px-4 py-2 border border-[var(--color-template-red)]/40 rounded-full text-[10px] font-bold tracking-[0.2em] text-[var(--color-template-red)] uppercase mb-8">
          GET IN TOUCH
        </div>
        
        <h1 className="text-[var(--color-template-red)] font-serif text-5xl md:text-7xl lg:text-[100px] font-light leading-[1.05] tracking-tight max-w-4xl">
          Let's Bring Your Vision to Life
        </h1>
      </div>

      <Contact />
      
    </main>
  );
}
