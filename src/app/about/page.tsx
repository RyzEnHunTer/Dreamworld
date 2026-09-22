import React from "react";
import Founder from "@/components/sections/Founder";
import Script from "next/script";

export const metadata = {
  title: "Meet the Founder | Dream World Salon",
  description: "Learn about Priya Sharma and the story behind Dream World.",
};

export default function AboutPage() {
  return (
    <main className="w-full bg-[var(--color-template-red)] min-h-screen">
      
      {/* Deep Red Hero Section */}
      <div className="relative w-full h-screen flex flex-col items-center justify-center pt-20">
        
        {/* Auto-rotating announcement banner (simulated with marquee) */}
        <div className="absolute top-32 w-full overflow-hidden whitespace-nowrap z-10 opacity-70">
           <div className="animate-marquee text-[var(--color-template-cream)] text-sm font-bold tracking-widest uppercase">
             Enjoy 20% Off our latest beauty line – limited time! <span className="mx-8">•</span> Enjoy 20% Off our latest beauty line – limited time! <span className="mx-8">•</span> Enjoy 20% Off our latest beauty line – limited time!
           </div>
        </div>

        <h1 className="text-[var(--color-template-cream)] font-serif text-6xl md:text-[120px] lg:text-[150px] font-light leading-none tracking-tight text-center px-4 mt-12 z-20">
          Perfection<br/>Starts Here
        </h1>

        {/* Bottom Elements */}
        <div className="absolute bottom-12 w-full px-8 md:px-16 flex justify-between items-end z-20">
           <div className="flex gap-4">
             <span className="text-[var(--color-template-cream)] text-[10px] font-bold tracking-[0.2em] uppercase">IG</span>
             <span className="text-[var(--color-template-cream)] text-[10px] font-bold tracking-[0.2em] uppercase">FB</span>
             <span className="text-[var(--color-template-cream)] text-[10px] font-bold tracking-[0.2em] uppercase">PN</span>
           </div>
           
           <div className="text-[var(--color-template-cream)] text-[10px] font-bold tracking-[0.2em] uppercase flex flex-col items-center gap-2">
             <span>SCROLL TO EXPLORE</span>
             <div className="w-[1px] h-12 bg-[var(--color-template-cream)]"></div>
           </div>
        </div>

      </div>

      {/* Main Content */}
      <Founder />
      
    </main>
  );
}
