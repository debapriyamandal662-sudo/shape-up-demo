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
    },
    {
      id: "2",
      title: "L'Oréal Caramel Balayage",
      category: "hair",
      categoryLabel: "Hair Architecture",
      subtitle: "Seamless dimension color with soft Hollywood waves",
      imageSrc: "/images/gallery/hair-2.jpg",
      altText: "L'Oreal Caramel Balayage Hair Transformation at Shape-Up Hair & Beauty Studio",
    },
    {
      id: "3",
      title: "Precision Razor Beard Sculpt",
      category: "beard",
      categoryLabel: "Beard & Grooming",
      subtitle: "Sharp line-up with hot towel steam hydration",
      imageSrc: "/images/gallery/beard-1.jpg",
      altText: "Precision Razor Beard Sculpting at Shape-Up Hair & Beauty Studio",
    },
    {
      id: "4",
      title: "O3+ Radiance Glow Treatment",
      category: "makeup",
      categoryLabel: "Skincare",
      subtitle: "Post-facial glass skin texture & deep pore detox",
      imageSrc: "/images/gallery/skincare-1.jpg",
      altText: "O3+ Radiance Glow Facial Treatment at Shape-Up Hair & Beauty Studio",
    },
    {
      id: "5",
      title: "Sculpted Gel Extensions & Ombre",
      category: "nails",
      categoryLabel: "Nail Artistry",
      subtitle: "High-shine builder gel with gold foil accents",
      imageSrc: "/images/gallery/nails-1.jpg",
      altText: "Sculpted Gel Extensions & Nail Artistry at Shape-Up Hair & Beauty Studio",
    },
    {
      id: "6",
      title: "Signature Hair Cut & Gloss",
      category: "hair",
      categoryLabel: "Hair Architecture",
      subtitle: "Glossy styled finish with soft studio shine",
      imageSrc: "/images/gallery/hair-1.jpg",
      altText: "Signature Hair Cut & Gloss Styling at Shape-Up Hair & Beauty Studio",
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
    <section id="gallery" className="py-20 sm:py-24 bg-[#14161d] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
            Visual Transformations
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold mt-2 mb-4">
            Studio Lookbook &amp; Portfolio
          </h2>
          <p className="text-neutral-400 font-sans font-light text-sm sm:text-lg leading-relaxed">
            Real artistry created at 43 BT Road. Filter through our latest hair cuts, beard trims, skincare glow, Bengali bridal glam &amp; nail art.
          </p>
        </div>

        {/* Horizontally Scrollable Filter Pills on Mobile */}
        <div className="relative mb-10 -mx-4 px-4 sm:mx-0 sm:px-0">
          {/* Scroll Fade Indicator Edge */}
          <div className="md:hidden absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#14161d] to-transparent z-10 pointer-events-none" />

          <div className="flex items-center space-x-2 overflow-x-auto scrollbar-none py-2 px-1 scroll-smooth snap-x md:justify-center md:flex-wrap md:overflow-visible">
            {filterTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = filter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-3 min-h-[44px] rounded-full text-xs font-sans uppercase tracking-wider font-semibold whitespace-nowrap snap-start shrink-0 transition-all ${
                    isActive
                      ? "gold-gradient-bg text-[#0c0d10] font-bold shadow-md shadow-[#d4af37]/20 scale-105"
                      : "glass-dark text-neutral-300 hover:text-white border border-white/10"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? "text-[#0c0d10]" : "text-[#d4af37]"}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedImage(item)}
                className="group cursor-pointer relative h-72 sm:h-80 rounded-2xl overflow-hidden glass-dark gold-border gold-border-hover transition-all duration-300 active:scale-[0.98]"
              >
                {/* Real Generated Image Component (Lazy loaded below fold) */}
                <Image
                  src={item.imageSrc}
                  alt={item.altText}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Vignette Overlay for Crisp Typography Readability */}
                <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-between bg-gradient-to-t from-black/90 via-black/30 to-transparent">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] uppercase tracking-widest text-[#d4af37] font-semibold bg-black/60 border border-[#d4af37]/30 px-3 py-1 rounded-full backdrop-blur-sm">
                      {item.categoryLabel}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#d4af37] group-hover:text-black transition-colors">
                      <Eye className="w-4 h-4 text-white group-hover:text-black" />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-[#f3e5ab] transition-colors mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-neutral-300 font-sans font-light">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Preview Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
            <div className="relative max-w-2xl w-full glass-dark gold-border rounded-3xl p-6 sm:p-8 text-center overflow-hidden max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full text-neutral-400 hover:text-white bg-white/10 hover:bg-white/20"
                aria-label="Close Preview"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative w-full h-64 sm:h-80 rounded-2xl mb-6 overflow-hidden border border-white/10">
                <Image
                  src={selectedImage.imageSrc}
                  alt={selectedImage.altText}
                  fill
                  sizes="(max-width: 768px) 100vw, 672px"
                  className="object-cover object-center"
                />
              </div>

              <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
                {selectedImage.categoryLabel}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mt-1 mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 font-sans font-light mb-6">
                {selectedImage.subtitle}
              </p>

              <div className="flex justify-center">
                <a
                  href={generateWhatsAppLink(selectedImage.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto gold-gradient-bg text-[#0c0d10] font-sans font-bold text-xs uppercase tracking-wider px-6 py-3.5 min-h-[48px] rounded-full hover:brightness-110 transition-all flex items-center justify-center space-x-2 shadow-lg shadow-[#d4af37]/20 active:scale-95"
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
