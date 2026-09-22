import React from 'react';
import Image from 'next/image';
import { client } from '../../sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

// Fallback static images if Sanity isn't configured yet
const fallbackImages = [
  { id: 1, src: '/ig_post_1_v2.jpg', title: 'Bridal Makeup', category: 'bridal' },
  { id: 2, src: '/ig_post_2_v2.jpg', title: 'Hair Styling', category: 'hair' },
  { id: 3, src: '/ig_post_3_v2.jpg', title: 'Facial & Spa', category: 'spa' },
  { id: 4, src: '/our_parlour.jpg', title: 'Premium Care', category: 'other' },
  { id: 5, src: '/intro_hair_styling_female.jpg', title: 'Hair Expertise', category: 'hair' },
];

export const dynamic = 'force-dynamic'; // Always fetch fresh data instantly

export default async function GalleryPage() {
  let galleryImages = [];

  try {
    // Attempt to fetch from Sanity
    galleryImages = await client.fetch(`*[_type == "galleryImage"] | order(_createdAt desc)`);
  } catch (error) {
    console.log("Sanity not configured or error fetching. Falling back to static gallery.");
  }

  // Use fallback if Sanity is empty or failed
  const isFallback = galleryImages.length === 0;
  const displayImages = isFallback ? fallbackImages : galleryImages;

  return (
    <main className="w-full min-h-screen bg-[var(--color-template-cream)] pt-32 pb-24 px-4 md:px-8">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-[var(--color-template-red)] font-serif text-5xl md:text-7xl font-light tracking-tight mb-6">
            Our Masterpieces
          </h1>
          <p className="text-[var(--color-template-red)] text-sm font-bold tracking-[0.2em] uppercase max-w-2xl mx-auto opacity-80">
            A Glimpse Into The Elegance and Beauty We Create Every Day
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {displayImages.map((img: any, index: number) => {
            
            // Determine image source depending on if it's from Sanity or Fallback
            const imgSrc = isFallback ? img.src : urlFor(img.image).width(800).url();
            
            return (
              <div 
                key={isFallback ? img.id : img._id}
                className="relative break-inside-avoid rounded-2xl overflow-hidden group mb-6"
              >
                {/* 
                  Instead of forcing an aspect ratio (like square), 
                  we let the image dictate its natural height using an img tag,
                  or Next/Image with layout="responsive" 
                */}
                <Image 
                  src={imgSrc}
                  alt={img.title || "Gallery Image"}
                  width={800}
                  height={1000} // This is just a base aspect, h-auto overrides it
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white font-serif text-2xl font-light">{img.title}</h3>
                  {img.category && (
                     <span className="text-white/80 text-[10px] font-bold tracking-widest uppercase mt-2">
                       {img.category}
                     </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        
        {isFallback && (
          <div className="mt-16 text-center border border-[var(--color-template-red)]/20 p-8 rounded-2xl">
            <h4 className="text-[var(--color-template-red)] font-bold text-sm tracking-widest uppercase mb-2">Sanity CMS Pending Configuration</h4>
            <p className="text-[var(--color-template-red)]/70 text-sm">
              The gallery is currently displaying placeholder images. Once you connect your Sanity Project ID in the .env file and upload photos, they will appear here automatically!
            </p>
          </div>
        )}

      </div>
    </main>
  );
}
