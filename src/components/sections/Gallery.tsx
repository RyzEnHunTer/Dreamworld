"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play } from "lucide-react";

const galleryItems: any[] = [];

const categories = ["All", "Bridal", "Hair", "Skin", "Reels"];

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [selectedItem, setSelectedItem] = useState<any | null>(null);

  const filteredItems = filter === "All" ? galleryItems : galleryItems.filter(item => item.category === filter);

  return (
    <section id="gallery" className="py-24 bg-[var(--color-cream)] min-h-[60vh] flex flex-col items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold text-[var(--color-template-red)] mb-4 tracking-tight">Our Work Gallery</h2>
          <p className="text-[var(--color-template-red)]/80 max-w-2xl mx-auto text-sm font-light uppercase tracking-widest">
            Explore our latest transformations, bridal makeovers, and beauty treatments.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-300 ${
                filter === cat
                  ? "bg-[var(--color-template-red)] text-white shadow-md shadow-[var(--color-template-red)]/20"
                  : "bg-transparent text-[var(--color-template-red)] border border-[var(--color-template-red)]/30 hover:bg-[var(--color-template-red)]/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid or Coming Soon */}
        {filteredItems.length === 0 ? (
          <div className="w-full flex flex-col items-center justify-center py-24 text-center border-t border-[var(--color-template-red)]/10">
            <svg className="w-16 h-16 text-[var(--color-template-red)]/30 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <h3 className="font-serif text-3xl text-[var(--color-template-red)] mb-3">Coming Soon</h3>
            <p className="text-[var(--color-template-red)]/60 text-xs font-bold tracking-widest uppercase">
              Uploads will appear here.
            </p>
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={item.id}
                  className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-sm aspect-[4/5]"
                  onClick={() => setSelectedItem(item)}
                >
                  <img src={item.src} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    {item.type === "video" && (
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Play className="text-white w-5 h-5 ml-1" />
                      </div>
                    )}
                    <h3 className="text-white font-serif text-xl font-medium">{item.title}</h3>
                    <span className="text-white/70 text-sm">{item.category}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedItem(null)}
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-[var(--color-rose-gold)] transition-colors"
              onClick={() => setSelectedItem(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedItem.src} alt={selectedItem.title} className="w-full h-full max-h-[85vh] object-contain rounded-lg" />
              <div className="absolute bottom-4 left-0 right-0 text-center">
                <h3 className="text-white font-serif text-2xl drop-shadow-md">{selectedItem.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
