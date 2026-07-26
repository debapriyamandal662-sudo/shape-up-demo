"use client";

import { Phone, MessageSquare } from "lucide-react";
import { salonConfig } from "@/config/salonConfig";
import { generateWhatsAppLink } from "@/lib/whatsapp";

export default function StickyMobileCTA() {
  return (
    <aside className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-[#0c0d10]/95 backdrop-blur-xl border-t border-[#d4af37]/30 shadow-2xl">
      <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
        {/* Direct Call Button (Min 48px Thumb Target) */}
        <a
          href={`tel:${salonConfig.phone}`}
          className="flex items-center justify-center space-x-2 min-h-[48px] px-3 rounded-xl border border-[#d4af37]/40 bg-[#14161d] text-[#f3e5ab] text-xs font-sans font-bold uppercase tracking-wider active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 text-[#d4af37]" />
          <span>Call Now</span>
        </a>

        {/* Smart WhatsApp Booking Button (Min 48px Thumb Target) */}
        <a
          href={generateWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center space-x-2 min-h-[48px] px-3 rounded-xl gold-gradient-bg text-[#0c0d10] text-xs font-sans font-bold uppercase tracking-wider active:scale-95 transition-transform shadow-lg shadow-[#d4af37]/20"
        >
          <MessageSquare className="w-4 h-4 fill-[#0c0d10]" />
          <span>Book on WhatsApp</span>
        </a>
      </div>
    </aside>
  );
}
