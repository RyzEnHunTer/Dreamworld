"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Intro() {
  // Using raw window scrollY to mathematically guarantee the parallax values update.
  const { scrollY } = useScroll();

  // The section is below the hero, so scrollY will likely be between 500 and 2000 
  // when the user is viewing it. We map raw scroll pixels to y-offsets.
  const y1 = useTransform(scrollY, [0, 3000], [100, -200]);
  const y2 = useTransform(scrollY, [0, 3000], [150, -300]);
  const y3 = useTransform(scrollY, [0, 3000], [50, -100]);
  const y4 = useTransform(scrollY, [0, 3000], [200, -400]);

  return (
    <section className="w-full py-24 md:py-32 px-4 md:px-8 max-w-[1400px] mx-auto min-h-screen overflow-hidden">
      
      {/* 
        Bulletproof Flex Layout:
        Using standard document flow (flex-col, gap) ensures elements push each other down.
        No absolute positioning means zero chance of overlapping on any screen size.
      */}
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 w-full items-start">
        
        {/* Left Column: Text on top, Hair Styling image on bottom */}
        <div className="w-full lg:w-1/2 flex flex-col pt-12 md:pt-24 z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-2xl mb-16 md:mb-32"
          >
            <p className="text-[var(--color-template-red)] text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-8 leading-relaxed max-w-sm">
              Welcome to Dream World, where beauty transcends boundaries and confidence becomes your signature.
            </p>
            <h2 className="text-[var(--color-template-red)] font-serif text-3xl sm:text-4xl md:text-7xl lg:text-[85px] font-light leading-[1.1] tracking-tight">
              Founded with a passion for elegance, our salon is a sanctuary for those who seek to enhance their natural radiance.
            </h2>
          </motion.div>

          <motion.div 
            style={{ y: y2 }}
            className="relative w-48 md:w-72 aspect-square rounded-2xl overflow-hidden shadow-2xl self-start md:ml-12"
          >
            <Image 
              src="/intro_hair_styling_female.jpg"
              alt="Professional Hair Styling by Female Experts"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Right Column: Three images spaced out vertically */}
        <div className="w-full lg:w-1/2 flex flex-col gap-24 md:gap-32 min-h-[800px] pt-12 md:pt-0">
          
          {/* Top Right: Facial Spa */}
          <motion.div 
            style={{ y: y1 }}
            className="relative w-56 md:w-80 aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl self-end"
          >
            <Image 
              src="/intro_facial_spa_1787160535383.jpg"
              alt="Relaxing Facial Spa"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover"
            />
          </motion.div>

          {/* Middle Right: Beauty Portrait */}
          <motion.div 
            style={{ y: y4 }}
            className="relative w-48 md:w-64 aspect-square rounded-2xl overflow-hidden shadow-xl self-center hidden md:block"
          >
            <Image 
              src="/intro_beauty_portrait_1787160924447.jpg"
              alt="Premium Indian Beauty"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover"
            />
          </motion.div>

          {/* Bottom Right: Bridal Makeup */}
          <motion.div 
            style={{ y: y3 }}
            className="relative w-56 md:w-80 aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl self-end"
          >
            <Image 
              src="/intro_bridal_makeup_1787159936184.jpg"
              alt="Indian Bridal Makeup"
              fill
              sizes="(max-width: 768px) 60vw, 30vw"
              className="object-cover"
            />
          </motion.div>

        </div>
      </div>

    </section>
  );
}
