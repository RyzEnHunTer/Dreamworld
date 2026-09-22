"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import imageUrlBuilder from '@sanity/image-url';

// Build the image URL from Sanity source
function urlFor(source: any, clientConfig: any) {
  return imageUrlBuilder(clientConfig).image(source);
}

export default function GalleryGrid({ displayImages, categories, isFallback, clientConfig }: any) {
  const [activeCategory, setActiveCategory] = useState('all');

  // Filter images based on active category
  const filteredImages = displayImages.filter((img: any) => {
    if (activeCategory === 'all') return true;
    
    if (isFallback) {
      return img.category === activeCategory;
    } else {
      return img.category?.value === activeCategory;
    }
  });

  return (
    <>
      {/* Category Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        <button
          onClick={() => setActiveCategory('all')}
          className={`px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-colors ${
            activeCategory === 'all'
              ? 'bg-[var(--color-template-red)] text-white'
              : 'bg-transparent border border-[var(--color-template-red)] text-[var(--color-template-red)] hover:bg-[var(--color-template-red)]/10'
          }`}
        >
          All
        </button>
        {categories.map((cat: any) => (
          <button
            key={cat.value}
            onClick={() => setActiveCategory(cat.value)}
            className={`px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-colors ${
              activeCategory === cat.value
                ? 'bg-[var(--color-template-red)] text-white'
                : 'bg-transparent border border-[var(--color-template-red)] text-[var(--color-template-red)] hover:bg-[var(--color-template-red)]/10'
            }`}
          >
            {cat.title}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {filteredImages.map((img: any, index: number) => {
          // Determine image source depending on if it's from Sanity or Fallback
          // If from Sanity, use urlFor without setting dimensions to respect the native crop aspect ratio
          const imgSrc = isFallback ? img.src : urlFor(img.image, clientConfig).url();
          
          return (
            <div 
              key={isFallback ? img.id : img._id}
              className="relative break-inside-avoid rounded-2xl overflow-hidden group mb-6"
            >
              <Image 
                src={imgSrc}
                alt={img.title || "Gallery Image"}
                width={800}
                height={1000} // Base aspect
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 pointer-events-none">
                <h3 className="text-white font-serif text-2xl font-light">{img.title}</h3>
                {(isFallback ? img.category : img.category?.title) && (
                   <span className="text-white/80 text-[10px] font-bold tracking-widest uppercase mt-2">
                     {isFallback ? img.category : img.category?.title}
                   </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
