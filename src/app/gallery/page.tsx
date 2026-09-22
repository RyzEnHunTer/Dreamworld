import React from 'react';
import { client } from '../../sanity/client';
import GalleryGrid from '@/components/sections/GalleryGrid';

// Fallback static images if Sanity isn't configured yet
const fallbackImages = [
  { id: 1, src: '/ig_post_1_v2.jpg', title: 'Bridal Makeup', category: 'bridal' },
  { id: 2, src: '/ig_post_2_v2.jpg', title: 'Hair Styling', category: 'hair' },
  { id: 3, src: '/ig_post_3_v2.jpg', title: 'Facial & Spa', category: 'spa' },
  { id: 4, src: '/our_parlour.jpg', title: 'Premium Care', category: 'other' },
  { id: 5, src: '/intro_hair_styling_female.jpg', title: 'Hair Expertise', category: 'hair' },
];

const fallbackCategories = [
  { title: 'Bridal', value: 'bridal' },
  { title: 'Hair Styling', value: 'hair' },
  { title: 'Spa & Facial', value: 'spa' },
  { title: 'Other', value: 'other' },
];

export const dynamic = 'force-dynamic'; // Always fetch fresh data instantly

export default async function GalleryPage() {
  let galleryImages = [];
  let categories = [];

  try {
    // Attempt to fetch from Sanity
    // Fetch active categories
    categories = await client.fetch(`*[_type == "galleryCategory" && isActive == true] | order(title asc)`);
    // Fetch images and expand category reference
    galleryImages = await client.fetch(`*[_type == "galleryImage"]{..., category->{title, value}} | order(_createdAt desc)`);
  } catch (error) {
    console.log("Sanity not configured or error fetching. Falling back to static gallery.");
  }

  // Use fallback if Sanity is empty or failed
  const isFallback = galleryImages.length === 0;
  const displayImages = isFallback ? fallbackImages : galleryImages;
  const displayCategories = isFallback ? fallbackCategories : categories;

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

        {/* Client-side Gallery Grid */}
        <GalleryGrid 
          displayImages={displayImages} 
          categories={displayCategories} 
          isFallback={isFallback} 
          clientConfig={client.config()} 
        />
        
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
