"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    id: 1,
    name: "Design Manicure",
    price: "FROM $30",
    author: "BY OLIVIA BENNETT",
    image: "/service-manicure.png"
  },
  {
    id: 2,
    name: "Treatments & Spa",
    price: "FROM $70",
    author: "BY EMMA COLLINS",
    image: "/service-spa.png"
  },
  {
    id: 3,
    name: "Brow Shaping",
    price: "FROM $45",
    author: "BY AMELIA BROOKS",
    image: "/service-brow.png"
  },
  {
    id: 4,
    name: "Hair Treatments",
    price: "FROM $100",
    author: "BY EVELYN HARRIS",
    image: "/service-hair.png"
  }
];

export default function ServicesList() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <section className="w-full px-4 md:px-8 max-w-[1400px] mx-auto pb-24 relative">
      
      {/* Tabs / Header */}
      <div className="flex justify-between items-center pb-6 border-b border-[var(--color-template-red)]/20">
        <span className="text-[var(--color-template-red)] text-[10px] font-bold tracking-[0.2em] uppercase">
          POPULAR SERVICES
        </span>
      </div>

      {/* List Container */}
      <div className="flex flex-col relative" onMouseLeave={() => setHoveredService(null)}>
        {services.map((service) => (
          <Link 
            href={`/services`} 
            key={service.id}
            className="group flex flex-col md:flex-row justify-between items-start md:items-center py-10 md:py-16 border-b border-[var(--color-template-red)]/20 hover:bg-[var(--color-template-red)]/5 transition-colors relative"
            onMouseEnter={() => setHoveredService(service.id)}
          >
            {/* Left: Service Name */}
            <h3 className="text-[var(--color-template-red)] font-serif text-4xl md:text-6xl font-light tracking-tight mb-4 md:mb-0 transition-transform group-hover:translate-x-4 duration-300">
              {service.name}
            </h3>

            {/* Floating Image (Visible on Hover) */}
            <div 
              className={`absolute right-12 md:right-1/4 top-1/2 -translate-y-1/2 w-48 md:w-80 aspect-square rounded-2xl overflow-hidden shadow-2xl pointer-events-none transition-all duration-700 z-30 ${hoveredService === service.id ? 'opacity-100 scale-100 rotate-3' : 'opacity-0 scale-90 -rotate-3'}`}
            >
              <Image 
                src={service.image}
                alt={service.name}
                fill
                className="object-cover"
              />
            </div>
          </Link>
        ))}
      </div>

    </section>
  );
}
