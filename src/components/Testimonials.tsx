"use client";

import { Quote, Info } from "lucide-react";

export default function Testimonials() {
  const samplePlaceholders = [
    {
      title: "Sample Client Testimonial 1",
      category: "Hair & Styling Service",
      quote:
        "Sample client review placeholder text. Real customer feedback and quotes will beFinalized and added here prior to live deployment.",
    },
    {
      title: "Sample Client Testimonial 2",
      category: "Bridal Makeup Package",
      quote:
        "Sample client review placeholder text. Real customer feedback and quotes will be finalized and added here prior to live deployment.",
    },
  ];

  return (
    <section id="testimonials" className="py-20 sm:py-24 bg-[#0c0d10] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
            Client Feedback Slot
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold mt-2 mb-4">
            Client Words &amp; Reviews
          </h2>
          <p className="text-neutral-400 font-sans font-light text-sm sm:text-base leading-relaxed">
            This section is structurally prepared for authentic client reviews and testimonials to be added upon final client content sign-off.
          </p>
        </div>

        {/* 2 Clearly-Labeled Placeholder Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {samplePlaceholders.map((item, index) => (
            <div
              key={index}
              className="glass-dark border border-white/10 rounded-2xl p-6 sm:p-8 relative flex flex-col justify-between"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-[#d4af37]/20 pointer-events-none" />

              <div>
                <div className="inline-flex items-center space-x-1.5 text-[11px] font-sans font-medium text-amber-300/80 bg-amber-950/40 px-3 py-1 rounded-full border border-amber-500/20 mb-4">
                  <Info className="w-3.5 h-3.5" />
                  <span>[Sample Placeholder — Editable]</span>
                </div>

                <h4 className="font-serif font-bold text-white text-lg mb-2">{item.title}</h4>
                <p className="text-neutral-400 font-sans font-light text-xs sm:text-sm leading-relaxed mb-6 italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-neutral-500 font-mono">
                <span>Category: {item.category}</span>
                <span>Ready for Launch Content</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
