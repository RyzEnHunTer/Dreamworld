import React from "react";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Sneha T.",
    service: "Bridal Makeup",
    text: "Priya did my bridal makeup and it was absolutely stunning. I felt like a queen on my wedding day. The salon is incredibly clean and being a women-only space made me feel so comfortable.",
  },
  {
    id: 2,
    name: "Anjali K.",
    service: "Keratin Treatment",
    text: "Best salon in Simdega! The staff is so polite. I got a keratin treatment and my hair has never felt softer. The ambiance is very relaxing and premium.",
  },
  {
    id: 3,
    name: "Roshni M.",
    service: "Hydra Facial",
    text: "I come here regularly for my skin care. The Hydra facial gives an instant glow. Highly recommend Dream World for anyone looking for professional beauty services.",
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[var(--color-blush)]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-[var(--color-charcoal)] mb-4">Client Love</h2>
          <p className="text-[var(--color-charcoal-light)] max-w-2xl mx-auto">
            Don't just take our word for it. Here is what our beautiful clients in Simdega have to say about their experience at Dream World.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-8 rounded-2xl shadow-sm border border-[var(--color-cream-dark)] relative">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-[var(--color-rose-gold)]/20" />
              <div className="flex space-x-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 text-[var(--color-gold)] fill-current" />
                ))}
              </div>
              <p className="text-[var(--color-charcoal-light)] italic mb-6 leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-[var(--color-charcoal)] text-lg">{review.name}</span>
                <span className="text-[var(--color-rose-gold)] text-sm">{review.service}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
