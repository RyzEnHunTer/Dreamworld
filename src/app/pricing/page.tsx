import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Pricing | Dream World Salon",
  description: "Transparent pricing for our premium beauty and salon services.",
};

export default function PricingPage() {
  const pricingData = [
    { category: "Makeup Artistry", services: [
      { name: "HD Bridal Makeup", price: "Contact Us" },
      { name: "Airbrush Bridal", price: "Contact Us" },
      { name: "Engagement / Reception", price: "Starts ₹3,500" },
      { name: "Sangeet Styling", price: "Starts ₹2,500" }
    ]},
    { category: "Hair Studio", services: [
      { name: "Precision Haircuts", price: "Starts ₹400" },
      { name: "Keratin / Smoothing", price: "Starts ₹3,500" },
      { name: "Global Highlights", price: "Starts ₹2,500" },
      { name: "Advanced Hair Spa", price: "Starts ₹800" }
    ]},
    { category: "Skin & Spa", services: [
      { name: "Hydra Facial", price: "Starts ₹1,500" },
      { name: "Organic Cleanup", price: "Starts ₹600" },
      { name: "Luxury Mani-Pedi", price: "Starts ₹1,000" },
      { name: "Body Waxing", price: "Starts ₹1,200" }
    ]}
  ];

  return (
    <main className="w-full bg-[var(--color-template-cream)] min-h-screen pt-40 pb-24">
      
      {/* Header Section */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 text-center flex flex-col items-center mb-24">
        <div className="inline-block px-4 py-2 border border-[var(--color-template-red)]/40 rounded-full text-[10px] font-bold tracking-[0.2em] text-[var(--color-template-red)] uppercase mb-8">
          TRANSPARENT PRICING
        </div>
        
        <h1 className="text-[var(--color-template-red)] font-serif text-5xl md:text-7xl lg:text-[100px] font-light leading-[1.05] tracking-tight max-w-4xl">
          Invest in Your Natural Radiance
        </h1>
      </div>

      {/* Pricing Tables */}
      <div className="max-w-5xl mx-auto px-4 md:px-8 flex flex-col gap-16">
        {pricingData.map((section, idx) => (
          <div key={idx} className="w-full">
            <h3 className="text-[var(--color-template-red)] text-xs font-bold tracking-[0.2em] uppercase mb-8 border-b border-[var(--color-template-red)]/20 pb-4">
              {section.category}
            </h3>
            <div className="flex flex-col gap-4">
              {section.services.map((service, sIdx) => (
                <div key={sIdx} className="flex justify-between items-center group py-4 hover:bg-[var(--color-template-red)]/5 px-4 -mx-4 rounded-lg transition-colors">
                  <span className="font-serif text-2xl md:text-3xl text-[var(--color-template-red)] transition-transform group-hover:translate-x-2">
                    {service.name}
                  </span>
                  {service.price.toLowerCase().includes("contact") ? (
                    <Link href="/contact" className="text-[var(--color-template-red)] text-[10px] font-bold tracking-[0.2em] uppercase hover:opacity-60 transition-opacity underline underline-offset-4">
                      {service.price}
                    </Link>
                  ) : (
                    <span className="text-[var(--color-template-red)] text-[10px] font-bold tracking-[0.2em] uppercase">
                      {service.price}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </main>
  );
}
