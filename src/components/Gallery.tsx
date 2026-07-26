"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Eye, Scissors, Heart, ShieldCheck, Gem, UserCheck } from "lucide-react";
import { generateWhatsAppLink } from "@/lib/whatsapp";

interface GalleryItem {
  id: string;
  title: string;
  category: "hair" | "beard" | "makeup" | "bridal" | "nails";
  categoryLabel: string;
  subtitle: string;
  gradient: string;
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
      gradient: "from-amber-900/60 via-rose-950/40 to-neutral-900",
    },
    {
      id: "2",
      title: "L'Oréal Caramel Balayage",
      category: "hair",
      categoryLabel: "Hair Architecture",
      subtitle: "Seamless dimension color with soft Hollywood waves",
      gradient: "from-amber-800/50 via-neutral-900 to-black",
    },
    {
      id: "3",
      title: "Precision Razor Beard Sculpt",
      category: "beard",
      categoryLabel: "Beard & Grooming",
      subtitle: "Sharp line-up with hot towel steam hydration",
      gradient: "from-stone-800/60 via-neutral-900 to-black",
    },
    {
      id: "4",
      title: "O3+ Radiance Glow Treatment",
      category: "makeup",
      categoryLabel: "Skincare",
      subtitle: "Post-facial glass skin texture & deep pore detox",
      gradient: "from-[#d4af37]/20 via-neutral-900 to-black",
    },
    {
      id: "5",
      title: "Sculpted Gel Extensions & Ombre",
      category: "nails",
      categoryLabel: "Nail Artistry",
      subtitle: "High-shine builder gel with gold foil accents",
      gradient: "from-rose-900/40 via-amber-950/30 to-black",
    },
    {
      id: "6",
      title: "Cocktail Party Airbrush Makeup",
      category: "makeup",
      categoryLabel: "Party Makeup",
      subtitle: "Soft smoky eye with nude glossy lip profile",
      gradient: "from-purple-950/30 via-neutral-900 to-black",
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
    <section id="gallery" className="py-24 bg-[#14161d] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
            Visual Transformations
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold mt-2 mb-4">
            Studio Lookbook &amp; Portfolio
          </h2>
          <p className="text-neutral-400 font-sans font-light text-base sm:text-lg">
            Real artistry created at 43 BT Road. Filter through our latest hair cuts, beard trims, skincare glow, Bengali bridal glam &amp; nail art.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = filter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full text-xs font-sans uppercase tracking-wider font-semibold transition-all ${
                  isActive
                    ? "gold-gradient-bg text-[#0c0d10] font-bold shadow-md shadow-[#d4af37]/20"
                    : "glass-dark text-neutral-300 hover:text-white border border-white/10"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-[#0c0d10]" : "text-[#d4af37]"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
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
                className="group cursor-pointer relative h-80 rounded-2xl overflow-hidden glass-dark gold-border gold-border-hover transition-all duration-300"
              >
                {/* Abstract Stylized Gradient Background representing photoshoot look */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} transition-transform duration-700 group-hover:scale-110`}
                />

                {/* Subtle Decorative Pattern */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:16px_16px]" />

                {/* Overlay Card Details */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between bg-gradient-to-t from-black/90 via-black/30 to-transparent">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] uppercase tracking-widest text-[#d4af37] font-semibold bg-black/60 border border-[#d4af37]/30 px-3 py-1 rounded-full backdrop-blur-sm">
                      {item.categoryLabel}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#d4af37] group-hover:text-black transition-colors">
                      <Eye className="w-4 h-4 text-white group-hover:text-black" />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#f3e5ab] transition-colors mb-1">
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
            <div className="relative max-w-2xl w-full glass-dark gold-border rounded-3xl p-8 text-center overflow-hidden">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 rounded-full text-neutral-400 hover:text-white hover:bg-white/10"
              >
                <X className="w-6 h-6" />
              </button>

              <div
                className={`w-full h-64 rounded-2xl mb-6 bg-gradient-to-br ${selectedImage.gradient} flex items-center justify-center border border-white/10`}
              >
                <div className="text-center p-4">
                  <Sparkles className="w-10 h-10 text-[#d4af37] mx-auto mb-2" />
                  <span className="text-xs uppercase tracking-widest text-[#c5a880] font-mono">
                    High-Resolution Studio Photo
                  </span>
                </div>
              </div>

              <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
                {selectedImage.categoryLabel}
              </span>
              <h3 className="font-serif text-2xl font-bold text-white mt-1 mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-sm text-neutral-300 font-sans font-light mb-6">
                {selectedImage.subtitle}
              </p>

              <div className="flex justify-center space-x-4">
                <a
                  href={generateWhatsAppLink(selectedImage.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gold-gradient-bg text-[#0c0d10] font-sans font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full hover:brightness-110 transition-all"
                >
                  Book This Look on WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
