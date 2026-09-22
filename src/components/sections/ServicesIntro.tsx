"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function ServicesIntro() {
  return (
    <section className="w-full px-4 md:px-8 max-w-[1400px] mx-auto py-12 md:py-24">
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Top Text Section */}
        <motion.div variants={itemVariants} className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <h2 className="text-[var(--color-template-red)] font-serif text-4xl sm:text-5xl md:text-7xl lg:text-[90px] font-light leading-[1.05] tracking-tight max-w-3xl">
            Explore Our Exclusive<br/>Luxury Services
          </h2>
          <span className="text-[var(--color-template-red)] font-serif text-4xl sm:text-5xl md:text-7xl lg:text-[90px] font-light mt-4 md:mt-0">
            (15+)
          </span>
        </motion.div>

        {/* Horizontal Divider */}
        <motion.div variants={itemVariants} className="w-full h-[1px] bg-[var(--color-template-red)]/20 mb-8"></motion.div>

        {/* Sub-header text */}
        <motion.div variants={itemVariants} className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10 md:mb-16">
          <span className="text-[var(--color-template-red)] text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
            YOUR NATURAL BEAUTY
          </span>
          <Link 
            href="/services" 
            className="text-[var(--color-template-red)] text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase flex items-center gap-2 hover:opacity-70 transition-opacity"
          >
            VIEW ALL OFFERINGS
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </Link>
        </motion.div>

        {/* Massive Image Container with Parallax inner zoom */}
        <motion.div 
          variants={itemVariants}
          className="w-full relative rounded-3xl overflow-hidden aspect-[21/9] md:aspect-[2.5/1] bg-[var(--color-template-red)]/5 group"
        >
          <div className="absolute inset-0 w-full h-full transform transition-transform duration-[2s] ease-out group-hover:scale-105">
            <Image 
              src="/our_parlour.jpg"
              alt="Our Parlour Interior"
              fill
              sizes="(max-width: 1400px) 100vw, 1400px"
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-template-red)]/20 to-transparent mix-blend-overlay pointer-events-none"></div>
          
          {/* Glassmorphism Badge */}
          <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs md:text-sm font-bold tracking-[0.2em] uppercase">
            Premium Care
          </div>
        </motion.div>
      </motion.div>

    </section>
  );
}
