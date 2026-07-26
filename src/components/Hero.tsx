"use client";

import { motion } from "framer-motion";
import { MessageSquare, ChevronDown, MapPin, Star, Scissors, Sparkles, Heart, ShieldCheck, Gem } from "lucide-react";
import { salonConfig } from "@/config/salonConfig";
import { generateWhatsAppLink } from "@/lib/whatsapp";

export default function Hero() {
  const categories = [
    { label: "Hair Architecture", icon: Scissors },
    { label: "Beard & Grooming", icon: Sparkles },
    { label: "Clinical Skincare", icon: ShieldCheck },
    { label: "Bridal HD Makeup", icon: Heart },
    { label: "Gel Nail Artistry", icon: Gem },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#0c0d10]">
      {/* Editorial Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 scale-105 transition-transform duration-1000"
        style={{ backgroundImage: `url('/images/hero.jpg')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d10] via-[#0c0d10]/70 to-[#0c0d10]/50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/10 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Rating Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 glass-dark gold-border px-4 py-1.5 rounded-full mb-6"
        >
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="text-xs font-sans tracking-wide text-neutral-200">
            4.9 Rated • Dunlop & BT Road, Kolkata
          </span>
        </motion.div>

        {/* Studio Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-4"
        >
          Shape-Up <span className="gold-gradient-text">Hair & Beauty Studio</span>
        </motion.h1>

        {/* Neighborhood Salon Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto text-base sm:text-xl font-sans text-neutral-300 font-light leading-relaxed mb-8"
        >
          Kolkata&apos;s refined sanctuary at Dunlop Crossing. Specialist treatments for Hair Styling, Precision Beard Sculpting, Clinical Facials, Bengali Bridal HD Glamour &amp; Deluxe Gel Nail Artistry.
        </motion.p>

        {/* Address pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="inline-flex items-center space-x-2 text-xs font-sans text-amber-200/90 mb-10 bg-amber-950/40 border border-amber-500/20 px-4 py-2 rounded-lg"
        >
          <MapPin className="w-4 h-4 text-[#d4af37]" />
          <span>{salonConfig.address}, Kolkata – {salonConfig.pincode}</span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href={generateWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto gold-gradient-bg text-[#0c0d10] font-sans font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-full hover:brightness-110 transition-all transform hover:-translate-y-1 shadow-xl shadow-[#d4af37]/25 flex items-center justify-center space-x-3"
          >
            <MessageSquare className="w-4 h-4 fill-[#0c0d10]" />
            <span>Book Your Appointment</span>
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto glass-dark gold-border text-white font-sans font-semibold text-sm uppercase tracking-widest px-8 py-4 rounded-full gold-border-hover transition-all transform hover:-translate-y-1 flex items-center justify-center"
          >
            Explore Services & Rates
          </a>
        </motion.div>

        {/* 5 Equal-Weight Core Category Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 pt-6 border-t border-white/10"
        >
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="glass-dark border border-white/5 hover:border-[#d4af37]/40 rounded-xl p-3 text-center transition-all duration-300 group"
              >
                <Icon className="w-5 h-5 mx-auto mb-2 text-[#d4af37] group-hover:scale-110 transition-transform" />
                <span className="text-xs font-sans font-medium text-neutral-300 group-hover:text-white transition-colors">
                  {cat.label}
                </span>
              </div>
            );
          })}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mt-12 inline-block text-neutral-500 hover:text-[#d4af37] transition-colors"
        >
          <a href="#services" aria-label="Scroll down to services">
            <ChevronDown className="w-6 h-6 mx-auto" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
