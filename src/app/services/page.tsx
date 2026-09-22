import React from "react";
import ServicesMenu from "@/components/sections/ServicesMenu";
import Script from "next/script";

export const metadata = {
  title: "Premium Services | Dream World Salon",
  description: "Explore our spectrum of premium beauty, makeup, and hair services.",
};

export default function ServicesPage() {
  return (
    <main className="w-full bg-[var(--color-template-cream)] min-h-screen pt-40 pb-24">
      
      {/* Header Section */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 text-center flex flex-col items-center mb-24">
        
        {/* Pill Badge */}
        <div className="inline-block px-4 py-2 border border-[var(--color-template-red)]/40 rounded-full text-[10px] font-bold tracking-[0.2em] text-[var(--color-template-red)] uppercase mb-8">
          15+ PREMIUM SERVICES
        </div>
        
        {/* Giant Serif Title */}
        <h1 className="text-[var(--color-template-red)] font-serif text-5xl md:text-7xl lg:text-[100px] font-light leading-[1.05] tracking-tight max-w-5xl">
          Explore Spectrum of Premium Services
        </h1>
      </div>

      <ServicesMenu />
      
    </main>
  );
}
