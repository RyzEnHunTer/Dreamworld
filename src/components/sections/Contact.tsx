"use client";

import React from "react";
import { MapPin, Phone, MessageCircle } from "lucide-react";

export default function Contact() {
  const whatsappMessage = encodeURIComponent("Hi Dream World, I would like to book an appointment.");
  const whatsappUrl = `https://wa.me/919123198273?text=${whatsappMessage}`;

  return (
    <section className="w-full bg-[var(--color-template-cream)]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          
          {/* Contact Information */}
          <div className="w-full lg:w-1/3 flex flex-col gap-12">
            <div>
              <h3 className="font-serif text-3xl md:text-4xl text-[var(--color-template-red)] mb-4">Visit Our Studio</h3>
              <p className="text-[var(--color-template-red)]/70 text-sm font-medium tracking-wide">
                Step into Simdega's most relaxing women-only beauty sanctuary. Book your appointment today and let us pamper you.
              </p>
            </div>

            <div className="flex flex-col gap-8 border-t border-[var(--color-template-red)]/20 pt-8">
              <div className="flex gap-4 items-start">
                <MapPin className="w-6 h-6 text-[var(--color-template-red)] flex-shrink-0" />
                <div>
                  <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-template-red)] mb-2">Location</h4>
                  <a href="https://maps.app.goo.gl/T4Es4cWR4PYJriVh6" target="_blank" rel="noopener noreferrer" className="text-[var(--color-template-red)]/70 text-sm font-medium hover:text-[var(--color-template-red)] transition-colors mb-4 block">
                    Simdega Main Road, Near Landmark<br />
                    Jharkhand, 831523
                  </a>
                  <a href="https://maps.app.goo.gl/T4Es4cWR4PYJriVh6" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-template-red)] hover:opacity-70 transition-colors underline underline-offset-4">
                    Get Directions
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Phone className="w-6 h-6 text-[var(--color-template-red)] flex-shrink-0" />
                <div>
                  <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-template-red)] mb-2">Contact</h4>
                  <p className="text-[var(--color-template-red)]/70 text-sm font-medium mb-4">
                    +91 91231 98273
                  </p>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--color-template-red)] rounded-full text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-template-red)] hover:bg-[var(--color-template-red)] hover:text-[var(--color-template-cream)] transition-colors">
                    <MessageCircle className="w-4 h-4" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Minimalist Map Embed */}
          <div className="w-full lg:w-2/3 aspect-video lg:aspect-auto lg:h-[600px] rounded-2xl overflow-hidden grayscale contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3683.1275354976683!2d84.4995243!3d22.6117122!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398a9d6699956ead%3A0x6821c6eee5ead90f!2sDream%20World%20Beauty%20Parlour!5e0!3m2!1sen!2sin!4v1790057278663!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Dream World Salon Location"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
