"use client";

import { ShieldCheck, Award, Sparkles, UserCheck } from "lucide-react";
import { salonConfig } from "@/config/salonConfig";

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: "Medical-Grade Sterilization",
      description: "All metal implements undergo multi-stage autoclaving and UV sterilization between every single client.",
    },
    {
      icon: Award,
      title: "Certified Master Specialists",
      description: "Our hair artists and beauty therapists hold advanced certifications in modern cut, color & skincare therapies.",
    },
    {
      icon: Sparkles,
      title: "100% Authentic Formulas",
      description: "We use exclusively genuine imported products sourced directly from authorized brand distributors.",
    },
    {
      icon: UserCheck,
      title: "Personalized Consultation",
      description: "Every appointment begins with a thorough 1-on-1 skin/hair diagnosis before any service commences.",
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-[#fbf9f5] text-[#121318] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#997a15] font-semibold">
            Uncompromising Standards
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#121318] mt-2 mb-4">
            Why Shape-Up Stands Apart
          </h2>
          <p className="text-neutral-600 font-sans font-light text-base sm:text-lg">
            We built Shape-Up Hair &amp; Beauty Studio on four non-negotiable pillars of hygiene, expertise, and luxury product integrity.
          </p>
        </div>

        {/* 4 Trust Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-[#f3efe6] border border-amber-900/10 rounded-2xl p-6 hover:shadow-xl hover:border-[#d4af37]/60 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0c0d10] text-[#d4af37] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#121318] mb-3">
                  {item.title}
                </h3>
                <p className="text-sm font-sans text-neutral-600 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* VERIFIED BRAND PARTNERS STRIP */}
        <div className="border-t border-amber-900/15 pt-12">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-neutral-500">
              Authorized Brand Partners
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center">
            {salonConfig.brandPartners.map((brand, i) => (
              <div
                key={i}
                className="bg-white border border-amber-900/10 rounded-xl py-6 px-4 text-center hover:border-[#d4af37] transition-colors shadow-sm"
              >
                <span className="font-serif text-lg font-extrabold tracking-wider text-[#121318] block">
                  {brand.logoText}
                </span>
                <span className="text-[11px] font-sans text-neutral-500 tracking-tight block mt-1">
                  {brand.tagline}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
