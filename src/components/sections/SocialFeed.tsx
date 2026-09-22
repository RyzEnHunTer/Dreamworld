import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function SocialFeed() {
  const images = [
    { src: "/ig_post_1_v2.jpg", alt: "Instagram Post 1" },
    { src: "/ig_post_2_v2.jpg", alt: "Instagram Post 2" },
    { src: "/ig_post_3_v2.jpg", alt: "Instagram Post 3" },
  ];

  const instagramLink = "https://www.instagram.com/dream_world_parlour?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==";

  return (
    <section className="w-full px-4 md:px-8 max-w-[1400px] mx-auto py-24">
      
      {/* Header and Links */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-12">
        <h3 className="text-[var(--color-template-red)] font-serif text-3xl md:text-5xl font-light mb-6 md:mb-0">
          Follow us
        </h3>
        <div className="flex gap-8">
          <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="text-[var(--color-template-red)] text-xs font-bold tracking-[0.2em] uppercase hover:opacity-60 transition-opacity flex items-center gap-2">
            Instagram
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Images Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
        {images.map((img, index) => (
          <a 
            key={index} 
            href={instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-[var(--color-template-red)]/5"
          >
            <Image 
              src={img.src} 
              alt={img.alt} 
              fill 
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500 flex items-center justify-center backdrop-blur-[0px] group-hover:backdrop-blur-[2px]">
               <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-sm font-bold tracking-[0.2em] translate-y-4 group-hover:translate-y-0 flex items-center gap-2">
                 VIEW ON INSTAGRAM
               </span>
            </div>
          </a>
        ))}
      </div>

    </section>
  );
}
