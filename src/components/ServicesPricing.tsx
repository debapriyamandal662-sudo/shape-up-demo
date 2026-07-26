"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Clock, Sparkles, Check, Scissors, UserCheck, Heart, ShieldCheck, Gem } from "lucide-react";
import { salonConfig, ServiceItem } from "@/config/salonConfig";
import { generateWhatsAppLink } from "@/lib/whatsapp";

export default function ServicesPricing() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Treatments", icon: Sparkles },
    { id: "hair", label: "Hair Architecture", icon: Scissors },
    { id: "beard", label: "Beard & Grooming", icon: UserCheck },
    { id: "skincare", label: "Skincare & Facials", icon: ShieldCheck },
    { id: "bridal", label: "Bridal & Party Makeup", icon: Heart },
    { id: "nails", label: "Nail Artistry", icon: Gem },
  ];

  const filteredServices =
    activeTab === "all"
      ? salonConfig.services
      : salonConfig.services.filter((s) => s.category === activeTab);

  return (
    <section id="services" className="py-24 bg-[#0c0d10] relative">
      {/* Background Accent Subtle Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-600/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
            Bespoke Price Menu
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mt-2 mb-4">
            Services &amp; Pricing
          </h2>
          <p className="text-neutral-400 font-sans font-light text-base sm:text-lg">
            Transparent pricing for Kolkata&apos;s finest hair architecture, beard sculpting, dermatological facials, HD bridal makeup, and gel nail artistry.
          </p>
          <span className="inline-block mt-3 text-[11px] font-mono text-amber-200/60 bg-amber-950/40 border border-amber-500/20 px-3 py-1 rounded">
            * All prices shown are editable starting estimates (Inclusive of Taxes)
          </span>
        </div>

        {/* Category Tabs (Equal Visual Weight Across 5 Categories) */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-full text-xs font-sans uppercase tracking-wider font-semibold transition-all duration-300 ${
                  isActive
                    ? "gold-gradient-bg text-[#0c0d10] shadow-lg shadow-[#d4af37]/20 scale-105"
                    : "glass-dark text-neutral-300 hover:text-white border border-white/10 hover:border-[#d4af37]/40"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-[#0c0d10]" : "text-[#d4af37]"}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Service Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service: ServiceItem) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="glass-dark gold-border rounded-2xl p-6 flex flex-col justify-between gold-border-hover transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute top-4 right-4 bg-amber-400/10 border border-amber-400/40 text-amber-300 text-[10px] uppercase font-sans tracking-widest px-2.5 py-0.5 rounded-full font-bold">
                    Client Favorite
                  </div>
                )}

                <div>
                  {/* Category Pill & Duration */}
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="text-[10px] font-sans uppercase tracking-widest text-[#c5a880] font-semibold">
                      {service.category}
                    </span>
                    <span className="text-neutral-600">•</span>
                    <div className="flex items-center space-x-1 text-neutral-400 text-xs font-sans">
                      <Clock className="w-3 h-3 text-[#d4af37]" />
                      <span>{service.duration}</span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#f3e5ab] transition-colors mb-2">
                    {service.name}
                  </h3>
                  <p className="text-neutral-400 text-sm font-sans font-light leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Price & Book Action */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between mt-auto">
                  <div>
                    <span className="text-xs text-neutral-500 uppercase block font-sans">Price</span>
                    <span className="font-serif text-2xl font-bold text-[#d4af37]">{service.price}</span>
                  </div>

                  <a
                    href={generateWhatsAppLink(service.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gold-gradient-bg text-[#0c0d10] font-sans font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-xl hover:brightness-110 transition-all flex items-center space-x-2 shadow-md shadow-[#d4af37]/10"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-[#0c0d10]" />
                    <span>Book</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
