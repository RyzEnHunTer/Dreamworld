import React from "react";
import Script from "next/script";
import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import ServicesIntro from "@/components/sections/ServicesIntro";
import ServicesList from "@/components/sections/ServicesList";
import QuoteBlock from "@/components/sections/QuoteBlock";
import SocialFeed from "@/components/sections/SocialFeed";

export default function Home() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "Dream World",
    "image": "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    "@id": "",
    "url": "https://dreamworldsalon.com",
    "telephone": "+91XXXXXXXXXX",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Main Road, Near Landmark",
      "addressLocality": "Simdega",
      "addressRegion": "JH",
      "postalCode": "831523",
      "addressCountry": "IN"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "10:00",
        "closes": "19:30"
      }
    ],
    "priceRange": "₹₹",
    "description": "Simdega's Premier Women-Only Salon. Elevating your everyday glow & bridal elegance."
  };

  return (
    <>
      <Script id="schema-markup" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
      <Hero />
      <Intro />
      <ServicesIntro />
      <ServicesList />
      <QuoteBlock />
      <SocialFeed />
    </>
  );
}
