"use client";

import { Star, Quote, CheckCircle2 } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Priyanka Roy",
      locality: "Sinthee, Kolkata",
      service: "Bengali Bridal HD Makeup",
      rating: 5,
      quote:
        "Swapna and her bridal team made my wedding day unforgettable! The Bengali HD bridal makeup stayed completely flawless for 14 hours. Saree draping and hair setting were top notch.",
    },
    {
      name: "Anirban Mukherjee",
      locality: "Dunlop, Kolkata",
      service: "Beard Sculpting & Hair Cut",
      rating: 5,
      quote:
        "Finally a luxury studio on BT Road that understands precision beard shaping and modern hair cuts. Cleanest salon in northern Kolkata. Extremely professional staff.",
    },
    {
      name: "Sreyashi Das",
      locality: "Baranagar, Kolkata",
      service: "O3+ Facial & Gel Nail Art",
      rating: 5,
      quote:
        "The O3+ brightening facial gave my skin an instant glass glow before my anniversary party. Also got gel nail extensions done — 3 weeks later they still look pristine!",
    },
    {
      name: "Debolina Sen",
      locality: "Cossipore, Kolkata",
      service: "Keratin Smooth Therapy",
      rating: 5,
      quote:
        "Transformed my dry frizzy hair into silky soft locks using genuine L'Oréal formulas. Very transparent pricing with no pushy upselling.",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-[#0c0d10] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
            Client Words
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold mt-2 mb-4">
            Loved By Kolkata&apos;s Discerning Clients
          </h2>
          <p className="text-neutral-400 font-sans font-light text-base sm:text-lg">
            Read real experiences from long-time residents of Dunlop, Sinthee, and northern Kolkata who trust us with their everyday &amp; milestone beauty.
          </p>
        </div>

        {/* 4 Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((rev, index) => (
            <div
              key={index}
              className="glass-dark gold-border rounded-2xl p-8 relative flex flex-col justify-between gold-border-hover transition-all duration-300 hover:-translate-y-1"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-[#d4af37]/15 pointer-events-none" />

              <div>
                {/* Rating & Service */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-sans font-medium text-[#c5a880] bg-[#d4af37]/10 px-3 py-1 rounded-full border border-[#d4af37]/20">
                    {rev.service}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-neutral-300 font-sans font-light text-base leading-relaxed mb-6 italic">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              {/* Client Info */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-white text-lg">{rev.name}</h4>
                  <span className="text-xs text-neutral-400 font-sans block">{rev.locality}</span>
                </div>
                <div className="flex items-center space-x-1 text-emerald-400 text-xs font-sans">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Visit</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
