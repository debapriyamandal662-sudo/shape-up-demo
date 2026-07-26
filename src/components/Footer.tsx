"use client";

import Link from "next/link";
import { Sparkles, MapPin, Phone, Mail } from "lucide-react";
import { salonConfig } from "@/config/salonConfig";

export default function Footer() {
  return (
    <footer className="bg-[#08090b] text-neutral-400 border-t border-white/10 pt-16 pb-32 md:pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Studio Identity */}
          <div className="space-y-4 md:col-span-1">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-9 h-9 rounded-full border border-[#d4af37]/40 flex items-center justify-center bg-[#14161d]">
                <Sparkles className="w-4 h-4 text-[#d4af37]" />
              </div>
              <span className="font-serif text-xl font-bold tracking-tight text-white">
                SHAPE-UP
              </span>
            </Link>
            <p className="text-xs text-neutral-400 leading-relaxed font-light">
              Kolkata&apos;s premier full-service studio on Barrackpore Trunk Road for hair architecture, beard grooming, clinical facials, HD bridal makeup &amp; gel nail artistry.
            </p>
          </div>

          {/* Col 2: Services Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Core Categories
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-[#d4af37] transition-colors py-1 block">Hair Cut, Color &amp; Keratin</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#d4af37] transition-colors py-1 block">Beard Sculpting &amp; Steam Shave</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#d4af37] transition-colors py-1 block">O3+ &amp; Hydra Skincare Facials</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#d4af37] transition-colors py-1 block">Bengali Royal HD Bridal Makeup</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#d4af37] transition-colors py-1 block">Luxury Gel Nail Extensions &amp; Art</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-[#d4af37] transition-colors py-1 block">Service Catalog &amp; Rates</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#d4af37] transition-colors py-1 block">Transformations Lookbook</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#d4af37] transition-colors py-1 block">Hygiene &amp; Brand Partners</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-[#d4af37] transition-colors py-1 block">Client Reviews</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#d4af37] transition-colors py-1 block">Map &amp; Studio Hours</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Address & Phone */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Studio Address
            </h4>
            <div className="text-xs space-y-2 font-light">
              <p className="flex items-start space-x-2">
                <MapPin className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                <span>43, Barrackpore Trunk Road, Dunlop Crossing, Kolkata – 700050</span>
              </p>
              <p className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                <span>{salonConfig.phone}</span>
              </p>
              <p className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                <span>{salonConfig.email}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright (Protected from Mobile Sticky CTA Bar) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 font-light">
          <p>© {new Date().getFullYear()} {salonConfig.name}. All rights reserved.</p>
          <p className="mt-2 sm:mt-0 text-[11px]">
            Designed &amp; Built as a Premium ₹50,000+ Demo Web Architecture
          </p>
        </div>
      </div>
    </footer>
  );
}
