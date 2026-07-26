"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Eye, Scissors, Heart, ShieldCheck, Gem, UserCheck } from "lucide-react";
import { generateWhatsAppLink } from "@/lib/whatsapp";

interface GalleryItem {
  id: string;
  title: string;
  category: "hair" | "beard" | "makeup" | "bridal" | "nails";
  categoryLabel: string;
  subtitle: string;
  imageSrc: string;
  altText: string;
  objectPosition?: string;
}

export default function Gallery() {
  const [filter, setFilter] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: "1",
      title: "Royal Bengali HD Bridal Glam",
      category: "bridal",
      categoryLabel: "Bridal",
      subtitle: "Traditional red silk, heavy jewelry setting & HD airbrush glow",
      imageSrc: "/images/gallery/bridal-1.jpg",
      altText: "Royal Bengali HD Bridal Makeup at Shape-Up Hair & Beauty Studio",
      objectPosition: "object-top",
    },
    {
      id: "2",
      title: "L'Oréal Caramel Balayage",
      category: "hair",
      categoryLabel: "Hair Architecture",
      subtitle: "Seamless dimension color with soft Hollywood waves",
      imageSrc: "/images/gallery/hair-2.jpg",
      altText: "L'Oreal Caramel Balayage Hair Transformation at Shape-Up Hair & Beauty Studio",
      objectPosition: "object-center",
    },
    {
      id: "3",
      title: "Precision Razor Beard Sculpt",
      category: "beard",
      categoryLabel: "Beard & Grooming",
      subtitle: "Sharp line-up with hot towel steam hydration",
      imageSrc: "/images/gallery/beard-1.jpg",
      altText: "Precision Razor Beard Sculpting at Shape-Up Hair & Beauty Studio",
      objectPosition: "object-center",
    },
    {
      id: "4",
      title: "O3+ Radiance Glow Treatment",
      category: "makeup",
      categoryLabel: "Skincare",
      subtitle: "Post-facial glass skin texture & deep pore detox",
      imageSrc: "/images/gallery/skincare-1.jpg",
      altText: "O3+ Radiance Glow Facial Treatment at Shape-Up Hair & Beauty Studio",
      objectPosition: "object-center",
    },
    {
      id: "5",
      title: "Sculpted Gel Extensions & Ombre",
      category: "nails",
      categoryLabel: "Nail Artistry",
      subtitle: "High-shine builder gel with gold foil accents",
      imageSrc: "/images/gallery/nails-1.jpg",
      altText: "Sculpted Gel Extensions & Nail Artistry at Shape-Up Hair & Beauty Studio",
      objectPosition: "object-center",
    },
    {
      id: "6",
      title: "Signature Hair Cut & Gloss",
      category: "hair",
      categoryLabel: "Hair Architecture",
      subtitle: "Glossy styled finish with soft studio shine",
      imageSrc: "/images/gallery/hair-1.jpg",
      altText: "Signature Hair Cut & Gloss Styling at Shape-Up Hair & Beauty Studio",
      objectPosition: "object-top",
    },
  ];

  const filterTabs = [
    { id: "all", label: "All Looks", icon: Sparkles },
    { id: "hair", label: "Hair", icon: Scissors },
    { id: "beard", label: "Beard", icon: UserCheck },
    { id: "makeup", label: "Skincare & Glow", icon: ShieldCheck },
    { id: "bridal", label: "Bridal", icon: Heart },
    { id: "nails", label: "Nail Art", icon: Gem },
  ];

  const filteredItems =
    filter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#14161d] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
            Visual Transformations
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold mt-2 mb-4">
            Studio Lookbook &amp; Portfolio
          </h2>
          <p className="text-neutral-300 font-sans font-light text-sm sm:text-lg leading-relaxed">
            Real editorial photography created at 43 BT Road. Tap any transformation to view full-resolution details or book the look on WhatsApp.
          </p>
        </div>

        {/* Filter Tabs - Horizontally Scrollable on Mobile with Fade Edge */}
        <div className="relative mb-12 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="md:hidden absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#14161d] to-transparent z-10 pointer-events-none" />

          <div className="flex items-center space-x-2 overflow-x-auto scrollbar-none py-2 px-1 scroll-smooth snap-x md:justify-center md:flex-wrap md:overflow-visible">
            {filterTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = filter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-3 min-h-[44px] rounded-full text-xs font-sans uppercase tracking-wider font-semibold whitespace-nowrap snap-start shrink-0 transition-all duration-300 ${
                    isActive
                      ? "gold-gradient-bg text-[#0c0d10] font-bold shadow-lg shadow-[#d4af37]/25 scale-105"
                      : "glass-dark text-neutral-300 hover:text-white border border-white/10 hover:border-[#d4af37]/40"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? "text-[#0c0d10]" : "text-[#d4af37]"}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid - Responsive Aspect Ratio Cards (4:5 Portrait Editorial Ratio) */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                onClick={() => setSelectedImage(item)}
                className="group cursor-pointer relative aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/5] w-full rounded-2xl overflow-hidden glass-dark border border-[#d4af37]/30 hover:border-[#d4af37] shadow-xl hover:shadow-2xl hover:shadow-[#d4af37]/20 transition-all duration-500 active:scale-[0.98]"
              >
                {/* Full-bleed Photo with Sharp Aspect Ratio */}
                <Image
                  src={item.imageSrc}
                  alt={item.altText}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                  className={`object-cover ${item.objectPosition || "object-center"} group-hover:scale-108 transition-transform duration-700 ease-out`}
                />

                {/* Dark Vignette Overlay for Crisp Typography & Luxury Polish */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10 p-5 sm:p-6 flex flex-col justify-between transition-opacity duration-300">
                  {/* Top Badge & Eye Icon */}
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] uppercase tracking-widest text-[#f3e5ab] font-semibold bg-black/75 backdrop-blur-md border border-[#d4af37]/40 px-3 py-1.5 rounded-full shadow-lg">
                      {item.categoryLabel}
                    </span>
                    <div className="w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-[#d4af37] group-hover:text-black group-hover:border-[#d4af37] transition-all shadow-lg">
                      <Eye className="w-4 h-4 text-white group-hover:text-black" />
                    </div>
                  </div>

                  {/* Bottom Content Title & Subtitle */}
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-[#f3e5ab] transition-colors leading-snug mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-neutral-300 font-sans font-light line-clamp-2 leading-relaxed">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Preview Modal with Dynamic Aspect Ratio & Scroll Safety */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/95 backdrop-blur-xl animate-in fade-in duration-200">
            <div className="relative max-w-2xl w-full glass-dark border border-[#d4af37]/40 rounded-3xl p-5 sm:p-8 text-center overflow-hidden max-h-[92vh] overflow-y-auto shadow-2xl">
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-20 p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full text-neutral-300 hover:text-white bg-black/60 border border-white/20 hover:bg-[#d4af37] hover:text-black transition-all"
                aria-label="Close Preview"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Photo Display Container */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl mb-6 overflow-hidden border border-white/15 shadow-2xl">
                <Image
                  src={selectedImage.imageSrc}
                  alt={selectedImage.altText}
                  fill
                  sizes="(max-width: 768px) 100vw, 672px"
                  className={`object-cover ${selectedImage.objectPosition || "object-center"}`}
                />
              </div>

              {/* Modal Content */}
              <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold bg-[#d4af37]/10 px-3 py-1 rounded-full border border-[#d4af37]/30">
                {selectedImage.categoryLabel}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-3 mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 font-sans font-light mb-6 max-w-lg mx-auto leading-relaxed">
                {selectedImage.subtitle}
              </p>

              {/* CTA Action */}
              <div className="flex justify-center">
                <a
                  href={generateWhatsAppLink(selectedImage.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto gold-gradient-bg text-[#0c0d10] font-sans font-bold text-xs uppercase tracking-wider px-8 py-3.5 min-h-[48px] rounded-full hover:brightness-110 transition-all flex items-center justify-center space-x-2 shadow-xl shadow-[#d4af37]/25 active:scale-95"
                >
                  <span>Book This Look on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
