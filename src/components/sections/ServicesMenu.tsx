"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const categories = ["Bridal & Pre-Bridal", "Day-to-Day Makeup", "Hair Studio", "Skin & Body"];

const servicesData = {
  "Bridal & Pre-Bridal": [
    { title: "HD Bridal Makeup", desc: "Flawless, camera-ready look for your big day.", price: "Contact us" },
    { title: "Airbrush Bridal", desc: "Long-lasting, lightweight, and waterproof makeup.", price: "Contact us" },
    { title: "Engagement Look", desc: "Elegant styling for pre and post-wedding events.", price: "Starts ₹3,500" },
    { title: "Pre-Bridal Package", desc: "Complete head-to-toe pampering sessions.", price: "Starts ₹8,000" },
  ],
  "Day-to-Day Makeup": [
    { title: "Natural Party Glow", desc: "Subtle and dewy finish for daytime events.", price: "Starts ₹1,500" },
    { title: "Sangeet Styling", desc: "Glamorous and vibrant look for the dance floor.", price: "Starts ₹2,500" },
    { title: "Festive Makeup", desc: "Traditional touch with modern elegance.", price: "Starts ₹2,000" },
  ],
  "Hair Studio": [
    { title: "Precision Haircuts", desc: "Tailored cuts to suit your face shape.", price: "Starts ₹400" },
    { title: "Keratin / Smoothing", desc: "Frizz-free, silky straight hair.", price: "Starts ₹3,500" },
    { title: "Global Highlights", desc: "Premium hair coloring with ammonia-free products.", price: "Starts ₹2,500" },
    { title: "Advanced Hair Spa", desc: "Deep conditioning and scalp treatment.", price: "Starts ₹800" },
  ],
  "Skin & Body": [
    { title: "Hydra Facial", desc: "Deep cleansing, exfoliation, and hydration.", price: "Starts ₹1,500" },
    { title: "Organic Cleanup", desc: "Natural ingredients for a glowing skin.", price: "Starts ₹600" },
    { title: "Luxury Mani-Pedi", desc: "Complete care and relaxation for hands and feet.", price: "Starts ₹1,000" },
    { title: "Body Waxing", desc: "Gentle hair removal for sensitive skin.", price: "Starts ₹1,200" },
  ]
};

export default function ServicesMenu() {
  const [activeTab, setActiveTab] = useState(categories[0]);

  return (
    <section id="services" className="w-full bg-[var(--color-template-cream)]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Tabs (Minimalist Links) */}
        <div className="flex flex-wrap gap-8 mb-16 border-b border-[var(--color-template-red)]/20 pb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`text-[10px] font-bold tracking-[0.2em] uppercase transition-opacity ${
                activeTab === category
                  ? "text-[var(--color-template-red)] opacity-100"
                  : "text-[var(--color-template-red)] opacity-50 hover:opacity-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Services List (Sleek Rows) */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col"
            >
              {servicesData[activeTab as keyof typeof servicesData].map((service, index) => (
                <div 
                  key={index} 
                  className="group flex flex-col md:flex-row justify-between items-start md:items-center py-12 border-b border-[var(--color-template-red)]/20 hover:bg-[var(--color-template-red)]/5 transition-colors px-4 -mx-4 rounded-xl"
                >
                  <div className="flex-1">
                    <h3 className="font-serif text-3xl md:text-5xl font-light text-[var(--color-template-red)] mb-4 transition-transform group-hover:translate-x-4 duration-300">
                      {service.title}
                    </h3>
                    <p className="text-[var(--color-template-red)]/70 text-sm font-medium tracking-wide max-w-xl transition-transform group-hover:translate-x-4 duration-300">
                      {service.desc}
                    </p>
                  </div>
                  
                  <div className="mt-6 md:mt-0 flex items-center gap-12 group/btn">
                    {service.price.toLowerCase().includes("contact") ? (
                      <Link href="/contact" className="flex items-center gap-12 text-[var(--color-template-red)] hover:opacity-60 transition-opacity">
                        <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase underline underline-offset-4">
                          {service.price}
                        </span>
                        <svg className="w-5 h-5 transition-transform group-hover/btn:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                         </svg>
                      </Link>
                    ) : (
                      <>
                        <span className="inline-block text-[var(--color-template-red)] text-xs font-bold tracking-[0.2em] uppercase">
                          {service.price}
                        </span>
                        <button className="text-[var(--color-template-red)] hover:opacity-60 transition-opacity flex items-center">
                           <svg className="w-5 h-5 transition-transform group-hover/btn:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                           </svg>
                        </button>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
